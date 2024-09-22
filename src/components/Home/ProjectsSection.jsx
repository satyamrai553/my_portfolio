import React from 'react'
import Projects from '../../constants'
import {Link} from 'react-router-dom'

function ProjectsSection() {
  return (
    <div className='bg-background-color pt-16 flex justify-center'>
        <div className='w-full lg:w-[1024px] px-4'>

          {/* Heading section of projects */}
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center'>
              <span className='text-primary'>#</span>
              <h2 className='text-2xl text-white ml-2'>Projects</h2>
              <div className='h-0 border border-primary w-full md:w-[512px] mx-4'></div>
            </div>
            <div className='mt-4 md:mt-0'>
              <Link to={'/work'}>
                <button className='text-gray flex items-center'>
                  View all
                  <img className='invert mx-2 h-6 md:h-8' src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726474790/icons/ojbkhwqjqboswsoyvxtb.svg" alt="arrow icon" />
                </button>
              </Link>
            </div>
          </div>

          {/* Lower section, cards of projects */}
          <div className="flex flex-wrap justify-center mt-8 md:mt-16 mb-8 md:mb-16">
            {Projects.slice(0, 3).map((project, index) => (
              <div key={index} className="project-card w-full md:w-1/2 lg:w-1/3 mb-6 px-4">
                <div className="border border-gray">
                  <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
                  <div className="project-tags border-t border-gray p-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag text-gray text-sm md:text-md m-1">{tag}</span>
                    ))}
                  </div>
                  <div className='p-3'>
                  <h3 className="project-title text-lg md:text-xl text-white font-serif">{project.title}</h3>
                  <p className="project-description text-gray font-serif">{project.description}</p>
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <button className="mt-3 w-full md:w-16 text-white mb-3 bg-background-color border border-primary hover:bg-primary hover:border-white">
                      Link
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
  )
}

export default ProjectsSection