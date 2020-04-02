import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './styles.css';

export default function initial(){
    return(
        <Link to='/exam'>
            <Button className='primary'>Exame</Button>
        </Link>
    )
}