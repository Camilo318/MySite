import React from 'react'

const ImgWithFallback = ({ src, fallback, type='image/webp', alt}) => {
    return (
        <picture>
            <source srcSet={src} type={type}/>
            <img src={fallback} alt={alt}/>
        </picture>
    )
}

export default ImgWithFallback
