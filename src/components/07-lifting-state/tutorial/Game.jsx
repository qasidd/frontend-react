'use strict';

import { useState } from 'react';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';

const Game = () => {
    const [playerName, setPlayerName] = useState("");
    const [players, setPlayers] = useState([]);

    const submitForm = (event) => {
        // prevent form submission on initial click
        event.preventDefault();
    };

    const handleAdd = () => {
        // save playername into the array
        setPlayers(players => [...players, playerName]);
    };

    const newPlayer = ({ target }) => {
        setPlayerName(target.value);
    };
    
    return (
        <>
            <AddGamers
                newPlayer={newPlayer}
                submitHandler={submitForm}
                handleAdd={handleAdd}
            />
            <GameRoom players={players} />
        </>
    );
};

export default Game;