import React from 'react';
//style
import styles from './homepage.module.css';
//components
import Banner from '../modules/Banner';
import Attributes from '../modules/Attributes';
import Definition from '../modules/Definition';
import Companies from '../modules/Companies';
import Instruction from '../modules/Instruction';
import Guide from '../modules/Guide';
import Restriction from '../modules/Restriction';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner/>
            <Attributes/>
            <Definition/>
            <Companies/>
            <Instruction/>
            <Guide/>
            <Restriction/>
        </div>
    );
};

export default HomePage;