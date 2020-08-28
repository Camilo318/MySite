import React, { useEffect }from 'react'
import Header from './Header'

const line1 = React.createRef(null)
const line2 = React.createRef(null)
const aboutH2 = React.createRef(null)
const aboutTL = gsap.timeline()
const About = () => {

    useEffect(() => {
        aboutTL.from(aboutH2.current, {
            delay: 1.2,
            autoAlpha: 0,
            duration: 0.6,
            opacity: 0,
            y: 30
        })
        .from([line1.current, line2.current], {
            autoAlpha: 0,
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        
    },[])
    return (
        <>
            <Header />
            <section className="about">
                <div className="about__container">
                    <h2 ref={aboutH2}>
                        Hi there, I'm Camilo Perilla
                    </h2>
                    <p ref={line1}>
                        <span >
                            I'm a Frontend Developer that also happens to study Mechatronics Engineering. I like technology, a lot
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
