import React, { useEffect, useRef, useState } from 'react'
import pokedex from '../assets/images/pokehunt.webp'
import pokecard from '../assets/images/Pokemon-Card.webp'
import booking from '../assets/images/Booking.webp'
import tattly from '../assets/images/Tattly.webp'


const WorkItem = (props) => {
    const {title, des, color, id, link, repo} = props
    const images = [pokecard, pokedex, booking, tattly]
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
                        <img
                        src={images[id - 1]}
                        alt={title}/>
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
