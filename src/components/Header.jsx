import React, {useEffect} from 'react'

const Header = () => {
    const header = React.createRef(null)

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
                            <li><a href="#work">Work</a></li>
                            <li><a href="">About</a></li>
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
                <div className="header__menu">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header
