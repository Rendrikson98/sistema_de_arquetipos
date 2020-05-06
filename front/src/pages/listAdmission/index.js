import React, { useState, useEffect } from 'react';
import {MenuList, PostsAdmission, PaginationNumber} from '../../Person/Person';
import api from '../../sevices/api';

import '../../stylesGlobal.css';

export default function ListAdmission(){

    const [posts, setPots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(2);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            setLoading(true);
            await api.get('admission').then( post =>{
                setPots(post.data);
                setLoading(false);
            })
        }

        fetchPosts();
    }, []);


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate =(pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <header>
                <MenuList name={'Admission'} link={'/admission'}/>
            </header>
            <div className='profile-container'>
                <PostsAdmission posts={currentPosts} loading={loading}/>
            </div>
            <PaginationNumber postsPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
        )
}