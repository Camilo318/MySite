import React from 'react'
import pokedex from '../assets/images/pokedex.jpg'
import pokecard from '../assets/images/pokecard.jpg'
import booking from '../assets/images/booking.jpg'
import tattly from '../assets/images/tattly.jpg'


const WorkItem = (props) => {
    const {title, des, color, id, link} = props
    const images = [pokecard, pokedex, booking, tattly]
    return (
        <div className='work__item' style={{backgroundColor: color}}>
            <div className="work__inner">
                <div className="work__img">
                    <a href={link} target='__blank'>
                        <img src={images[id - 1]} alt=""/>
                    </a>
                </div>
                <div className="work__description">
                    <h3>{title}</h3>
                    <p>{des}</p>
                </div>
            </div>
            
        </div>
    )
}

export default WorkItem
