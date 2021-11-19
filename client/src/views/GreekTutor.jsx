import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import avatar from '../images/generic-avatar.jpg';
import logo from '../images/speakeasy-logo.png'
import styles from './GreekTutor.module.css';

const GreekTutor = props => {
    const [tutors, setTutors] = useState([]);
    const history = useHistory();
    const { t, i18n } = useTranslation('common');

    useEffect(() => {
        getTutors();
    }, []);

    const getTutors = () => {
        axios.get(`http://localhost:8000/api/tutors`)
            .then(res => {
                console.log('🧑‍🏫 You got all of the tutors in GreekTutor.jsx');
                console.log(res.data);
                setTutors(res.data);
            })
            .catch(err => {
                console.log('🛑🧑‍🏫 You did not get all of the tutors in GreekTutor.jsx');
                console.log(err);
            });
    }

    const homePage = () => {
        history.push('/home');
    }

    const tutorPage = id => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one tutor in GreekTutor.jsx');
                console.log(res.data);
                history.push(`/tutors/${id}`);
            })
            .catch(err => {
                console.log('🛑🧑‍🏫 You did not get one of the tutors in GreekTutor.jsx');
                console.log(err);
            });
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
                {tutors.map(tutor => {
                    return (
                        <div key={tutor._id} className={styles.blueBox}>
                            <div>
                                {tutor.image === ''
                                    ? <img src={avatar} height='50' width='50' alt='generic picture' className={styles.rdImg} />
                                    : <img src={tutor.image} height='50' width='50' alt='profile picture' className={styles.rdImg} />}
                            </div>
                            <div className={styles.flxBlueBox}>
                                <h2>{tutor.firstName} {tutor.lastName}</h2>
                                {tutor.greek
                                    ? <button onClick={() => tutorPage(tutor._id)} className={styles.boxBtnYlw}>{t('body.tutorBtn')}</button>
                                    : <p>{t('body.grTutor')}</p>}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GreekTutor;