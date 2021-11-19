import React, { useEffect, useState, Suspense } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import avatar from '../images/generic-avatar.jpg';
import logo from '../images/speakeasy-logo.png';
import styles from './Tutor.module.css';

const Tutor = props => {
    const { id } = useParams();
    const [oneTutor, setOneTutor] = useState({});
    const history = useHistory();
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        getOneTutor();
    }, [id]);

    const getOneTutor = () => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one of the tutors in Tutor.jsx');
                console.log(res.data);
                setOneTutor(res.data);
            })
            .catch(err => {
                console.log('🛑🧑‍🏫 You did not get one of the tutors in Tutor.jsx');
                console.log(err);
            });

    }

    const homePage = () => {
        history.push('/home');
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
                <button onClick={homePage} className={styles.navBtnYlw}>{t('header.home')}</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>{t('header.register')}</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>{t('header.login')}</button>
            </div>
            <div className={styles.body}>
                <div className={styles.lftBody}>
                    {oneTutor.image === ''
                        ? <img src={avatar} height='250' width='250' alt='generic profile picture' className={styles.rdImg} />
                        : <img src={oneTutor.image} height='250' width='250' alt='profile picture' className={styles.rdImg} />}
                    <h1 className={styles.boxBtnYlw}><a href={`mailto:${oneTutor.email}`}>{t('body.contact')}</a></h1>
                </div>
                <div className={styles.rgtBody}>
                    <div className={styles.banner}>
                        <h2>{oneTutor.firstName} {oneTutor.lastName}</h2>
                    </div>
                    <div className={styles.banner}>
                        <h2>{oneTutor.city}, {oneTutor.state}</h2>
                        <h2>{oneTutor.phoneNumber}</h2>
                        <h2>{oneTutor.email}</h2>
                    </div>
                    <div className={styles.banner}>
                        {oneTutor.resume === ''
                            ? <h2>{t('body.noResume')}</h2>
                            : <h2><a href={`${oneTutor.resume}`} target='_blank'>{t('body.resume')}</a></h2>}
                        <h2>{t('body.languages')}:</h2>
                        <h3>{t('body.en')}: {oneTutor.english ? <span>{t('body.yes')}</span> : <span>{t('body.no')}</span>} | {t('body.sp')}: {oneTutor.spanish ? <span>{t('body.yes')}</span> : <span>{t('body.no')}</span>} | {t('body.gr')}: {oneTutor.greek ? <span>{t('body.yes')}</span> : <span>{t('body.no')}</span>}</h3>
                    </div>
                    <div className={styles.banner}>
                        <h2>{t('body.online')}: {oneTutor.online ? 'Yes' : 'No'}</h2>
                        <h2>{`$${oneTutor.rate}`}/{t('body.hour')}</h2> {/*Why is it removing the 0?*/}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tutor;