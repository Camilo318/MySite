import React, { useEffect, useRef, useState } from 'react'
import Doraemon from '../assets/images/doraemon.webp'
import twitter from '../assets/images/Twitter.svg'
import link from '../assets/images/Link.svg'

const Banner = () => {
    const bannerBg = useRef(null)
    const bannerBgAddition = useRef(null)
    const bannerH1 = useRef(null)
    const bannerH3 = useRef(null)
    const bannerSocial = useRef(null)
    const Image = useRef(null)
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
        .from([bannerH1.current, bannerH3.current, bannerSocial.current], {
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

        gsap.from(Image.current, {
            autoAlpha:0,
            x: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.in',
            delay: 2
        })
    }, [])
    const [dir, setDir] = useState(0)
    const easterEgg = () => {
        setDir(dir => 1 - dir)
        console.log(dir)
    }
    useEffect(() => {
        
        gsap.to(Image.current, {
            y: 100 * dir,
            x: -500 * dir,
            duration: 1,
            ease: 'power3.inOut'
        })
    }, [dir])

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
                        Hey, I am Camilo
                    </h1>
                    <h3 ref={bannerH3}>
                        I build Web Apps that deliver amazing experiences
                    </h3>
                    
                    <div className="social" ref={bannerSocial}>
                        <a href="">
                            <img src={twitter} alt="twitter"/>
                        </a>
                        <a href="">
                            <img src={link} alt="link"/>
                        </a>
                    </div>
                </div>
                <div className="banner__image" ref={Image} onClick={easterEgg}>
                    <img src={Doraemon} alt="Doraemon" title='Doraemon is the best thing ever!'/>
                </div>
            </div>
        </section>
    )
}

export default Banner
