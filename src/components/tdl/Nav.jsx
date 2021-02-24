'use strict';

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="bg-dark text-light pt-3 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 className="mb-0">
                            <Link to="/" className="text-light text-decoration-none">
                                TDL
                            </Link>
                        </h1>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <Link to="/about" className="btn btn-outline-info mr-2"> About </Link>
                        <Link to="/tesco" className="btn btn-outline-primary mr-2"> Tesco </Link>
                        <Link to="/films" className="btn btn-outline-light mr-2"> Films </Link>
                        <Link to="/faq" className="btn btn-outline-danger"> FAQ </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;