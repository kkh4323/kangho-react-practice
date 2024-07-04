import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {CardComponent} from "../components";

const MovieList = () => {

    const [movies, setMovies] = useState([])
    console.log(movies)

    const getMovieData = async (e) => {
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

    useEffect(() => {
        getMovieData()
    }, [])
    return (
        <Container className={"mt-5"}>
            <h1>Movies</h1>
            <Row>
                {movies.map(movie => (
                    <CardComponent
                        id={movie.id}
                        title={movie.title}
                        overview={movie.overview}
                        img={movie.poster_path}
                        category={"movie"}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;