import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function ContactPage() { 
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300">
                    <h1>Contact me</h1>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <FontAwesomeIcon icon={['fas', 'envelope']} size="5x"/>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">
                    <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactPage;