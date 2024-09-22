import React from 'react'
import { Link } from 'react-router-dom'
import { HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection, JokeSection } from '../../components/Home/HomeExport.js'

function Home() {
  return (
    <div className='bg-background-color'>



      {/* Hero section */}

      <HeroSection />

      {/* Joke section */}

      <JokeSection />

      {/* Project section */}
      <ProjectsSection />



      {/*Skills section  */}

      <SkillsSection />


    </div>
  )
}

export default Home
