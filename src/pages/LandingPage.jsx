import React from 'react';

function LandingPage() {
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300" data-swiper-parallax-opacity="0.5" style={{ marginBottom:'5vh' }}>
                    <h1 className='m-0'>Hello</h1>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <p>I'm <span style={{color: "var(--bs-primary)"}}>Timon Förster</span>, web developer and frontend designer.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;