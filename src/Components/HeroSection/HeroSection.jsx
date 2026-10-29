import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div className="content-left">
          <h1 className='heading'>DESIRE FOOD <br />for your Taste</h1>
          <p>
            Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains.
          </p>
          <div className="order-btn">
            <button>ORDER NOW</button>
          </div>

        </div>
        <div className="content-right">
          <img src="./heroSection.png" alt="" />
        </div>
      </div>

    </>
  )
}

export default HeroSection