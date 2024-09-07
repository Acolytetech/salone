import React from 'react'
import './Carosel.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cardiologyImg from '../../img/cardiology.jpg';
import pulmologyImg from '../../img/pulmology.jpeg';
import neurologyImg from '../../img/Neurology.jpeg';
import ophthalmologyImg from '../../img/Opthamology.jpeg';
import Slider from './Slider';

const Carosel = () => {
  return (
    <div style={{width: '100%', height: '500px' , display: 'flex',backgroundColor:'#E9F3FF', paddingTop:'100px'}}>
    <div style={{width: '50%', height: '500px'}}>
    {/* <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide><img src={cardiologyImg}/></SwiperSlide>
    <SwiperSlide><img src={pulmologyImg}/></SwiperSlide>
    <SwiperSlide><img src={neurologyImg}/></SwiperSlide>
    <SwiperSlide><img src={ophthalmologyImg}/></SwiperSlide>

    ...
  </Swiper> */}
  <Slider/>


      </div>
      <div style={{width: '50%', height: '500px' ,backgroundColor:'#E9F3FF'}}>
      <h1 style={{ textAlign:'center', textTransform:'uppercase', color:'#3a6ea1'}}>our  <span className='commanq-span'>channel   </span>partner <span className='commanq-span'> inquery </span></h1>
        {/* <h1 >

          our channel partner enquery
        </h1> */}
      <form style={{marginLeft:'40px'}} >
        <div style={{width: '100%',margin:'50px'}}>
        <label style={{padding:'20px'}}>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    mobile number:
    <input type="text" name="name" />
  </label>
        </div>
        <div style={{width: '100%',margin:'50px'}}>
        <label style={{padding:'20px'}}>
    E-mail:
    <input type="text" name="name" />
  </label>
    <label>
    Gender:
    <input type="text" name="name" />
  </label></div>
  <div style={{width: '100%',margin:'50px', paddingLeft:'230px'}}>
 
   
  <input type="submit" value="Submit" />
  </div>
</form>

      </div>

      
  

    </div>
    
  )
}

export default Carosel