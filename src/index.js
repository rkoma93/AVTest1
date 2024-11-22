import L from 'leaflet';

const geOpsAPIKey = '5cc87b12d7c5370001c1d6554fc9a992d72245bb94224a638ac3a215'; // Replace with your API key
const apiUrl = `https://api.geops.io/transit/vehicles?apiKey=${geOpsAPIKey}&transportType=bus`; // Example for buses

export function initializeMap() {
    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let vehicleMarkers = []; // Array to store vehicle markers

    // Function to fetch real-time vehicle data from GeOps API
    async function fetchVehicleData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            updateMapWithVehicles(data);
        } catch (error) {
            console.error('Error fetching vehicle data:', error);
        }
    }

    // Function to update the map with vehicle markers
    function updateMapWithVehicles(data) {
        // Clear previous markers
        vehicleMarkers.forEach(marker => marker.remove());
        vehicleMarkers = [];

        // Add new markers for each vehicle
        data.vehicles.forEach(vehicle => {
            const { id, lat, lon } = vehicle; // Assuming the API response contains lat, lon, and id

            const marker = L.marker([lat, lon]).addTo(map)
                .bindPopup(`Vehicle ID: ${id}`)
                .openPopup();

            // Add the marker to the vehicleMarkers array for management
            vehicleMarkers.push(marker);
        });
    }

    // Fetch vehicle data immediately and then every 30 seconds
    fetchVehicleData();
    setInterval(fetchVehicleData, 30000);  // Fetch data every 30 seconds
}

// Initialize map when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeMap();
});
