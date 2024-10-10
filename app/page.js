"use client";

import { useState, useEffect } from "react";
import Map from "../components/Map";
import CoffeeShopList from "../components/CoffeeShopList";
import FilterControls from "../components/FilterControls";
import useGeolocation from "../hooks/useGeolocation";
import { fetchCoffeeShops } from "../utils/api";
import styles from "../styles/Page.module.css"; // Add this line

export default function Home() {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filters, setFilters] = useState({ openNow: false, goodCoffee: false });
  const userLocation = useGeolocation();

  useEffect(() => {
    async function loadCoffeeShops() {
      if (userLocation.latitude && userLocation.longitude) {
        const shops = await fetchCoffeeShops(
          userLocation.latitude,
          userLocation.longitude
        );
        setCoffeeShops(shops);
      }
    }
    loadCoffeeShops();
  }, [userLocation]);

  const filteredShops = coffeeShops.filter((shop) => {
    if (filters.openNow && !shop.isOpenNow) return false;
    if (filters.goodCoffee && !shop.isGood) return false;
    return true;
  });

  return (
    <main className={styles.main}>
      <FilterControls filters={filters} setFilters={setFilters} />
      <div className={styles.contentWrapper}>
        <Map coffeeShops={filteredShops} userLocation={userLocation} />
        <CoffeeShopList
          coffeeShops={filteredShops}
          userLocation={userLocation}
        />
      </div>
    </main>
  );
}
