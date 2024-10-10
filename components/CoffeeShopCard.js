import { useState } from "react";
import CoffeeShopDetail from "./CoffeeShopDetail";
import { formatDistance } from "../utils/helpers";
import styles from "../styles/CoffeeShopCard.module.css";

export default function CoffeeShopCard({ shop, userLocation }) {
  const [showDetails, setShowDetails] = useState(false);

  const distance = formatDistance(shop, userLocation);

  return (
    <div className={styles.card} onClick={() => setShowDetails(true)}>
      <h3>{shop.name}</h3>
      <p>{shop.address}</p>
      <p>Hours today: {shop.hoursToday}</p>
      <p>{shop.isOpenNow ? "Open Now" : "Closed"}</p>
      <p>Distance: {distance}</p>
      {showDetails && (
        <CoffeeShopDetail shop={shop} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}
