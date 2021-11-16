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
                console.log('🧑‍🏫 You got all of the tutors in EnglishTutor.jsx ' + res.data);
                setTutors(res.data);
            })
            .catch(err => console.log('🛑🧑‍🏫 You did not get all of the tutors in EnglishTutor.jsx ' + err));
    }

    const homePage = () => {
        history.push('/home');
    }

    const tutorPage = id => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one tutor in EnglishTutor.jsx ' + res.data);
                history.push(`/tutors/${id}`);
            })
            .catch(err => console.log('🛑🧑‍🏫 You did not get one of the tutors in EnglishTutor.jsx ' + err));
    }

    const errorPage = () => {
        history.push('/error');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <img src={british} height='50' width='83' alt='English Flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Sign Up</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div>
                {tutors.map(tutor => {
                    return (
                        <div key={tutor._id}> {/*Tried to use ternary operator to show only english tutors: {tutor.english ? 'below code' : ''}, but it didn't work*/}
                            <h2>{tutor.firstName} {tutor.lastName}</h2>
                            {tutor.image === '' 
                            ? <img src={avatar} height='50' width='50' alt='generic profile picture' /> 
                            : <img src={tutor.image} height='50' width='50' alt='profile picture' />}
                            <button onClick={() => tutorPage(tutor._id)}>Profile Page</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default EnglishTutor
