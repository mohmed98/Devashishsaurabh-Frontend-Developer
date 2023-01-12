import React from 'react'
import Navbar from './Navbar'

const Banner = () => {
  return (
    <div>
      <Navbar/>
    <div style={{height:"600px"}}>
        <img className="h-full w-full"src="https://www.teslarati.com/wp-content/uploads/2018/08/Crew-Dragon-DM-1-orbit-tall-pano-SpaceX-2.jpg" alt="Banner"/>
    </div>
    </div>
  )
}

export default Banner