import React, { useEffect, useRef, useState } from 'react'

import ImgWithFallback from './ImgWithFallback'
import Images from '../Images'


const WorkItem = (props) => {
    const {title, des, color, id, link, repo} = props
    const el = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new window.IntersectionObserver(entry => {
            const { isIntersecting } = entry[0]
            if (isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        })
        observer.observe(el.current)
    }, [el])



    return (
        <div className='work__item'
        style={{backgroundColor: color}}
        ref={el}>
            {show && <>
            <div className="work__inner">
                <div className="work__img">
                    <a href={link} target='__blank'>
                        <ImgWithFallback
                            src={Images[id - 1].src}
                            fallback={Images[id - 1].fallback}
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
