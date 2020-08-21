import React from 'react'
import pokedexImg from '../assets/images/7.png'

const WorkItem = (props) => {
    const {title, des, color, id} = props
    const images = [pokedexImg]
    return (
        <div className='work__item' style={{backgroundColor: color}}>
            <div className="work__inner">
                <div className="work__img">
                    <img src={images[id - 1]} alt=""/>
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
