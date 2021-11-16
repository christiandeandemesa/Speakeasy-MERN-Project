import React from 'react';
import { useHistory } from 'react-router-dom';
import spanish from '../images/spanish-flag.png';
import styles from './Spanish.module.css';

const Spanish = props => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const spanishTutorPage = () => {
        history.push('/spanish/tutors');
    }

    const errorPage = () => {
        history.push('/error');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <img src={spanish} height='50' width='83' alt='Spanish Flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Sign Up</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                <div className={styles.redBox}>
                    <h2>Spanish for beginners</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>Learn</button>
                </div>
                <div className={styles.redBox}>
                    <h2>Find a Spanish tutor</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>Look</button>
                </div>
            </div>
        </div>
    )
}

export default Spanish;