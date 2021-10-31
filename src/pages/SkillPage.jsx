import React from 'react'

function SkillPage() { 
    return (
        <React.Fragment>
            <div className="content">
                <div data-swiper-parallax="-300">
                    <h1>My skills</h1>
                </div>
                <div data-swiper-parallax="-200" data-swiper-parallax-opacity="0.5">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem perferendis voluptas magnam asperiores unde cupiditate impedit. Suscipit fugiat ea rerum voluptates reprehenderit, officiis doloremque dolores. Tempore mollitia soluta maiores.</p>
                </div>
                <div data-swiper-parallax="-100" data-swiper-parallax-opacity="0.5">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem perferendis voluptas magnam asperiores unde cupiditate impedit. Suscipit fugiat ea rerum voluptates reprehenderit, officiis doloremque dolores. Tempore mollitia soluta maiores.</p>
                </div>
                <div data-swiper-parallax="0" data-swiper-parallax-opacity="0.5">
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem perferendis voluptas magnam asperiores unde cupiditate impedit. Suscipit fugiat ea rerum voluptates reprehenderit, officiis doloremque dolores. Tempore mollitia soluta maiores.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SkillPage;