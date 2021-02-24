'use strict';

import { useState } from 'react';
import AddItems from './AddItems';
import Basket from './Basket';

const Game = () => {
    const [basket, setBasket] = useState([]);

    const addToBasket = (item) => {
        setBasket(items => [...items, item]);
    };
    
    return (
        <>
            <AddItems addToBasket={addToBasket} />
            <Basket basket={basket} />
        </>
    );
};

export default Game;