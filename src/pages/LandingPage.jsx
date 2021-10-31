import React from 'react';

function LandingPage() {
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300" data-swiper-parallax-opacity="0.5">
                    <h1>Welcome</h1>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <p>My name is Timon Förster. I'm web developer and frontend designer.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;