import React, { useEffect, useRef, useState } from 'react'

import ImgWithFallback from './ImgWithFallback'
import Images from '../Images'


const WorkItem = (props) => {
    const {title, des, color, id, link, repo} = props
    const el = useRef(null)
    const [show, setShow] = useState(false)

    const fadeIn = element => {
        gsap.from(element, {
            autoAlpha: 0,
            opacity: 0,
            duration: 1,
            y: 100,
            ease: 'power3.inOut',
        })
    }

    const fadeOut = element => {
        gsap.to(element, {
            opacity: 0,
            autoAlpha: 1,
            duration: 1,
            y: -100,
            ease: 'power3.inOut'
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(entry => {
            console.log(entry[0].intersectionRatio)
            const { intersectionRatio } = entry[0]
            if (intersectionRatio > 0.5) {
                console.log('Show!')
                fadeIn(el.current)
                setShow(true)
                observer.disconnect()
            }
        }, { threshold: 0.5})
        observer.observe(el.current)
    }, [el])

    return (
        <div
        className='work__item'
        style={{backgroundColor: color}}
        ref={el}>
            {show && <>
            <div className="work__inner">
                <div className="work__img">
                    <a href={link} target='__blank'>
                        <ImgWithFallback
                            src={Images[id].src}
                            fallback={Images[id].fallback}
                            alt='Project view'
                        />
                    </a>
                </div>
                <div className="work__description">
                    <h3>{title}</h3>
                    <p>{des}</p>
                    <div className="work__repo">
                        <a href={repo} target='__blank'>
                            Repository
                        </a>
                    </div>
                </div>
            </div>
            </>}
        </div>
    )
}

export default WorkItem
