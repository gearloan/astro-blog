class WindsAloftWidget {
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
    this.container = document.getElementById('winds-aloft-content');
    if (!this.container) {
      console.warn('Winds aloft widget container not found');
      return;
    }

    // Initial load
    this.updateWindsAloft();

    // Update every 30 minutes (winds aloft data updates every 6 hours)
    this.updateInterval = window.setInterval(() => {
      this.updateWindsAloft();
    }, 30 * 60 * 1000);

    // Listen for tab selection events
    window.addEventListener('winds-aloft-tab-selected', () => {
      this.updateWindsAloft();
    });

    // Listen for airport changes
    window.addEventListener('airport-changed', (event: any) => {
      this.updateWindsAloft();
    });
  }

  private async updateWindsAloft() {
    try {
      const airport = this.getCurrentAirport();
      const response = await fetch(`/api/winds-aloft/${airport}?t=${Date.now()}&cache=${Math.random()}`, {
        cache: 'no-store'
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const windsData = await response.json();
      this.updateWindsAloftDisplay(windsData);
      
    } catch (error) {
      console.error('Failed to fetch winds aloft data:', error);
      // Keep existing display on error
    }
  }

  private getCurrentAirport(): string {
    // Get current airport from airport search widget or default to KBOS
    const airportSearch = (window as any).airportSearch;
    return airportSearch?.getCurrentAirport() || 'KBOS';
  }

  private updateWindsAloftDisplay(data: any) {
    if (!this.container) {
      return;
    }

    // Create the winds aloft display
    const airportLabel = data.airport || this.getCurrentAirport();
    const windsAloftHTML = `
      <div class="winds-aloft-container">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-lg font-bold text-slate-600">Winds Aloft - ${airportLabel}</h3>
            <p class="text-sm text-slate-500">Valid: ${new Date(data.validTime).toLocaleString()}</p>
          </div>
          <div class="text-xs text-slate-500">
            Updated: ${new Date(data.timestamp).toLocaleTimeString()}
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${data.levels.map((level: any) => `
            <div class="bg-white/50 rounded-lg p-4 border border-slate-200">
              <div class="text-center">
                <div class="text-2xl font-bold text-slate-700 mb-2">${level.altitude}'</div>
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">Wind:</span>
                    <span class="font-mono text-sm font-bold text-slate-700">
                      ${level.windDirection.toString().padStart(3, '0')}°/${level.windSpeed}kt
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-slate-600">Temp:</span>
                    <span class="font-mono text-sm font-bold text-slate-700">
                      ${level.temperature > 0 ? '+' : ''}${level.temperature}°C
                    </span>
                  </div>
                  <div class="mt-2">
                    <div class="w-full bg-slate-200 rounded-full h-2">
                      <div class="bg-blue-500 h-2 rounded-full" style="width: ${Math.min((level.windSpeed / 50) * 100, 100)}%"></div>
                    </div>
                    <div class="text-xs text-slate-500 mt-1">Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="mt-4 p-3 bg-slate-100 rounded-lg">
          <div class="text-xs text-slate-600 font-mono">
            <strong>Raw Data:</strong> ${data.raw}
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = windsAloftHTML;
  }

  public destroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }
}

export default WindsAloftWidget;
