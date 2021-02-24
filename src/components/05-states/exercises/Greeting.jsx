'use strict';

const Greeting = ({isLoggedIn}) => {
    if(isLoggedIn) {
        return <p>hello</p>
    } else {
        return <p>goodbye</p>
    }
};

export default Greeting;