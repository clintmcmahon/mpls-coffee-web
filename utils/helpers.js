/**
 * Calculates the distance between two geographic coordinates.
 * @param {number} lat1 - Latitude of the first point
 * @param {number} lon1 - Longitude of the first point
 * @param {number} lat2 - Latitude of the second point
 * @param {number} lon2 - Longitude of the second point
 * @returns {number} Distance in miles
 */
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959; // Radius of the earth in miles
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in miles
  return Number(distance.toFixed(2));
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Formats a distance for display.
 * @param {number|string} distance - Distance in miles
 * @returns {string} Formatted distance string
 */
export function formatDistance(distance) {
  // Convert distance to a number if it's a string
  const distanceNum =
    typeof distance === "string" ? parseFloat(distance) : distance;

  // Check if distanceNum is a valid number
  if (typeof distanceNum !== "number" || isNaN(distanceNum)) {
    return "N/A";
  }

  if (distanceNum < 0.1) {
    return "Less than 0.1 mi";
  } else if (distanceNum < 1) {
    return `${(distanceNum * 5280).toFixed(0)} ft`;
  } else {
    return `${distanceNum.toFixed(1)} mi`;
  }
}

/**
 * Determines if a shop is currently open based on its hours.
 * @param {Object} shop - The coffee shop object
 * @returns {boolean} True if the shop is currently open, false otherwise
 */
export function isShopOpenNow(shop) {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const todayHours = shop.hours.find((h) => h.dayOfWeek === dayOfWeek);
  if (!todayHours) return false;

  const openTime = parseTime(todayHours.openTime);
  const closeTime = parseTime(todayHours.closeTime);

  return currentTime >= openTime && currentTime < closeTime;
}

/**
 * Parses a time string in the format "PTxHyM" to minutes since midnight.
 * @param {string} timeString - Time string in the format "PTxHyM"
 * @returns {number} Minutes since midnight
 */
function parseTime(timeString) {
  const hours = parseInt(timeString.match(/(\d+)H/)?.[1] || "0");
  const minutes = parseInt(timeString.match(/(\d+)M/)?.[1] || "0");
  return hours * 60 + minutes;
}

/**
 * Gets the hours for today for a given shop.
 * @param {Object} shop - The coffee shop object
 * @returns {string} Today's hours as a string
 */
export function getHoursToday(shop) {
  const dayOfWeek = new Date().getDay();
  const todayHours = shop.hours.find((h) => h.dayOfWeek === dayOfWeek);

  if (!todayHours) return "Closed";

  const openTime = formatTimeString(todayHours.openTime);
  const closeTime = formatTimeString(todayHours.closeTime);

  return `${openTime} - ${closeTime}`;
}

/**
 * Formats a time string from "PTxHyM" to "HH:MM AM/PM".
 * @param {string} timeString - Time string in the format "PTxHyM"
 * @returns {string} Formatted time string
 */
function formatTimeString(timeString) {
  const totalMinutes = parseTime(timeString);
  let hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}
