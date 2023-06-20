import React from 'react'
import './testimonials.css'
import AVATAR from  '../../assets/avatar.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR,
    name: "user 1",
    review:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque unde blanditiis qui pariatur accusantium perspiciatis, fugiat id consequuntur minima fuga?"
  },
  {
    avatar: AVATAR,
    name: "user 1",
    review:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque unde blanditiis qui pariatur accusantium perspiciatis, fugiat id consequuntur minima fuga?"
  },
  {
    avatar: AVATAR,
    name: "user 1",
    review:  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque unde blanditiis qui pariatur accusantium perspiciatis, fugiat id consequuntur minima fuga?"
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="review creator avatar" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials