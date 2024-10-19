import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-background-color border-t-2 pt-8 border-gray flex justify-center h-auto md:h-52'>
      <div className='w-full px-4 md:w-[1024px] h-auto md:h-36'>

        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Branding and Info Section */}
          <div className='mb-4 md:mb-0'>
            <div className='flex items-center mb-2'>
              <NavLink to={'/'} className='font-Unlock text-lg md:text-xl text-white mr-4'>
                Satyam Rai
              </NavLink>
              <a href="https://satyamcodes.online" className='text-gray text-sm md:text-md'>
                satyamcodes.online
              </a>
            </div>
            <h3 className='text-white text-sm md:text-md'>
              back-end developer
            </h3>
          </div>

          {/* Social Media Section */}
          <div>
            <h1 className='font-serif font-bold text-white text-center mb-2 text-md md:text-lg'>
              Media
            </h1>
            <div className='flex justify-center'>
              <a href="https://www.instagram.com/satyamrai2609/" target='blank'>
                <img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1729370915/My_portfolio/icons/uqfsuder4rzjbyem7bdi.svg" alt="instagram" className='h-5 md:h-6 px-2 invert'/>
              </a>
              <a href="https://www.linkedin.com/in/satyam-rai-b15472118/" target='blank'>
                <img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1729370968/My_portfolio/icons/mo1kovvdh3nex2j8u6pl.svg" alt="linkedin" className='h-5 md:h-6 px-2 invert'/>
              </a>
              <a href="https://github.com/satyamrai553" target='blank'>
                <img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1729370914/My_portfolio/icons/t83intkz4v7q3evwou5i.svg" alt="github" className='h-5 md:h-6 px-2 invert'/>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='flex justify-center items-end mt-4 md:mt-0 h-auto md:h-1/2'>
          <h3 className='text-white text-sm md:text-md'>
            © 2024 made by Satyam Rai
          </h3>
        </div>

      </div>
    </div>
  )
}

export default Footer
