"use client";

import { useState, useEffect } from "react";
import Map from "../../components/Map";
import FilterControls from "../../components/FilterControls";
import useGeolocation from "../../hooks/useGeolocation";
import { fetchCoffeeShops } from "../../utils/api";
import styles from "../../styles/page.module.css";

export default function MapPage() {
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

  const handleFilterChange = (filterName, isChecked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isChecked,
    }));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.filterControls}>
        <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <main className={styles.mainContent}>
        <Map
          coffeeShops={coffeeShops}
          userLocation={userLocation}
          filters={filters}
        />
      </main>
    </div>
  );
}
