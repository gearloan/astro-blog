// Weather Widget - Fetches real aviation weather data
class WeatherWidget {
  private weatherContainer: HTMLElement | null = null
  private weatherHistory: {
    temperature: number | null
    windSpeed: number | null
    visibility: number | null
    pressure: number | null
    timestamp: string | null
  } = {
    temperature: null,
    windSpeed: null,
    visibility: null,
    pressure: null,
    timestamp: null
  };
  private updateInterval: number | null = null;

  constructor() {
    this.init();
  }

  private init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupWidget());
    } else {
      this.setupWidget();
    }
  }

  private setupWidget() {
    this.weatherContainer = document.getElementById('weather-content');
    if (!this.weatherContainer) {
      console.warn('Weather widget container not found');
      return;
    }

    // Load previous weather data from localStorage
    this.loadWeatherHistory();

    // Setup info button
    this.setupInfoButton();

    // Initial load
    this.updateWeather();

    // Force an immediate update after 2 seconds to clear any cached data
    setTimeout(() => {
      this.updateWeather();
    }, 2000);

    // Update every 30 seconds for testing (change back to 5 minutes for production)
    this.updateInterval = window.setInterval(() => {
      this.updateWeather();
    }, 30 * 1000);
  }

  private loadWeatherHistory() {
    try {
      const stored = localStorage.getItem('weather-history');
      if (stored) {
        const history = JSON.parse(stored);
        // Check if data is not too old (within 1 hour)
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        const storedTime = new Date(history.timestamp);
        
        if (storedTime > oneHourAgo) {
          this.weatherHistory = history;
          console.log('Loaded weather history from localStorage:', this.weatherHistory);
        } else {
          console.log('Stored weather data is too old, starting fresh');
        }
      }
    } catch (error) {
      console.warn('Failed to load weather history from localStorage:', error);
    }
  }

  private saveWeatherHistory() {
    try {
      localStorage.setItem('weather-history', JSON.stringify(this.weatherHistory));
      console.log('Saved weather history to localStorage');
    } catch (error) {
      console.warn('Failed to save weather history to localStorage:', error);
    }
  }

  private setupInfoButton() {
    const infoBtn = document.getElementById('weather-info-btn');
    if (!infoBtn) return;

    infoBtn.addEventListener('click', () => {
      this.showInfoModal();
    });
  }

  private showInfoModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    overlay.id = 'weather-info-overlay';

    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl';
    modal.innerHTML = `
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-800">Weather Trend Arrows</h3>
        <button id="close-info-modal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="space-y-3 text-sm text-gray-600">
        <div class="flex items-center gap-2">
          <span class="text-blue-600">↑</span>
          <span><strong>Temperature:</strong> Blue arrows show temperature trends</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-red-600">↑</span>
          <span><strong>Wind:</strong> Red arrows show wind speed changes</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-green-600">↑</span>
          <span><strong>Pressure:</strong> Green arrows show pressure trends</span>
        </div>
        
        <div class="mt-4 pt-3 border-t border-gray-200">
          <p class="font-medium text-gray-800 mb-2">Arrow Count:</p>
          <ul class="space-y-1 text-xs">
            <li>• <strong>1 Arrow:</strong> Small change (0-1.9 units)</li>
            <li>• <strong>2 Arrows:</strong> Medium change (2-4.9 units)</li>
            <li>• <strong>3 Arrows:</strong> Large change (5+ units)</li>
            <li>• <strong>— Line:</strong> No change from previous reading</li>
          </ul>
        </div>
        
        <div class="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
          <p>Data updates every 30 seconds. Trends compare current values to the previous reading.</p>
        </div>
      </div>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Close modal handlers
    const closeBtn = modal.querySelector('#close-info-modal');
    const closeModal = () => {
      document.body.removeChild(overlay);
    };

    closeBtn?.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // Close on Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  private async updateWeather() {
    try {
      console.log('Fetching weather data...');
      const response = await fetch(`/api/weather?airport=KFDK&t=${Date.now()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const weatherData = await response.json();
      console.log('Weather data received:', weatherData);
      this.updateWeatherDisplay(weatherData);
      
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      // Keep existing display on error
    }
  }

  private getTrendDirection(current: number, previous: number | null): 'up' | 'down' | 'same' {
    if (previous === null) return 'same';
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'same';
  }

  private getTrendMagnitude(current: number, previous: number | null): 1 | 2 | 3 {
    if (previous === null) return 1;
    const change = Math.abs(current - previous);
    
    // Define thresholds for different magnitudes
    // These can be adjusted based on typical weather variations
    if (change >= 5) return 3;      // Large change (3 arrows)
    if (change >= 2) return 2;      // Medium change (2 arrows)
    return 1;                       // Small change (1 arrow)
  }

  private getTrendArrow(direction: 'up' | 'down' | 'same', magnitude: 1 | 2 | 3 = 1, color: string = 'text-red-600'): string {
    const arrowSvg = (dir: 'up' | 'down') => {
      if (dir === 'up') {
        return `<svg class="w-3 h-3 md:w-4 md:h-4 ${color}" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>`;
      } else {
        return `<svg class="w-3 h-3 md:w-4 md:h-4 ${color}" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>`;
      }
    };

    switch (direction) {
      case 'up':
        return Array(magnitude).fill(0).map(() => arrowSvg('up')).join('');
      case 'down':
        return Array(magnitude).fill(0).map(() => arrowSvg('down')).join('');
      case 'same':
      default:
        return `<svg class="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>`;
    }
  }

  private updateWeatherDisplay(data: any) {
    if (!this.weatherContainer) {
      console.log('Weather container not found');
      return;
    }

    console.log('Updating weather display with data:', data);

    // Update temperature
    const tempElement = this.weatherContainer.querySelector('.weather-temp');
    if (tempElement) {
      const tempTrend = this.getTrendDirection(data.temperature, this.weatherHistory.temperature);
      const tempMagnitude = this.getTrendMagnitude(data.temperature, this.weatherHistory.temperature);
      const tempArrow = this.getTrendArrow(tempTrend, tempMagnitude, 'text-blue-600');
      tempElement.innerHTML = `${data.temperature}°<span class="inline-flex items-baseline ml-1">${tempArrow}</span>`;
    }

    // Update wind
    const windElement = this.weatherContainer.querySelector('.weather-wind');
    if (windElement) {
      const windTrend = this.getTrendDirection(data.windSpeed, this.weatherHistory.windSpeed);
      const windMagnitude = this.getTrendMagnitude(data.windSpeed, this.weatherHistory.windSpeed);
      const windArrow = this.getTrendArrow(windTrend, windMagnitude, 'text-red-600');
      windElement.innerHTML = `${data.windSpeed}<span class="inline-flex items-baseline ml-1">${windArrow}</span>`;
    }

    // Update visibility
    const visibilityElement = this.weatherContainer.querySelector('.weather-visibility');
    if (visibilityElement) {
      visibilityElement.textContent = data.visibility.toString();
      console.log('Updated visibility to:', data.visibility);
    } else {
      console.log('Visibility element not found');
    }

    // Update pressure
    const pressureElement = this.weatherContainer.querySelector('.weather-pressure');
    if (pressureElement) {
      const pressureTrend = this.getTrendDirection(parseFloat(data.pressure), this.weatherHistory.pressure);
      const pressureMagnitude = this.getTrendMagnitude(parseFloat(data.pressure), this.weatherHistory.pressure);
      const pressureArrow = this.getTrendArrow(pressureTrend, pressureMagnitude, 'text-green-600');
      pressureElement.innerHTML = `${data.pressure}<span class="inline-flex items-baseline ml-1">${pressureArrow}</span>`;
    }

    // Update conditions text
    const conditionsElement = this.weatherContainer.querySelector('.weather-conditions');
    if (conditionsElement) {
      conditionsElement.textContent = data.conditions;
      console.log('Updated conditions to:', data.conditions);
    } else {
      console.log('Conditions element not found');
    }

    // Update sun icon color based on flight rules
    this.updateSunIcon(data.flightRules);

    // Update timestamp
    const timestampElement = this.weatherContainer.querySelector('.weather-timestamp');
    if (timestampElement) {
      const date = new Date(data.timestamp);
      const timeString = date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      timestampElement.textContent = `Frederick Municipal Airport | ${timeString}`;
      console.log('Updated timestamp to:', timeString);
    } else {
      console.log('Timestamp element not found');
    }

    // Update weather history for next comparison
    this.weatherHistory = {
      temperature: data.temperature,
      windSpeed: data.windSpeed,
      visibility: data.visibility,
      pressure: parseFloat(data.pressure),
      timestamp: data.timestamp
    };

    // Save to localStorage for persistence
    this.saveWeatherHistory();
  }

  private updateSunIcon(flightRules: string) {
    const sunContainer = this.weatherContainer?.querySelector('.weather-sun-container');
    const sunIcon = this.weatherContainer?.querySelector('.weather-sun-icon');
    
    if (!sunContainer || !sunIcon) return;

    // Remove existing color classes
    sunContainer.className = sunContainer.className.replace(/bg-(green|yellow|red)-400/g, '');
    sunIcon.className = sunIcon.className.replace(/text-(green|yellow|red)-600/g, '');

    // Add new color classes based on flight rules
    switch (flightRules) {
      case 'VFR':
        sunContainer.classList.add('bg-green-400');
        sunIcon.classList.add('text-green-600');
        break;
      case 'MVFR':
        sunContainer.classList.add('bg-yellow-400');
        sunIcon.classList.add('text-yellow-600');
        break;
      case 'IFR':
        sunContainer.classList.add('bg-red-400');
        sunIcon.classList.add('text-red-600');
        break;
      default:
        sunContainer.classList.add('bg-green-400');
        sunIcon.classList.add('text-green-600');
    }
  }

  public destroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }
}

// Initialize weather widget
const weatherWidget = new WeatherWidget();

// Clean up on page unload
window.addEventListener('beforeunload', () => {
  weatherWidget.destroy();
});

export default weatherWidget;
