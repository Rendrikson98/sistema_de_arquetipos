import React, {useState, useEffect} from 'react';
import {MenuList, PostFamily, PaginationNumber} from '../../Person/Person';

import api from '../../sevices/api';
import '../../stylesGlobal.css';


export default function ListFamily(){

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(()=>{
        const fetchPosts = async ()=> {
            setLoading(true);
            await api.get('family').then(res=>{
                console.log(res.data)
                setPosts(res.data);
                setLoading(false);
            })
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return(
        <div>
            <header>
                <MenuList name='Histórico Familiar' link='/family'/>
            </header>
            <div className='profile-container'>
                <h1>Casos Histórico Familiar</h1>
                <PostFamily posts={currentPosts} loading={loading}/>
            </div>
            <PaginationNumber postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
    )
}