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


const ListExam = props =>
    <Col md={6}>
        <li key={props.id}>
            <strong>ID</strong>
            <p>{props.id}</p>
            
            <strong>Sistema</strong>
            <p>{props.systeOrEstru}</p>

            <strong>Local do corpo</strong>
            <p>{props.bodyLocation}</p>

            <strong>Anormalidade</strong>
            <p>{props.noAbnormality}</p>

            <strong>Descrição clínica</strong>
            <p>{props.clinicalDescription}</p>

            <strong>Interpretação clínica</strong>
            <p>{props.clinicalInterpretation}</p>

            <strong>Comentários</strong>
            <p>{props.comment}</p>

            <button type='button' onClick={()=>saveID(props.id)}>
                <Link to={'/examUpdate/' + props.id}><BsPencil size={18} color='#E020441'/></Link>
            </button>
        </li>
    </Col>

export {Menu, ListExam};


function saveID(id){
    localStorage.setItem('ID', id);
 }