// Weather Widget - Fetches real aviation weather data

class WeatherWidget {
  private weatherContainer: HTMLElement | null = null
  private updateInterval: number | null = null;
  private currentRequestId: number = 0;
  private currentAbortController: AbortController | null = null;

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
    this.weatherContainer = document.getElementById('weather-overview-content');
    if (!this.weatherContainer) {
      console.warn('Weather widget container not found');
      return;
    }



    // Initial load
    this.updateWeather();

    // Force an immediate update after 2 seconds to clear any cached data
    setTimeout(() => {
      this.updateWeather();
    }, 2000);

    // Update every 5 minutes
    this.updateInterval = window.setInterval(() => {
      this.updateWeather();
    }, 5 * 60 * 1000);

    // Listen for airport changes (pass selected airport directly to avoid race)
    window.addEventListener('airport-changed', (event: any) => {
      const newAirport = event?.detail?.airport;
      this.updateWeather(newAirport);
    });
  }



  private async updateWeather(overrideAirport?: string) {
    try {
      // Track and cancel in-flight requests to avoid stale updates
      this.currentRequestId += 1;
      const requestId = this.currentRequestId;
      if (this.currentAbortController) {
        try { this.currentAbortController.abort(); } catch {}
      }
      this.currentAbortController = new AbortController();
      const { signal } = this.currentAbortController;

      const airport = (overrideAirport && typeof overrideAirport === 'string') ? overrideAirport : this.getCurrentAirport();
      const response = await fetch(`/api/weather/${airport}?t=${Date.now()}&cache=${Math.random()}`, {
        cache: 'no-store',
        signal
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const weatherData = await response.json();
      // Ignore stale responses
      if (requestId !== this.currentRequestId) {
        return;
      }
      this.updateWeatherDisplay(weatherData);
      
    } catch (error: any) {
      if (error?.name === 'AbortError') {
        return;
      }
      console.error('Failed to fetch weather data:', error);
      // Keep existing display on error
    }
  }

  private getCurrentAirport(): string {
    // Get current airport from airport search widget or default to KFDK
    const airportSearch = (window as any).airportSearch;
    return airportSearch?.getCurrentAirport() || 'KBOS';
  }



  private updateWeatherDisplay(data: any) {
    if (!this.weatherContainer) {
      return;
    }

    // Final safety: ignore data that doesn't match the currently selected airport
    const selectedAirport = this.getCurrentAirport();
    if (data?.airport && data.airport !== selectedAirport) {
      return;
    }

    // Update temperature
    const tempElement = this.weatherContainer.querySelector('.weather-temp');
    if (tempElement) {
      tempElement.textContent = `${data.temperature}°`;
    }

    // Update wind (value only; unit shown in label)
    const windElement = this.weatherContainer.querySelector('.weather-wind');
    if (windElement) {
      const windRaw = (data.windSpeed ?? data.wind ?? '').toString();
      windElement.textContent = windRaw || '';
    }

    // Update visibility
    const visibilityElement = this.weatherContainer.querySelector('.weather-visibility');
    if (visibilityElement) {
      visibilityElement.textContent = data.visibility.toString();
    }

    // Update pressure
    const pressureElement = this.weatherContainer.querySelector('.weather-pressure');
    if (pressureElement) {
      pressureElement.textContent = data.pressure;
    }

    // Update conditions text
    const conditionsElement = this.weatherContainer.querySelector('.weather-conditions');
    if (conditionsElement) {
      conditionsElement.textContent = data.conditions;
    }

    // Update sun icon color based on flight rules
    this.updateSunIcon(data.flightRules);

    // Update timestamp using the currently selected airport (avoid API fallback)
    const timestampElement = this.weatherContainer.querySelector('.weather-timestamp');
    if (timestampElement) {
      const date = new Date(data.timestamp);
      const timeString = date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      timestampElement.textContent = `${selectedAirport} | ${timeString}`;
      document.querySelectorAll('[data-airport-display]').forEach(el => {
        el.textContent = `${selectedAirport} | ${timeString}`;
      });
    }

  }

  private updateSunIcon(flightRules: string) {
    const sunContainer = this.weatherContainer?.querySelector('.weather-sun-container');
    const sunIcon = this.weatherContainer?.querySelector('.weather-sun-icon');
    
    if (!sunContainer || !sunIcon) return;

    // Remove existing color classes using classList
    sunContainer.classList.remove('bg-green-400', 'bg-yellow-400', 'bg-red-400');
    sunIcon.classList.remove('text-green-600', 'text-yellow-600', 'text-red-600');

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

export default WeatherWidget;
