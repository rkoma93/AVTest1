import axios from 'axios';

const GEOPS_API_URL = 'https://api.geops.io/realtime/v1/';
const API_KEY = '5cc87b12d7c5370001c1d6554fc9a992d72245bb94224a638ac3a215';

export async function fetchRealtimeData() {
  try {
    const response = await axios.get(`${GEOPS_API_URL}vehicles`, {
      headers: { 'X-API-Key': API_KEY },
    });
    return response.data.features.map((feature) => ({
      location: {
        latitude: feature.geometry.coordinates[1],
        longitude: feature.geometry.coordinates[0],
      },
      line: feature.properties.line,
      status: feature.properties.status,
    }));
  } catch (error) {
    throw new Error('Failed to fetch real-time data');
  }
}
