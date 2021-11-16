import React from 'react';
import { useHistory } from 'react-router-dom';
// import female from '.../public/female-avatar.jpg';

const Tutor = () => {
    const history = useHistory();

    const homePage = () => {
        history.push('/home');
    }
    
    return (
        <div>
            <div>
                <h1>Speakeasy</h1>
                <button onClick={homePage}>Home</button>
                <button>Sign Up</button>
                <button>Login</button>
            </div>
            <div>
                <div>
                    <div>{/*<img src={female} alt='Profile Picture' />*/}</div>
                </div>
                <div>
                    <div>
                        <h2>Flynn Antonacci</h2>
                    </div>
                    <div>
                        <h2>SomeCity, Colorado</h2>
                    </div>
                    <div>
                        <h2>Resume</h2>
                    </div>
                    <div>
                        <h2>Online || $15/hour</h2>
                    </div>
                </div>
                <div>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}

export default Tutor
