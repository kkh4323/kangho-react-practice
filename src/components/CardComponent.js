import React from 'react';
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardComponent = ({id, img, title, overview, category}) => {
    return (
        <Col className={"mt-5, mb-5"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    style={{ height: "400px" }}
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${img}`} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 20)}</Card.Title>
                    <Card.Text style={{ height: "100px"}}>{overview.slice(0, 80)}</Card.Text>
                    <Link to={`/${category}/${id}`}>
                        <Button variant="primary">Go Detail</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardComponent;