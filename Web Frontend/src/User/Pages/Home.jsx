import React from 'react'
import Hero from '../Component/Home/Hero'
import About from '../Component/Home/About'
import Ourpatners from '../Component/Home/Ourpatners'
import Ourprocess from '../Component/Home/Ourprocess'
import Chatbot from '../Component/Not Used/Chatbot'
import Contact from '../Component/Home/Conatct'
import SchedulePickupForm from '../Component/Home/SchedulePickupForm'
import WorkFlow from '../Component/Home/WorkFlow'
import WhyUs from '../Component/Home/WhyUs'
import WhatsApp from '../Component/Icons/Whatsapp'

const Home = () => {
  return (
    <>
        <Hero />
        <SchedulePickupForm />
        <WorkFlow />
        <About  />
        <WhyUs />
        <WhatsApp />
        {/* <Ourpatners /> */}
        {/* <Chatbot /> */}
        {/* <Ourprocess /> */}
        <Contact />
    </>
  )
}

export default Home
