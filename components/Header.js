import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.header} navbar navbar-expand-lg navbar-light bg-white`}>
      <div className="container-fluid">
        <a className={`${styles.brand} navbar-brand`} href="#">
          <span className={styles.brandText}>MPLS Coffee</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="/">Map</a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="/list">List</a>
            </li>
            <li className="nav-item">
              <a className={`${styles.navLink} nav-link`} href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;