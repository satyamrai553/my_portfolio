import React from 'react'
import { Skills } from '../../constants'

function SkillsSection() {
  return (
    <div className='flex justify-center'>
    <div className='w-[1024px] px-4'>
        {/* heading of skills section */}
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center ml-2'>
              <span className='text-primary'>#</span>
              <h2 className='text-2xl text-white ml-2'>skills</h2>
              <div className='h-0 border border-primary md:w-[512px] mx-4'></div>
            </div>
            
          </div>


          {/* lower sectoin of skills */}
          <div className="skills-section flex justify-center">
      {Skills.map((skill, index) => (
        <table key={index} className="border border-gray border-collapse m-3 text-bold">
          
            <tr> <th className="text-primary p-2 border border-gray">{skill.title}</th></tr>
            <tr><td className="text-gray p-2">{skill.description}</td></tr>
             
              

        </table>
      ))}
    </div>

    </div>

   </div>
  )
}

export default SkillsSection