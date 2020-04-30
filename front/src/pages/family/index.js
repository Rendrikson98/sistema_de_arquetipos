import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {Menu} from '../../Person/Person';

import api from '../../sevices/api';

import './styles.css'

export default function Family(){
    const [relationship, setRelationship] = useState('');
    const [dateOFBirth, setDateOFBirth] = useState('');
    const [deceased, setDeceased] = useState('');
    const [ageAtDeath, setAgeAtDeath] = useState('');
    const [ageMeasureDeath, setAgeMeasureDeath] = useState('');
    const [deathDate, setDeathDate] = useState('');
    const [ProblemDiagno, setProblemDiagno] = useState('');
    const [clinicalDescription, setClinicalDescription] = useState('');
    const [problemDetectionAge, setProblemDetectionAge] = useState('');
    const [ageMeasurement, setAgeMeasurement] = useState('');
    const [causeOfDeath, setCauseOfDeath] = useState('');
    const [causeOfDeathDescription, setCauseOfDeathDescription] = useState('');
    const [comment, setComment] = useState('');

    async function handleFamily(e){
        e.preventDefault();

        const data = {
            relationship,
            dateOFBirth,
            deceased,
            ageAtDeath,
            ageMeasureDeath,
            deathDate,
            ProblemDiagno,
            clinicalDescription,
            problemDetectionAge,
            ageMeasurement,
            causeOfDeath,
            causeOfDeathDescription,
            comment,
        };

        try{
            const response = await api.post('family', data);

            alert(`Dados enviados com sucesso a Id desse formulário é:${response.data.id}`);

            document.getElementById('1').value='';
            document.getElementById('2').value='';
            document.getElementById('3').value='';
            document.getElementById('4').value='';
            document.getElementById('5').value='';
            document.getElementById('6').value='';
            document.getElementById('7').value='';
            document.getElementById('8').value='';
            document.getElementById('9').value='';
            document.getElementById('10').value='';
            document.getElementById('11').value='';
            document.getElementById('12').value='';
            document.getElementById('13').value='';

        }catch(err){
            alert('Erro ao enviar os dados, tente novamente');
        }
    }


    return(
        <div className='main-section'>
            <Menu name='Family'/>
            <div className="row justify-content-center">
                <div className="col-sm-10"  style={{marginTop:'1%'}}>
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Histórico familiar</h5>
                        <form onSubmit={handleFamily}>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label>Relationship(en)</label>
                                    <input 
                                        id='1'
                                        className="form-control"
                                        placeholder="texto..."
                                        value={relationship}
                                        onChange={e=>setRelationship(e.target.value)}    
                                    />
                                </div>
                            </div>
                                
                            <div className="form-row">
                                <div className="form-group col-md-12"></div>
                                <div className="form-group col-md-6" id='first'>
                                    <label>Data de Nascimento</label>
                                    <input 
                                        id='2'
                                        type="datetime-local" 
                                        className="form-control"
                                        name="dtNasc"
                                        value={dateOFBirth}
                                        onChange={e=>setDateOFBirth(e.target.value)}
                                    />
                                </div>
                                <div className="form-group col-md-6" id='second'>
                                    <label>Deceased(en)</label>
                                    <select id='3' className="form-control" name="deceased" value={deceased} onChange={e=>setDeceased(e.target.value)}> 
                                        <option></option>
                                        <option>True</option>
                                        <option>false</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-3">
                                    <label>Age at Death(en)</label>
                                    <input 
                                        id='4'
                                        type="number" 
                                        className="form-control" 
                                        placeholder="0"
                                        value={ageAtDeath}
                                        onChange={e=>setAgeAtDeath(e.target.value)}    
                                    />
                                </div>
                                <div className="form-group col-md-3">
                                    <label className='ageWhite'>_</label>
                                    <select id='5' className="form-control" value={ageMeasureDeath} onChange={e=>setAgeMeasureDeath(e.target.value)} >
                                        <option></option>
                                        <option>yr</option>
                                        <option>mth</option>
                                        <option>wk</option>
                                        <option>day(s)</option>
                                        <option>hr</option>
                                        <option>min</option>
                                        <option>sec</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6" >
                                    <label>Data de Falecimento</label>
                                    <input 
                                        id='6'
                                        type="datetime-local" 
                                        className="form-control" 
                                        value={deathDate}  
                                        onChange={e=>setDeathDate(e.target.value)}  
                                    />
                                </div>
                            </div>
                    
                            <div className="form-row">
                            <div className="form-group col-md-12">
                                <h5 className="card-title">Clinical History(en)</h5>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Problem/Diagno sis Name(en)</label>
                                <input 
                                    id='7'
                                    className="form-control"
                                    placeholder="Texto..."
                                    value={ProblemDiagno}
                                    onChange={e=>setProblemDiagno(e.target.value)}
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Descrição clínica</label>
                                <input 
                                    id='8'
                                    className="form-control" 
                                    placeholder="Texto..."
                                    value={clinicalDescription}
                                    onChange={e=>setClinicalDescription(e.target.value)}    
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>Idade da detecção do problema</label>
                                <input 
                                    id='9'
                                    type="number" 
                                    className="form-control" 
                                    placeholder="0"
                                    value={problemDetectionAge}  
                                    onChange={e=>setProblemDetectionAge(e.target.value)}  
                                />
                            </div>
                            <div className="form-group col-md-3">
                                <label>_</label>
                                <select id='10' className="form-control" value={ageMeasurement} onChange={e=>setAgeMeasurement(e.target.value)}>
                                    <option></option>
                                    <option>yr</option>
                                    <option>mth</option>
                                    <option>wk</option>
                                    <option>day(s)</option>
                                    <option>hr</option>
                                    <option>min</option>
                                    <option>sec</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Cause of Death? (en)</label>
                                <ul className="nav nav-tabs " id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#causas" role="tab" aria-controls="home" aria-selected="true">Causas</a>
                                    <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="causas" role="tabpanel" aria-labelledby="home-tab">
                                        <select id='11' className="form-control" name="causeDeath" value={causeOfDeath} onChange={e=>setCauseOfDeath(e.target.value)}>
                                            <option></option>
                                            <option>*Direkte eller nært relatert(en)</option>
                                            <option>*Urelatert(en)</option>
                                            <option>*Ubestemmelig(en)</option>
                                        </select>
                                    </div>
                                    <div className="tab-pane fade " id="descrever" role="tabpanel" aria-labelledby="profile-tab">
                                        <textarea
                                            type="text" 
                                            className="form-control"
                                            id="12"
                                            placeholder="Texto..." 
                                            name="causeDeathText"
                                            value={causeOfDeathDescription}   
                                            onChange={e=>setCauseOfDeathDescription(e.target.value)} 
                                        ></textarea>
                                    </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#descrever" role="tab" aria-controls="profile" aria-selected="false">Descrever</a>
                                </li>
                                </ul>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Comentários</label>
                                <input
                                    id='13' 
                                    className="form-control"
                                    placeholder="Texto..."
                                    value={comment}  
                                    onChange={e=>setComment(e.target.value)}  
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
        </div>
    )
}