class AirportSearch {
  private modal: HTMLElement | null = null;
  private searchInput: HTMLInputElement | null = null;
  private suggestionsContainer: HTMLElement | null = null;
  private confirmButton: HTMLButtonElement | null = null;
  private selectedAirport: string | null = null;
  private currentAirport: string = 'KBOS';

  // Common airports database
  private airports = [
    { code: 'KFDK', name: 'Frederick Municipal Airport', city: 'Frederick, MD' },
    { code: 'KLAX', name: 'Los Angeles International Airport', city: 'Los Angeles, CA' },
    { code: 'KJFK', name: 'John F. Kennedy International Airport', city: 'New York, NY' },
    { code: 'KORD', name: 'Chicago O\'Hare International Airport', city: 'Chicago, IL' },
    { code: 'KDFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas, TX' },
    { code: 'KATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta, GA' },
    { code: 'KDEN', name: 'Denver International Airport', city: 'Denver, CO' },
    { code: 'KLAS', name: 'Harry Reid International Airport', city: 'Las Vegas, NV' },
    { code: 'KSEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle, WA' },
    { code: 'KMIA', name: 'Miami International Airport', city: 'Miami, FL' },
    { code: 'KBOS', name: 'Logan International Airport', city: 'Boston, MA' },
    { code: 'KPHX', name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix, AZ' },
    { code: 'KDTW', name: 'Detroit Metropolitan Wayne County Airport', city: 'Detroit, MI' },
    { code: 'KMSP', name: 'Minneapolis-Saint Paul International Airport', city: 'Minneapolis, MN' },
    { code: 'KCLT', name: 'Charlotte Douglas International Airport', city: 'Charlotte, NC' },
    { code: 'KPHL', name: 'Philadelphia International Airport', city: 'Philadelphia, PA' },
    { code: 'KIAH', name: 'George Bush Intercontinental Airport', city: 'Houston, TX' },
    { code: 'KEWR', name: 'Newark Liberty International Airport', city: 'Newark, NJ' },
    { code: 'KSLC', name: 'Salt Lake City International Airport', city: 'Salt Lake City, UT' },
    { code: 'KPDX', name: 'Portland International Airport', city: 'Portland, OR' },
    { code: 'KBWI', name: 'Baltimore/Washington International Airport', city: 'Baltimore, MD' },
    { code: 'KDCA', name: 'Ronald Reagan Washington National Airport', city: 'Washington, DC' },
    { code: 'KIAD', name: 'Washington Dulles International Airport', city: 'Washington, DC' },
    { code: 'KSAN', name: 'San Diego International Airport', city: 'San Diego, CA' },
    { code: 'KTPA', name: 'Tampa International Airport', city: 'Tampa, FL' },
    { code: 'KMCO', name: 'Orlando International Airport', city: 'Orlando, FL' },
    { code: 'KSTL', name: 'St. Louis Lambert International Airport', city: 'St. Louis, MO' },
    { code: 'KCLE', name: 'Cleveland Hopkins International Airport', city: 'Cleveland, OH' },
    { code: 'KPIT', name: 'Pittsburgh International Airport', city: 'Pittsburgh, PA' },
    { code: 'KIND', name: 'Indianapolis International Airport', city: 'Indianapolis, IN' },
    { code: 'KCVG', name: 'Cincinnati/Northern Kentucky International Airport', city: 'Cincinnati, OH' },
    { code: 'KMEM', name: 'Memphis International Airport', city: 'Memphis, TN' },
    { code: 'KBNA', name: 'Nashville International Airport', city: 'Nashville, TN' },
    { code: 'KMSY', name: 'Louis Armstrong New Orleans International Airport', city: 'New Orleans, LA' },
    { code: 'KAUS', name: 'Austin-Bergstrom International Airport', city: 'Austin, TX' },
    { code: 'KSAT', name: 'San Antonio International Airport', city: 'San Antonio, TX' },
    { code: 'KOKC', name: 'Will Rogers World Airport', city: 'Oklahoma City, OK' },
    { code: 'KTUL', name: 'Tulsa International Airport', city: 'Tulsa, OK' },
    { code: 'KOMA', name: 'Eppley Airfield', city: 'Omaha, NE' },
    { code: 'KMCI', name: 'Kansas City International Airport', city: 'Kansas City, MO' },
    { code: 'KDSM', name: 'Des Moines International Airport', city: 'Des Moines, IA' },
    { code: 'KMSN', name: 'Dane County Regional Airport', city: 'Madison, WI' },
    { code: 'KMKE', name: 'Milwaukee Mitchell International Airport', city: 'Milwaukee, WI' },
    { code: 'KGRR', name: 'Gerald R. Ford International Airport', city: 'Grand Rapids, MI' },
    { code: 'KALB', name: 'Albany International Airport', city: 'Albany, NY' },
    { code: 'KBUF', name: 'Buffalo Niagara International Airport', city: 'Buffalo, NY' },
    { code: 'KROC', name: 'Greater Rochester International Airport', city: 'Rochester, NY' },
    { code: 'KSYR', name: 'Syracuse Hancock International Airport', city: 'Syracuse, NY' },
    { code: 'KBTV', name: 'Burlington International Airport', city: 'Burlington, VT' },
    { code: 'KMHT', name: 'Manchester-Boston Regional Airport', city: 'Manchester, NH' },
    { code: 'KPVD', name: 'T. F. Green Airport', city: 'Providence, RI' },
    { code: 'KBDL', name: 'Bradley International Airport', city: 'Hartford, CT' },
    { code: 'KALB', name: 'Albany International Airport', city: 'Albany, NY' },
    { code: 'KJAX', name: 'Jacksonville International Airport', city: 'Jacksonville, FL' },
    { code: 'KRSW', name: 'Southwest Florida International Airport', city: 'Fort Myers, FL' },
    { code: 'KPBI', name: 'Palm Beach International Airport', city: 'West Palm Beach, FL' },
    { code: 'KTLH', name: 'Tallahassee International Airport', city: 'Tallahassee, FL' },
    { code: 'KGNV', name: 'Gainesville Regional Airport', city: 'Gainesville, FL' },
    { code: 'KORL', name: 'Orlando Executive Airport', city: 'Orlando, FL' },
    { code: 'KMLB', name: 'Melbourne International Airport', city: 'Melbourne, FL' },
    { code: 'KVRB', name: 'Vero Beach Regional Airport', city: 'Vero Beach, FL' },
    { code: 'KPGD', name: 'Punta Gorda Airport', city: 'Punta Gorda, FL' },
    { code: 'KSRQ', name: 'Sarasota-Bradenton International Airport', city: 'Sarasota, FL' },
    { code: 'KPIE', name: 'St. Pete-Clearwater International Airport', city: 'St. Petersburg, FL' },
    { code: 'KSPG', name: 'Albert Whitted Airport', city: 'St. Petersburg, FL' },
    { code: 'KTPF', name: 'Peter O. Knight Airport', city: 'Tampa, FL' },
    { code: 'KZPH', name: 'Zephyrhills Municipal Airport', city: 'Zephyrhills, FL' },
    { code: 'KLAL', name: 'Lakeland Linder International Airport', city: 'Lakeland, FL' },
    { code: 'KBKV', name: 'Brooksville-Tampa Bay Regional Airport', city: 'Brooksville, FL' },
    { code: 'KOCF', name: 'Ocala International Airport', city: 'Ocala, FL' },
    { code: 'KLEE', name: 'Leesburg International Airport', city: 'Leesburg, FL' },
    { code: 'KISM', name: 'Kissimmee Gateway Airport', city: 'Kissimmee, FL' },
    { code: 'KXFL', name: 'Flagler Executive Airport', city: 'Palm Coast, FL' },
    { code: 'KDAB', name: 'Daytona Beach International Airport', city: 'Daytona Beach, FL' },
    { code: 'KCRG', name: 'Jacksonville Executive at Craig Airport', city: 'Jacksonville, FL' },
    { code: 'KHEG', name: 'Herlong Recreational Airport', city: 'Jacksonville, FL' },
    { code: 'KJAX', name: 'Jacksonville International Airport', city: 'Jacksonville, FL' },
    { code: 'KGNV', name: 'Gainesville Regional Airport', city: 'Gainesville, FL' },
    { code: 'KTLH', name: 'Tallahassee International Airport', city: 'Tallahassee, FL' },
    { code: 'KPFN', name: 'Panama City-Bay County International Airport', city: 'Panama City, FL' },
    { code: 'KVPS', name: 'Destin-Fort Walton Beach Airport', city: 'Destin, FL' },
    { code: 'KPNS', name: 'Pensacola International Airport', city: 'Pensacola, FL' },
    { code: 'KMOB', name: 'Mobile Regional Airport', city: 'Mobile, AL' },
    { code: 'KBHM', name: 'Birmingham-Shuttlesworth International Airport', city: 'Birmingham, AL' },
    { code: 'KMGM', name: 'Montgomery Regional Airport', city: 'Montgomery, AL' },
    { code: 'KHSV', name: 'Huntsville International Airport', city: 'Huntsville, AL' },
    { code: 'KATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta, GA' },
    { code: 'KSAV', name: 'Savannah/Hilton Head International Airport', city: 'Savannah, GA' },
    { code: 'KAGS', name: 'Augusta Regional Airport', city: 'Augusta, GA' },
    { code: 'KCSG', name: 'Columbus Airport', city: 'Columbus, GA' },
    { code: 'KAHN', name: 'Athens-Ben Epps Airport', city: 'Athens, GA' },
    { code: 'KWRB', name: 'Robins Air Force Base', city: 'Warner Robins, GA' },
    { code: 'KFTY', name: 'Fulton County Airport-Brown Field', city: 'Atlanta, GA' },
    { code: 'KPDK', name: 'DeKalb-Peachtree Airport', city: 'Atlanta, GA' },
    { code: 'KLZU', name: 'Gwinnett County Airport', city: 'Lawrenceville, GA' },
    { code: 'KFFC', name: 'Falcon Field', city: 'Peachtree City, GA' },
    { code: 'KGVL', name: 'Lee Gilmer Memorial Airport', city: 'Gainesville, GA' },
    { code: 'KCNI', name: 'Cherokee County Airport', city: 'Canton, GA' },
    { code: 'KRMG', name: 'Richard B. Russell Airport', city: 'Rome, GA' },
    { code: 'KDNN', name: 'Dalton Municipal Airport', city: 'Dalton, GA' },
    { code: 'KAHN', name: 'Athens-Ben Epps Airport', city: 'Athens, GA' },
    { code: 'KWRB', name: 'Robins Air Force Base', city: 'Warner Robins, GA' },
    { code: 'KFTY', name: 'Fulton County Airport-Brown Field', city: 'Atlanta, GA' },
    { code: 'KPDK', name: 'DeKalb-Peachtree Airport', city: 'Atlanta, GA' },
    { code: 'KLZU', name: 'Gwinnett County Airport', city: 'Lawrenceville, GA' },
    { code: 'KFFC', name: 'Falcon Field', city: 'Peachtree City, GA' },
    { code: 'KGVL', name: 'Lee Gilmer Memorial Airport', city: 'Gainesville, GA' },
    { code: 'KCNI', name: 'Cherokee County Airport', city: 'Canton, GA' },
    { code: 'KRMG', name: 'Richard B. Russell Airport', city: 'Rome, GA' },
    { code: 'KDNN', name: 'Dalton Municipal Airport', city: 'Dalton, GA' }
  ];

  constructor() {
    console.log('AirportSearch widget constructor called, currentAirport:', this.currentAirport);
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.init();
        // Seed cookie with initial airport so API can read when query is stripped
        try { document.cookie = `currentAirport=${this.currentAirport}; path=/; max-age=86400`; } catch {}
      });
    } else {
      this.init();
      try { document.cookie = `currentAirport=${this.currentAirport}; path=/; max-age=86400`; } catch {}
    }
  }

  private init() {
    this.modal = document.getElementById('airport-modal');
    this.searchInput = document.getElementById('airport-search') as HTMLInputElement;
    this.suggestionsContainer = document.getElementById('airport-suggestions');
    this.confirmButton = document.getElementById('confirm-airport-change') as HTMLButtonElement;

    if (!this.modal || !this.searchInput || !this.suggestionsContainer || !this.confirmButton) {
      console.warn('Airport search elements not found');
      return;
    }

    this.setupEventListeners();
  }

  private setupEventListeners() {
    // Open modal
    const changeBtn = document.getElementById('change-airport-btn');
    changeBtn?.addEventListener('click', () => {
      this.openModal();
    });

    // Close modal
    const closeBtn = document.getElementById('close-airport-modal');
    const cancelBtn = document.getElementById('cancel-airport-change');
    const modal = this.modal;

    const closeModal = () => {
      this.closeModal();
    };

    closeBtn?.addEventListener('click', closeModal);
    cancelBtn?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Search input
    this.searchInput?.addEventListener('input', (e) => {
      const query = (e.target as HTMLInputElement).value.trim();
      this.handleSearch(query);
    });

    // Confirm button
    this.confirmButton?.addEventListener('click', () => {
      this.confirmAirportChange();
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal?.classList.contains('hidden')) {
        this.closeModal();
      }
    });
  }

  private openModal() {
    this.modal?.classList.remove('hidden');
    this.searchInput?.focus();
    this.searchInput!.value = '';
    this.selectedAirport = null;
    this.confirmButton!.disabled = true;
    this.suggestionsContainer?.classList.add('hidden');
  }

  private closeModal(resetSelection: boolean = true) {
    this.modal?.classList.add('hidden');
    this.searchInput!.value = '';
    if (resetSelection) {
      this.selectedAirport = null;
    }
    this.confirmButton!.disabled = true;
    this.suggestionsContainer?.classList.add('hidden');
  }

  private handleSearch(query: string) {
    if (query.length < 2) {
      this.suggestionsContainer?.classList.add('hidden');
      this.confirmButton!.disabled = true;
      return;
    }

    const results = this.airports.filter(airport => 
      airport.code.toLowerCase().includes(query.toLowerCase()) ||
      airport.name.toLowerCase().includes(query.toLowerCase()) ||
      airport.city.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 10); // Limit to 10 results

    this.displaySuggestions(results);
  }

  private displaySuggestions(results: any[]) {
    if (!this.suggestionsContainer) return;

    if (results.length === 0) {
      this.suggestionsContainer.innerHTML = '<div class="p-3 text-gray-500 text-sm">No airports found</div>';
      this.suggestionsContainer.classList.remove('hidden');
      this.confirmButton!.disabled = true;
      return;
    }

    const suggestionsHTML = results.map(airport => `
      <div class="airport-suggestion p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0" data-code="${airport.code}">
        <div class="font-medium text-gray-900">${airport.code}</div>
        <div class="text-sm text-gray-600">${airport.name}</div>
        <div class="text-xs text-gray-500">${airport.city}</div>
      </div>
    `).join('');

    this.suggestionsContainer.innerHTML = suggestionsHTML;
    this.suggestionsContainer.classList.remove('hidden');

    // Add click listeners to suggestions
    this.suggestionsContainer.querySelectorAll('.airport-suggestion').forEach(suggestion => {
      suggestion.addEventListener('click', () => {
        const code = suggestion.getAttribute('data-code');
        this.selectAirport(code!);
      });
    });
  }

  private selectAirport(code: string) {
    console.log('selectAirport called with:', code);
    this.selectedAirport = code;
    this.searchInput!.value = code;
    this.confirmButton!.disabled = false;
    this.suggestionsContainer?.classList.add('hidden');
    console.log('selectedAirport set to:', this.selectedAirport);
  }

  private confirmAirportChange() {
    console.log('confirmAirportChange - selectedAirport:', this.selectedAirport);
    if (!this.selectedAirport) {
      console.log('No airport selected, returning');
      return;
    }

    this.currentAirport = this.selectedAirport;
    console.log('confirmAirportChange - currentAirport set to:', this.currentAirport);
    // Persist for server-side API routes to read
    try { document.cookie = `currentAirport=${this.currentAirport}; path=/; max-age=86400`; } catch {}
    
    // Dispatch custom event to notify widgets of airport change
    const event = new CustomEvent('airport-changed', {
      detail: { airport: this.selectedAirport }
    });
    window.dispatchEvent(event);

    // Close modal without resetting selection
    this.closeModal(false);

    // Update the UI to show current airport
    this.updateCurrentAirportDisplay();
  }

  private updateCurrentAirportDisplay() {
    // Update any display elements that show the current airport
    const airportDisplays = document.querySelectorAll('[data-airport-display]');
    airportDisplays.forEach(display => {
      display.textContent = this.currentAirport;
    });
  }

  public getCurrentAirport(): string {
    console.log('Airport search getCurrentAirport returning:', this.currentAirport);
    return this.currentAirport;
  }
}

export default AirportSearch;
