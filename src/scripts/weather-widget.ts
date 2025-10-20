// Weather Widget - Fetches real aviation weather data
class WeatherWidget {
  private weatherContainer: HTMLElement | null = null
  private weatherHistory: {
    temperature: number | null
    windSpeed: number | null
    visibility: number | null
    pressure: number | null
  } = {
    temperature: null,
    windSpeed: null,
    visibility: null,
    pressure: null
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
    console.log('Setting up weather widget...');
    this.weatherContainer = document.getElementById('weather-content');
    if (!this.weatherContainer) {
      console.warn('Weather widget container not found');
      return;
    }
    console.log('Weather container found:', this.weatherContainer);

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
      tempElement.textContent = `${data.temperature}°`;
      console.log('Updated temperature to:', data.temperature);
    } else {
      console.log('Temperature element not found');
    }

    // Update wind
    const windElement = this.weatherContainer.querySelector('.weather-wind');
    if (windElement) {
      const windTrend = this.getTrendDirection(data.windSpeed, this.weatherHistory.windSpeed);
      const windMagnitude = this.getTrendMagnitude(data.windSpeed, this.weatherHistory.windSpeed);
      const windArrow = this.getTrendArrow(windTrend, windMagnitude, 'text-red-600');
      console.log('Updating wind to:', data.windSpeed, 'trend:', windTrend, 'magnitude:', windMagnitude);
      windElement.innerHTML = `${data.windSpeed} ${windArrow}`;
    } else {
      console.log('Wind element not found');
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
      console.log('Updated pressure to:', data.pressure, 'trend:', pressureTrend, 'magnitude:', pressureMagnitude);
      pressureElement.innerHTML = `${data.pressure} ${pressureArrow}`;
    } else {
      console.log('Pressure element not found');
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
      pressure: parseFloat(data.pressure)
    };
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
