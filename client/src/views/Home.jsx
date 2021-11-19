import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import british from '../images/british-flag.png';
import spanish from '../images/spanish-flag.png';
import greek from '../images/greek-flag.jpg';
import logo from '../images/speakeasy-logo.png';
import styles from './Home.module.css';

const Home = props => {
    const history = useHistory();
    const { t, i18n } = useTranslation('common');

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

    const registerPage = () => {
        history.push('/tutors/register');
    }

    const loginPage = () => {
        history.push('/tutors/login');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <img src={logo} height='100' width='83' alt='Logo' />
                <h1>Speakeasy</h1>
                <button onClick={() => i18n.changeLanguage('en')}>{t('body.en')}</button>
                <button onClick={() => i18n.changeLanguage('gr')}>{t('body.gr')}</button>
                <button onClick={() => i18n.changeLanguage('sp')}>{t('body.sp')}</button>
                {/*<select>
                    <option>English</option>
                    <option>Español</option>
                    <option>Ελληνικά</option>
                </select>*/}
                <button onClick={errorPage} className={styles.navBtnYlw}>{t('header.languages')}</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>{t('header.register')}</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>{t('header.login')}</button>
            </div>
            <div className={styles.body}>
                <div className={styles.brwnBox}>
                    <h2 className={styles.brwnBoxWrd}>{t('body.homeText')}</h2>
                </div>
                <div>
                    <button onClick={englishPage} className={styles.btnBrwn}><img src={british} height='60' width='100' alt='British Flag' /></button>
                    <button onClick={spanishPage} className={styles.btnBrwn}><img src={spanish} height='60' width='100' alt='Spanish Flag' /></button>
                    <button onClick={greekPage} className={styles.btnBrwn}><img src={greek} height='60' width='100' alt='Greek Flag' /></button>
                </div>
            </div>

        </div>
    )
}

export default Home;