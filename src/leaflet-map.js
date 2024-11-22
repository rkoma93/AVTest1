import L from 'leaflet';
import { fetchRealtimeData } from './api.js';

export function initializeMap() {
  // Initialize Leaflet map
  const map = L.map('map').setView([46.8, 8.33], 8); // Switzerland center

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  // Fetch and display real-time data
  fetchRealtimeData()
    .then((vehicles) => {
      vehicles.forEach((vehicle) => {
        L.marker([vehicle.location.latitude, vehicle.location.longitude])
          .bindPopup(`Line: ${vehicle.line}<br>Status: ${vehicle.status}`)
          .addTo(map);
      });
    })
    .catch((error) => {
      console.error('Error fetching real-time data:', error);
    });
}
