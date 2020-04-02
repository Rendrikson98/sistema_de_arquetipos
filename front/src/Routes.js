import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Initial from './pages/initialTeal/initial';
import Exam from './pages/exam/exam';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Initial}/>
                <Route path='/exam' component={Exam}/>
            </Switch>
        </BrowserRouter>
    )
}