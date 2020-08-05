import React, { useContext, Fragment } from 'react';
import { PlayersContext } from '../Players/PlayersContext';

const HistoryPage = () => {
    const [players,] = useContext(PlayersContext);

    return (
        <div>
            <h2>History Wins</h2>
            <ul>
                {players.map(pl => (
                    <li key={pl.playerId}>
                        <span>Player {pl.playerId}</span>: <span>Wins: {pl.wins}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryPage;