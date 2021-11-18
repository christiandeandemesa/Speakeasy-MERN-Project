import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styles from './Register.module.css'; // Please double-check starting at 13:30

const Register = props => {
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

        axios.post('http://localhost:8000/api/register', newTutor, {withCredentials: true})
            .then(res => {
                console.log('🚍 You created a tutor in Register.jsx ' + res.data);
                history.push('/home');
            })
            .catch(err => {
                console.log('🛑🚍 Error with creating a tutor in Register.jsx');
                console.log(err);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return(
        <div>
            <div>
                <h1>Registration Form</h1>
            </div>
            {errors.map((err, idx) => <p key={idx}
            style={{color: 'red'}}>{err}</p>)}
            <form onSubmit={register}>
                <div>
                    <label>First Name:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    {errors.firstName ? <p style={{color: 'red'}}>{errors.firstName.message}</p> : ''} {/*Check to see if this works. If not go to 26:00 in frontend video*/}
                    <label>Last Name:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>Profile Picture:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional' /><br />
                    <label>City:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>State:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <input type='checkbox' onChange={registerTutor} /> English &nbsp; {/*Will this work on checkboxes*/}
                    <input type='checkbox' onChange={registerTutor} /> Spanish &nbsp;
                    <input type='checkbox' onChange={registerTutor} /> Greek &nbsp;
                    <input type='checkbox' onChange={registerTutor} /> Online 
                </div>
                <div>
                    <label>Resume:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional' /><br />
                    <label>Rate per $/hour:</label>
                    <input type='number' onChange={registerTutor} min={5} max={100} placeholder='required' /><br />
                    <label>Phone Number:</label>
                    <input type='text' onChange={registerTutor} placeholder='optional'/><br />
                    <label>Email:</label>
                    <input type='text' onChange={registerTutor} placeholder='required' /><br />
                    <label>Password:</label>
                    <input type='password' onChange={registerTutor} placeholder='required' /><br />
                    <label>Confirm Password:</label>
                    <input type='password' onChange={registerTutor} placeholder='required' />
                </div>
                <div>
                    {/*Logo*/}
                    <button>Register</button>
                </div>
            </form>
        </div>
    );
}

export default Register;