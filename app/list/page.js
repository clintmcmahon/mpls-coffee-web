'use client';

import { useState, useEffect } from 'react';
import CoffeeShopList from '../../components/CoffeeShopList';
import FilterControls from '../../components/FilterControls';
import useGeolocation from '../../hooks/useGeolocation';
import { fetchCoffeeShops } from '../../utils/api';
import styles from '../../styles/List.module.css';

export default function ListPage() {
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [filters, setFilters] = useState({ openNow: false, goodCoffee: false });
  const userLocation = useGeolocation();

  useEffect(() => {
    async function loadCoffeeShops() {
      if (userLocation.latitude && userLocation.longitude) {
        console.log('Starting fetch coffee shops');
        const shops = await fetchCoffeeShops(
          userLocation.latitude,
          userLocation.longitude
        );
        setCoffeeShops(shops);
      }
    }
    loadCoffeeShops();
  }, []);

  const handleFilterChange = (filterName, isChecked) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: isChecked
    }));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <FilterControls filters={filters} onFilterChange={handleFilterChange} />
      </header>
      <main className={styles.main}>
        <CoffeeShopList
          coffeeShops={coffeeShops}
          userLocation={userLocation}
          filters={filters}
        />
      </main>
    </div>
  );
}