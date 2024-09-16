import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-background-color border-t-2 pt-8 border-gray flex justify-center h-52'>
      <div className='w-[1024px] h-36'>
        <div className='flex justify-between'>
          <div >
            <div className='flex'>
              <NavLink to={'/'} className='font-Unlock text-xl text-white mr-4'>Satyam Rai</NavLink>
                <a href="https://satyamcodes.online" className='text-gray'>satyamcodes.online</a>
            </div>
            <div>
              <h3 className='text-white text-md'>back-end developer</h3>
            </div>
          </div>
          <div>
            <h1 className='font-serif font-bold text-white text-center mb-2'>Media</h1>
            <div className='flex'>
              <a href="https://www.instagram.com/satyam_rai_dev/"><img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726487267/icons/howpftjinzmmodusopmy.svg" alt="instagram" className='h-6 px-2 invert'/></a>
              <a href="https://www.linkedin.com/in/satyam-rai-99b06a1b1/"><img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726487267/icons/sxzxlqlm2nnzbhrjg3kc.svg" alt="linkdin" className='h-6 px-2 invert'/></a>
              <a href="https://github.com/satyamrai"><img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726487267/icons/nvulwitijsid05nj5aby.svg" alt="github" className='h-6 px-2 invert' /></a>
            </div>
          </div>
        </div>



        <div className='flex justify-center items-end h-1/2'>
          <h3 className='text-white'>copyright 2024 made by Satyam rai</h3>
        </div>


      </div>
    </div>
  )
}

export default Footer