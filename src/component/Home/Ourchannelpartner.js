import React from 'react';
import './Ourchannelpartner.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Import autoplay CSS if necessary
import slide1 from '../../img/Neurology.jpeg';
import slide2 from '../../img/Opthamology.jpeg';
import slide3 from '../../img/ambulance1.jpg';
import slide4 from '../../img/Neurology.jpeg';

const Ourchannelpartner = () => {
  return (
    <>
      <h1 className='ourchannelpartner-heading'>
        our <span className='commanq-span'>channel</span> partner <span className='commanq-span'>inquiry</span>
      </h1>

      <div className='ourchnnelpartner-maindiv'>
        <div className='ourchnnelpartner-card-slider'>
          <Swiper className='swiper'
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay configuration here
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='swiper-slide'>
              <img src={slide1} alt="Neurology" />
              <div className='slide-content'>
                <h2>Neurology Services</h2>
                <p>Explore our specialized neurology services designed to offer the best care and treatment for neurological conditions.</p>
                <button className='slide-button'>Learn More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide2} alt="Opthamology" />
              <div className='slide-content'>
                <h2>Opthamology Services</h2>
                <p>Discover our comprehensive eye care solutions tailored to your vision needs and health.</p>
                <button className='slide-button'>Learn More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide3} alt="Ambulance" />
              <div className='slide-content'>
                <h2>Emergency Services</h2>
                <p>Our emergency services are available 24/7 to provide immediate care in critical situations.</p>
                <button className='slide-button'>Learn More</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
              <img src={slide4} alt="Neurology" />
              <div className='slide-content'>
                <h2>Advanced Neurology</h2>
                <p>Leading-edge treatments and diagnostic techniques in neurology to help you manage your condition effectively.</p>
                <button className='slide-button'>Learn More</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='ouchannelpartne-content'>
          <div className="ourchannel-partner">
            <h2>Join Our Network: Channel Partner Inquiry</h2>
            <p>Required fields are marked with an asterisk (*).</p>
            <form>
              <label htmlFor="name">First and Last name*</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />

              <label htmlFor="email">Email address*</label>
              <input type="email" id="email" name="email" placeholder="Your email" required />

              <label htmlFor="Address">Address*</label>
              <input type="text" id="Address" name="Address" placeholder="Address" required />

              <label htmlFor="massage">Message</label>
              <textarea id="massage" name="massage" placeholder="Message"></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourchannelpartner;
