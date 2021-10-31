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
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5" className="m-3">
                    <a href="mailto:timon.dienst@webfoerster.de">
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="5x"/>
                        <span>timon.dienst@webfoerster.de</span>
                    </a>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5" className="m-3">
                    <a href="https://github.com/tjfoerster" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} size="5x" />
                        <span>github.com/tjfoerster</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactPage;