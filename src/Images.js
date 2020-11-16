import pokeHunt from './assets/images/webp/PokeHunt.webp'
import pokeHuntFallback from './assets/images/png/PokeHunt.png'

import blohshBooks from './assets/images/webp/BlohshBooks.webp'
import blohshBooksFallback from './assets/images/png/BlohshBooks.png'

import seatMovie from './assets/images/webp/SeatMovie.webp'
import seatMovieFallback from './assets/images/png/SeatMovie.png'

import pokeCard from './assets/images/webp/PokeCard.webp'
import pokeCardFallback from './assets/images/png/PokeCard.png'

import blohshNotes from './assets/images/webp/BlohshNotes.webp'
import blohshNotesFallback from './assets/images/png/BlohshNotes.png'
import bataBit from './assets/images/webp/Bata-bit.webp'
import bataBitFallback from './assets/images/png/Bata-bit.png'

const Images =  //Array of static pictures
    {
        '1': {
            src: blohshNotes,
            fallback: blohshNotesFallback
        },
        '6': {
            src: bataBit,
            fallback: bataBitFallback
        }
        ,
        '3': {
            src: pokeCard,
            fallback: pokeCardFallback
        },

        '2': {
            src: pokeHunt,
            fallback: pokeHuntFallback
        },

        '5': {
            src: seatMovie,
            fallback: seatMovieFallback
        },

        '4': {
            src: blohshBooks,
            fallback: blohshBooksFallback
        }
    }
export default Images