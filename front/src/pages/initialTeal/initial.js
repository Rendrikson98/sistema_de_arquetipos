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
            <Link to='/bloodPressure'>
                <Button className='primary'>Pressão sanguínea</Button>
            </Link>
            <Link to='/admission'>
                <Button className='primary'>Admissão</Button>
            </Link>
        </div>
    )
}