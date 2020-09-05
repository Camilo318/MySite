import React, {useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const setMenu = () => {
        setIsOpen(!isOpen)
    }

    const header = useRef(null)
    useEffect(() => {
        gsap.from(header.current, {
            autoAlpha: 0,
            delay: 1,
            duration: 1,
            opacity: 0,
            y:16,
            ease: 'power3.inOut'
        })
    }, [])

    return (
        <header>
            <div className="header-container" ref={header}>
                <div className="header__logo">
                    CP Blohsh.
                </div>

                <div className="header__navigation">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1PB9ZM8wDjlrmMWG17P60QXCwUPsnxA7s/view?usp=sharing" target='__blank'>
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:camiloa0318@gmail.com?subject=Hi there!">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <MobileNav isOpen={isOpen} setMenu={setMenu}/>
        </header>
    )
}

export default Header
