import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const TvList = () => {

    const [tvs, setTvs] = useState([])
    console.log(tvs)

    const getTvData = async (e) => {
        e.preventDefault()
        try {
            const url = "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1"

            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDBlODNjOWE2YjBhMzBkNjUwMDk4ODk1ZTE0ZjQzMyIsIm5iZiI6MTcxOTYyMjYyMi45NTQ0Mywic3ViIjoiNjY3NjJmMDZmYWUwOTc1MTcxM2FmNzJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5bG1X9NYAVBiXLT9scnCHeh7rHRqoZTsm-AY0DfHpWk"
                }
            }

            const {data, status} = await axios.get(url, config)

            if (status === 200) {
                setTvs(data.results)
            }
        } catch (err) {
            console.log(err.messages)
        }
    }

    useEffect(() => {
        getTvData()
    }, [])
    return (
        <Container className={"mt-5"}>
            <h1>TV</h1>
            <Row>
                {tvs.map(tv => (
                    <Col className={"mt-3"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img
                                variant="top"
                                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                                style={{ height: "400px"}}
                            />
                            <Card.Body>
                                <Card.Title>{tv.name}</Card.Title>
                                <Card.Text style={{ height: "80px"}}>{tv.overview === "" ? "Empty Overview" : tv.overview.slice(0, 80)}</Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/*<button onClick={getTvData}>TV 데이터 불러오기</button>*/}
        </Container>
    );
};

export default TvList;