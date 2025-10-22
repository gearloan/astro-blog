class TAFWidget {
  private container: HTMLElement | null = null;
  private updateInterval: number | null = null;

  constructor() {
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
  }

  private async updateTAF() {
    try {
      const response = await fetch(`/api/taf?airport=KFDK&t=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const tafData = await response.json();
      this.updateTAFDisplay(tafData);
      
    } catch (error) {
      console.error('Failed to fetch TAF data:', error);
      // Keep existing display on error
    }
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
          ${data.forecast.map((period: any) => `
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
