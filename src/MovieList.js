import React, {useState} from 'react';
import axios from "axios";

const MovieList = () => {

    const [movies, setMovies] = useState([])
    console.log(movies)

    const getMovieData = async (e) => {
        e.preventDefault()
        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDBlODNjOWE2YjBhMzBkNjUwMDk4ODk1ZTE0ZjQzMyIsIm5iZiI6MTcxOTYyMjYyMi45NTQ0Mywic3ViIjoiNjY3NjJmMDZmYWUwOTc1MTcxM2FmNzJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5bG1X9NYAVBiXLT9scnCHeh7rHRqoZTsm-AY0DfHpWk"
                }
            }
            const url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"

            const {data, status} = await axios.get(url, config)

            if (status === 200) {
                setMovies(data.results)
            }
        } catch (err) {
            console.log(err.messages)
        }
    }
    return (
        <div>
            <h1>{movies.length}</h1>
            {movies.map(movie => (
                <div>
                    <h1>{movie.title}</h1>
                    <h2>{movie.vote_average}</h2>
                    <p>{movie.overview}</p>
                </div>
            ))}
            <button onClick={getMovieData}>데이터 불러오기</button>
        </div>
    );
};

export default MovieList;