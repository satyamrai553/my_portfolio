import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
            Satyam
          </NavLink>
        </div>

        {/* Navigation Links for Large Screens */}
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
          <button onClick={toggleMenu} className='text-gray focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className='lg:hidden flex flex-col space-y-2 bg-background-color p-4 text-gray font-serif'>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>home
          </NavLink>
          <NavLink
            to="/work"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>works
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>about-me
          </NavLink>
          <NavLink
            to="/github"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>github
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? "text-white" : "text-gray"
            }
          >
            <span className='text-primary'>#</span>contact
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
