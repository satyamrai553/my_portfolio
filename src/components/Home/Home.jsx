import React from 'react'

function Home() {
  return (
    <div className='bg-background-color'>

      {/* Hero section */}

      <div className='flex  justify-center'>
        <div className='w-[1024px] flex pt-16 justify-center'>
          <div className='w-[537px] pt-16'>
            <h1 className='text-4xl text-white font-Merriweather'>Satyam Rai is a <span className='text-primary'>back-end developer.</span>
            </h1>
            <p className='text-gray w-[463px] mt-6 font-serif text-xl'>
              He is a backend wizard, turning code into digital magic!
            </p>
            <button className='bg-background-color border-solid border border-primary mt-6 p-2 text-white'>
              Contact me !!
            </button>
          </div>
          <div><img src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726472372/mjepl4jweilf1qghdwcv.png" alt="profile_image" /><p className='text-gray flex flex-row items-center border border-gray'><div className='w-4 h-4 bg-primary mx-2'></div>Currently learning <span className='text-white mx-1'>Next.js</span></p></div>

        </div>
      </div>



      {/* joke section  */}


      <div className='flex justify-center mt-16'>
        <div>
        <div>
          <p className='border border-gray p-4 text-gray text-2xl grid-cols-1 grid'>Why do developers hate nature?
            It has too many bugs!
          </p>
          
        </div>
        <div className='grid justify-items-end'>
         <p className='w-1/4  border border-gray p-4 text-gray text-2xl'>- Dr. Who</p>
        </div>
        </div>
      </div>



    </div>

  )
}

export default Home