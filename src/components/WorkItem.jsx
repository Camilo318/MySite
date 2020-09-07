import React from 'react'
import pokedex from '../assets/images/pokehunt.webp'
import pokecard from '../assets/images/Pokemon-Card.webp'
import booking from '../assets/images/Booking.webp'
import tattly from '../assets/images/Tattly.webp'


const WorkItem = (props) => {
    const {title, des, color, id, link} = props
    const images = [pokecard, pokedex, booking, tattly]
    return (
        <div className='work__item' style={{backgroundColor: color}}>
            <div className="work__inner">
                <div className="work__img">
                    <a href={link} target='__blank'>
                        <img src={images[id - 1]} alt={`${title} sample`}/>
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
