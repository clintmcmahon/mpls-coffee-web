// components/CoffeeShopList.js
import CoffeeShopCard from "./CoffeeShopCard";
import styles from "../styles/CoffeeShopList.module.css";

export default function CoffeeShopList({ coffeeShops, userLocation }) {
  return (
    <div className={styles.listContainer}>
      {coffeeShops.map((shop) => (
        <CoffeeShopCard
          key={shop.placeId}
          shop={shop}
          userLocation={userLocation}
        />
      ))}
    </div>
  );
}
