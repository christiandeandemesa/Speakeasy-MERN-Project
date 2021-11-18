import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import british from '../images/british-flag.png';
import avatar from '../images/generic-avatar.jpg';
import styles from './EnglishTutor.module.css';

const EnglishTutor = props => {
    const [tutors, setTutors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getTutors();
    }, []);

    const getTutors = () => {
        axios.get(`http://localhost:8000/api/tutors`)
            .then(res => {
                console.log('🧑‍🏫 You got all of the tutors in EnglishTutor.jsx');
                console.log(res.data);
                setTutors(res.data);
            })
            .catch(err => {
                console.log('🛑🧑‍🏫 You did not get all of the tutors in EnglishTutor.jsx');
                console.log(err);
            });
    }

    const homePage = () => {
        history.push('/home');
    }

    const tutorPage = id => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one tutor in EnglishTutor.jsx');
                console.log(res.data);
                history.push(`/tutors/${id}`);
            })
            .catch(err => {
                console.log('🛑🧑‍🏫 You did not get one of the tutors in EnglishTutor.jsx');
                console.log(err);
            });
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
                <img src={british} height='50' width='83' alt='british flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={registerPage} className={styles.navBtnYlw}>Register</button>
                <button onClick={loginPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                {tutors.map(tutor => {
                    return (
                        <div key={tutor._id} className={styles.grnBox}>
                            <div>
                                {tutor.image === ''
                                    ? <img src={avatar} height='50' width='50' alt='generic picture' className={styles.rdImg} />
                                    : <img src={tutor.image} height='50' width='50' alt='profile picture' className={styles.rdImg} />}
                            </div>
                            <div className={styles.flxGrnBox}>
                                <h2>{tutor.firstName} {tutor.lastName}</h2>
                                {tutor.english
                                    ? <button onClick={() => tutorPage(tutor._id)} className={styles.boxBtnYlw}>Profile Page</button>
                                    : 'Tutor does not speak english'}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnglishTutor;