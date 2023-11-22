import React from 'react';
//style
import styles from './menupage.module.css'
//component
import Card from '../modules/Card';

const MenuPage = ({data}) => {
    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {
                    data.map(food => <Card key={food.id} {...food}/>)
                }
            </div>
        </div>
    );
};

export default MenuPage;