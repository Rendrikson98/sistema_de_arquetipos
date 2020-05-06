import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Menu} from '../../Person/Person';
import {useHistory} from 'react-router-dom';

import api from '../../sevices/api';

import './styles.css';

export default function Admission(){
  const [classificationPatient, setClassificationPatient] = useState('');
  const [careUnit, setCareUnit] = useState('');
  const [allah, setAllah] = useState('');
  const [bedroom, setBedroom] = useState('');
  const [bed, setBed] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [universalId, setUniversalId] = useState('');
  const [universalIdType,setUniversalIdType] = useState('');
  const [building, setBuilding] = useState('');
  const [floor, setFloor] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [publicPlace, setPublicPlace] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [locationType, setLocationType] = useState('');
  const [AdmissionType, setAdmissionType] = useState('');
  const [preAdmissionNumber, setPreAdmissionNumber] = useState('');
  const [placeIdPatient, setPlaceIdPatient] = useState('');
  const [universalIdPatient, setUniversalIdPatient] = useState('');
  const [universalIdTypePatient, setUniversalIdTypePatient ] = useState('');
  const [publicPlacePatient, setPublicPlacePatient] = useState('');
  const [cityPatient, setCityPatient] = useState('');
  const [statePatient, setStatePatient] = useState('');
  const [countryPatient, setCountryPatient] = useState('');
  const [locationTypePatient, setLocationTypePatient] = useState('');
  const [admissiontypePatient, setAdmissiontypePatient] = useState('');
  const [preAdmissionNumberPatient, setPreAdmissionNumberPatient] = useState('');
  const [idDoctor, setIdDoctor] = useState('');
  const [nameDoctor, setNameDoctor] = useState('');
  const [surnameDoctor, setSurnameDoctor] = useState('');
  const [idRequestingDoctor, setIdRequestingDoctor] = useState('');
  const [nameRequestingDoctor, setNameRequestingDoctor] = useState('');
  const [surnameRequestingDoctor, setSurnameRequestingDoctor] = useState('');
  const [idDoctorEspecialist, setIdDoctorEspecialist] = useState('');
  const [nameDoctorEspecialist, setNameDoctorEspecialist] = useState('');
  const [surnameDoctorEspecialist, setSurnameDoctorEspecialist] = useState('');
  const [hospitalUnitDoctorEspecialist, setHospitalUnitDoctorEspecialist] = useState('');
  const [admissionsourceDoctorEspecialist, setAdmissionsourceDoctorEspecialist] = useState('');
  const [idDoctorAdmission, setIdDoctorAdmission] = useState('');
  const [nameDoctorAdmission, setNameDoctorAdmission] = useState('');
  const [surnameDoctorAdmission, setSurnameDoctorAdmission] = useState('');
  const [financingtypeDoctorAdmission, setFinancingtypeDoctorAdmission] = useState('');
  const [admissionDateTimedoctorAdmission, setAdmissionDateTimedoctorAdmission] = useState('');

  const ID = localStorage.getItem('ID');
  const redirect = useHistory();

  useEffect(()=>{
    api.get(`admissionUpdate/${ID}`).then(post => {
        setClassificationPatient(post.data.classificationPatient);
        setCareUnit(post.data.careUnit);
        setAllah(post.data.allah);
        setBedroom(post.data.bedroom);
        setBed(post.data.bed);
        setPlaceId(post.data.placeId);
        setUniversalId(post.data.universalId);
        setUniversalIdType(post.data.universalIdType);
        setBuilding(post.data.building);
        setFloor(post.data.floor);
        setLocationDescription(post.data.locationDescription);
        setPublicPlace(post.data.publicPlace);
        setCity(post.data.city);
        setState(post.data.state);
        setCountry(post.data.country)
        setLocationType(post.data.locationType);
        setAdmissionType(post.data.AdmissionType);
        setPreAdmissionNumber(post.data.preAdmissionNumber);
        setPlaceIdPatient(post.data.placeIdPatient);
        setUniversalIdPatient(post.data.universalIdPatient);
        setUniversalIdTypePatient(post.data.universalIdTypePatient);
        setPublicPlacePatient(post.data.publicPlacePatient);
        setCityPatient(post.data.cityPatient);
        setStatePatient(post.data.statePatient);
        setCountryPatient(post.data.countryPatient);
        setLocationTypePatient(post.data.locationTypePatient);
        setAdmissiontypePatient(post.data.admissiontypePatient);
        setPreAdmissionNumberPatient(post.data.preAdmissionNumberPatient);
        setIdDoctor(post.data.idDoctor);
        setNameDoctor(post.data.nameDoctor);
        setSurnameDoctor(post.data.surnameDoctor);
        setIdRequestingDoctor(post.data.idRequestingDoctor);
        setNameRequestingDoctor(post.data.nameRequestingDoctor);
        setSurnameRequestingDoctor(post.data.surnameRequestingDoctor);
        setIdDoctorEspecialist(post.data.idDoctorEspecialist);
        setNameDoctorEspecialist(post.data.nameDoctorEspecialist);
        setSurnameDoctorEspecialist(post.data.surnameDoctorEspecialist);
        setHospitalUnitDoctorEspecialist(post.data.hospitalUnitDoctorEspecialist);
        setAdmissionsourceDoctorEspecialist(post.data.admissionsourceDoctorEspecialist);
        setIdDoctorAdmission(post.data.idDoctorAdmission);
        setNameDoctorAdmission(post.data.nameDoctorAdmission);
        setSurnameDoctorAdmission(post.data.surnameDoctorAdmission);
        setFinancingtypeDoctorAdmission(post.data.financingtypeDoctorAdmission);
        setAdmissionDateTimedoctorAdmission(post.data.admissionDateTimedoctorAdmission);
    })
  }, [])

  
  async function handleAdmission(e){
    
    e.preventDefault();

    const data = {
      classificationPatient,
      careUnit,
      allah,
      bedroom,
      bed,
      placeId,
      universalId,
      universalIdType,
      building,
      floor,
      locationDescription,
      publicPlace,
      city,
      state,
      country,
      locationType,
      AdmissionType,
      preAdmissionNumber,
      placeIdPatient,
      universalIdPatient,
      universalIdTypePatient,
      publicPlacePatient,
      cityPatient,
      statePatient,
      countryPatient,
      locationTypePatient,
      admissiontypePatient,
      preAdmissionNumberPatient,
      idDoctor,
      nameDoctor,
      surnameDoctor,
      idRequestingDoctor,
      nameRequestingDoctor,
      surnameRequestingDoctor,
      idDoctorEspecialist,
      nameDoctorEspecialist,
      surnameDoctorEspecialist,
      hospitalUnitDoctorEspecialist,
      admissionsourceDoctorEspecialist,
      idDoctorAdmission,
      nameDoctorAdmission,
      surnameDoctorAdmission,
      financingtypeDoctorAdmission,
      admissionDateTimedoctorAdmission
    };

    try{

      await api.put(`admissionUpdate/${ID}`, {
        "classificationPatient": data.classificationPatient,
        "careUnit": data.careUnit,
        "allah": data.allah,
        "bedroom": data.bedroom,
        "bed": data.bed,
        "placeId": data.placeId,
        "universalId": data.universalId,
        "universalIdType": data.universalIdType,
        "building": data.building,
        "floor": data.floor,
        "locationDescription": data.locationDescription,
        "publicPlace": data.publicPlace,
        "city": data.city,
        "state": data.state,
        "country": data.country,
        "locationType": data.locationType,
        "AdmissionType": data.AdmissionType,
        "preAdmissionNumber": data.preAdmissionNumber,
        "placeIdPatient": data.placeIdPatient,
        "universalIdPatient": data.universalIdPatient,
        "universalIdTypePatient": data.universalIdTypePatient,
        "publicPlacePatient": data.publicPlacePatient,
        "cityPatient": data.cityPatient,
        "statePatient": data.statePatient,
        "countryPatient": data.countryPatient,
        "locationTypePatient": data.locationTypePatient,
        "admissiontypePatient": data.admissiontypePatient,
        "preAdmissionNumberPatient": data.preAdmissionNumberPatient,
        "idDoctor": data.idDoctor,
        "nameDoctor": data.nameDoctor,
        "surnameDoctor": data.surnameDoctor,
        "idRequestingDoctor": data.idRequestingDoctor,
        "nameRequestingDoctor": data.nameRequestingDoctor,
        "surnameRequestingDoctor": data.surnameRequestingDoctor,
        "idDoctorEspecialist": data.idDoctorEspecialist,
        "nameDoctorEspecialist": data.nameDoctorEspecialist,
        "surnameDoctorEspecialist": data.surnameDoctorEspecialist,
        "hospitalUnitDoctorEspecialist": data.hospitalUnitDoctorEspecialist,
        "admissionsourceDoctorEspecialist": data.admissionsourceDoctorEspecialist,
        "idDoctorAdmission": data.idDoctorAdmission,
        "nameDoctorAdmission": data.nameDoctorAdmission,
        "surnameDoctorAdmission": data.surnameDoctorAdmission,
        "financingtypeDoctorAdmission": data.financingtypeDoctorAdmission,
        "admissionDateTimedoctorAdmission": data.admissionDateTimedoctorAdmission,
      })

      localStorage.clear()

      redirect.push('/listAdmission');
     
    }catch(error){
      alert('Erro ao enviar os dados, tente novamente');
    }

  }
    return(
      <div className='main-section'>
        <Menu name='Admission' link={'/listAdmission'}/>
        <div className="row justify-content-center">
            <div className="col-sm-10" style={{marginTop:'1%'}}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Admissão do Paciente</h5>
                  <form onSubmit={handleAdmission}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>classificação do Paciente</label>
                            <select id='1' className="form-control" value={classificationPatient} onChange={e=>setClassificationPatient(e.target.value)}>
                              <option></option>
                              <option>Internação/ paciente com pernoite</option>
                              <option>Day hospital</option>
                              <option>Ambulatorial</option>
                              <option>Urgência</option>
                              <option>Público</option>
                              <option>Pré-admissão</option>
                              <option>Conta comercial</option>
                              <option>Não aplicável</option>
                              <option>Não aplicável</option>
                            </select>
                          </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <h5 className="card-title">Localização na Internação(leito)</h5>
                      </div>
                      <div className="form-group col-md-6">
                          <label >Unidade de Cuidado *</label>
                          <input 
                            id='2'
                            className="form-control" 
                            placeholder="Unidade de Cuidado" 
                            value={careUnit}
                            onChange={e=>setCareUnit(e.target.value)}  
                          />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Ala *</label>
                        <input
                          id='3'
                          className="form-control"
                          placeholder="Ala"
                          value={allah}
                          onChange={e=>setAllah(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Quarto * </label>
                        <input 
                          id='4'
                          className="form-control" 
                          placeholder="Quarto"
                          value={bedroom}
                          onChange={e=>setBedroom(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6 ">
                        <label>Leito *</label>
                        <input 
                          id='5'
                          className="form-control"
                          placeholder="Leito"
                          value={bed}  
                          onChange={e=>setBed(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-12">
                          <h5 className="card-title">instalação</h5>
                      </div>
                      <div className="form-group col-md-6">
                        <label>ID do Local</label>
                        <input 
                          id='6'
                          className="form-control"
                          placeholder="ID do local"
                          value={placeId}
                          onChange={e=>setPlaceId(e.target.value)}  
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>ID Universal</label>
                        <input 
                          id='7'
                          className="form-control"
                          placeholder="ID Universal"
                          value={universalId} 
                          onChange={e=>setUniversalId(e.target.value)} 
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tipo do ID Universal</label>
                            <select id='8' className="form-control" value={universalIdType} onChange={e=>setUniversalIdType(e.target.value)}>
                              <option></option>
                              <option>DNS</option>
                              <option>GUID</option>
                              <option>HCD</option>
                              <option>HL7</option>
                              <option>ISO</option>
                              <option>L, M, N</option>
                              <option>Random</option>
                              <option>UUID</option>
                              <option>x400</option>
                              <option>x500</option>
                            </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Prédio</label>
                        <input 
                          id='9'
                          className="form-control"
                          placeholder="Prédio"
                          value={building}
                          onChange={e=>setBuilding(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Andar</label>
                        <input 
                          id='10'
                          className="form-control"
                          placeholder="Andar"
                          value={floor}
                          onChange={e=>setFloor(e.target.value)}  
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Descrição da Localização</label>
                        <input
                          id='11'
                          className="form-control"
                          placeholder="Descrição da Localização"
                          value={locationDescription}
                          onChange={e=>setLocationDescription(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-12 endereco" >
                        <h5 className="card-title">Endereço</h5>
                      </div>
                      <div className='form-group col-md-12'></div>
                      <div className="form-group col-md-6">
                        <label>Logradouro</label>
                        <input
                          id='12'
                          className="form-control"
                          placeholder="Logradouro"
                          value={publicPlace}
                          onChange={e=>setPublicPlace(e.target.value)}  
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Cidade</label>
                        <input 
                          id='13'
                          className="form-control"
                          placeholder="Cidade"
                          value={city}
                          onChange={e=>setCity(e.target.value)}  
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Estado</label>
                        <input
                          id='14'
                          className="form-control"
                          placeholder="Estado"
                          value={state}
                          onChange={e=>setState(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>País</label>
                        <input
                          id='15'
                          className="form-control"
                          placeholder="País"
                          value={country}
                          onChange={e=>setCountry(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tipo de Localização</label>
                            <select id='16' className="form-control" value={locationType} onChange={e=>setLocationType(e.target.value)}>
                              <option></option>
                              <option>Clínica</option>
                              <option>Casa</option>
                              <option>Departamento</option>
                              <option>Unidade de enfermagem</option>
                              <option>*Provider's office(en)</option>
                            </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Tipo de Admissão</label>
                            <select id='17' className="form-control" value={AdmissionType} onChange={e=>setAdmissionType(e.target.value)}>
                              <option></option>
                              <option>Clínica</option>
                              <option>Acidente</option>
                              <option>Emergência</option>
                              <option>Trabalho de parto</option>
                              <option>Eletiva</option>
                              <option>Recém nascido</option>
                              <option>Urgência</option>
                              <option>Eletivo</option>
                              <option>Admissão em repouso geriátrico</option>
                              <option>Admissão estatística</option>
                            </select>
                      </div>
                      <div className="form-group col-md-6">
                        <label>Número da Pré-admissão</label>
                        <input 
                          id='18'
                          className="form-control"
                          placeholder="Número da Pré-admissão"
                          value={preAdmissionNumber}
                          onChange={e=>setPreAdmissionNumber(e.target.value)}
                        />
                      </div>

                      
                      <div className="form-group col-md-12" id='first'>
                        <h5 className="card-title">Localização Prévia do Paciente</h5>
                      </div>
                      <div className="form-group col-md-12">
                        <h5 className="card-title">instalação</h5>
                    </div>
                    <div className="form-group col-md-6">
                      <label>ID do Local</label>
                      <input 
                        id='19'
                        className="form-control"
                        placeholder="ID do local"
                        value={placeIdPatient}
                        onChange={e=>setPlaceIdPatient(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>ID Universal</label>
                      <input
                        id='20'
                        className="form-control"
                        placeholder="ID Universal"
                        value={universalIdPatient}
                        onChange={e=>setUniversalIdPatient(e.target.value)}  
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Tipo do ID Universal</label>
                          <select id='21' className="form-control" value={universalIdTypePatient} onChange={e=>setUniversalIdTypePatient(e.target.value)}>
                            <option></option>
                            <option>DNS</option>
                            <option>GUID</option>
                            <option>HCD</option>
                            <option>HL7</option>
                            <option>ISO</option>
                            <option>L, M, N</option>
                            <option>Random</option>
                            <option>UUID</option>
                            <option>x400</option>
                            <option>x500</option>
                          </select>
                    </div>
                    <div className="form-group col-md-12 endereco">
                      <h5 className="card-title">Endereço</h5>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Logradouro</label>
                      <input 
                        id='22'
                        className="form-control"
                        placeholder="Logradouro"
                        value={publicPlacePatient}
                        onChange={e=>setPublicPlacePatient(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Cidade</label>
                      <input 
                        id='23'
                        className="form-control"
                        placeholder="Cidade"
                        value={cityPatient}
                        onChange={e=>setCityPatient(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Estado</label>
                      <input 
                        id='24'
                        className="form-control"
                        placeholder="Estado"
                        value={statePatient}
                        onChange={e=>setStatePatient(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>País</label>
                      <input
                        id='25'
                        className="form-control"
                        placeholder="País"
                        value={countryPatient}
                        onChange={e=>setCountryPatient(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Tipo de Localização</label>
                          <select id='26' className="form-control" value={locationTypePatient} onChange={e=>setLocationTypePatient(e.target.value)}>
                            <option></option>
                            <option>Clínica</option>
                            <option>Casa</option>
                            <option>Departamento</option>
                            <option>Unidade de enfermagem</option>
                            <option>*Provider's office(en)</option>
                          </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label >Tipo de Admissão</label>
                          <select id='27' className="form-control" value={admissiontypePatient} onChange={e=>setAdmissiontypePatient(e.target.value)}>
                            <option></option>
                            <option>Clínica</option>
                            <option>Acidente</option>
                            <option>Emergência</option>
                            <option>Trabalho de parto</option>
                            <option>Eletiva</option>
                            <option>Recém nascido</option>
                            <option>Urgência</option>
                            <option>Eletivo</option>
                            <option>Admissão em repouso geriátrico</option>
                            <option>Admissão estatística</option>
                          </select>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Número da Pré-admissão</label>
                      <input 
                        id='28'
                        className="form-control"
                        placeholder="Número da Pré-admissão"
                        value={preAdmissionNumberPatient}  
                        onChange={e=>setPreAdmissionNumberPatient(e.target.value)}
                      />
                    </div>
                   
                    <div className="form-group col-md-12">
                      <h5 className="card-title">Médico do atendimento</h5>
                      </div>
                      <div className="form-group col-md-6">
                      <label >ID</label>
                      <input 
                        id='29'
                        className="form-control"
                        placeholder="ID Médico"
                        value={idDoctor}
                        onChange={e=>setIdDoctor(e.target.value)}
                      />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Nome</label>
                        <input 
                          id='30'
                          className="form-control"
                          placeholder="Nome"
                          value={nameDoctor}
                          onChange={e=>setNameDoctor(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Sobrenome</label>
                        <input
                          id='31'
                          className="form-control"
                          placeholder="Sobrenome"
                          value={surnameDoctor}
                          onChange={e=>setSurnameDoctor(e.target.value)}  
                        />
                      </div>
                   
                    <div className="form-group col-md-12">
                      <h5 className="card-title">Médico Solicitante</h5>
                    </div>
                      <div className="form-group col-md-6">
                      <label>ID</label>
                      <input 
                        id='32'
                        className="form-control"
                        placeholder="ID Médico"
                        value={idRequestingDoctor}
                        onChange={e=>setIdRequestingDoctor(e.target.value)}  
                      />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Nome</label>
                        <input 
                          id='33'
                          className="form-control"
                          placeholder="Nome"
                          value={nameRequestingDoctor}
                          onChange={e=>setNameRequestingDoctor(e.target.value)}  
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label >Sobrenome</label>
                        <input 
                          id='34'
                          className="form-control"
                          placeholder="Sobrenome"
                          value={surnameRequestingDoctor}
                          onChange={e=>setSurnameRequestingDoctor(e.target.value)}  
                        />
                      </div>
                      
                      <div className="form-group col-md-12">
                        <h5 className="card-title">Médico Especialista</h5>
                      </div>
                        <div className="form-group col-md-6">
                        <label>ID</label>
                        <input 
                          id='35'
                          className="form-control"
                          placeholder="ID Médico"
                          value={idDoctorEspecialist}
                          onChange={e=>setIdDoctorEspecialist(e.target.value)}
                        />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Nome</label>
                          <input
                            id='36'
                            className="form-control" 
                            placeholder="Nome"
                            value={nameDoctorEspecialist}  
                            onChange={e=>setNameDoctorEspecialist(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Sobrenome</label>
                          <input 
                            id='37'
                            className="form-control"
                            placeholder="Sobrenome"
                            value={surnameDoctorEspecialist}
                            onChange={e=>setSurnameDoctorEspecialist(e.target.value)}  
                          />
                        </div> 
                        <div className="form-group col-md-6">
                          <label>Unidade Hospitalar</label>
                          <input
                            id='38'
                            className="form-control"
                            placeholder="Unidade Hospitalar"
                            value={hospitalUnitDoctorEspecialist}
                            onChange={e=>setHospitalUnitDoctorEspecialist(e.target.value)}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Fonte de Admissão</label>
                          <input
                            id='39'
                            className="form-control"
                            placeholder="Fonte de Admissão"
                            value={admissionsourceDoctorEspecialist}
                            onChange={e=>setAdmissionsourceDoctorEspecialist(e.target.value)}
                          />
                        </div>
                      
                      <div className="form-group col-md-12">
                        <h5 className="card-title">Médico de Admissão</h5>
                      </div>
                        <div className="form-group col-md-6">
                          <label>ID</label>
                          <input 
                            id='40'
                            className="form-control"
                            placeholder="ID Médico"
                            value={idDoctorAdmission} 
                            onChange={e=>setIdDoctorAdmission(e.target.value)} 
                          />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Nome</label>
                            <input 
                              id='41'
                              className="form-control"
                              placeholder="Nome"
                              value={nameDoctorAdmission}
                              onChange={e=>setNameDoctorAdmission(e.target.value)}
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Sobrenome</label>
                            <input
                              id='42'
                              className="form-control"
                              placeholder="Sobrenome"
                              value={surnameDoctorAdmission}
                              onChange={e=>setSurnameDoctorAdmission(e.target.value)}  
                            />
                          </div>
                        <div className="form-group col-md-6">
                          <label>Tipo de Financiamento</label>
                              <select id='43' className="form-control" value={financingtypeDoctorAdmission} onChange={e=>setFinancingtypeDoctorAdmission(e.target.value)}>
                                <option></option>
                                <option>*Australian Health Care Agreements(en)</option>
                                <option>Seguros de saúde privados</option>
                                <option>Auto financiado</option>
                                <option>Auxilio doença</option>
                                <option>Reclamação de terceiro sobre veículo motorizado</option>
                                <option>Outra compensação</option>
                                <option>*Department of Veterans' Affairs(en)</option>
                                <option>*Department of Defence(en)</option>
                                <option>*Correctional facility(en)</option>
                                <option>Outro hospital ou instituição pública (cuidados contratados)</option>
                                <option>Acordos de saúde recíprocos (com outros países)</option>
                                <option>Outro</option>
                                <option>Desconhecido</option>
                              </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label>Data/hora de Admissão</label>
                          <input 
                            id='44'
                            type="datetime-local"
                            className="form-control"
                            name="dtAdmissao"
                            value={admissionDateTimedoctorAdmission}  
                            onChange={e=>setAdmissionDateTimedoctorAdmission(e.target.value)}
                          />
                        </div>
                      
                    <div className="form-group col-md-12"></div>
                    <Button type="submit" className="primary">Confirmar</Button>
                    </div>
                  </form> 
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}