import { initializeMap, updateMapWithVehicles } from './leaflet-map.js';

// Initialize the map
const map = initializeMap();

// Initial fetch and render of vehicle data
updateMapWithVehicles(map);

// Set an interval to fetch and update vehicle data every 30 seconds
setInterval(() => updateMapWithVehicles(map), 30000);
