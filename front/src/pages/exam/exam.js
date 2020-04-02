import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

import api from '../../sevices/api';

import './styles.css';

export default function Exam(){
   const [systeOrEstru, setSysteOrEstru] = useState('');
   const [bodyLocation, setBodyLocation] = useState('');
   const [noAbnormality, setNoAbnormality] = useState('');
   const [clinicalDescription, setClinicalDescription] = useState('');
   const [clinicalInterpretation, setClinicalInterpretation] = useState('');
   const [comment, setComment] = useState('');

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
        const response = await api.post('exam', data);

        alert(`Dados enviados com sucesso a Id desse formulário é: ${response.data.id}`);
       }catch(err){
        alert('Erro ao enviar os dados');
       }
   }
    
    return( 
        <div className="row justify-content-center">
            <div className="col-sm-10">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Resultados do exame</h5>
                        <form id='form-exam' onSubmit={handleExam}>
                            <div className='form-row'>
                                <div className='form-group col-md-6'>
                                <label >Sistema ou extrutura examinada*</label>
                                <input 
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
                                    <select className="form-control" value={noAbnormality} onChange={e => setNoAbnormality(e.target.value)} >
                                        <option>True</option>
                                        <option>False</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Descrição clínica</label>
                                    <input  
                                        className="form-control" 
                                        placeholder="Descrição Clínica" 
                                        value={clinicalDescription}
                                        onChange={e => setClinicalDescription(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Interpretação clínica</label>
                                    <input 
                                        className="form-control"
                                        placeholder="Interpretação Clínica"
                                        value={clinicalInterpretation} 
                                        onChange={e => setClinicalInterpretation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label >Comentário</label>
                                    <input 
                                        className="form-control"  
                                        placeholder="Comentario" 
                                        value={comment}
                                        onChange={e => setComment(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-12"></div>
                                <Button className='primary' type='submit'>Enviar</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>             
        
    
    )
}