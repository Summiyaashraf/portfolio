import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className=' text-black text-4xl md:text-5xl'>Technologies I work with</h2>
            <p className='text-white pt-2'>"I enjoy working with a diverse range of technologies to build efficient and scalable applications. My expertise includes JavaScript and its modern frameworks like Next.js and React for dynamic web development. I also leverage Tailwind CSS for creating responsive designs</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-black text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    </div>

                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node.js</h2>

                </div>
            </div>
        </div> 
     </div>
    </div>
  )
}

export default Skills
