import React from 'react'
import Front from '../frontPage/Front'
import TopBar from '../components/TopBar'
import Computer from '../ImageComponent/Computer'
import Skills from '../skill/Skills'
import Experience from '../experience/Experience'
import { Container } from '@chakra-ui/react'
import Project from '../projects/Project'
import Footer from '../components/Footer'
import About from '../about/About'

export default function Main() {
  return (
    <div>
    <TopBar />
     <Front />
     <Computer />
     <About />
     <Skills />
     <Experience />
     <Project />
     <Footer />
    </div>
  )
}
