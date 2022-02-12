import { Typography, useTheme } from '@material-ui/core';
import React from 'react';

function LandingPage() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300" data-swiper-parallax-opacity="0.5" style={{ marginBottom:'5vh' }}>
                    <Typography variant='h1'>Hello</Typography>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <p>I'm <span style={{color: theme.palette.primary.main}}>Timon Förster</span>, become a fullstack developer with focus on web development and frontend design.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;