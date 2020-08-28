import React, { useEffect } from 'react'

const Banner = () => {
    const bannerBg = React.createRef(null)
    const bannerBgAddition = React.createRef(null)
    const bannerH1 = React.createRef(null)
    const bannerH3 = React.createRef(null)
    const bannerButton = React.createRef(null)
    const bannerTL = gsap.timeline()

    useEffect(() => {
        bannerTL.fromTo([bannerBg.current, bannerBgAddition.current],
            {
                width: 0,
                skewX: 4,
            },
            {
                skewX: 0,
                width:'100%',
                ease: 'power3.inOut',
                duration: 1.2,
                stagger: {
                    amount: 0.3
                }      
            }
        )
        .from([bannerH1.current, bannerH3.current, bannerButton.current], {
            autoAlpha: 0,
            delay: 0.2,
            duration: 0.9,
            y:80,
            opacity: 0,
            stagger: {
                amount: 0.3
            },
            ease: 'power3.out'
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
                    <h1 ref={bannerH1}>
                        Hey, I'm Camilo
                    </h1>
                    <h3 ref={bannerH3}>
                        I build Web Apps that deliver amazing experiences
                    </h3>
                    
                    <a href="#work" ref={bannerButton}>My Work</a>
                </div>
            </div>
        </section>
    )
}

export default Banner
