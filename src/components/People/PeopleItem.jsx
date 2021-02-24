'use strict';

import PropTypes from "prop-types";

const PeopleItem = ({name, email, link, headerText}) => {
    return (
        <>
            <h1>{headerText}</h1>
            <li>Name: {name}, Email: {email}, <a href={link} target="_blank">Link</a></li>
        </>
    );
};

PeopleItem.defaultProps = {
    headerText: "Text that appears if no value passed in"
};

PeopleItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    link: PropTypes.string,
    headerText: PropTypes.string
};

export default PeopleItem;