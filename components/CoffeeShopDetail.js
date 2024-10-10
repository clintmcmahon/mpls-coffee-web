import React from "react";
import styles from "../styles/CoffeeShopDetail.module.css";

const CoffeeShopDetail = ({ shop, onClose }) => {
  return (
    <div className={styles.detailCard}>
      <button className={styles.closeBtn} onClick={onClose}>
        &times;
      </button>
      <h3 className={styles.shopName}>{shop.name}</h3>
      <p className={styles.address}>{shop.address}</p>
      <p className={styles.hours}>Hours: {shop.hoursToday}</p>
      <p
        className={`${styles.status} ${
          shop.isOpenNow ? styles.open : styles.closed
        }`}
      >
        {shop.isOpenNow ? "Open Now" : "Closed"}
      </p>
      <div className={styles.rating}>
        <span className={styles.stars}>
          {"★".repeat(Math.round(shop.rating))}
        </span>
        <span className={styles.ratingCount}>({shop.userRatingsTotal})</span>
      </div>
      {shop.website && (
        <a
          href={shop.website}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.website}
        >
          Visit Website
        </a>
      )}
    </div>
  );
};

export default CoffeeShopDetail;
