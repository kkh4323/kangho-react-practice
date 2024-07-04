import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

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
                    <Col className={"mt-5, mb-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                style={{ height: "400px" }}
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{movie.title.slice(0, 20)}</Card.Title>
                                <Card.Text style={{ height: "100px"}}>{movie.overview.slice(0, 80)}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;