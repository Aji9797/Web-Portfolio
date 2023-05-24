import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/Avtr/Av1.png";

// Import Swiper React components
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="Testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonials">
          <div className="client_avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className="client_name"></h5>
          <small className="client_review"></small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
