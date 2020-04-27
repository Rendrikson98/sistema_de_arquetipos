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
            </Switch>
        </BrowserRouter>
    )
}