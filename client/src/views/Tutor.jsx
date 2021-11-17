import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import avatar from '../images/generic-avatar.jpg';
import styles from './Tutor.module.css';

const Tutor = props => {
    const { id } = useParams();
    const [oneTutor, setOneTutor] = useState({});
    const history = useHistory();

    useEffect(() => {
        getOneTutor();
    }, [id]);

    const getOneTutor = () => {
        axios.get(`http://localhost:8000/api/tutors/${id}`)
            .then(res => {
                console.log('🧑‍🏫 You got one of the tutors in Tutor.jsx ' + res.data);
                setOneTutor(res.data);
            })
            .catch(err => console.log('🛑🧑‍🏫 You did not get one of the tutors in Tutor.jsx ' + err));

    }

    const englishTutorPage = () => {
        history.push('/english/tutors');
    }

    const homePage = () => {
        history.push('/home');
    }

    const errorPage = () => {
        history.push('/error');
    }

    return (
        <div className={styles.flexBox}>
            <div className={styles.navbar}>
                <h1>Speakeasy</h1>
                <button onClick={englishTutorPage} className={styles.navBtnYlw}>English Tutors</button>
                <button onClick={homePage} className={styles.navBtnYlw}>Home</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Sign Up</button>
                <button onClick={errorPage} className={styles.navBtnYlw}>Login</button>
            </div>
            <div className={styles.body}>
                <div className={styles.lftBody}>
                    {oneTutor.image === ''
                        ? <img src={avatar} height='250' width='250' alt='generic profile picture' className={styles.rdImg}/>
                        : <img src={oneTutor.image} height='250' width='250' alt='profile picture' className={styles.rdImg}/>}
                    <h1 className={styles.boxBtnYlw}><a href={`mailto:${oneTutor.email}`}>Contact</a></h1>
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
                            ? <h2>Resume unavailable</h2>
                            : <h2><a href={`${oneTutor.resume}`}>Resume</a></h2>}
                        <h2>Languages spoken:</h2>
                        <h3>English: {oneTutor.english ? 'Yes' : 'No'} | Spanish: {oneTutor.spanish ? 'Yes' : 'No'} | Greek: {oneTutor.greek ? 'Yes' : 'No'}</h3>
                    </div>
                    <div className={styles.banner}>
                        <h2>Online: {oneTutor.online ? 'Yes' : 'No'}</h2>
                        <h2>{`$${oneTutor.rate}/hour`}</h2> {/*Why is it removing the 0?*/}
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Tutor
