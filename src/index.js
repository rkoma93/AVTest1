import { initializeMap, initializeTracker } from './ol-tracker-map.js';

// Initialize the OpenLayers map
const map = initializeMap();

// Initialize the tracker to display real-time vehicle positions
initializeTracker(map);
