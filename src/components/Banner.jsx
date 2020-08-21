import React from 'react'

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__bg"></div>
            <div className="banner__bg--addition"></div>
            <div className="banner__container">
                <div className="banner__inner">
                    <h1>Hey, I'm Camilo</h1>
                    <h3>
                        I build Web Apps that deliver amazing experiences
                    </h3>
                    {/* <p>
                        I'm a Frontend Developer that also happens to study Mechatronics Engineering. I like technology, like a lot
                    </p> */}
                    <a href="/">My Work</a>
                </div>
            </div>
        </section>
    )
}

export default Banner
