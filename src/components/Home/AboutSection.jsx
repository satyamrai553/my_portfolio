import React from 'react'
import {Link } from 'react-router-dom'

function AboutSection() {
    return (
        <div className='flex justify-center'>
            <div className='w-[1024px] px-4'>
                {/* heading of skills section */}
                <div className='flex flex-col md:flex-row justify-between items-center mt-16'>
                    <div className='flex items-center'>
                        <span className='text-primary'>#</span>
                        <h2 className='text-2xl text-white ml-2'>about-me</h2>
                        <div className='h-0 border border-primary md:w-[512px] mx-4'></div>
                    </div>

                </div>


                {/* lower sectoin of skills */}
                <div>


                    <div className="about-section p-4 bg-gray-800 text-gray">
                        <p className="mb-2">
                            Hi, I'm <strong>Satyam</strong>, a passionate backend developer with a knack for turning complex problems into efficient solutions. With experience in various programming languages and frameworks, I enjoy building robust and scalable applications that power the digital world.
                        </p>
                        <p className="mb-2">
                            My journey in tech began with an interest in how things work behind the scenes. Over the years, I have honed my skills in server-side technologies, database management, and API development, constantly striving to improve and adapt to new challenges.
                        </p>
                        <p>
                            When I’m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and the power of collaboration to drive innovation.
                        </p>

                        <Link to={'/about'}>
                            <button className='bg-primary border-solid border border-white rounded-md mt-6 p-2 text-white hover:bg-primary-light hover:border-white invisible md:visible text-lg font-bold w-40'>
                                Read More
                            </button>
                        </Link>

                    </div>

                    <div>
                        <img src="" alt="" srcset="" />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default AboutSection