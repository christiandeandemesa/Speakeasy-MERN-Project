import React from 'react';
import { useHistory } from 'react-router-dom';
import british from '../images/british-flag.png';
import spanish from '../images/spanish-flag.png';
import greek from '../images/greek-flag.jpg';
import styles from './Home.module.css';

const Home = props => {
    const history = useHistory();

    const englishPage = () => {
        history.push('/english');
    }

    const spanishPage = () => {
        history.push('/spanish');
    }

    const greekPage = () => {
        history.push('/greek');
    }

    const errorPage = () => {
        history.push('/error');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <select>
                    <option>English</option>
                    <option>Español</option>
                    <option>Ελληνικά</option>
                </select>
                <button onClick={errorPage} className={styles.navBtnYlw}>Languages</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Sign Up</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                <div className={styles.brwnBox}>
                    <h2>Learn at your own pace</h2>
                </div>
                <div className={styles.brwnRctngle}>
                    <button onClick={englishPage} className={styles.btnBrwn}><img src={british} height='60' width='100' alt='English Flag' /></button>
                    <button onClick={spanishPage} className={styles.btnBrwn}><img src={spanish} height='60' width='100' alt='Spanish Flag' /></button>
                    <button onClick={greekPage} className={styles.btnBrwn}><img src={greek} height='60' width='100' alt='Greek Flag' /></button>
                </div>
            </div>

        </div>
    )
}

export default Home;