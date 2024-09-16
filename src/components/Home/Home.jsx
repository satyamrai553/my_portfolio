import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../constants.js'

function Home() {
  return (
    <div className='bg-background-color'>

      {/* Hero section */}

      <div className='flex justify-center'>
        <div className='w-full lg:w-[1024px] flex flex-col md:flex-row pt-8 md:pt-16 justify-center'>
          <div className='w-full md:w-[537px] pt-8 md:pt-16 px-4'>
            <h1 className='text-3xl md:text-4xl text-white font-Merriweather'>Satyam Rai is a <span className='text-primary'>back-end developer.</span></h1>
            <p className='text-gray w-full md:w-[463px] mt-4 md:mt-6 font-serif text-lg md:text-xl'>
              He is a backend wizard, turning code into digital magic!
            </p>
            <Link to={'/contact'}>
              <button className='bg-background-color border-solid border border-primary mt-6 p-2 text-white hover:bg-primary hover:border-white invisible md:visible'>
                Contact me !!
              </button>
            </Link>
          </div>
          <div className='flex flex-col items-center mt-8 md:mt-0'>
            <img className='w-32 md:w-64 lg:w-80' src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726472372/mjepl4jweilf1qghdwcv.png" alt="profile_image" />
            <p className='text-gray flex flex-row items-center border border-gray mt-4 p-2'>
              <div className='w-4 h-4 bg-primary mx-2'></div>Currently learning <span className='text-white mx-1'>Next.js</span>
            </p>
          </div>
        </div>
      </div>

      {/* Joke section */}

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

      {/* Project section */}

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

    </div>
  )
}

export default Home
