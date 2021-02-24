'use strict';

import {useState} from 'react';
import ChildComponent from '../addingstate/ChildComponent';

const CounterUpdate = () => {

    const [counter, setCounter] = useState(0);

    // console.log(counter);

    const increment = () => {
        // console.log(`I am in the increment function`);
        setCounter(c => c + 1);
    };

    return (
        <>
            <p>The value of counter is: {counter}</p>
            <button onClick={increment}>++</button>
            <button onClick={() => setCounter(c => c - 1)}>--</button>
            <ChildComponent count={counter} />
        </>
    )
};

export default CounterUpdate;