import L from 'leaflet';

// Initialize the Leaflet map
const map = L.map('map').setView([51.505, -0.09], 13);  // Coordinates for London as an example

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(map);

console.log("Map initialized");  // Debug log to confirm map initialization
