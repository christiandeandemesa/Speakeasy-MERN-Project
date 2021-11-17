import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import greek from '../images/greek-flag.jpg';
import avatar from '../images/generic-avatar.jpg';
import styles from './GreekTutor.module.css';

const GreekTutor = props => {
    const [tutors, setTutors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        getTutors();
    }, []);

    const getTutors = () => {
        axios.get(`http://localhost:8000/api/tutors`)
            .then(res => {
                console.log('🧑‍🏫 You got all of the tutors in GreekTutor.jsx ' + res.data);
                setTutors(res.data);
            })
            .catch(err => console.log('🛑🧑‍🏫 You did not get all of the tutors in GreekTutor.jsx ' + err));
    }

    const homePage = () => {
        history.push('/home');
    }

    const tutorPage = id => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one tutor in GreekTutor.jsx ' + res.data);
                history.push(`/tutors/${id}`);
            })
            .catch(err => console.log('🛑🧑‍🏫 You did not get one of the tutors in GreekTutor.jsx ' + err));
    }

    const errorPage = () => {
        history.push('/error');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <img src={greek} height='50' width='83' alt='Greek Flag' />
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Sign Up</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                {tutors.map(tutor => {
                    return (
                        <div key={tutor._id} className={styles.grnBox}>
                        {tutor.greek ? 'show' : 'do not show'} {/*Tried to use ternary operator to show only greek tutors: {tutor.greek ? 'below code' : ''}, but it didn't work*/}
                            <div>
                                {tutor.image === ''
                                    ? <img src={avatar} height='50' width='50' alt='generic profile picture' className={styles.rdImg}/>
                                    : <img src={tutor.image} height='50' width='50' alt='profile picture' className={styles.rdImg}/>}
                            </div>
                            <div className={styles.flxGrnBox}>
                                <h2>{tutor.firstName} {tutor.lastName}</h2>
                                <button onClick={() => tutorPage(tutor._id)} className={styles.boxBtnYlw}>Profile Page</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GreekTutor;