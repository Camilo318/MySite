import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const MobileNav = ({isOpen, setMenu}) => {
    const navigation = useRef(null)
    const closeMenu = () => {
        setMenu()
    }

    useEffect(() => {
        if (isOpen) {
            console.log('Open')
            gsap.to(navigation.current, {
                x: 0,
                duration: 0.7,
                ease: 'power3.inOut'
            })
        } else {
            console.log('Close')
            gsap.to(navigation.current, {
                x: '100%',
                duration: 0.7,
                ease: 'power3.inOut'
            }) 
        }
    }, [isOpen])
    return (
        <div className='mobile-nav' ref={navigation}>
            <span onClick={closeMenu}>&times;</span>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/11XwuoGN4BABLUWxkhZKSGMwEk2hLxGfF/view?usp=sharing" target='__blank' onClick={closeMenu}>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="mailto:camiloa0318@gmail.com?subject=Hi there!" onClick={closeMenu}>
                            Email
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default MobileNav
