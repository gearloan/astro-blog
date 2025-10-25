class METARWidget {
  private container: HTMLElement | null = null;
  private updateInterval: number | null = null;
  private currentRequestId: number = 0;
  private currentAbortController: AbortController | null = null;

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
    this.container = document.getElementById('metar-content');
    if (!this.container) {
      console.warn('METAR widget container not found');
      return;
    }

    // Initial load (only when tab is visible to avoid wasted calls)
    if (!this.container.classList.contains('hidden')) {
      this.updateMETAR();
    }

    // Refresh every 10 minutes
    this.updateInterval = window.setInterval(() => {
      if (!this.container?.classList.contains('hidden')) {
        this.updateMETAR();
      }
    }, 10 * 60 * 1000);

    // Update when the METAR tab is selected
    window.addEventListener('metar-tab-selected', () => {
      this.updateMETAR();
    });

    // Update on airport change
    window.addEventListener('airport-changed', (event: any) => {
      this.updateMETAR(event?.detail?.airport);
    });
  }

  private getCurrentAirport(): string {
    const airportSearch = (window as any).airportSearch;
    return airportSearch?.getCurrentAirport() || 'KBOS';
  }

  private async updateMETAR(overrideAirport?: string) {
    try {
      // Cancel any in-flight
      this.currentRequestId += 1;
      const requestId = this.currentRequestId;
      if (this.currentAbortController) {
        try { this.currentAbortController.abort(); } catch {}
      }
      this.currentAbortController = new AbortController();
      const { signal } = this.currentAbortController;

      const airport = (overrideAirport && typeof overrideAirport === 'string') ? overrideAirport : this.getCurrentAirport();

      // Loading state
      if (this.container) {
        this.container.innerHTML = `
          <div class="flex items-center justify-center h-full">
            <div class="text-center">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p class="text-slate-600">Loading METAR for ${airport}...</p>
            </div>
          </div>
        `;
      }

      const resp = await fetch(`/api/weather/${encodeURIComponent(airport)}?t=${Date.now()}`, {
        cache: 'no-store',
        signal
      });
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const data = await resp.json();

      // Ignore stale responses
      if (requestId !== this.currentRequestId) return;

      this.renderMETAR(data);
    } catch (err: any) {
      if (err?.name === 'AbortError') return;
      console.error('METAR fetch failed:', err);
      if (this.container) {
        this.container.innerHTML = `
          <div class="p-4 text-center text-sm text-red-600">Failed to load METAR.</div>
        `;
      }
    }
  }

  private renderMETAR(data: any) {
    if (!this.container) return;
    const raw = data?.raw || 'No METAR available';
    const airport = data?.airport || this.getCurrentAirport();
    const tempF: number = Number(data?.temperature) || 0;
    const pressureIn: number = Number(data?.pressure) || 0;
    const windDirCard = (data?.windDirection || '').toString();
    const windSpeed = (data?.windSpeed ?? '--');

    // Gauge ranges
    const tempMin = -20; // °F
    const tempMax = 120; // °F
    const tempPct = Math.max(0, Math.min(1, (tempF - tempMin) / (tempMax - tempMin)));

    const presMin = 28.5; // inHg
    const presMax = 31.5; // inHg
    const presPct = Math.max(0, Math.min(1, (pressureIn - presMin) / (presMax - presMin)));

    // Simple circular gauge SVG builder
    const buildGauge = (percent: number, color: string) => {
      const size = 72; // px
      const r = 28;
      const cx = size / 2;
      const cy = size / 2;
      const c = 2 * Math.PI * r;
      const filled = c * percent;
      const remaining = c - filled;
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="mx-auto">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(148,163,184,0.25)" stroke-width="8" />
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="8"
            stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"
            stroke-dasharray="${filled} ${remaining}" />
        </svg>
      `;
    };

    // Parse wind degrees from raw, or derive from cardinal
    const parseWindDegrees = (): number | null => {
      if (typeof raw === 'string') {
        const m = raw.match(/\b(\d{3}|VRB)(\d{2,3})(?:G\d{2,3})?KT\b/);
        if (m && m[1]) {
          if (m[1] === 'VRB') return null;
          const deg = Number(m[1]);
          if (Number.isFinite(deg)) return deg;
        }
      }
      const map: Record<string, number> = {
        'N': 0, 'NNE': 22.5, 'NE': 45, 'ENE': 67.5,
        'E': 90, 'ESE': 112.5, 'SE': 135, 'SSE': 157.5,
        'S': 180, 'SSW': 202.5, 'SW': 225, 'WSW': 247.5,
        'W': 270, 'WNW': 292.5, 'NW': 315, 'NNW': 337.5,
      };
      const key = windDirCard?.toUpperCase() || '';
      return map[key] ?? null;
    };

    const windDeg = parseWindDegrees();

    const buildCompass = (deg: number | null) => {
      const size = 84;
      const r = 30;
      const cx = size / 2;
      const cy = size / 2;
      const arrowColor = '#0ea5e9';
      const dim = (deg == null) ? '0.35' : '1';
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="mx-auto">
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="white" fill-opacity="0.6" stroke="rgba(148,163,184,0.6)" stroke-width="2" />
          <g class="text-slate-500" font-size="9" font-family="ui-sans-serif, system-ui">
            <text x="${cx}" y="${cy - r + 10}" text-anchor="middle">N</text>
            <text x="${cx + r - 8}" y="${cy + 3}" text-anchor="middle">E</text>
            <text x="${cx}" y="${cy + r - 4}" text-anchor="middle">S</text>
            <text x="${cx - r + 8}" y="${cy + 3}" text-anchor="middle">W</text>
          </g>
          <g transform="rotate(${deg ?? 0} ${cx} ${cy})" opacity="${dim}">
            <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - r + 12}" stroke="${arrowColor}" stroke-width="4" stroke-linecap="round" />
            <polygon points="${cx},${cy - r} ${cx - 6},${cy - r + 14} ${cx + 6},${cy - r + 14}" fill="${arrowColor}" />
          </g>
        </svg>
      `;
    };

    // Determine simple cloud condition from raw METAR tokens
    const detectClouds = (): string => {
      const t = (raw || '').toUpperCase();
      if (/OVC\d{3}/.test(t)) return 'OVC';
      if (/BKN\d{3}/.test(t)) return 'BKN';
      if (/SCT\d{3}/.test(t)) return 'SCT';
      if (/FEW\d{3}/.test(t)) return 'FEW';
      if (/SKC|CLR/.test(t)) return 'SKC';
      return 'UNK';
    };

    const cloudType = detectClouds();

    const buildCloudIcon = (type: string) => {
      const size = 72;
      const cx = size / 2;
      const cy = size / 2;
      const outlineColor = '#94a3b8';
      const svgOpen = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" class="mx-auto">`;
      const outline = `<circle cx="${cx}" cy="${cy}" r="32" fill="none" stroke="${outlineColor}" opacity="0.25" stroke-width="2" />`;
      if (type === 'SKC') {
        // Sun
        return (
          svgOpen +
          outline +
          `<circle cx="${cx - 10}" cy="${cy - 8}" r="12" fill="#f59e0b" />` +
          // simple rays
          `<g stroke="#f59e0b" stroke-width="2">
             <line x1="${cx - 10}" y1="${cy - 28}" x2="${cx - 10}" y2="${cy - 36}"/>
             <line x1="${cx - 10}" y1="${cy + 12}" x2="${cx - 10}" y2="${cy + 20}"/>
             <line x1="${cx - 28}" y1="${cy - 8}" x2="${cx - 36}" y2="${cy - 8}"/>
             <line x1="${cx + 8}" y1="${cy - 8}" x2="${cx + 16}" y2="${cy - 8}"/>
           </g>` +
          `</svg>`
        );
      }
      // Cloud (multiple circles)
      const fill = (type === 'OVC' || type === 'BKN') ? '#64748b' : '#94a3b8';
      return (
        svgOpen +
        outline +
        `<g fill="${fill}">
           <circle cx="${cx - 14}" cy="${cy + 6}" r="12" />
           <circle cx="${cx}" cy="${cy + 2}" r="14" />
           <circle cx="${cx + 14}" cy="${cy + 8}" r="10" />
           <rect x="${cx - 28}" y="${cy + 10}" width="56" height="12" rx="6" />
         </g>
        </svg>`
      );
    };

    const cloudLabelMap: Record<string, string> = {
      'OVC': 'Overcast',
      'BKN': 'Broken Clouds',
      'SCT': 'Scattered Clouds',
      'FEW': 'Few Clouds',
      'SKC': 'Clear Skies',
      'UNK': 'Clouds'
    };

    this.container.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-bold text-slate-700">METAR - ${airport}</h3>
          <div class="text-xs text-slate-500">Obs: ${new Date(data?.timestamp || Date.now()).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div class="bg-white/60 rounded p-2 text-center">
            <div class="text-slate-500 mb-1">Temp</div>
            <div class="font-semibold text-slate-800 text-lg">${Number.isFinite(tempF) ? tempF : '--'}°F</div>
            <div class="mt-1">${buildGauge(tempPct, '#ef4444')}</div>
          </div>
          <div class="bg-white/60 rounded p-2 text-center">
            <div class="text-slate-500 mb-1">Wind</div>
            <div class="flex items-center justify-center gap-2 font-semibold text-slate-800">
              <span>${windDirCard || '--'}</span>
              <span>/</span>
              <span>${windSpeed}</span>
              <span class="text-xs">kt</span>
            </div>
            <div class="mt-1">${buildCompass(windDeg)}</div>
          </div>
          <div class="bg-white/60 rounded p-2 text-center">
            <div class="text-slate-500 mb-1">Visibility</div>
            <div class="font-semibold text-slate-800 text-lg">${data?.visibility ?? '--'} SM</div>
            <div class="mt-1">${buildCloudIcon(cloudType)}</div>
            <div class="text-xs text-slate-600 mt-1">${cloudLabelMap[cloudType]}</div>
          </div>
          <div class="bg-white/60 rounded p-2 text-center">
            <div class="text-slate-500 mb-1">Alt</div>
            <div class="font-semibold text-slate-800 text-lg">${Number.isFinite(pressureIn) ? pressureIn.toFixed(2) : '--'} inHg</div>
            <div class="mt-1">${buildGauge(presPct, '#10b981')}</div>
            ${data?.ceilingFt ? `<div class="text-xs text-slate-600 mt-1">Ceiling ${data.ceilingFt.toLocaleString()} ft</div>` : ''}
          </div>
        </div>
        <div class="bg-slate-100 rounded p-2">
          <div class="text-xs font-semibold text-slate-700 mb-1">Raw METAR:</div>
          <pre class="text-xs text-slate-700 font-mono whitespace-pre-wrap break-all">${raw}</pre>
        </div>
      </div>
    `;
  }
}

export default METARWidget;


