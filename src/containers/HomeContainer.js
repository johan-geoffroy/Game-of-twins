import React from 'react'

import TwinsWord from '../components/TwinsWords'
import TwinsGame from '../components/TwinsGame'



const Home = () => {
    return (
        <div className="container">
            <TwinsWord />
            <div className="game-container">
                <TwinsGame />
            </div>
        </div>
    )
}


export default Home