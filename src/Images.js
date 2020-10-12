import pokeHunt from './assets/images/webp/PokeHunt.webp'
import pokeHuntFallback from './assets/images/png/PokeHunt.png'

import blohshBooks from './assets/images/webp/BlohshBooks.webp'
import blohshBooksFallback from './assets/images/png/BlohshBooks.png'

import seatMovie from './assets/images/webp/SeatMovie.webp'
import seatMovieFallback from './assets/images/png/SeatMovie.png'

import pokeCard from './assets/images/webp/PokeCard.webp'
import pokeCardFallback from './assets/images/png/PokeCard.png'

const Images = [ //Array of static pictures
    {
        src: pokeCard,
        fallback: pokeCardFallback
    },
    {
        src: pokeHunt,
        fallback: pokeHuntFallback
    },
    {
        src: seatMovie,
        fallback: seatMovieFallback
    },
    {
        src: blohshBooks,
        fallback: blohshBooksFallback
    },
    
]

export default Images