import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Row, Container} from 'react-bootstrap';
import {ListExam} from '../../Person/Person';


import api from '../../sevices/api';
import './styles.css';

export default function List(){
    

 const [incidents, setincidents] = useState([]);

 useEffect(()=>{
     api.get('exam').then(response => {
         setincidents(response.data);
     })
 }, [])

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
                    <ListExam 
                        id={incident.id}
                        systeOrEstru = {incident.systeOrEstru}
                        bodyLocation = {incident.bodyLocation}
                        noAbnormality = {incident.noAbnormality}
                        clinicalDescription = {incident.clinicalDescription}
                        clinicalInterpretation = {incident.clinicalInterpretation}
                        comment = {incident.comment}
                    />
                    ))}
                </Row>
                </ul>
                </Container>
            </div>
        </>
    );
}