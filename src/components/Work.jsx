import React from 'react'
import WorkItem from './WorkItem'
import data from '../myData'
import doraemon from '../assets/images/webp/giphy.webp'

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
            <div className='doraemon'>
                <h3>
                    Even more cool stuff is coming from doraemon's pocket, stay tuned
                </h3>
                <img src={doraemon} alt="Doraemon"/>
            </div>
        </section>
    )
}

export default Work
