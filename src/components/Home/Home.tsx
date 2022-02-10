import React, { ReactElement } from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'

interface Props {
    
}

function Home({}: Props): ReactElement {
    return (
        <div className="grid">
            <div className="cell header-item">
                {/* <div className="header-logo">
                    <h1>
                        LOGO
                    </h1>
                </div>
                <div className="header-buttons">
                    <button>
                        MENU
                    </button>
                </div> */}
                <Navbar menuItems={[]}></Navbar>
            </div>
            <div className="cell banner-item">
                <div className="banner-content">
                    <h1>
                        СМОТРИ АЗИАТ!
                    </h1>
                    <p>
                        Еще и футбол играет, вот молодец!
                    </p>
                </div>
            </div>
            <div className="cell sidebar-item">
                <h1 className="block-header">
                    Игры сегодня
                </h1>
                <div className="game-count">
                    <div className="team-icon">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4ee.png"/>
                        
                    </div>
                    <div>
                        5 - 0
                    </div>
                    <div className="team-icon">
                        s2
                    </div>
                </div>
                <div className="game-count">
                    <div className="team-icon">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4ee.png"/>
                        
                    </div>
                    <div>
                        5 - 0
                    </div>
                    <div className="team-icon">
                        s2
                    </div>
                </div>
                <div className="game-count">
                    <div className="team-icon">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4ee.png"/>
                        
                    </div>
                    <div>
                        5 - 0
                    </div>
                    <div className="team-icon">
                        f2
                    </div>
                </div>
                <a className="see-more" href="/">
                    Другие матчи
                </a>
            </div>
            <div className="cell main-item">
                <div className="news-card">
                    CARD
                </div>
            </div>
            <div className="cell news-item">
                
            </div>
            <div className="cell footer-item">
            FOO000000000000000000TER
        </div>
        </div>
    )
}

export default Home
