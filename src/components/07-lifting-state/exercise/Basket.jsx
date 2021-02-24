'use strict';

const Basket = ({ basket }) => {

    const Display = ({ item, key }) => (
        <li>
            {item}
            {/* <DeleteItem key={key} basket={basket} /> */}
        </li>
    );

    return (
        <ul>
            {basket.map((item, i) => (
                <Display item={item} key={i} />
            ))}
        </ul>
    );
}

export default Basket;