import React from 'react';
import styles from '../styles/FilterControls.module.css';

const FilterControls = ({ filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    onFilterChange(name, checked);
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        <input
          type="checkbox"
          name="openNow"
          checked={filters.openNow || false}
          onChange={handleFilterChange}
        />
        Open Now
      </label>
      <label className={styles.filterLabel}>
        <input
          type="checkbox"
          name="goodCoffee"
          checked={filters.goodCoffee || false}
          onChange={handleFilterChange}
        />
        Good Coffee
      </label>
    </div>
  );
};

export default FilterControls;