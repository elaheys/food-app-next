import React from 'react';
import Link from 'next/link';
//style
import styles from './guide.module.css'

const Guide = () => {
    return (
    <div className={styles.container}>
        <Link href="/menu">Menu</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/">Discount</Link>
    </div>
    );
};

export default Guide;