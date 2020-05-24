import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Row, Container, Col} from 'react-bootstrap';
import { Posts, PaginationNumber} from '../../Person/Person';


import api from '../../sevices/api';
import '../../stylesGlobal.css';


export default function List(){

 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [postsPerPage] = useState(4);

 useEffect(()=> {
    const fetchPosts = async () => {
        setLoading(true);
        await api.get('exam').then(res => {
            setPosts(res.data);
            setLoading(false);
            
        });
    }

     fetchPosts();
 }, [])


//console.log(posts)

//GET current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirsPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirsPost, indexOfLastPost);

//Change page

const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
                    <div className="container">
                        <Link className="navbar-brand" to="/" id='titulo' style={{marginLeft:'20px'}}>Lista - Exame</Link>
                    </div>
                    <div style={{marginRight:'20px', fontStyle: '#F0F0F0'}}>
                    <Link to='/exam'>voltar</Link>
                    </div>
                </nav>
            </header>
            <div className='profile-container'>
                <h1>Casos Exame</h1>
                <Container>
                <ul>
                    <Row>
                        <Posts posts={currentPosts} loading={loading}/>
                    </Row>
                </ul>
                </Container>
            </div>
            
            <Container className='d-flex justify-content-center'>
                <Row>
                    <Col md={12} style={{backgroundColor:'white'}}>
                        <PaginationNumber postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}