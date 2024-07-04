import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from "react-router-dom"
import axios from 'axios';
import { Container, Button } from "react-bootstrap"

const Detail = () => {
    const { id } = useParams()

    const { pathname } = useLocation()
    console.log("###############", pathname)

    const location = pathname.includes('movie')

    const [detailData, setDetail] = useState({})

    const getDetailData = async (e) => {

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
        <Container className={"mt-5"}>
            <Link to={-1}>
                <Button variant="link">Back</Button>
            </Link>
            <h1>{location ? detailData.title : detailData.name}</h1>
        </Container>
    );
};

export default Detail;