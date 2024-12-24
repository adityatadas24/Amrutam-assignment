import React from 'react'
import Header from '../components/Header'
import Background from '../components/Background'
import Provides from '../components/Provides'
import { Discover } from '../components/Discover'
import Consultation from '../components/Consultation'
import Restore from '../components/Restore'
import { Approach } from '../components/Approach'
import Stories from '../components/Stories'
import { Experts } from '../components/Experts'
import { Contact } from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Background />
     <Provides/>
     <Discover/>
     <Consultation/>
     <Restore/>
     <Approach/>
    <Stories/>
    <Experts/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default HomePage
