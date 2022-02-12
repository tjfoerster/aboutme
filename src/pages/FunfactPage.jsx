import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@material-ui/core';

library.add(fas);

function FunfactPage() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300" style={{ marginBottom:'5vh' }}>
                    <p>A random fun fact to make the day a little better ;-)</p>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <a href="https://de.m.wikipedia.org/wiki/Fu%C3%9Fballl%C3%A4nderspiel_Barbados_%E2%80%93_Grenada_1994" target="_blank" rel="noopener noreferrer" className='fun-link' style={{ color: theme.palette.text.primary }}>
                        <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="5x" id="link-icon" />
                        <span id="link">https://de.m.wikipedia.org/wiki/Fu%C3%9Fballl%C3%A4nderspiel_Barbados_%E2%80%93_Grenada_1994</span>
                    </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FunfactPage;