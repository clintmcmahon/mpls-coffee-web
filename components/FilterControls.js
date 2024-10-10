import styles from "../styles/FilterControls.module.css";

export default function FilterControls({ filters, setFilters }) {
  const handleFilterChange = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>
        <input
          type="checkbox"
          checked={filters.openNow}
          onChange={() => handleFilterChange("openNow")}
        />
        Open Now
      </label>
      <label className={styles.filterLabel}>
        <input
          type="checkbox"
          checked={filters.goodCoffee}
          onChange={() => handleFilterChange("goodCoffee")}
        />
        Good Coffee
      </label>
    </div>
  );
}
