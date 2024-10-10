import { useState, useEffect } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: 44.9778, // Default to Minneapolis coordinates
    longitude: -93.265,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not available");
    }
  }, []);

  return location;
}
