import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './App.css'
import LandingPage from "./pages/LandingPage";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";

SwiperCore.use([Mousewheel,Pagination]);

function App() {
  return (
    <React.Fragment>
      <Swiper 
        id="main"
        direction="vertical"
        mousewheel={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide key="slide-1">
          <LandingPage />
        </SwiperSlide>
        <SwiperSlide key="slide-2">
          <SkillPage />
        </SwiperSlide>
        <SwiperSlide key="slide-3">
          <ContactPage />
        </SwiperSlide>

        <Pagination></Pagination>
      </Swiper>
    </React.Fragment>
  );
}

export default App;
