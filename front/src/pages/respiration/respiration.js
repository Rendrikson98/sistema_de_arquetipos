import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

import api from '../../sevices/api';

import './styles.css'

export default function BloodPressure(){
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
}