import React from 'react'

function SkillsSection() {
  return (
    <div>
        {/* heading of skills section */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center'>
              <span className='text-primary'>#</span>
              <h2 className='text-2xl text-white ml-2'>Projects</h2>
              <div className='h-0 border border-primary w-full md:w-[512px] mx-4'></div>
            </div>
            
          </div>
    </div>
  )
}

export default SkillsSection