'use strict';

import ComponentWithProps from "./ComponentWithProps";

const PropWithDifferentTypes = () => {

    // number
    const myVal = 10;

    // boolean
    const bool = true;

    // String
    const str = "heyoooo";

    // Object
    const someObj = {
        name: "Mercury",
        brand: "Mercedes",
        year: 2018,
        interior: ["sunroof", 2, "heated seats", "DRL"]
    }

    // Array
    const fruits = ["Pineapple", "Kiwi", "Strawberries", "Mango"]

    // Function
    const someFunction = () => (`A string from a function`);

    return (
        <ComponentWithProps 
            numberProp={myVal} 
            booleanProp={bool} 
            strProp={str} 
            objProp={someObj} 
            fruitsProp={fruits}
            funcProp={someFunction} 
        />
    );
};

export default PropWithDifferentTypes;