import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Typography, useTheme } from '@material-ui/core';

library.add(fab, fas);

function ContactPage() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300" style={{ marginBottom:'5vh' }}>
                    <Typography variant='h2'>Contact me</Typography>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5" style={{ marginBottom:'2vh' }}>
                    <a href="mailto:&#116;&#105;&#109;&#111;&#110;&#46;&#100;&#105;&#101;&#110;&#115;&#116;&#64;&#119;&#101;&#98;&#102;&#111;&#101;&#114;&#115;&#116;&#101;&#114;&#46;&#100;&#101;" className='contact-link' style={{ color: theme.palette.text.primary}}>
                        <FontAwesomeIcon icon={['fas', 'envelope']} size="5x" id="email-icon" />
                        <span id="email">&#116;&#105;&#109;&#111;&#110;&#46;&#100;&#105;&#101;&#110;&#115;&#116;&#64;&#119;&#101;&#98;&#102;&#111;&#101;&#114;&#115;&#116;&#101;&#114;&#46;&#100;&#101;</span>
                    </a>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">
                    <a href="https://github.com/tjfoerster" target="_blank" rel="noopener noreferrer" className='contact-link' style={{ color: theme.palette.text.primary}}>
                        <FontAwesomeIcon icon={['fab', 'github']} size="5x" id="github-icon" />
                        <span id="github">github.com/tjfoerster</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactPage;