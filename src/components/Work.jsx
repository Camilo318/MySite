import React from 'react'
import WorkItem from './WorkItem'
import data from '../myData'

const Work = () => {
    const works = data()

    return (
        <section className='work'>
            <h2>My Work</h2>
            <div className="work__container">
                {works
                .sort((a,b) => a.id - b.id)
                .map(work => {
                    return (
                        <WorkItem {...work} key={work.id}/>
                    )
                })}
            </div> 
        </section>
    )
}

export default Work
