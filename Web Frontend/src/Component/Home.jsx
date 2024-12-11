import React from 'react'
import Hero from './Hero'
import About from './About'
import Ourpatners from './Ourpatners'
import Ourprocess from './Ourprocess'
import Chatbot from './Chatbot'
import Contact from './Conatct'
import SchedulePickupForm from './SchedulePickupForm'

const Home = () => {
  return (
    <>
        <Hero />
        <SchedulePickupForm />
        <About  />
        {/* <Ourpatners /> */}
        {/* <Chatbot /> */}
        <Ourprocess />
        <Contact />
    </>
  )
}

export default Home
