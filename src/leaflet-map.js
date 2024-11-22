import L from 'leaflet';
import { fetchVehicleData } from './api.js';

export function initializeMap() {
  const map = L.map('map').setView([51.505, -0.09], 13);  // Example: center on London

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  return map;
}

export async function updateMapWithVehicles(map) {
  const vehicles = await fetchVehicleData();

  // Clear existing vehicle markers
  map.eachLayer(layer => {
    if (layer.options && layer.options.pane === 'markerPane') {
      map.removeLayer(layer);
    }
  });

  // Add new vehicle markers
  vehicles.forEach(vehicle => {
    const { lat, lon, id } = vehicle;  // Adjust if API response structure is different
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(`Vehicle ID: ${id}`);
  });
}
