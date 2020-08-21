import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="header-container">
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
