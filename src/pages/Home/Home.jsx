import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection, JokeSection } from '../../components/Home/HomeExport.js'

function Home() {
  return (
    <div className='bg-background-color pb-16'>



      {/* Hero section */}

      <HeroSection />

      {/* Joke section */}

      <JokeSection />

      {/* Project section */}
      <ProjectsSection />



      {/*Skills section  */}

      <SkillsSection />


    {/* About section  */}

     <AboutSection />


     {/* Contact section */}

     <ContactSection/>
    </div>
  )
}

export default Home
