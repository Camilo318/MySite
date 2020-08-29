import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({open}) => {
    const navigation = React.createRef(null)

    useEffect(() => {
        if (open === true) {
            console.log('Open')
            gsap.to(navigation.current, {
                x: 0,
                duration: 1,
                ease: 'power3.out'
            })
        } else {
            gsap.to(navigation.current, {
                x: '100%',
                duration: 1,
                ease: 'power3.out'
            }) 
        }
    }, [open])
    return (
        <div className='mobile-nav' ref={navigation}>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="https://drive.google.com/file/d/1PB9ZM8wDjlrmMWG17P60QXCwUPsnxA7s/view?usp=sharing">Resume</a></li>
                    <li><a href="mailto:camiloa0318@gmail.com?subject=Hi there!">Email</a></li>
                </ul>
            </nav>
            
        </div>
    )
}

export default MobileNav
