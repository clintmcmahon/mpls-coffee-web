import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { isShopOpenNow, getHoursToday, formatDistance } from '../utils/helpers';
import styles from '../styles/CoffeeShopCard.module.css';

const CoffeeShopCard = ({ shop, userLocation }) => {
  const isOpen = isShopOpenNow(shop);
  const hoursToday = getHoursToday(shop);
  const distance = formatDistance(shop.distance);

  return (
    <div className={styles.card}>
      <div className={styles.mainInfo}>
        <h3 className={styles.name}>{shop.name}</h3>
        <p className={styles.address}>{shop.address}</p>
        <p className={styles.hours}>Hours today: {hoursToday}</p>
        <p className={isOpen ? styles.open : styles.closed}>
          {isOpen ? 'Open Now' : 'Closed'}
        </p>
      </div>
      <div className={styles.distance}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span>{distance}</span>
      </div>
    </div>
  );
};

export default CoffeeShopCard;