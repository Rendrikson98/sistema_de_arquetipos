import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import BloodPressure from './pages/bloodPressure/bloodPressure';
import Initial from './pages/initialTeal/initial';
import Exam from './pages/exam/exam';
import Breath from './pages/breath/breath';
import Family from './pages/family/family';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Initial}/>
                <Route path='/bloodPressure' component={BloodPressure}/>
                <Route path='/exam' component={Exam}/>
                <Route path='/breath' component={Breath}/>
                <Route path='/family' component={Family}/>
            </Switch>
        </BrowserRouter>
    )
}