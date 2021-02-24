'use strict';

import { useState } from 'react';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Logout from './Logout';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let button = <button>Submit</button>;

    const saveValues = e => {
        e.preventDefault();
        console.log(username, password);
    }

    isLoggedIn ?
           button = <Logout onClick={ () => setIsLoggedIn(c => !c)} />
        :
           button = <LoginControl onClick={ () => setIsLoggedIn(c => !c)} />

    return (
        <>
            <form onSubmit={saveValues}>
                <label>Username:</label>
                <input type="text" 
                    name="usernameInput" 
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <label>Password:</label>
                <input type="password" 
                    name="passwordInput"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </form>
        </>
    );
}

export default Login;