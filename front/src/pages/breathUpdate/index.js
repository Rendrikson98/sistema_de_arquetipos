import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button, Row} from 'react-bootstrap';

import api from '../../sevices/api';



export default function BreathUpdate(){
    const [history, setHistory] = useState('');
    const [presence, setPresence] =  useState('');
    const [frequency, setFrequency] = useState('');
    const [regularity, setRegularity] = useState('');
    const [depth, setDepth] = useState('');
    const [clinicalDescription, setClinicalDescription] = useState('');
    const [clinicalInterpretation, setClinicalInterpretation] = useState('');
    const [comment, setComment] = useState('');
    const [bodyPosition, setBodyPosition] = useState('');
    const [confoundingFactors, setConfoundingFactors] = useState('');

        const redirect = useHistory();
        const ID = localStorage.getItem('ID');

    useEffect(()=>{
        api.get(`breathUpdate/${ID}`).then(response => {
            setHistory(response.data.history);
            setPresence(response.data.presence);
            setFrequency(response.data.frequency);
            setRegularity(response.data.regularity);
            setDepth(response.data.depth);
            setClinicalDescription(response.data.clinicalDescription);
            setClinicalInterpretation(response.data.clinicalInterpretation);
            setComment(response.data.comment);
            setBodyPosition(response.data.bodyPosition);
            setConfoundingFactors(response.data.confoundingFactors);
        })
    },[]);

    async function handleBreath(e){
        e.preventDefault();

        const data = {
            history,
            presence,
            frequency,
            regularity,
            depth,
            clinicalDescription,
            clinicalInterpretation,
            comment,
            bodyPosition,
            confoundingFactors  
        };


        try{
           await api.put(`/breathUpdate/${ID}`, {
            "history": data.history,
            "presence": data.presence,
            "frequency": data.frequency,
            "regularity": data.regularity,
            "depth": data.depth,
            "clinicalDescription": data.clinicalDescription,
            "clinicalInterpretation": data.clinicalInterpretation,
            "comment": data.comment,
            "bodyPosition": data.bodyPosition,
            "confoundingFactors": data.confoundingFactors 
           });

           alert('Dados atualizados com sucesso');

           localStorage.clear();

           redirect.push('/listBreath');
        }catch(err){
            alert('Erro ao enviar os dados, tente novamente');
        }
    }

    return(
        <div className='main-section'>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/" id='titulo'>Atualização - Breath</Link>
                </div>
            </nav>
        <div className="row justify-content-center">
            <div className="col-sm-10" style={{marginTop:'1%'}}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Respirações</h5>
                        <form onSubmit={handleBreath}>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>History</label>
                                    <select id="1" className="form-control" value={history} onChange={e=> setHistory(e.target.value)}>
                                    <option></option>
                                    <option>Qualquer evento</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12"></div>
                                <div className="form-group col-md-6" >
                                    <label>Presence(en)</label>
                                    <select id="2" className="form-control" value={presence} onChange={e=> setPresence(e.target.value)}>
                                        <option></option>
                                        <option>*Present (en)</option>
                                        <option>*Not detected (en)</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6" >
                                    <label>Frequência</label>
                                    <input 
                                        id='3'
                                        className="form-control" 
                                        placeholder="00" 
                                        value={frequency}
                                        onChange={e=> setFrequency(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Regularity(en)</label>
                                    <select id="4" className="form-control" value={regularity} onChange={e=> setRegularity(e.target.value)}>
                                        <option></option>
                                        <option>Regular</option>
                                        <option>Irregular</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Profundidade</label>
                                    <select id="5" className="form-control" value={depth} onChange={e=>setDepth(e.target.value)}>
                                        <option></option>
                                        <option>Normal</option>
                                        <option>Superficial</option>
                                        <option>Profunda</option>
                                        <option>variável</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Clinical Description(en)</label>
                                    <input 
                                        id='6'
                                        className="form-control"
                                        placeholder="Clinical description"
                                        value={clinicalDescription}
                                        onChange={e=>setClinicalDescription(e.target.value)}
                                        />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Interpretação clinica</label>
                                    <input
                                        id='7'
                                        className="form-control"
                                        placeholder="Interpretação Clínica"
                                        value={clinicalInterpretation}
                                        onChange={e=>setClinicalInterpretation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Comment(en)</label>
                                    <input
                                        id='8'
                                        className="form-control"
                                        placeholder="Comment"
                                        value={comment}
                                        onChange={e=>setComment(e.target.value)}    
                                    />
                                </div>
                            </div>
                        
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <h5 className="card-title">State</h5>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Body position</label>
                                    <select id="9" className="form-control" value={bodyPosition} onChange={e=>setBodyPosition(e.target.value)}>
                                        <option></option>
                                        <option>*Standing/upright (en)</option>
                                        <option>*Sitting (en)</option>
                                        <option>*Reclining (en)</option>
                                        <option>*Lying (en)</option>
                                        <option>*Prone (en)</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Fatores de confusão</label>
                                    <input
                                        id='10'
                                        className="form-control"
                                        placeholder="Fatores de confusão"
                                        value={confoundingFactors}    
                                        onChange={e=>setConfoundingFactors(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-12"></div>
                                <div>
                                <Row style={{marginLeft: '7px'}}> 
                                    <Button type="submit" className="btn btn-primary" style={{marginRight: '10px'}}>Confirmar</Button>
                                    <Button className='d-flex justify-content-right'>
                                        <Link to='/listBreath' style={{color: 'white', fontStyle: 'none'}}>
                                            Cancelar
                                        </Link>
                                    </Button>
                                </Row>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}