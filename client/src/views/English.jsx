import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import british from '../images/british-flag.png';
import logo from '../images/speakeasy-logo.png';
import styles from './English.module.css';

const English = props => {
    const history = useHistory();
    const { t, i18n } = useTranslation('common');

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
                <img src={logo} height='100' width='83' alt='Logo' />
                <h1>Speakeasy</h1>
                <button onClick={() => i18n.changeLanguage('en')}>{t('body.en')}</button>
                <button onClick={() => i18n.changeLanguage('gr')}>{t('body.gr')}</button>
                <button onClick={() => i18n.changeLanguage('sp')}>{t('body.sp')}</button>
                {/*<img src={british} height='50' width='83' alt='English Flag' />*/}
                <button onClick={homePage} className={styles.navBtnYlw}>{t('header.home')}</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>{t('header.register')}</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>{t('header.login')}</button>
            </div>
            <div className={styles.body}>
                <div className={styles.grnBox}>
                    <h2>{t('body.enLearn')}</h2>
                    <button onClick={errorPage} className={styles.boxBtnYlw}>{t('body.learnBtn')}</button> {/*Have this link to an english language page*/}
                </div>
                <div className={styles.grnBox}>
                    <h2>{t('body.enLook')}</h2>
                    <button onClick={englishTutorPage} className={styles.boxBtnYlw}>{t('body.lookBtn')}</button>
                </div>
            </div>
        </div>
    )
}

export default English;