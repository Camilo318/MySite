import React from 'react'

const WorkItem = (props) => {
    const {title, des, color} = props
    return (
        <div className='work__item' style={{backgroundColor: color}}>
            <div className="work__inner">
                <div className="work__img">

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
