import React from 'react'

const RegLog = () => {
    return (
        <div>
            
        </div>
    )
}

export default RegLog;

/*
import React, { useState } from 'react'; // Check submission form later.
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styles from './Create.module.css';

const positions = ['Captain', 'First Mate', 'Quartermaster', 'Boatswain', 'Powder Monkey'];

const Create = props => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [treasure, setTreasure] = useState(0);
    const [phrase, setPhrase] = useState('');
    const [position, setPosition] = useState(positions[0]);
    const [pegLeg, setPegLeg] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);

    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const createPirate = e => {
        e.preventDefault();

        const newPirate = {
            name,
            image,
            treasure,
            phrase,
            position,
            pegLeg,
            eyepatch,
            hookHand
        }

        axios.post('http://localhost:8000/api/pirates', newPirate)
            .then(res => {
                console.log(res.data);
                history.push('/pirates')
            })
            .catch(err => {
                console.log('Error with creating a pirate ☠️');
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div class={styles.flexBox}>
            <div class={styles.top}>
                <h1 class={styles.whiteWord}>Add Pirate</h1>
                <Link to={'/pirates'} class={styles.fakeButton}>Crew Board</Link>
            </div>
            <div>
                {errors.map((err, idx) => <p key={idx} style={{color: 'red'}}>{err}</p>)}
                <form onSubmit={createPirate}>
                    <div>
                        <label>Pirate Name:</label><br />
                        <input type='text' onChange={e => setName(e.target.value)} value={name} /><br />
                        <label>Image Url:</label><br />
                        <input type='text' onChange={e => setImage(e.target.value)} value={image} /><br />
                        <label># of Treasure Chests:</label><br />
                        <input type='number' onChange={e => setTreasure(e.target.value)} value={treasure} min={0} /><br />
                        <label>Pirate Catch Phrase:</label><br />
                        <textarea onChange={e => setPhrase(e.target.value)} value={phrase} />
                    </div>
                    <div>
                        <label>Crew Position: </label><br />
                        <select onChange={e => setPosition(e.target.value)} value={position}>
                            {positions.map((position, idx) => 
                                <option key={idx} value={position}>{position}</option>
                            )}
                        </select>
                        <p>
                            <input type='checkbox' onChange={e => setPegLeg(e.target.checked)} checked={pegLeg} /> Peg Leg
                        </p><br />
                        <p>
                            <input type='checkbox' onChange={e => setEyepatch(e.target.checked)} checked={eyepatch} /> Eye Patch
                        </p><br />
                        <p>
                            <input type='checkbox' onChange={e => setHookHand(e.target.checked)} checked={hookHand} /> Hook Hand
                        </p><br />
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Create;
*/