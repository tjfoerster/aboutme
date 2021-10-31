import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas);

function SkillPage() { 
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <h1>I have already worked with the following softwares and technologies</h1>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">
                    <FontAwesomeIcon icon={['fab', 'js']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'css3-alt']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'html5']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'react']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'sass']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'bootstrap']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'git-alt']} size="5x" />
                    <FontAwesomeIcon icon={['fab', 'wordpress']} size="5x" />
                    Adobe
                </div>
            </div>
        </React.Fragment>
    );
}

export default SkillPage;