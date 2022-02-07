import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Mousewheel, EffectCube, Autoplay} from 'swiper';

library.add(fab, fas);

SwiperCore.use([Mousewheel, EffectCube, Autoplay]);

function SkillPage() {
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5" style={{ marginBottom:100 }}>
                    <h2>Worked already with the following softwares and technologies and more.</h2>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">
                    <Swiper 
                        id="technologies-slider"
                        grabCursor={true}
                        slidesPerView={10}
                        spaceBetween={10} 
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            "delay": 1500,
                            "disableOnInteraction": false
                        }}
                        style={{width:"100%", height:"200px"}}
                    >
                        <SwiperSlide key="js" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'js']} color="primary" size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="css3" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'css3-alt']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="html5" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'html5']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="react" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'react']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="sass" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'sass']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="bs" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'bootstrap']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="git" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'git-alt']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="figma" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'figma']} size="9x" />
                        </SwiperSlide>
                        <SwiperSlide key="wp" style={{width:"150px"}}>
                            <FontAwesomeIcon icon={['fab', 'wordpress']} size="9x" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SkillPage;