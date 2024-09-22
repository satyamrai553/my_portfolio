import React from 'react'

function JokeSection() {
  return (
    <div className='flex justify-center mt-8 md:mt-16'>
    <div className='px-4'>
      <div>
        <p className='border border-gray p-4 text-gray text-xl md:text-2xl'>
          Why do developers hate nature? It has too many bugs!
        </p>
      </div>
      <div className='grid justify-items-end'>
        <p className='w-full md:w-1/4 border border-gray p-4 text-gray text-xl md:text-2xl'>- Dr. Who</p>
      </div>
    </div>
  </div>
  )
}

export default JokeSection