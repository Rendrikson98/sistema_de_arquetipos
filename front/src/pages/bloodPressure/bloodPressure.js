import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

import api from '../../sevices/api';

import './styles.css'

export default function BloodPressure(){
    return (
        <div className="row justify-content-center">
        <div className="col-sm-10">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pressão Arterial</h5>
              <form role="form" id="form-arterial">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputclassName">History</label>
                        <select id="inputclassName" className="form-control" name="historic">
                          <option selected></option>
                          <option>Qualquer evento</option>
                          <option>Media de 24 horas</option>
                        </select>
                      </div>

                      <div className="form-group col-md-12"></div>
                      <div className="form-group col-md-3" className='estilo'>
                          <label for="systotic">Sistólica *</label>
                          <input type="text" className="form-control" id="systotic" placeholder="0,00 mm[Hg]" name="systotic" required />
                      </div>
                      <div className="form-group col-md-3" className='estilo'>
                        <label for="diastotic">Diastólica *</label>
                        <input type="text" className="form-control" id="diastotic" placeholder="0,00 mm[Hg]" name="diastotic" required />
                    </div>
                    <div className="form-group col-md-3" className='estilo'>
                        <label for="bloodPressure">Pressão Arterial Média </label>
                        <input type="text" className="form-control" id="bloodPressure" placeholder="0,00 mm[Hg]" name="bloodPressure" required />
                    </div>
                    <div className="form-group col-md-3" className='estilo'>
                        <label for="pulsePressure">Pressão de Pulso *</label>
                        <input type="text" className="form-control" id="pulsePressure" placeholder="0,00 mm[Hg]" name="pulsePressure" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="clinicalInterpretation">Interpretação Clínica</label>
                        <input type="text" id="clinicalInterpretation" className="form-control" placeholder="Interpretação Clínica" name="clinicalInterpretation" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="commentary">Comentário</label>
                        <input type="text" id="commentary" className="form-control" placeholder="Interpretação Clínica" name="commentary" />
                    </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <h5 className="card-title">State</h5>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="position">Posição</label>
                      <select id="position" className="form-control" name="position">
                        <option selected></option>
                        <option>Em pé</option>
                        <option>Sentado</option>
                        <option>Reclinado</option>
                        <option>Deitado</option>
                        <option>Deitado com inclinação para esquerda</option>
                      </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="factors">Fatores Confundidores</label>
                      <input type="text" className="form-control" id="factors" placeholder="Fatores..." name="factors" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="sleepStatus">Status do sono</label>
                    <select id="sleepStatus" className="form-control" name="sleepStatus">
                        <option selected></option>
                        <option>Alerta e acordado</option>
                        <option>Dormindo</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="tilted">Inclinado</label>
                      <input type="number" className="form-control" id="tilted" placeholder="0,00 deg" name="tilted" />
                  </div>
                  <div className="form-group col-md-12">
                      <h5 className="card-title">Protocol</h5>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="clamp">Tamanho da Braçadeira</label>
                      <select id="clamp" className="form-control" name="clamp">
                          <option selected></option>
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
                      <label for="measurementLocation">Localização da Medição</label>
                      <ul className="nav nav-tabs " id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#localM" role="tab" aria-controls="home" aria-selected="true">Local Medicação</a>
                          <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="measurementLocation" role="tabpanel" aria-labelledby="home-tab">
                                <select className="form-control" id="measurementLocation" name="measurementLocation">
                                    <option selected></option>
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
                                <textarea type="text" className="form-control" id="measurementLocation" placeholder="Texto..." name="measurementLocation"></textarea>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#descrever" role="tab" aria-controls="profile" aria-selected="false">Descrever</a>
                        </li>
                      </ul>
                  </div>
                  <div className="form-group col-md-6">
                      <label for="method">Método</label>
                      <select id="method" className="form-control" name="method">
                          <option selected></option>
                          <option>Ausculta</option>
                          <option>Palpação</option>
                          <option>Aparelho de pressão</option>
                          <option>Invasivo</option>
                      </select>  
                  </div>
                  <div className="form-group col-md-6">
                      <label for="bloodPressuerForm">Fomulário de Pressão Arterial</label>
                      <input type="text" id="bloodPressuerForm" className="form-control" placeholder="Formulário..." name="bloodPressuerForm" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="systoticForm">Fomulário de Pressão Sistólica</label>
                    <input type="text" id="systoticForm" className="form-control" placeholder="Formulário..." name="systoticForm" />
                </div>
                <div className="form-group col-md-6">
                    <label for="diastoliPressure">Fomulário de Pressão Diastólica</label>
                    <input type="text" id="diastoliPressure" className="form-control" placeholder="Formulário..." name="diastoliPressure" />
                </div>
                <div className="form-group col-md-6">
                    <label for="finalDiastole">Final da Diástole</label>
                    <select id="finalDiastole" className="form-control" name="finalDiastole">
                        <option selected></option>
                        <option>Fhase IV.</option>
                        <option>Phase V</option>
                    </select>
                </div>
                <div className="form-group col-md-12"></div>
                <button type="submit" className="btn btn-success">Confirmar</button>
                </div>
              </form> 
            </div>
          </div>
        </div>
    </div>
    )
}