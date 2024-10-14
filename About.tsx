import React from 'react'

const About = () => {
  return (
    <div id='about' className='container pt-32' style={{ background: "url('/some-subtle-pattern.png')", backgroundSize: "cover" }}>
      <h2 className='text-black text-4xl md:text-5xl' data-aos="zoom-in-up">About Me</h2>
      <p className='text-white pt-4' data-aos="zoom-in-up">
        I'm a Student at GIAIC, pursuing a course in Artificial Intelligence Web 3.0 & Metaverse. Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>
  )
}

export default About