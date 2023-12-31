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
import { useRouter } from 'next/navigation'

export default function Main() {
  // const router = useRouter()

  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }
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
