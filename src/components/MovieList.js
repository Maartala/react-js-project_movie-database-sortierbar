import movies from '../data/movies.js';
import MovieItem from './MovieItem';
import { useState } from 'react';

const MovieList = () => {
    // console.log(movies);
    const [movieArr, setMovieArr] = useState(movies)


    const handleSortAZ = () => {
        const newArr = [...movieArr]
        const sortedArr = newArr.sort((ersterMovie, zweiterMovie) => {
            let aMovie = ersterMovie.title
            let bMovie = zweiterMovie.title

            if (aMovie < bMovie) {
                return -1
            } else if (aMovie > bMovie) {
                return 1
            } else {
                return 0
            }
        })
        setMovieArr(sortedArr)
    }

    const handleSortZA = () => {
        const newArr = [...movieArr]
        const sortedArr = newArr.sort((ersterMovie, zweiterMovie) => {
            let aMovie = ersterMovie.title
            let bMovie = zweiterMovie.title

            if (aMovie < bMovie) {
                return 1
            } else if (aMovie > bMovie) {
                return -1
            } else {
                return 0
            }
        })
        setMovieArr(sortedArr)
    }

    const sortBestRate = () => {
        const newArr = [...movieArr]
        console.log(newArr)
        const sortedArr = newArr.sort((ersterMovie, zweiterMovie) => {
            let aMovie = ersterMovie.rate
            let bMovie = zweiterMovie.rate

            if (aMovie < bMovie) {
                return 1
            } else if (aMovie > bMovie) {
                return -1
            } else {
                return 0
            }
        })
        setMovieArr(sortedArr)
    }

    const sortDateAscending = () => {
        const newArr = [...movieArr]
        const sortedArr = newArr.sort((ersterMovie, zweiterMovie) => {
            let aMovie = ersterMovie.year
            let bMovie = zweiterMovie.year

            if (aMovie < bMovie) {
                return 1
            } else if (aMovie > bMovie) {
                return -1
            } else {
                return 0
            }
        })
        setMovieArr(sortedArr)
    }

    const sortDateDescending = () => {
        const newArr = [...movieArr]
        const sortedArr = newArr.sort((ersterMovie, zweiterMovie) => {
            let aMovie = ersterMovie.year
            let bMovie = zweiterMovie.year

            if (aMovie < bMovie) {
                return -1
            } else if (aMovie > bMovie) {
                return 1
            } else {
                return 0
            }
        })
        setMovieArr(sortedArr)
    }

    const searchMovie = (event) => {
        event.preventDefault(); //verhindert Neuladen der Seite
        const input = event.target.querySelector('input');
        const searchTerm = input.value;
        const filteredMovies = movies.filter((movie) => {
            return (
                movie.title.toLowerCase().includes(searchTerm.toLowerCase())
            )

        })
        setMovieArr(filteredMovies);
        input.value = ''; //leert das Input-Feld
    }

    const data = movieArr.map((movie, i) => {
        return (
            <MovieItem
                key={i}
                title={movie.title}
                year={movie.year}
                director={movie.director}
                duration={movie.duration}
                genre={movie.genre}
                rate={movie.rate}
            />
        )
    })

    return (
        <section>
            <div className="sortBar">
                <button onClick={handleSortAZ}>AZ</button>
                <button onClick={handleSortZA}>ZA</button>
                <button onClick={sortBestRate}>Best Rate</button>
                <button onClick={sortDateAscending}>Neuste zuerst</button>
                <button onClick={sortDateDescending}>Älteste zuerst</button>
                <form action="" onSubmit={searchMovie}>
                    <input type="text" name="" id="" placeholder='search movie' />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className='movie_list_grid'>{data}</div>
        </section>
    );
}

export default MovieList;