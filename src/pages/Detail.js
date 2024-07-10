import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom"
import axios from 'axios';
import {Container, Button, Row, Col, Card, Image} from "react-bootstrap"

const Detail = () => {
    const { id } = useParams()

    const { pathname } = useLocation()

    const location = pathname.includes('movie')

    const [detailData, setDetail] = useState({})

    const getDetailData = async () => {

        try {
            const config = {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDBlODNjOWE2YjBhMzBkNjUwMDk4ODk1ZTE0ZjQzMyIsIm5iZiI6MTcxOTYyMjYyMi45NTQ0Mywic3ViIjoiNjY3NjJmMDZmYWUwOTc1MTcxM2FmNzJiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.5bG1X9NYAVBiXLT9scnCHeh7rHRqoZTsm-AY0DfHpWk"
                }
            }
            const url = `https://api.themoviedb.org/3/${location ? 'movie' : 'tv'}/${id}?language=en-US`

            const {data, status} = await axios.get(url, config)
            console.log(data)
            if (status === 200) {
                setDetail(data)
            }
        } catch (err) {
            console.log(err.messages)
        }
    }

    useEffect(() => {
        getDetailData()
    }, [])

    return (
        <Container className="mt-5">
            <Link to={-1}>
                <Button variant="link">Back</Button>
            </Link>
            <Row className="my-4">
                <Col md={4}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Image src={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`} rounded fluid></Image>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{location ? detailData.title : detailData.name}</Card.Title>
                            <Card.Text>
                                <strong>Release Date: </strong>{detailData.release_date}<br/>
                                <strong>Rating: </strong>{detailData.vote_average}<br/>
                                <strong>Overview: </strong>{detailData.overview}<br/>
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Detail;