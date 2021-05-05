import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <h3>
          Developed by Camilo Perilla &copy;{new Date().getFullYear()}
        </h3>
      </div>
    </footer>
  )
}

export default Footer
