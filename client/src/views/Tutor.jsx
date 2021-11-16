import React, {useEffect, useState} from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import avatar from '../images/generic-avatar.jpg';

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
        <div>
            <div>
                <h1>Speakeasy</h1>
                <button onClick={englishTutorPage}>English Tutors</button>
                <button onClick={homePage}>Home</button>
                <button onClick={errorPage}>Sign Up</button>
                <button onClick={errorPage}>Login</button>
            </div>
            <div>
                <div>
                    <div>
                        {oneTutor.image === ''
                        ? <img src={avatar} height='150' width='150' alt='generic profile picture' />
                        : <img src={oneTutor.image} height='150' width='150' alt='profile picture' />}
                    </div>
                </div>
                <div>
                    <div>
                        <h2>{oneTutor.firstName} {oneTutor.lastName}</h2>
                    </div>
                    <div>
                        <h2>{oneTutor.city}, {oneTutor.state}</h2>
                        <h2>{oneTutor.phoneNumber}</h2>
                        <h2>{oneTutor.email}</h2>
                    </div>
                    <div>
                        {oneTutor.resume === ''
                        ? <h2>Resume unavailable</h2>
                        : <h2><Link to={oneTutor.resume}>Resume</Link></h2>} {/*Fix this link*/}
                        <h2>Languages spoken:</h2>
                        <h3>English: {oneTutor.english ? 'Yes' : 'No'}</h3>
                        <h3>Spanish: {oneTutor.spanish ? 'Yes' : 'No'}</h3>
                        <h3>Greek: {oneTutor.greek ? 'Yes' : 'No'}</h3>
                    </div>
                    <div>
                        <h2>Online: {oneTutor.online ? 'Yes' : 'No'}</h2>
                        <h2>{`$${oneTutor.rate}/hour`}</h2>
                    </div>
                </div>
                <div>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    );

}

export default Tutor
