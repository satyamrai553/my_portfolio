import React from 'react'
import { Link } from 'react-router-dom'
import Projects from '../../constants.js'

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
            <Link to={'/contact'}><button className='bg-background-color border-solid border border-primary mt-6 p-2 text-white hover:bg-primary hover:border-white'>
              Contact me !!
            </button></Link>

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



      {/* Project section */}


      <div className='bg-background-color pt-16 flex justify-center'>


        <div className='w-[1024px]' >

          {/* heading section of projects */}
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center'><span className='text-primary'>#</span><h2 className='text-2xl text-white'>Projects</h2></div>
            <div className='h-0 border border-primary w-[512px] mx-4'>

            </div>
            <div>
              <Link to={'/work'}><button className='text-gray flex items-center'>View all <img className='invert mx-2 h-8' src="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726474790/icons/ojbkhwqjqboswsoyvxtb.svg" alt="arrow icon" /></button></Link>

            </div>
          </div>

          {/* lower section, cards of projects */}
          <div className="flex justify-center mt-16">
            {Projects.slice(0, 3).map((project, index) => (
              <div key={index} className="project-card w-80 h-66 mx-3 border-collapse border border-gray">
                <img src={project.img} alt={project.title} className="project-image" />
                <div className="project-tags border-collapse border border-gray p-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag text-gray text-md m-2">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title text-xl text-white font-serif p-3">{project.title}</h3>
                <p className="project-description text-gray font-serif px-3">{project.description}</p>

                {/* Fixed project link reference */}
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <button className="mt-3 mx-3 w-16 text-white mb-3 bg-background-color border border-primary hover:bg-primary hover:border-white">
                    Link
                  </button>
                </a>
              </div>
            ))}
          </div>

        </div>




      </div>



    </div>

  )
}

export default Home