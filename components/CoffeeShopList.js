import React from 'react';
import CoffeeShopCard from './CoffeeShopCard';
import styles from '../styles/CoffeeShopList.module.css';

const CoffeeShopList = ({ coffeeShops, userLocation, filters = {} }) => {
  const filteredShops = coffeeShops.filter(shop => {
    if (filters.openNow && !shop.isOpenNow) return false;
    if (filters.goodCoffee && !shop.isGood) return false;
    return true;
  });

  return (
    <div className={styles.listContainer}>
      {filteredShops.map(shop => (
        <CoffeeShopCard
          key={shop.placeId}
          shop={shop}
          userLocation={userLocation}
        />
      ))}
    </div>
  );
};

export default CoffeeShopList;