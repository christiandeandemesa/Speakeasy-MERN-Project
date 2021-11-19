import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../images/speakeasy-logo.png';
import styles from './Login.module.css'; // Login starts at 29:30 in frontend video.

const Login = props => {
    const { t, i18n } = useTranslation('common');

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState('');
    const history = useHistory();

    const loginTutor = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', form, {withCredentials: true})
            .then(res => {
                console.log(res);
                if(res.data.msg == '🍪 Successfully logged in a tutor in controllers') {
                    history.push('/home');
                }
                else {
                    setErrors(res.data.msg);
                }
            })
            .catch(err => console.log(err));
    }

    const homePage = () => {
        history.push('/home');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>{t('form.login')}</h1>
                <button onClick={() => i18n.changeLanguage('en')}>{t('body.en')}</button>
                <button onClick={() => i18n.changeLanguage('gr')}>{t('body.gr')}</button>
                <button onClick={() => i18n.changeLanguage('sp')}>{t('body.sp')}</button>
                <button onClick={homePage} className={styles.navBtnYlw}>{t('header.home')}</button>
            </div>
            {errors ? <p style={{color: 'red'}}>{errors}</p> : ''}
            <form onSubmit={login} className={styles.body}>
                <div className={styles.blckBox}>
                <h1>Speakeasy</h1>
                    <img src={logo} height='200' width='200' alt='Logo' />
                    <label>{t('form.email')}:</label>
                    <input type='password' onChange={loginTutor} /><br />
                    <label>{t('form.password')}:</label>
                    <input type='password' onChange={loginTutor} /><br />
                    <button>{t('header.login')}</button>
                </div>
            </form>
        </div>
    );
}

export default Login;