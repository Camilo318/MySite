import React from 'react'
import WorkItem from './WorkItem'

const Work = () => {

    const works = [
        {
            title: 'Pokemon Game Card',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis!',
            id: 1,
            color: '#ea5455'
        },
        {
            title: 'Pokedex',
            des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, facilis!',
            id: 2,
            color: '#5026a7'
        },
        {
            title: 'Movie Seat Picker',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis?',
            id: 3,
            color: '#42b883'
        }
    ]
    return (
        <section className='work'>
            <h2>My Work</h2>
            <div className="work__container">
                {works.map(work => {
                    return (
                        <WorkItem {...work} key={work.id}/>
                    )
                })}
            </div> 
        </section>
    )
}

export default Work
