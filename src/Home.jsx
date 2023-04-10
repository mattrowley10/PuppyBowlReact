import React from 'react'
import fetch from './fetch'

function PlayerCard(){
    return <div className='card'>
        <h2>Player Name</h2>
        <p>breed</p>
        <p>email</p>
        <p>id</p>
        <button>Details</button>
    </div>
}

export default function Home() {
  return (
    <div className='home'>
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
    </div>
  )
}
