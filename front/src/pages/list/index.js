import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from 'react-bootstrap';
import {BsPencil} from 'react-icons/bs';


import api from '../../sevices/api';
import './styles.css';

export default function List(){
    

 const [incidents, setincidents] = useState([]);

 useEffect(()=>{
     api.get('exam').then(response => {
         setincidents(response.data);
     })
 }, [])

 function saveID(id){
    localStorage.setItem('ID', id);
 }



 //Ver como coloca as informações no formulário e como enviar paramentros na rota

 //Ver a questão do erro no console no key


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
                {incidents.map(incident => (
                    <Col md={6}>
                        <li key={incident.id}>
                            <strong>ID</strong>
                            <p>{incident.id}</p>
                            
                            <strong>Sistema</strong>
                            <p>{incident.systeOrEstru}</p>

                            <strong>Local do corpo</strong>
                            <p>{incident.bodyLocation}</p>

                            <strong>Anormalidade</strong>
                            <p>{incident.noAbnormality}</p>

                            <strong>Descrição clínica</strong>
                            <p>{incident.clinicalDescription}</p>

                            <strong>Interpretação clínica</strong>
                            <p>{incident.clinicalInterpretation}</p>

                            <strong>Comentários</strong>
                            <p>{incident.comment}</p>

                            <button type='button' onClick={()=>saveID(incident.id)}>
                                <Link to={'/examUpdate/' + incident.id}><BsPencil size={18} color='#E020441'/></Link>
                            </button>
                        </li>
                    </Col>
                    ))}
                </Row>
                </ul>
                </Container>
            </div>
        </>
    );
}