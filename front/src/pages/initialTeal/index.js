import React from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import './styles.css';

export default function initial(){
    //https://material-ui.com/pt/api/app-bar/  https://material-ui.com/pt/getting-started/templates/
    return(
        <div>
            <AppBar position="relative" color='default'>
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Arquétipos Editor
                </Typography>
                </Toolbar>
            </AppBar>
            <div className="main-section">
                
              
                <div className="hero-wrap" id='image'>
                <Container>
                    <Row className="description align-items-center justify-content-center">
                        <Col md={8} className="text-center" style={{marginTop:'15%'}}>
                            <h2 className="mb-5">Sistema de arquétipos</h2>
                        </Col>
                    </Row>
                </Container>
                
                            

                <section className="ftco-section bg-light" id="cards">
                    <Container className="card-styles" >
                        <Row>
                            <Col md={4} style={{marginTop:'2%'}}>
                                <Card border='info' className='card'>
                                <Card.Header className='h5' style={{color: '#4F4F4F'}}>Admissão do Paciente</Card.Header>
                                <Card.Body className="pb-5 px-4" >
                                    <Card.Text className='p'>Este arquétipo ADMIN_ENTRY de admissão foi projetado para representar os dados mínimos de admissão. Foi baseado na Implementação padrão da Austrália/Nova Zelândia</Card.Text>
                                    <Link to='/admission'>
                                        <Button variant='info' style={{marginBottom: '-10%'}}>Selecionar</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                                
                            </Col>
                            <Col md={4} style={{marginTop:'2%'}}>
                                <Card border='success'>
                                <Card.Header className='h5' style={{color: '#4F4F4F'}}>Resultados do exame</Card.Header>
                                <Card.Body className="card-body pb-5 px-4">
                                    <Card.Text className='p'>Registrar uma descrição narrativa e interpretação clínica dos achados observados durante o exame físico de um sistema corporal ou estrutura anatômica.</Card.Text>
                                    <Link to='/exam'>
                                        <Button variant='success' style={{marginTop: '8%', marginBottom: '-5%'}}>Selecionar</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{marginTop:'2%'}}>
                                <Card border='warning'>
                                <Card.Header className='h5' style={{color: '#4F4F4F'}}>Histórico familiar</Card.Header>
                                <Card.Body className="card-body pb-5 px-4">
                                    <Card.Text className='p'>Para registrar informações sobre a ocorrência de problemas significativos relacionados com a saúde de membros da família (relacionados ou não relacionados) tanto vivos quanto falecidos.</Card.Text>
                                    <Link to='/family'>
                                        <Button variant='warning' style={{marginBottom: '-8%'}}>Selecionar</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" id='cards' style={{marginTop:'2.8%'}}>
                            <Col md={4} style={{marginBottom:'2%'}}>
                                <Card border='danger'>
                                <Card.Header className='h5' style={{color: '#4F4F4F'}}>Pressão Arterial</Card.Header>
                                <Card.Body className="card-body pb-5 px-4">
                                    <Card.Text className='p'>Para registrar a pressão arterial sistêmica de um indivíduo.</Card.Text>
                                    <Link to='/bloodPressure'>
                                        <Button variant='danger' style={{marginBottom: '-10%'}}>Selecionar</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4} style={{marginBottom:'2%'}}>
                            <Card border='info'>
                                <Card.Header className='h5' style={{color: '#4F4F4F'}}>Respirações</Card.Header>
                                <Card.Body className="card-body pb-5 px-4">
                                    <Card.Text className='p'>Registrar as características observadas da respiração espontânea.</Card.Text>
                                    <Link to='/breath'>
                                        <Button variant='info' style={{marginBottom: '-10%'}}>Selecionar</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
                </div>

                <footer className="page-footer font-small mdb-color pt-4">

                <Container className="text-center text-md-left">

                <Row className="d-flex align-items-center" >

                    <div className="col-md-7 col-lg-8">
                    <a className="navbar-brand" href="/" id='tituloFooter' >Arquétipos Editor</a>
                    </div>

                </Row>
                </Container>
                </footer>
            </div>
            </div>
    )
}