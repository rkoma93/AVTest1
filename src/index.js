import { initializeMap, initializeTracker } from './ol-tracker-map.js';

// Initialize the OpenLayers map
const map = initializeMap();

// Initialize the tracker to display real-time vehicle positions
initializeTracker(map);

import RBush from 'rbush';

const tree = new RBush();
tree.insert({ minX: 0, minY: 0, maxX: 1, maxY: 1 });
console.log(tree.all());
