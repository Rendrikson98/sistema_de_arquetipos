import React, {useState, useEffect} from 'react';
import { MenuList, PostBloodPressure, PaginationNumber} from '../../Person/Person';

import api from '../../sevices/api';
import '../../stylesGlobal.css';
import './styles.css';


export default function ListBloodPressure(){
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    useEffect(()=>{
        const fetchPosts = async () => {
            setLoading(true);
            await api.get('bloodPressure').then(res => {
                setPosts(res.data);
                setLoading(false)
            })
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div>
            <header>
                <MenuList name={'Pressão Arterial'} link={'/bloodPressure'}/>
            </header>
            <div className='profile-container'>
                <h1>Casos Pressão Arterial</h1>
                <PostBloodPressure posts={currentPosts} loading={loading}/>
            </div>
            <PaginationNumber postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>    
    )
}