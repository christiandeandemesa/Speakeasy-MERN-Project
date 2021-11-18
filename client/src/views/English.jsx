import React from 'react';
import { useHistory } from 'react-router-dom';
import british from '../images/british-flag.png';
import styles from './English.module.css';

const English = props => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const englishTutorPage = () => {
        history.push('/english/tutors');
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
                <img src={british} height='50' width='83' alt='English Flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>Register</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                <div className={styles.grnBox}>
                    <h2>English for beginners</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>Learn</button> {/*Have this link to an english language page*/}
                </div>
                <div className={styles.grnBox}>
                    <h2>Find an English tutor</h2>
                    <button onClick={englishTutorPage} className={styles.boxBtnYlw}>Look</button>
                </div>
            </div>
        </div>
    )
}

export default English;