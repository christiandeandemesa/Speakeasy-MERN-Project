import React from 'react';
import { useHistory } from 'react-router-dom';

const Error = () => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const englishPage = () => {
        history.push('/english');
    }

    const englishTutorPage = () => {
        history.push('/english/tutors');
    }

    const spanishPage = () => {
        history.push('/spanish');
    }

    const greekPage = () => {
        history.push('/greek');
    }

    return (
        <div>
            <h1>This button does not do anything</h1>
            <button onClick={homePage}>Home</button>
            <button onClick={englishPage}>English</button>
            <button onClick={englishTutorPage}>English Tutors</button>
            <button onClick={spanishPage}>Spanish</button>
            <button onClick={greekPage}>Greek</button>
        </div>
    )
}

export default Error
