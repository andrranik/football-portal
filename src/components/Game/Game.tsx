import React, { ReactElement } from 'react'
import "./Game.css";

interface Props {
    
}

function Game(/*{}: Props*/): ReactElement {
    return (
        <div className="count-container">
            <div className="team-logo">
                <p>Liverpool</p>
            </div>

            <div className="count">
                3 - 2
            </div>

            <div className="team-logo">
                Man City
            </div>
        </div>
    )
}

export default Game
