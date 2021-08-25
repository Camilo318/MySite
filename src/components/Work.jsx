import React, { useRef, useEffect } from 'react'
import WorkItem from './WorkItem'
import data from '../myData'
import doraemon from '../assets/images/webp/giphy.webp'

const Work = () => {
  const works = data()
  const doraemonRef = useRef(null)
  const fadeIn = el => {
    gsap.from(el, {
      autoAlpha: 0,
      y: -100,
      duration: 1,
      ease: 'elastic'
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entry => {
        const { intersectionRatio } = entry[0]
        if (intersectionRatio > 0.9) {
          fadeIn(doraemonRef.current)
          observer.disconnect()
        }
      },
      { threshold: 0.9 }
    )
    observer.observe(doraemonRef.current)
  })

  return (
    <section className='work'>
      <h2>My Work</h2>
      <div className='work__container'>
        {works
          .sort((a, b) => a.id - b.id)
          .map(work => {
            return <WorkItem {...work} key={work.id} />
          })}
      </div>
      <div className='doraemon' ref={doraemonRef}>
        <h3>
          Even more cool stuff is coming from doraemon's pocket, stay
          tuned
        </h3>
        <img src={doraemon} alt='Doraemon' />
      </div>
    </section>
  )
}

export default Work
