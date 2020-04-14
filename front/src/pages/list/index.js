import React, { useState, useEffect } from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';


import api from '../../sevices/api';
import './styles.css';

export default function List(){
 const [incidents, setincidents] = useState([]);



 useEffect(()=>{
     api.get('exam').then(response => {
         setincidents(response.data);
     })
 })


    return(
        <>
        <div>
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
        </div>
        <div className='profile-container'>
            <h1>Casos Exame</h1>

            <ul>
                {incidents.map(incident => (
                    <Card>
                    <li key={incident.id}>
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

                    </li>
                    </Card>
                ))}
            </ul>
        </div>
        </>
    );
}