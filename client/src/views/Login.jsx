import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styles from './Login.module.css'; // Login starts at 29:30 in frontend video.

const Login = props => {
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

    return (
        <div>
            <div>
                <h1>Login Form</h1>
            </div>
            {errors ? <p style={{color: 'red'}}>{errors}</p> : ''}
            <form onSubmit={login}>
                <div>
                    <label>Email:</label>
                    <input type='password' onChange={loginTutor} /><br />
                    <label>Password:</label>
                    <input type='password' onChange={loginTutor} /><br />
                    <button>Login</button>
                </div>
                <div>
                    {/*Logo*/}
                </div>
            </form>
        </div>
    );
}

export default Login;