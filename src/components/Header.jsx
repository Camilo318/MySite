import React, {useEffect} from 'react'

const Header = () => {
    const header = React.createRef(null)

    useEffect(() => {
        gsap.from(header.current, {
            duration: 0.8,
            delay: -1,
            opacity: 0,
            y:16,
            ease: 'power3.out',
            delay: 1
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
                            <li><a href="">Work</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Resume</a></li>
                            <li><a href="">Email</a></li>
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
