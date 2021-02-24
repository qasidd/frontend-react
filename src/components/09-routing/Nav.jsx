'use strict';

import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <Link to="/" className="btn btn-primary"> Home </Link>
            <Link to="/about" className="btn btn-info"> About </Link>
            <Link to="/shop" className="btn btn-danger"> Product </Link>
            <Link to="/user" className="btn btn-light"> User </Link>
        </>
    )
};

export default Nav;