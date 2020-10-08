const data = () => {
    const works = [
        {
            title: 'Pokemon Card Game',
            des: 'A fun memory game made with HTML/CSS and Vanilla JS. OOP approach was used to create all the logic behind. Catching pokemons has never been so much fun!',
            id: 1,
            color: '#ea5455',
            link: 'https://pokecardgame.netlify.app/',
            repo: 'https://github.com/Camilo318/PokemonCardGame'
        },
        {
            title: 'Poke Hunt',
            des: 'Oh boy! I kinda hit it out the park with this one. It is a SPA made with ReactJS and Redux, so it is blazing fast and super responsive. See stats, keep track of your pokemons and more! ',
            id: 2,
            color: '#6f4a8e',
            link: 'https://pokehunt.netlify.app/#/',
            repo: 'https://github.com/Camilo318/PokeHunt'
        },
        {
            title: 'Movie Seat Picker',
            des: 'A very simple UI for picking seats in the cinema. Every movie has its own seats with selected, occupied and free options.',
            id: 3,
            color: '#00587a',
            link: 'https://movie-seat-app.netlify.app/',
            repo: 'https://github.com/Camilo318/MovieSeatBooking'
        },
        {
            title: 'Blohsh Books',
            des: 'My first FullStack Wep App. Using Express and MongoDB to create a data base that stores all the books you add on the client side in real time',
            id: 4,
            color: '#41aea9',
            link: 'https://blohsh-books.herokuapp.com/',
            repo: 'https://github.com/Camilo318/Blohsh-Books'
        }
    ]

    return works
}

export default data