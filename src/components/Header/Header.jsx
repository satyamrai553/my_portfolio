import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-center pt-8 bg-background-color text-white'>
      <div className='w-full px-4 lg:w-[1024px] flex justify-between items-center'>

        {/* Logo Section */}
        <div className='w-1/2 lg:w-96 font-Unlock text-lg lg:text-xl'>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-white" : ""
            }
          >
            Satyam Rai
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className='hidden lg:flex w-full lg:w-96 justify-between font-serif text-gray'>
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>home
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>works
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>about-me
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>github
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className='lg:hidden'>
          <button className='text-gray focus:outline-none'>
            {/* Add a hamburger menu icon here */}
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Header
