import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {Button, Container, Row, Col} from 'react-bootstrap';

import api from '../../sevices/api';

import './styles.css';

export default function ExamUpdate(){
   const [systeOrEstru, setSysteOrEstru] = useState('');
   const [bodyLocation, setBodyLocation] = useState('');
   const [noAbnormality, setNoAbnormality] = useState('');
   const [clinicalDescription, setClinicalDescription] = useState('');
   const [clinicalInterpretation, setClinicalInterpretation] = useState('');
   const [comment, setComment] = useState('');

    const history = useHistory();
    const ID = localStorage.getItem('ID')
    
    useEffect(()=>{
        api.get(`examUpdate/${ID}`).then(response => {
            setSysteOrEstru(response.data.systeOrEstru);
            setBodyLocation(response.data.bodyLocation);
            setNoAbnormality(response.data.noAbnormality);
            setClinicalDescription(response.data.clinicalDescription);
            setClinicalInterpretation(response.data.clinicalInterpretation);
            setComment(response.data.comment);
        })
   }, [])

   async function handleExam(e){
       
        e.preventDefault();

       const data = {
           systeOrEstru,
           bodyLocation,
           noAbnormality,
           clinicalDescription,
           clinicalInterpretation,
           comment
       };
       
       try{
        
        await api.put(`/examUpdate/${ID}`,{
            'systeOrEstru':  data.systeOrEstru,
            'bodyLocation': data.bodyLocation,
            'noAbnormality': data.noAbnormality,
            'clinicalDescription': data.clinicalDescription,
            'clinicalInterpretation': data.clinicalInterpretation,
            'comment': data.comment
        }, );

        alert(`Dados atualizados com sucesso`);

        localStorage.clear();

        history.push('/list');

       }catch(err){
        alert('Erro ao enviar os dados');
       }
   }
    
    return( 
        <div className='main-section'>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/" id='titulo'>Atualização - Exam</Link>
                </div>
            </nav>
            <div className="row justify-content-center">
                <div className="col-sm-10"  style={{marginTop:'1%'}}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Resultados do exame</h5>
                            <form id='form-exam' onSubmit={handleExam}>
                                <div className='form-row'>
                                    <div className='form-group col-md-6'>
                                    <label >Sistema ou extrutura examinada*</label>
                                    <input 
                                        id='1'
                                        className="form-control" 
                                        placeholder="Sisteam ou extrutura examinada" 
                                        value={systeOrEstru} 
                                        onChange={e=> setSysteOrEstru(e.target.value) } 
                                    />
                                    </div>
                                    <div className="form-group col-md-12"></div>
                                    <div className="form-group col-md-6">
                                        <label >Local do corpo*</label>
                                        <input 
                                            id='2'
                                            className="form-control" 
                                            placeholder="Local corpo"
                                            value={bodyLocation}
                                            onChange={e => setBodyLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Nenhuma arnomalidade</label>
                                        <select id='3' className="form-control" value={noAbnormality} onChange={e => setNoAbnormality(e.target.value)} >
                                            <option></option>
                                            <option>True</option>
                                            <option>False</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Descrição clínica</label>
                                        <input  
                                            id='4'
                                            className="form-control" 
                                            placeholder="Descrição Clínica" 
                                            value={clinicalDescription}
                                            onChange={e => setClinicalDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Interpretação clínica</label>
                                        <input 
                                            id='5'
                                            className="form-control"
                                            placeholder="Interpretação Clínica"
                                            value={clinicalInterpretation} 
                                            onChange={e => setClinicalInterpretation(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Comentário</label>
                                        <input 
                                            id='6'
                                            className="form-control"  
                                            placeholder="Comentario" 
                                            value={comment}
                                            onChange={e => setComment(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-12"></div>
                                    <Container>
                                        <Row>
                                            <Col md={0.5}>
                                                <Button className='primary' type='submit'>Enviar</Button>
                                            </Col>
                                            <Col md={1}>
                                            <Button className='d-flex justify-content-right'>
                                                <Link to='/list' style={{color: 'white', fontStyle: 'none'}}>
                                                    Cancelar
                                                </Link>
                                            </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>           
        
    
    )
}