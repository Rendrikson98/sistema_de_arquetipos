import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './styles.css';

export default function initial(){
    return(
        <div>
            <Link to='/exam'>
                <Button className='primary'>Exame</Button>
            </Link>
            <Link to='/breath'>
                <Button className='primary'>Respiração</Button>
            </Link>
            <Link to='/family'>
                <Button className='primary'>Histórico familiar</Button>
            </Link>
        </div>
    )
}