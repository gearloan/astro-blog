// Weather Widget - Fetches real aviation weather data
class WeatherWidget {
  private weatherContainer: HTMLElement | null = null;
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

    // Initial load
    this.updateWeather();

    // Update every 5 minutes
    this.updateInterval = window.setInterval(() => {
      this.updateWeather();
    }, 5 * 60 * 1000);
  }

  private async updateWeather() {
    try {
      const response = await fetch('/api/weather?airport=KFDK');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const weatherData = await response.json();
      this.updateWeatherDisplay(weatherData);
      
    } catch (error) {
      console.error('Failed to fetch weather data:', error);
      // Keep existing display on error
    }
  }

  private updateWeatherDisplay(data: any) {
    if (!this.weatherContainer) return;

    // Update temperature
    const tempElement = this.weatherContainer.querySelector('.weather-temp');
    if (tempElement) {
      tempElement.textContent = `${data.temperature}°`;
    }

    // Update wind
    const windElement = this.weatherContainer.querySelector('.weather-wind');
    if (windElement) {
      windElement.innerHTML = `
        ${data.windSpeed}
        <svg class="w-4 h-4 md:w-5 md:h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path>
        </svg>
      `;
    }

    // Update visibility
    const visibilityElement = this.weatherContainer.querySelector('.weather-visibility');
    if (visibilityElement) {
      visibilityElement.textContent = data.visibility.toString();
    }

    // Update pressure
    const pressureElement = this.weatherContainer.querySelector('.weather-pressure');
    if (pressureElement) {
      pressureElement.innerHTML = `
        ${data.pressure}
        <svg class="w-4 h-4 md:w-5 md:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      `;
    }

    // Update conditions text
    const conditionsElement = this.weatherContainer.querySelector('.weather-conditions');
    if (conditionsElement) {
      conditionsElement.textContent = data.conditions;
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
    }
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
