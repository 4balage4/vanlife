import React from 'react'
import Button from '../../components/Button'

function Home() {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1 className='home-header'>You got the travel plans, we got the travel vans.</h1>
        <p className='home-text'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to mage your perfect road trip.</p>
        <Button className="home-button">Find your van</Button>
      </div>
    </div>
  )
}

export default Home
