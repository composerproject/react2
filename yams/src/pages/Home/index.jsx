import React, { useState } from 'react';
import { useStatsContext } from '../../utils/statsContext';

function Home() {
    const [_, dispatch] = useStatsContext();

    const [count, setCount] = useState(0);
    const [throws, setThrows] = useState([]);

    const handleChange = (e) => {
        setCount(Number(e.target.value));
    };

    const handleClick = () => {
        let newThrows = [];
        let brelan = 0;

        for(let i = 0; i < count; i++){
            let newThrow = [];
            for(let j = 0; j < 3; j++){
                newThrow.push(Math.floor(Math.random() * 7 + 1));
            }
            newThrows.push(newThrow);
            if(newThrow[0] === newThrow[1] && newThrow[0] === newThrow[2]){
                brelan++;
            }
        }
        dispatch({type: 'add-result', payload: {count: count, brelan : brelan}})
        setThrows(newThrows);


    };

    return (
        <>
            <div>Home</div>
            <input
                type="number"
                name="count"
                placeholder="Choose a number"
                value={count}
                onChange={handleChange}
            />
            <div>
                <button onClick={handleClick}>Throw !</button>
            </div>
            <p>Set Throws : {throws.map((throwGroup, index) => (
                <div key={index}>Throw {index + 1}: {throwGroup.join(', ')}</div>
            ))}</p>
        </>
    );
}

export default Home;
