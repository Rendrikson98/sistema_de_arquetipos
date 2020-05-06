import React, {useState, useEffect} from 'react';
import {PostBreath, PaginationNumber, MenuList} from '../../Person/Person';

import api from '../../sevices/api';
import '../../stylesGlobal.css';


export default function ListBreath(){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(()=>{
        const fetchPosts = async ()=> {
            setLoading(true);
            await api.get('breath').then(res => {
                setPosts(res.data);
                setLoading(false);
            })
        }

        fetchPosts();
    }, []);

    console.log(posts)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
        <div>
            <header>
                <MenuList name='Breath' link='/breath'/>
            </header>
            <div className='profile-container'>
                <h1>Casos Breath</h1>
                <PostBreath posts={currentPosts} loading={loading}/>
            </div>
            <PaginationNumber postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>   
               
        </div>
    )

}