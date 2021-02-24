'use strict';

const Second = () => {

    // how to incorpoorate HTML and JS into one - aka JSX
    const name = 'Jim Bob';
    const date = new Date();
    const firstName = `Jim`;
    const lastName = `Bob`;

    return (
        <>
            <h1>{name}</h1>
            <p>I come from Second</p>
            <p>This component was created on: {date.toLocaleDateString()} </p>
            <p>{firstName} {lastName}</p>
            <p>{`${firstName} ${lastName}`}</p>
            <p>The current time is: {date.toLocaleTimeString()}</p>
        </>
    );
};

export default Second;