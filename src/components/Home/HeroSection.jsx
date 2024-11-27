import React from 'react'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='flex justify-center'>
        <div className='w-full lg:w-[1024px] flex flex-col md:flex-row pt-8 md:pt-16 justify-center'>
          <div className='w-full md:w-[537px] pt-8 md:pt-16 px-4'>
            <h1 className='text-3xl md:text-4xl text-white font-Merriweather'>Satyam Rai is a <span className='text-primary'>back-end developer.</span></h1>
            <p className='text-gray w-full md:w-[463px] mt-4 md:mt-6 font-serif text-lg md:text-xl'>
              He is a backend wizard, turning code into digital magic!
            </p>
            <Link to={'https://www.fiverr.com/satyamrai123/make-reactjs-frontend-website'}>
              <button className='bg-primary border-solid border border-white rounded-md mt-6 p-2 text-white hover:bg-primary-light hover:border-white invisible md:visible text-lg font-bold w-40'>
              Hire me!
              </button>
            </Link>
          </div>
          <div className='flex flex-col items-center mt-8 md:mt-0'>
            <img className='w-56 md:w-56 lg:w-56' src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1729368396/My_portfolio/mq6l764kmepfnt6o0ndg.png" alt="profile_image" />
            <p className='text-gray flex flex-row items-center border border-gray p-2'>
              <div className='w-4 h-4 bg-primary mx-2'></div>Currently learning <span className='text-white mx-1'>Next.js</span>
            </p>
          </div>
        </div>
      </div>
  )
}

export default HeroSection