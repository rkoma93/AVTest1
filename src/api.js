const geOpsAPIKey = '5cc87b12d7c5370001c1d6554fc9a992d72245bb94224a638ac3a215';  // Your API key
const apiUrl = `https://api.geops.io/transit/vehicles?apiKey=${geOpsAPIKey}&transportType=bus`;  // Adjust transport type as needed

export async function fetchVehicleData(map) {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    updateMapWithVehicles(map, data);
  } catch (error) {
    console.error('Error fetching vehicle data:', error);
  }
}

function updateMapWithVehicles(map, data) {
  // Clear all existing markers
  map.eachLayer(layer => {
    if (layer.options && layer.options.pane === 'markerPane') {
      map.removeLayer(layer);
    }
  });

  // Add new markers
  data.vehicles.forEach(vehicle => {
    const { lat, lon, id } = vehicle;  // Adjust if API data structure is different
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(`Vehicle ID: ${id}`);
  });
}
