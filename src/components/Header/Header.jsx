import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-center pt-8 bg-background-color text-white'>
      <div className='flex justify-center w-[1024px]'>
        <div className='flex w-96 font-Unlock text-xl'>
          <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
 Satyam Rai
</NavLink></div>
        <div className='flex w-96 justify-between font-serif text-gray'>
          <div><NavLink
            to="/"
            className={({ isActive}) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>home
          </NavLink></div>
          <div>


            <NavLink
              to="/work"
              className={({ isActive}) =>
                isActive ? "text-white" : "text-gray"
              }
            >
             <span className='text-primary'>#</span>works
            </NavLink></div>
          <div>

            <NavLink
              to="/about"
              className={({ isActive}) =>
                isActive ? "text-white" : "text-gray"
              }
            >
              <span className='text-primary'>#</span>about-me
            </NavLink></div>
          <div>


            <NavLink
              to="/github"
              className={({ isActive}) =>
                isActive ? "text-white" : "text-gray"
              }
            >
            <span className='text-primary'>#</span>github
            </NavLink></div>
          <div>


            <NavLink
              to="/contact"
              className={({ isActive}) =>
                isActive ? "text-white" : "text-gray"
              }
            >
            <span className='text-primary'>#</span>contact
            </NavLink></div>
        </div>
      </div>
    </div>

  )
}

export default Header