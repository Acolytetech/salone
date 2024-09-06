import React from 'react'
import Banner from './Banner'
import Profession from './Profession'
import NeonatologySection from './NeonatologySection'
import NeonatalTelehealth from './NeonatalTelehealth'
import CommanQ from './CommanQ'
import Carosel from './Carosel'
import { Carousel } from 'react-responsive-carousel'
// import Carosel from './Carosel'


function Home() {
  return (
    <div>
      <Banner/>
      <NeonatologySection/>
      {/* <Carosel/>   */}
      <Carosel/>

      <NeonatalTelehealth/>
      <Profession/>

      <CommanQ/>
    </div>
  )
}

export default Home
