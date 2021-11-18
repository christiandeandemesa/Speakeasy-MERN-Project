import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import spanish from '../images/spanish-flag.png';
import styles from './Spanish.module.css';

const Spanish = props => {
    const history = useHistory();
    const { t, i18n } = useTranslation('common');

    const homePage = () => {
        history.push('/home');
    }

    const spanishTutorPage = () => {
        history.push('/spanish/tutors');
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
                <button onClick={() => i18n.changeLanguage('en')}>{t('body.en')}</button>
                <button onClick={() => i18n.changeLanguage('gr')}>{t('body.gr')}</button>
                <button onClick={() => i18n.changeLanguage('sp')}>{t('body.sp')}</button>
                {/*<img src={spanish} height='50' width='83' alt='Spanish Flag' />*/}
                <button onClick={homePage} className={styles.navBtnYlw}>{t('header.home')}</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>{t('header.register')}</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>{t('header.login')}</button>
            </div>
            <div className={styles.body}>
                <div className={styles.redBox}>
                    <h2>{t('body.spLearn')}</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>{t('body.learnBtn')}</button> {/*Have this link to a spanish language page*/}
                </div>
                <div className={styles.redBox}>
                    <h2>{t('body.spLook')}</h2>
                    <button onClick={spanishTutorPage} className={styles.boxBtnYlw}>{t('body.lookBtn')}</button>
                </div>
            </div>
        </div>
    )
}

export default Spanish;