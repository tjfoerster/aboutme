import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, Keyboard, Pagination, Parallax } from 'swiper';
import { createTheme, IconButton, Paper, ThemeProvider, useTheme } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createGlobalStyle } from 'styled-components';

import LandingPage from './pages/LandingPage';
import SkillPage from './pages/SkillPage';
import ContactPage from './pages/ContactPage';
import FunfactPage from './pages/FunfactPage';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './App.css'
import './pages/LandingPage.css'
import './pages/SkillPage.css'
import './pages/ContactPage.css'
import './pages/FunfactPage.css'

SwiperCore.use([Mousewheel, Keyboard, Pagination, Parallax]);

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          primary: {
            main: '#44e996',
          },
          secondary: {
            main: '#80acac',
            contrastText: '#ffffff',
          },
          background: {
            paper: mode === 'dark' ? '#00113c' : '#ffffff',
          },
          text: {
            primary: mode === 'light' ? '#000000' : '#ffffff',
          }
        },
        spacing: 8,
        shape: {
          borderRadius: 4,
        },
        typography: {
          h1: {
            fontSize: '8rem',
            margin: 0,
            fontFamily: 'Varela Round',
          },
          h2: {
            fontSize: '3rem',
            margin: 0,
            fontFamily: 'Varela Round',
          }
        },
      }),
    [mode],
  );

  const GlobalStyles = createGlobalStyle`
    :root {
        --swiper-theme-color: ${theme.palette?.primary?.main};
    }
  `;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Page />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function Page() {
  const colorMode = React.useContext(ColorModeContext);
  const themeDarkOrLight = useTheme();

  return (
    <Paper style={{ borderRadius:0, width:'100vw', height:'100vh' }}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit" className='page-config-section'>
        {themeDarkOrLight.palette.type === 'light' ? <FontAwesomeIcon icon={['fas', 'moon']} /> : <FontAwesomeIcon icon={['fas', 'sun']} />}
      </IconButton>
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
        <SwiperSlide key="slide-4">
          <FunfactPage />
        </SwiperSlide>
      </Swiper>
    </Paper>
  );
}