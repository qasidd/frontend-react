'use strict';

import { useState } from 'react';

const Car = () => {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [colour, setColour] = useState('');
    const [year, setYear] = useState('');

    const printValues = e => {
        e.preventDefault();
        console.log(`${brand} ${model} ${colour} ${year}`);
    }

    return (
        <>
            <form onSubmit={printValues}>
                <label>Brand:</label>
                <input type="text"
                    name="brandText"
                    value={brand}
                    onChange={e => setBrand(e.target.value)} />
                <label>Model:</label>
                <input type="text"
                    name="modelText"
                    value={model}
                    onChange={e => setModel(e.target.value)} />
                <label>Colour:</label>
                <input type="text"
                    name="colourText"
                    value={colour}
                    onChange={e => setColour(e.target.value)} />
                <label>Year:</label>
                <input type="text"
                    name="yearText"
                    value={year}
                    onChange={e => setYear(e.target.value)} />
                <br />
                <button>Save</button>
            </form>
        </>
    );
};

export default Car;