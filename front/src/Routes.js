import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BloodPressure from './pages/bloodPressure';
import Initial from './pages/initialTeal';
import Exam from './pages/exam';
import Breath from './pages/breath';
import Family from './pages/family';
import Admission from './pages/admission';
import List from './pages/list/index';
import Update  from './pages/examUpdate';
import ListBreath from './pages/listBreath';
import BreathUpdate from './pages/breathUpdate';
import ListFamily from './pages/listFamily';
import FamilyUpdate from './pages/familyUpdate';
import ListBloodPressure from './pages/listBloodPressure';
import BloodPressureUpdate from './pages/bloodPressureUpdate';



export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Initial}/>
                <Route path='/bloodPressure' component={BloodPressure}/>
                <Route path='/exam' component={Exam}/>
                <Route path='/breath' component={Breath}/>
                <Route path='/family' component={Family}/>
                <Route path='/admission' component={Admission}/>
                <Route path='/list' component={List}/>
                <Route path='/examUpdate/:id' component={Update}/>
                <Route path='/listBreath' component={ListBreath}/>
                <Route path='/breathUpdate/:id' component={BreathUpdate} />
                <Route path='/listFamily' component={ListFamily}/>
                <Route path='/familyUpdate/:id' component={FamilyUpdate}/>
                <Route path='/listBloodPressure' component={ListBloodPressure}/>
                <Route path='/bloodPressureUpdate/:id' component={BloodPressureUpdate}/>
            </Switch>
        </BrowserRouter>
    )
}