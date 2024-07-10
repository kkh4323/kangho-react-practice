import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {CardComponent} from "../components";

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    // const getBlogData = async () => {
    //     try {
    //         const url = "http://localhost:8000/api/blog"
    //
    //         const {data, status} = axios.get(url)
    //         console.log(data)
    //         if (status === 200) {
    //             setBlogs(data.results)
    //         }
    //     } catch (err) {
    //         console.log(err.messages)
    //     }
    // }
    //
    // useEffect(() => {
    //     getBlogData()
    // }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/blog')
            .then(response => {
                setBlogs(response.data.body.data);
            }){}
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);
    return (
        <Container className={"mt-5"}>
            <h1>Blogs</h1>
            <Row>
                {blogs.map(blog => (
                    <CardComponent
                        id={blog.id}
                        title={blog.title}
                        overview={blog.desc}
                        img={blog.poster_path}
                        category={"movie"}
                    />
                ))}
            </Row>
        </Container>
    );
};

export default Blog;