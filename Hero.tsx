import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen relative bg-left lg:bg-[15%] bg-cover'>
      
      <div 
        className="profile-pic-container absolute top-[30%] left-[20%] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-blue-950 overflow-hidden"
        style={{ backgroundImage: "url('/MyProfile.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
      </div>

      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[150px] sm:text-[200px] font-bold leading-tight flex justify-center items-center'>
          <div className="heroText">
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Summiya</p>
            <p data-aos="zoom-in-up">Ashraf</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
