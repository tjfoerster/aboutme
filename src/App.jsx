import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { colors, lightTheme, darkTheme, GlobalStyles } from './theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Keyboard, Pagination, Parallax } from 'swiper';
import { Button } from 'react-bootstrap';

import LandingPage from './pages/LandingPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './App.css'
import './custom.scss';
import './pages/LandingPage.css'
import './pages/SkillPage.css'
import './pages/ContactPage.css'

SwiperCore.use([Mousewheel, Keyboard, Pagination, Parallax]);

const StyledApp = styled.div`
  width: inherit;
  height: inherit;
  color: ${(props) => props.theme.fontColor}
`;

export default function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <div className="page-config-section">
              <Button variant="primary" onClick={() => themeToggler()}>Switch Theme</Button>
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
              "type": "progressbar",
              "progressbarOpposite" : "true"
            }}
            speed={600}
            parallax={{
              "enabled": "true"
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
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  );
}
