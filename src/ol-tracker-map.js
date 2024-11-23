import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import XYZ from 'ol/source/XYZ.js';

export function initializeMap() {
  const map = new Map({
    target: 'map', // Matches the ID in the HTML
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        }),
      }),
    ],
    view: new View({
      center: [0, 0], // Default center in EPSG:3857 (Web Mercator)
      zoom: 2,        // Initial zoom level
    }),
  });

  return map;
}

export function initializeTracker(map) {
  // Initialize Tracker with GeOps API and link it to the map
  const tracker = new Tracker({
    map,
    fetchParams: {
      url: 'https://api.geops.io/realtime/vehiclepositions',
      apiKey: '5cc87b12d7c5370001c1d6554fc9a992d72245bb94224a638ac3a215',
    },
    refreshInterval: 30000, // Refresh data every 30 seconds
  });

  // Automatically fetch and display vehicle data
  tracker.start();
}
