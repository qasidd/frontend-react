'use strict';

import { useState } from 'react';

const AddItem = ({ addToBasket }) => {
    const [item, setItem] = useState("");

    const newItem = ({ target }) => {
        setItem(target.value);
    };

    const add = (event) => {
        event.preventDefault();
        addToBasket(item);
    };

    return (
        <form onSubmit={add}>
            <input
                placeholder="Enter item:"
                type="text"
                onChange={newItem}
            />
            <button type="submit"> Add Item </button>
        </form>
    );
}

export default AddItem;