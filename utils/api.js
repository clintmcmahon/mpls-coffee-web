import axios from "axios";

const API_URL = "https://api.mplscoffee.com/odata/coffeeshops";

export async function fetchCoffeeShops(latitude, longitude) {
  try {
    const response = await axios.get(`${API_URL}?$expand=hours`);
    return response.data.value.map((shop) => ({
      ...shop,
      isOpenNow: isShopOpenNow(shop),
      hoursToday: getHoursToday(shop),
      distance: calculateDistance(
        latitude,
        longitude,
        shop.latitude,
        shop.longitude
      ),
    }));
  } catch (error) {
    console.error("Error fetching coffee shops:", error);
    return [];
  }
}

function isShopOpenNow(shop) {
  // Implement logic to check if the shop is currently open
  // You'll need to parse the weekdayText and compare with current time
  // For simplicity, let's assume all shops are open
  return true;
}

function getHoursToday(shop) {
  // Implement logic to get today's hours from weekdayText
  // For simplicity, let's return a placeholder
  return "8:00 AM - 5:00 PM";
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  // Implement distance calculation logic
  // For simplicity, let's return a placeholder distance
  return "0.5 mi";
}
