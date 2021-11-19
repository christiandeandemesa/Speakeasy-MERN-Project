import React, { useState, Suspense } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../images/speakeasy-logo.png';
import styles from './Register.module.css';

const Register = props => {
    const { t, i18n } = useTranslation('common');

    const [form, setForm] = useState({ // State is not updating
        firstName: '',
        lastName: '',
        image: '',
        city: '',
        state: '',
        english: false,
        spanish: false,
        greek: false,
        resume: '',
        online: true,
        rate: 0,
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const registerTutor = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const register = e => {
        e.preventDefault();

        const newTutor = {

        }

        axios.post('http://localhost:8000/api/register', newTutor, { withCredentials: true })
            .then(res => {
                console.log('🚍 You created a tutor in Register.jsx ' + res.data);
                history.push('/home');
            })
            .catch(err => {
                console.log('🛑🚍 Error with creating a tutor in Register.jsx');
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>{t('form.register')}</h1>
                <button onClick={() => i18n.changeLanguage('en')}>{t('body.en')}</button>
                <button onClick={() => i18n.changeLanguage('gr')}>{t('body.gr')}</button>
                <button onClick={() => i18n.changeLanguage('sp')}>{t('body.sp')}</button>
            </div>
            {errors.map((err, idx) => <p key={idx}
                style={{ color: 'red' }}>{err}</p>)}
            <form onSubmit={register} className={styles.body}>
                <div className={styles.grnBox}>
                    <label>{t('form.firstName')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    {errors.firstName ? <p style={{ color: 'red' }}>{errors.firstName.message}</p> : ''} {/*Check to see if this works. If not go to 26:00 in frontend video*/}
                    <label>{t('form.lastName')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>{t('form.picture')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional' /><br />
                    <label>{t('form.city')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>{t('form.state')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <input type='checkbox' onChange={registerTutor} /> <p>{t('body.en')}</p> &nbsp;
                    <input type='checkbox' onChange={registerTutor} /> <p>{t('body.sp')}</p> &nbsp;
                    <input type='checkbox' onChange={registerTutor} /> <p>{t('body.gr')}</p> &nbsp;
                    <input type='checkbox' onChange={registerTutor} /> <p>{t('body.online')}</p>
                </div>
                <div className={styles.grnBox}>
                    <label>{t('body.resume')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional' /><br />
                    <label>{t('form.rate')}:</label>
                    <input type='number' onChange={registerTutor} min={5} max={100} placeholder='required' /><br />
                    <label>{t('form.phoneNumber')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional' /><br />
                    <label>{t('form.email')}:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>{t('form.password')}:</label>
                    <input type='password' onChange={registerTutor} placeholder='required' /><br />
                    <label>{t('form.confirmPassword')}:</label>
                    <input type='password' onChange={registerTutor} placeholder='required' />
                </div>
                <div className={styles.blckBox}>
                    <h1>Speakeasy</h1>
                    <img src={logo} height='200' width='200' alt='Logo' />
                    <button>{t('header.register')}</button>
                </div>
            </form>
        </div>
    );
}

export default Register;