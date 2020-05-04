import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Menu} from '../../Person/Person';
import {useHistory} from 'react-router-dom';

import api from '../../sevices/api';

import './styles.css'

export default function BloodPressure(){
  const [historic, sethistoric] = useState('');
  const [systotic, setsystotic] = useState('');
  const [diastotic, setdiastotic] = useState('');
  const [bloodPressure, setbloodPressure] = useState('');
  const [pulsePressure, setpulsePressure] = useState('');
  const [clinicalInterpretation, setclinicalInterpretation] = useState('');
  const [commentary, setcommentary] = useState('');
  const [position, setposition] = useState('');
  const [sleepStatus, setsleepStatus] = useState('');
  const [factors, setfactors] = useState('');
  const [tilted, settilted] = useState('');
  const [clamp, setclamp] = useState('');
  const [measurementLocation, setmeasurementLocation] = useState('');
  const [method, setmethod] = useState('');
  const [systoticForm, setsystoticForm] = useState('');
  const [finalDiastole, setfinalDiastole] = useState('');
  const [bloodPressuerForm, setbloodPressuerForm] = useState('');
  const [diastoliPressure, setdiastoliPressure] = useState('');

  const redirect = useHistory();
  const ID = localStorage.getItem('ID');

  useEffect(()=>{
    api.get(`bloodPressureUpdate/${ID}`).then(res => {
      sethistoric(res.data.historic);
      setsystotic(res.data.systotic);
      setdiastotic(res.data.diastotic);
      setbloodPressure(res.data.bloodPressure);
      setpulsePressure(res.data.pulsePressure);
      setclinicalInterpretation(res.data.clinicalInterpretation);
      setcommentary(res.data.commentary);
      setposition(res.data.position);
      setsleepStatus(res.data.sleepStatus);
      setfactors(res.data.factors);
      settilted(res.data.tilted);
      setclamp(res.data.clamp);
      setmeasurementLocation(res.data.measurementLocation);
      setmethod(res.data.method);
      setsystoticForm(res.data.systoticForm);
      setfinalDiastole(res.data.finalDiastole);
      setbloodPressuerForm(res.data.bloodPressuerForm);
      setdiastoliPressure(res.data.diastoliPressure);
    })
  },[]);

  async function handleBloodPressure(e){
    
    e.preventDefault();

    const data = {
      historic,
      systotic,
      diastotic,
      bloodPressure,
      pulsePressure,
      clinicalInterpretation,
      commentary,
      position,
      sleepStatus,
      factors,
      tilted,
      clamp,
      measurementLocation,
      method,
      systoticForm,
      finalDiastole,
      bloodPressuerForm,
      diastoliPressure
    };

    try{

      await api.put(`/bloodPressureUpdate/${ID}`, {
        "historic": data.historic,
        "systotic": data.systotic,
        "diastotic": data.diastotic,
        "bloodPressure": data.bloodPressure,
        "pulsePressure": data.pulsePressure,
        "clinicalInterpretation": data.clinicalInterpretation,
        "commentary": data.commentary,
        "position": data.position,
        "sleepStatus": data.sleepStatus,
        "factors": data.factors,
        "tilted": data.tilted,
        "clamp": data.clamp,
        "measurementLocation": data.measurementLocation,
        "method": data.method,
        "systoticForm": data.systoticForm,
        "finalDiastole": data.finalDiastole,
        "bloodPressuerForm": data.bloodPressuerForm,
        "diastoliPressure": data.diastoliPressure,
      });

      alert('Dados atualizados com sucesso');

      localStorage.clear()

      redirect.push('/listBloodPressure');
    }catch(error){
      alert("Erro ao enviar os dados, tente novamente");
    }
  }

    return (
      <div className='main-section'>
        <Menu name='Blood Pressure' link={'/listBloodPressure'}/>
        <div className="row justify-content-center">
        <div className="col-sm-10"  style={{marginTop:'1%'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pressão Arterial</h5>
              <form onSubmit={handleBloodPressure}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>History</label>
                        <select id='1' className="form-control" value={historic} onChange={e=>sethistoric(e.target.value)}>
                          <option></option>
                          <option>Qualquer evento</option>
                          <option>Media de 24 horas</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12"></div>
                      <div className="form-group col-md-3 estilo">
                          <label>Sistólica *</label>
                          <input 
                            id='2'
                            className="form-control" 
                            placeholder="0,00 mm[Hg]"
                            value={systotic}
                            onChange={e=>setsystotic(e.target.value)}  
                          />
                      </div>
                      <div className="form-group col-md-3 estilo">
                        <label>Diastólica *</label>
                        <input 
                          id='3'
                          className="form-control"
                          placeholder="0,00 mm[Hg]"
                          value={diastotic}
                          onChange={e=>setdiastotic(e.target.value)}  
                        />
                    </div>
                    <div className="form-group col-md-3 estilo">
                        <label>Pressão Arterial Média </label>
                        <input 
                          id='4'
                          className="form-control"
                          placeholder="0,00 mm[Hg]"
                          value={bloodPressure} 
                          onChange={e=>setbloodPressure(e.target.value)} 
                        />
                    </div>
                    <div className="form-group col-md-3 estilo">
                        <label>Pressão de Pulso *</label>
                        <input 
                          id='5'
                          className="form-control"
                          placeholder="0,00 mm[Hg]" 
                          value={pulsePressure}
                          onChange={e=>setpulsePressure(e.target.value)}  
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Interpretação Clínica</label>
                        <input
                          id='6'
                          className="form-control" 
                          placeholder="Interpretação Clínica" 
                          value={clinicalInterpretation}  
                          onChange={e=>setclinicalInterpretation(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Comentário</label>
                        <input 
                          id='7'
                          className="form-control" 
                          placeholder="Interpretação Clínica" 
                          value={commentary}  
                          onChange={e=>setcommentary(e.target.value)}
                        />
                    </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <h5 className="card-title">State</h5>
                  </div>
                  <div className="form-group col-md-6">
                      <label>Posição</label>
                      <select id='8' className="form-control" value={position} onChange={e=>setposition(e.target.value)}> 
                        <option></option>
                        <option>Em pé</option>
                        <option>Sentado</option>
                        <option>Reclinado</option>
                        <option>Deitado</option>
                        <option>Deitado com inclinação para esquerda</option>
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Status do sono</label>
                    <select  id='9' className="form-control" value={sleepStatus} onChange={e=>setsleepStatus(e.target.value)}>
                        <option></option>
                        <option>Alerta e acordado</option>
                        <option>Dormindo</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label>Fatores Confundidores</label>
                      <input 
                        id='10'
                        className="form-control"
                        placeholder="Fatores..."
                        value={factors}  
                        onChange={e=>setfactors(e.target.value)}
                      />
                  </div>
                  <div className="form-group col-md-6">
                      <label>Inclinado</label>
                      <input 
                        id='11'
                        className="form-control"
                        placeholder="0,00 deg"
                        value={tilted}
                        onChange={e=>settilted(e.target.value)}  
                      />
                  </div>
                  <div className="form-group col-md-12">
                      <h5 className="card-title">Protocol</h5>
                  </div>
                  <div className="form-group col-md-6">
                      <label>Tamanho da Braçadeira</label>
                      <select id='12' className="form-control" value={clamp} onChange={e=>setclamp(e.target.value)}>
                          <option></option>
                          <option>Coxa de adulto</option>
                          <option>Adulto Grande</option>
                          <option>Adulto</option>
                          <option>Adulto Pequeno</option>
                          <option>Criança/Pediátrico</option>
                          <option>Criança Pequena</option>
                          <option>Neonatal</option>
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label >Localização da Medição</label>
                      <ul className="nav nav-tabs " id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#localM" role="tab" aria-controls="home" aria-selected="true">Local Medicação</a>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="measurementLocation" role="tabpanel" aria-labelledby="home-tab">
                                <select id='13' className="form-control" value={measurementLocation} onChange={e=>setmeasurementLocation(e.target.value)}>
                                    <option></option>
                                    <option>Braço direito</option>
                                    <option>Braço esquerdo</option>
                                    <option>Coxa direita</option>
                                    <option>Coxa esquerda</option>
                                    <option>Pulso direito</option>
                                    <option>Pulso esquerdo</option>
                                    <option>Dedo</option>
                                    <option>Dedo do pé</option>
                                    <option>Dorso do pé</option>
                                    <option>Intra-arterial</option>
                                </select>
                            </div>
                            <div className="tab-pane fade " id="descrever" role="tabpanel" aria-labelledby="profile-tab">
                                <textarea  type="text" className="form-control" id="measurementLocation" placeholder="Texto..." name="measurementLocation"></textarea>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#descrever" role="tab" aria-controls="profile" aria-selected="false">Descrever</a>
                        </li>
                      </ul>
                  </div>
                  <div className="form-group col-md-6">
                      <label>Método</label>
                      <select id='15' className="form-control" value={method} onChange={e=>setmethod(e.target.value)}>
                          <option></option>
                          <option>Ausculta</option>
                          <option>Palpação</option>
                          <option>Aparelho de pressão</option>
                          <option>Invasivo</option>
                      </select>  
                  </div>
                  
                  <div className="form-group col-md-6">
                    <label>Fomulário de Pressão Sistólica</label>
                    <input 
                      id='16'
                      className="form-control" 
                      placeholder="Formulário..."
                      value={systoticForm}  
                      onChange={e=>setsystoticForm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-6">
                    <label>Fomulário de Pressão Diastólica</label>
                    <input 
                      id='17'
                      className="form-control" 
                      placeholder="Formulário..." 
                      value={finalDiastole}
                      onChange={e=>setfinalDiastole(e.target.value)}  
                    />
                </div>
                <div className="form-group col-md-6">
                      <label >Fomulário de Pressão Arterial</label>
                      <input 
                        id='18'
                        className="form-control" 
                        placeholder="Formulário..." 
                        value={bloodPressuerForm} 
                        onChange={e=>setbloodPressuerForm(e.target.value)} 
                      />
                  </div>
                <div className="form-group col-md-6">
                    <label>Final da Diástole</label>
                    <select id='19' className="form-control" value={diastoliPressure} onChange={e=>setdiastoliPressure(e.target.value)}>
                        <option></option>
                        <option>Fhase IV.</option>
                        <option>Phase V</option>
                    </select>
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