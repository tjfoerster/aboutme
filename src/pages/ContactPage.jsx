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
                <div data-swiper-parallax="-300" style={{ marginBottom:'5vh' }}>
                    <h2 style={{ margin:0 }}>Contact me</h2>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5" className="m-3">
                    <a href="mailto:&#116;&#105;&#109;&#111;&#110;&#46;&#100;&#105;&#101;&#110;&#115;&#116;&#64;&#119;&#101;&#98;&#102;&#111;&#101;&#114;&#115;&#116;&#101;&#114;&#46;&#100;&#101;" class="d-flex gap-3 align-items-center contact-link">
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="5x" id="email-icon" />
                        <span id="email">&#116;&#105;&#109;&#111;&#110;&#46;&#100;&#105;&#101;&#110;&#115;&#116;&#64;&#119;&#101;&#98;&#102;&#111;&#101;&#114;&#115;&#116;&#101;&#114;&#46;&#100;&#101;</span>
                    </a>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5" className="m-3">
                    <a href="https://github.com/tjfoerster" target="_blank" rel="noopener noreferrer" class="d-flex gap-3 align-items-center contact-link">
                        <FontAwesomeIcon icon={['fab', 'github']} size="5x" id="github-icon" />
                        <span id="github">github.com/tjfoerster</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactPage;