import axios from "axios";
import { calculateDistance, calculateDistances } from "./helpers";
const API_URL = "https://api.mplscoffee.com/odata/coffeeshops";

export async function fetchCoffeeShops(latitude, longitude) {
  try {
    const response = await axios.get(`${API_URL}?$expand=hours`);
    const coffeeShops = response.data.value.map((shop) => ({
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

    const sortedDistances = calculateDistances(latitude, longitude, coffeeShops);
    return sortedDistances;

  } catch (error) {
    console.error("Error fetching coffee shops:", error);
    return [];
  }
}

function isShopOpenNow(shop) {
  const now = new Date();
  const currentDay = now.getDay(); // 0-6, where 0 is Sunday
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes since midnight

  const todayHours = shop.hours.find(h => h.dayOfWeek === currentDay);

  if (!todayHours) {
    return false; // Shop is closed if no hours are found for today
  }

  const openTime = parseTime(todayHours.openTime);
  const closeTime = parseTime(todayHours.closeTime);

  // Check if current time is between open and close times
  return currentTime >= openTime && currentTime < closeTime;
}

function parseTime(timeString) {
  // Extract hours and minutes from the PT string
  const hours = parseInt(timeString.match(/(\d+)H/)?.[1] || '0');
  const minutes = parseInt(timeString.match(/(\d+)M/)?.[1] || '0');

  // Return time in minutes since midnight
  return hours * 60 + minutes;
}

function getHoursToday(shop) {
  const today = new Date().getDay(); // 0-6, where 0 is Sunday
  const todayHours = shop.hours.find(h => h.dayOfWeek === today);

  if (!todayHours) {
    return "Closed";
  }

  const openTime = formatTime(todayHours.openTime);
  const closeTime = formatTime(todayHours.closeTime);

  return `${openTime} - ${closeTime}`;
}

function formatTime(timeString) {
  // Extract hours and minutes from the PT string
  const hours = parseInt(timeString.match(/(\d+)H/)?.[1] || '0');
  const minutes = parseInt(timeString.match(/(\d+)M/)?.[1] || '0');

  // Create a Date object and set the time
  const date = new Date();
  date.setHours(hours, minutes, 0);

  // Format the time as a string
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
}
