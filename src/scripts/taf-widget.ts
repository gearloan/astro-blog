class TAFWidget {
  private container: HTMLElement | null = null;
  private updateInterval: number | null = null;
  private currentRequestId: number = 0;
  private currentAbortController: AbortController | null = null;

  constructor() {
    console.log('TAFWidget constructor called');
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.setupWidget();
      });
    } else {
      this.setupWidget();
    }
  }

  private setupWidget() {
    this.container = document.getElementById('taf-content');
    if (!this.container) {
      console.warn('TAF widget container not found');
      return;
    }

    // Initial load
    this.updateTAF();

    // Update every 30 minutes (TAF data updates every 6 hours)
    this.updateInterval = window.setInterval(() => {
      this.updateTAF();
    }, 30 * 60 * 1000);

    // Listen for tab selection events
    window.addEventListener('taf-tab-selected', () => {
      this.updateTAF();
    });

    // Listen for airport changes and pass the selected airport directly
    window.addEventListener('airport-changed', (event: any) => {
      const newAirport = event?.detail?.airport;
      this.updateTAF(newAirport);
    });
  }

  private async updateTAF(overrideAirport?: string) {
    try {
      const airport = (overrideAirport && typeof overrideAirport === 'string') ? overrideAirport : this.getCurrentAirport();
      console.log('TAF widget making API request for airport:', airport);
      // Bump request id and cancel any in-flight request
      this.currentRequestId += 1;
      const requestId = this.currentRequestId;
      if (this.currentAbortController) {
        try { this.currentAbortController.abort(); } catch {}
      }
      this.currentAbortController = new AbortController();
      const { signal } = this.currentAbortController;
      // Show loading state immediately
      if (this.container) {
        this.container.innerHTML = `
          <div class="flex items-center justify-center h-full">
            <div class="text-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p class="text-slate-600">Loading TAF data for ${airport}...</p>
            </div>
          </div>
        `;
      }
      const response = await fetch(`/api/taf/${encodeURIComponent(airport)}?t=${Date.now()}&cache=${Math.random()}&v=${Math.random()}`, {
        cache: 'no-store',
        signal
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const tafData = await response.json();
      const requestedAirport = response.headers.get('X-Requested-Airport');
      const labelAirport = (requestedAirport && requestedAirport.trim()) || tafData.airport || airport;
      // Normalize raw TAF airport code to match the requested/label airport
      const normalizedRaw = typeof tafData.raw === 'string'
        ? tafData.raw.replace(/^(TAF\s+)[A-Z0-9]{3,4}/, `$1${labelAirport}`)
        : tafData.raw;
      console.log('TAF widget received data with airport:', tafData.airport);
      console.log('TAF widget response header X-Requested-Airport:', requestedAirport);
      console.log('TAF widget forecast data:', tafData.forecast);
      console.log('TAF widget full response:', tafData);
      if (requestId !== this.currentRequestId) {
        console.log('TAF widget: ignoring stale response for', labelAirport, 'requestId', requestId, 'current', this.currentRequestId);
        return;
      }
      this.updateTAFDisplay({ ...tafData, airport: labelAirport, raw: normalizedRaw });
      
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        return;
      }
      console.error('Failed to fetch TAF data:', error);
      // Keep existing display on error
    }
  }

  private getCurrentAirport(): string {
    // Get current airport from airport search widget or default to KBOS
    const airportSearch = (window as any).airportSearch;
    const airport = airportSearch?.getCurrentAirport() || 'KBOS';
    console.log('TAF widget getCurrentAirport returning:', airport);
    return airport;
  }

  private updateTAFDisplay(data: any) {
    if (!this.container) {
      return;
    }

    // Create the TAF display
    const tafHTML = `
      <div class="taf-container max-w-full overflow-hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
          <h3 class="text-base sm:text-lg font-bold text-slate-600">TAF for ${data.airport}</h3>
          <div class="text-xs text-slate-500 truncate">
            Valid: ${new Date(data.validTime).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })}
          </div>
        </div>

        <!-- TAF Forecast Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
          ${(data.forecast || []).map((period: any) => `
            <div class="bg-white/10 p-2 rounded-lg shadow-sm border border-slate-200 min-w-0">
              <div class="text-center mb-1">
                <div class="text-sm font-bold text-slate-800">${period.time}</div>
                <div class="text-xs text-slate-600">${period.temp}°C</div>
              </div>
              
              <div class="space-y-0.5 text-xs">
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 text-xs">W:</span>
                  <span class="font-medium text-slate-800 text-xs truncate ml-1">${period.wind}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 text-xs">V:</span>
                  <span class="font-medium text-slate-800 text-xs truncate ml-1">${period.visibility}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 text-xs">WX:</span>
                  <span class="font-medium text-slate-800 text-xs truncate ml-1">${period.weather}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-600 text-xs">C:</span>
                  <span class="font-medium text-slate-800 text-xs truncate ml-1">${period.clouds}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Raw TAF -->
        <div class="bg-slate-100 rounded-lg p-2">
          <h4 class="font-semibold text-slate-700 mb-1 text-xs">Raw TAF:</h4>
          <pre class="text-xs text-slate-600 font-mono whitespace-pre-wrap break-all overflow-x-auto leading-tight">${data.raw}</pre>
        </div>
      </div>
    `;

    this.container.innerHTML = tafHTML;
  }

  public destroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }
}

export default TAFWidget;
