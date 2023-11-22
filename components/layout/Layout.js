import React from 'react';
import Link from 'next/link';
//style
import styles from './layout.module.css';

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href='/'>Food</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
                <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                &copy;
                Made by Elahe with 💗 
            </footer>
        </>
    );
};

export default Layout;