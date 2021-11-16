import React from 'react';
import { useHistory } from 'react-router-dom';
// import british from '.../public/british-flag.png';
// import female from '.../public/female-avatar.jpg';
// import male from '.../public/male-avatar.jpg';

const EnglishTutor = () => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }

    const tutorPage = () => {
        history.push('/tutors/Flynn');
    }
    
    return (
        <div>
            <div>
                <h1>Speakeasy</h1>
                {/*<img src={british} alt='English Flag' />*/}
                <button onClick={homePage}>Home</button>
                <button>Sign Up</button>
                <button>Login</button>
            </div>
            <div>
                <div>
                    <h2>Flynn Antonacci</h2>
                    {/*<img src={female} alt='Profile Picture' />*/}
                    <button onClick={tutorPage}>Profile Page</button>
                </div>
                <div>
                    <h2>Evan Kish</h2>
                    {/*<img src={male} alt='Profile Picture' />*/}
                    <button onClick={() => tutorPage}>Profile Page</button>
                </div>
                <div>
                    <h2>Jonathan Rodriguez</h2>
                    {/*<img src={male} alt='Profile Picture' />*/}
                    <button onClick={() => tutorPage}>Profile Page</button>
                </div>
            </div>
        </div>
    )
}

export default EnglishTutor
