import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Keyboard, Pagination, Parallax } from 'swiper';
import { createTheme, ThemeProvider, styled } from '@material-ui/core';
import { themeOptions } from './theme'
import Button from '@material-ui/core/Button';

import LandingPage from './pages/LandingPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './App.css'
import './pages/LandingPage.css'
import './pages/SkillPage.css'
import './pages/ContactPage.css'

SwiperCore.use([Mousewheel, Keyboard, Pagination, Parallax]);

export default function App() {
  
  let theme = createTheme(themeOptions);

  const themeToggler = () => {
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="page-config-section">
            <Button variant="outlined" onClick={() => themeToggler()}>Switch Theme</Button>
        </div>
        <Swiper 
          id="main-slider"
          effect="slide"
          direction={'vertical'}
          mousewheel={true}
          keyboard={true}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            type: "progressbar",
            progressbarOpposite: true,
          }}
          speed={600}
          parallax={{
            enabled: true,
          }}
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
        </Swiper>
        <div className="page-copyright">
            <div>Copyright © {new Date().getFullYear()} Timon Förster</div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
