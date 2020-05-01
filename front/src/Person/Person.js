import React from 'react';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import {BsPencil} from 'react-icons/bs'


const Menu = (props) =>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
    <div className="container">
        <Link className="navbar-brand" to="/" id='titulo'>Arquétipos Editor - {props.name}</Link>
    </div>
    <div style={{marginRight:'20px'}}>
        <Link to='/list'>Listar</Link>
    </div>
    </nav>


const Posts = ({ posts, loading}) => {
   if(loading){
    return <h1>Loading...</h1>
   }

   return(
    
       <>
        {posts.map(post => (
            <Col md={6}>
            <li key={post.id}>
               <strong>ID</strong>
            <p>{post.id}</p>
            
            <strong>Sistema</strong>
            <p>{post.systeOrEstru}</p>

            <strong>Local do corpo</strong>
            <p>{post.bodyLocation}</p>

            <strong>Anormalidade</strong>
            <p>{post.noAbnormality}</p>

            <strong>Descrição clínica</strong>
            <p>{post.clinicalDescription}</p>

            <strong>Interpretação clínica</strong>
            <p>{post.clinicalInterpretation}</p>

            <strong>Comentários</strong>
            <p>{post.comment}</p>

            <button type='button' onClick={()=>saveID(post.id)}>
                <Link to={'/examUpdate/' + post.id}><BsPencil size={18} color='#E020441'/></Link>
            </button>
            </li>
            </Col>
        ))}
        </>
    )
}

const PaginationNumber = ({postsPerPage, totalPosts, paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <Link onClick={() => paginate(number)} to={'#'} className='page-link'>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export {Menu, Posts, PaginationNumber};


function saveID(id){
    localStorage.setItem('ID', id);
 }