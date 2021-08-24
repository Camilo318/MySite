import React, { useEffect, useRef, useState } from 'react'
import Doraemon from '../assets/images/webp/doraemon.webp'
import twitter from '../assets/images/gorjeo.svg'
import link from '../assets/images/linkedin.svg'
import github from '../assets/images/github.svg'

const Banner = () => {
  const bannerBg = useRef(null)
  const bannerBgAddition = useRef(null)
  const bannerH1 = useRef(null)
  const bannerH2 = useRef(null)
  const bannerSocial = useRef(null)
  const Image = useRef(null)
  const bannerTL = gsap.timeline()

  useEffect(() => {
    bannerTL
      .fromTo(
        [bannerBg.current, bannerBgAddition.current],
        {
          width: 0,
          skewX: 4
        },
        {
          skewX: 0,
          width: '100%',
          ease: 'power3.inOut',
          duration: 1.2,
          stagger: {
            amount: 0.2
          }
        }
      )
      .from(
        [bannerH1.current, bannerH2.current, bannerSocial.current],
        {
          autoAlpha: 0,
          delay: 0.2,
          duration: 0.9,
          y: 80,
          stagger: {
            amount: 0.3
          },
          ease: 'power3.out'
        }
      )

    gsap.from(Image.current, {
      autoAlpha: 0,
      x: 100,
      duration: 0.8,
      ease: 'power3.in',
      delay: 1.5
    })

    Draggable.create('.banner__image', {
      type: 'x,y'
    })
  }, [])

  return (
    <section className='banner'>
      <div className='banner__bg' ref={bannerBg}></div>
      <div
        className='banner__bg--addition'
        ref={bannerBgAddition}></div>

      <div className='banner__container'>
        <div className='banner__inner'>
          <h1 ref={bannerH1}>Hey, I am Camilo</h1>
          <h2 ref={bannerH2}>
            I build Web Apps that deliver amazing experiences. And
            yes, you saw right, that is a flying Doraemon. Try to move
            it around
          </h2>

          <div className='social' ref={bannerSocial}>
            <a href='https://github.com/Camilo318' target='__blank'>
              <img src={github} alt="Camilo's github" />
            </a>
            <a
              href='https://linkedin.com/in/camilo-perilla-niño'
              target='__blank'>
              <img src={link} alt="Camilo's linkedin" />
            </a>
            <a
              href='https://twitter.com/GlutenFree318'
              target='__blank'>
              <img src={twitter} alt="Camilo's twitter" />
            </a>
          </div>
        </div>
        <div className='banner__image' ref={Image}>
          <img
            src={Doraemon}
            alt='Little Doraemon flying on the website'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
