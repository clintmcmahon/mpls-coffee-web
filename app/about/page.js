'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/About.module.css';

const AboutPage = () => {
  const handleEmailPress = () => {
    window.location.href = "mailto:info@parkasoftware.com";
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About MPLS Coffee</h1>

        <h2 className={styles.sectionTitle}>What We Do</h2>
        <p className={styles.text}>
          MPLS Coffee is your ultimate guide to discovering and exploring the
          vibrant coffee scene in Minneapolis. Our app helps coffee enthusiasts
          and casual drinkers alike find the perfect cup of joe in the Twin
          Cities.
        </p>

        <h2 className={styles.sectionTitle}>Features</h2>
        <ul className={styles.featureList}>
          <li>Interactive map of coffee shops in Minneapolis</li>
          <li>Detailed information on each coffee shop</li>
          <li>User ratings and reviews</li>
          <li>Open hours and contact details</li>
          <li>Directions to your chosen coffee destination</li>
          <li>"Good Coffee" filter for discerning tastes</li>
          <li>Real-time list of currently open coffee shops</li>
        </ul>

        <h2 className={styles.sectionTitle}>Good Coffee Filter</h2>
        <p className={styles.text}>
          Our unique "Good Coffee" filter helps you find shops that truly care
          about their craft. This feature highlights establishments known for
          their high-quality beans, expert baristas, and commitment to the art
          of coffee-making. Say goodbye to mediocre brews and hello to
          exceptional coffee experiences!
        </p>

        <h2 className={styles.sectionTitle}>Open Now Feature</h2>
        <p className={styles.text}>
          Need coffee right away? Our "Open Now" list shows you all the coffee
          shops currently serving in real-time. No more disappointment from
          arriving at a closed shop – we've got you covered with up-to-date
          information on operating hours.
        </p>

        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.text}>
          We're passionate about connecting coffee lovers with local businesses
          and helping you discover new favorite spots in Minneapolis. Whether
          you're a resident or just visiting, MPLS Coffee is your trusted
          companion for all things coffee in the city.
        </p>

        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <button className={styles.contactButton} onClick={handleEmailPress}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>info@parkasoftware.com</span>
        </button>
        <p className={styles.text}>
          We'd love to hear your feedback, suggestions, or any questions you
          might have about MPLS Coffee. Don't hesitate to reach out!
        </p>

        <p className={styles.copyright}>
          © 2024 Parka Software Co. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;