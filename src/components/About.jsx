import React, { useEffect, useRef }from 'react'
import Header from './Header'


const About = () => {
    const line1 = useRef(null)
    const line2 = useRef(null)
    const aboutH2 = useRef(null)
    const aboutBg = useRef(null)
    const aboutBgAddition = useRef(null)

    const aboutTL = gsap.timeline()

    useEffect(() => {
        aboutTL.fromTo([aboutBg.current, aboutBgAddition.current],
            {   
                width: 0,
                skewX: 4
            },
            {
                width: '100%',
                skewX: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.inOut'
            }
        )
        .from([aboutH2.current, line1.current, line2.current], {
            autoAlpha: 0,
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.3
        })
        
    },[])
    return (
        <>
            <Header />
            <section className="about">
                <div className="about__bg" ref={aboutBg}></div>
                <div className="about__bg--addition" ref={aboutBgAddition}></div>

                <div className="about__container">
                    <h2 ref={aboutH2}>
                        Hi there, I'm Camilo Perilla
                    </h2>
                    <p ref={line1}>
                        <span >
                            I'm a Frontend Developer that also happens to study Mechatronics Engineering. I like technology, a lot.
                        </span>
                    </p>
                    <p ref={line2}>
                        <span >
                            I strongly believe that technology is shaping our society, that's the reason why I don't simply consume it but also create it.
                        </span>
                    </p>
                </div>

            </section>
        </>
    )
}

export default About
