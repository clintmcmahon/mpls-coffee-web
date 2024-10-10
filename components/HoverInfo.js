import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/HoverInfo.module.css';

const HoverInfo = ({ shop, position }) => {
  if (typeof window === 'undefined') return null; // SSR check

  return ReactDOM.createPortal(
    <div 
      className={styles.hoverInfo}
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -100%)'
      }}
    >
      <p className={styles.shopName}>{shop.name}</p>
      <p className={styles.shopRating}>
        <FontAwesomeIcon icon={faStar} /> {shop.rating.toFixed(1)}
      </p>
    </div>,
    document.body
  );
};

export default HoverInfo;