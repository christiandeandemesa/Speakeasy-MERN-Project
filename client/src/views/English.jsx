import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
                <button onClick={homePage} className={styles.navBtnYlw}>{t('header.home')}</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>{t('header.register')}</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>{t('header.login')}</button>
            </div>
            <div className={styles.body}>
                <div className={styles.grnBox}>
                    <h2>{t('body.enLearn')}</h2>
                    <button className={styles.boxBtnYlw}><a href={`https://www.esolcourses.com/content/topicsmenu/beginners.html`} className={styles.link} target='_blank'>{t('body.learnBtn')}</a></button>
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