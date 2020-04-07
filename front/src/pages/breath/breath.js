import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

import api from '../../sevices/api';

import './styles.css';

export default function Breath(){
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
            const response = await api.post('breath', data);

            alert(`Dados enviados com sucesso a Id desse formulário é: ${response.data.id}`);
        }catch(err){
            alert('Erro ao enviar os dados, tente novamente');
        }
    }


    return(
        <div className='main-section'>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/" id='titulo'>Arquétipos Editor - Breath</Link>
                </div>
            </nav>
            <div className="row justify-content-center">
                <div className="col-sm-10">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Respirações</h5>
                            <form onSubmit={handleBreath}>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>History</label>
                                        <select id="history" className="form-control" value={history} onChange={e=> setHistory(e.target.value)}>
                                        <option></option>
                                        <option>Qualquer evento</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-12"></div>
                                    <div className="form-group col-md-6" id='first'>
                                        <label>Presence(en)</label>
                                        <select id="presence" className="form-control" value={presence} onChange={e=> setPresence(e.target.value)}>
                                            <option></option>
                                            <option>*Present (en)</option>
                                            <option>*Not detected (en)</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6" id='second'>
                                        <label>Frequência</label>
                                        <input 
                                            className="form-control" 
                                            placeholder="00" 
                                            value={frequency}
                                            onChange={e=> setFrequency(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Regularity(en)</label>
                                        <select id="regularity" className="form-control" value={regularity} onChange={e=> setRegularity(e.target.value)}>
                                            <option></option>
                                            <option>Regular</option>
                                            <option>Irregular</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Profundidade</label>
                                        <select id="profundidade" className="form-control" value={depth} onChange={e=>setDepth(e.target.value)}>
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
                                            className="form-control"
                                            placeholder="Clinical description"
                                            value={clinicalDescription}
                                            onChange={e=>setClinicalDescription(e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Interpretação clinica</label>
                                        <input
                                            className="form-control"
                                            placeholder="Interpretação Clínica"
                                            value={clinicalInterpretation}
                                            onChange={e=>setClinicalInterpretation(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Comment(en)</label>
                                        <input
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
                                        <select id="bodyPosition" className="form-control" value={bodyPosition} onChange={e=>setBodyPosition(e.target.value)}>
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
                                            className="form-control"
                                            placeholder="Fatores de confusão"
                                            value={confoundingFactors}    
                                            onChange={e=>setConfoundingFactors(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-md-12"></div>
                                    <Button type="submit" className="btn btn-primary">Confirmar</Button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}