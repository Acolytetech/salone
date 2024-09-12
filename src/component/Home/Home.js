import React from 'react'
import Banner from './Banner'
import Profession from './Profession'
import NeonatologySection from './NeonatologySection'
import NeonatalTelehealth from './NeonatalTelehealth'
import CommanQ from './CommanQ'

import { Carousel } from 'react-responsive-carousel'
import HomeService from './HomeServices'

import Ourchannelpartner from './Ourchannelpartner'// import Carosel from './Carosel'
// import Ourchannelpartner from './ourchannelpartner'// import Carosel from './Carosel'


function Home() {
  return (
    <div  style={{overflowX:'hidden'}}>
      <Banner/>
      <HomeService/>
      <NeonatologySection/>
      <Ourchannelpartner/>


      <NeonatalTelehealth/>
      <Profession/>

      <CommanQ/>
    </div>
  )
}

export default Home
