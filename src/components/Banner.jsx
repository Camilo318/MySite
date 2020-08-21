import React, { useEffect } from 'react'

const Banner = () => {
    const bannerBg = React.createRef(null)
    const bannerBgAddition = React.createRef(null)
    useEffect(() => {
        console.log(bannerBg.current)
        gsap.from([bannerBg.current, bannerBgAddition.current], {
            duration: 1.2,
            width: 0,
            skewX: 4,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.2
            }
        })
    }, [])

    return (
        <section className="banner">
            <div className="banner__bg"
            ref={bannerBg}></div>
            <div className="banner__bg--addition"
            ref={bannerBgAddition}>
                
            </div>

            <div className="banner__container">
                <div className="banner__inner">
                    <h1>Hey, I'm Camilo</h1>
                    <h3>
                        I build Web Apps that deliver amazing experiences
                    </h3>
                    {/* <p>
                        I'm a Frontend Developer that also happens to study Mechatronics Engineering. I like technology, a lot
                    </p> */}
                    <a href="/">My Work</a>
                </div>
            </div>
        </section>
    )
}

export default Banner
