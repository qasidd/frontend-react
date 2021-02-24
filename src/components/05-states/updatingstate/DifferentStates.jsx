'use strict'

import {useState} from 'react';

const DifferentStates = () => {

    const [edit, setEdit] = useState(false);

    return (
        <>
            <p>The value of edit is: {edit};</p>
            { edit ? <p>True</p> : <p>False</p> }
            <button onClick={ () => setEdit(e => !e) }>Update Edit</button>
        </>
    );

};

export default DifferentStates;