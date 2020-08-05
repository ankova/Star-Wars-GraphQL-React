import React, { useState, createContext } from 'react';

export const PlayersContext = createContext([]);

export const PlayersProvider = (props) => {
    const [players, setPlayersContext] = useState(
        [
            { playerId: 0, wins: 0, attrs: {} },
            { playerId: 1, wins: 0, attrs: {} }
        ]
    );

    return (
        <PlayersContext.Provider value={[players, setPlayersContext]}>
            {props.children}
        </PlayersContext.Provider>
    )
}