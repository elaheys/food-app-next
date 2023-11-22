import React from 'react';
//style
import styles from './companies.module.css'
//icon
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";

const Companies = () => {
    return (
        <div className={styles.container}>
            <Apple />
            <SpaceX />
            <Binance />
            <Tesla />
        </div>
    );
};

export default Companies;