import React from 'react';
import { useHistory } from 'react-router-dom';
import greek from '../images/greek-flag.jpg';
import styles from './Greek.module.css';

const Greek = props => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const greekTutorPage = () => {
        history.push('/greek/tutors');
    }

    const errorPage = () => {
        history.push('/error');
    }

    const registerPage = () => {
        history.push('/tutors/register');
    }

    const loginPage = () => {
        history.push('/tutors/login');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <img src={greek} height='50' width='83' alt='Greek Flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>Register</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                <div className={styles.blueBox}>
                    <h2>Greek for beginners</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>Learn</button> {/*Have this link to a greek language page*/}
                </div>
                <div className={styles.blueBox}>
                    <h2>Find a Greek tutor</h2>
                    <button onClick={greekTutorPage} className={styles.boxBtnYlw}>Look</button>
                </div>
            </div>
        </div>
    )
}

export default Greek;