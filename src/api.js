const geOpsAPIKey = '5cc87b12d7c5370001c1d6554fc9a992d72245bb94224a638ac3a215';  // Your API key
const apiUrl = `https://api.geops.io/transit/vehicles?apiKey=${geOpsAPIKey}&transportType=bus`;  // Adjust transport type if needed

// Function to fetch vehicle data
export async function fetchVehicleData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const data = await response.json();
    return data.vehicles;  // Assumes the response has a "vehicles" array
  } catch (error) {
    console.error('Error fetching GeOps data:', error);
    return [];
  }
}
