import React from 'react';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import {BsPeople} from 'react-icons/bs';
import {AiOutlineFileDone, AiOutlineContainer} from 'react-icons/ai';


import '../../css/components.css';

import imgFundo from '../../assets/med_03.jpg';

import '../../css/responsee.css';
import '../../css/template-style.css';
import './styles.css';

export default function initial(){
   
    return(
        <div>
            <header role='_blank' className='position-absolute'>
                <nav className="background-transparent background-transparent-hightlight full-width sticky">
                    <div className='s-12 l-2'>
                        <a href="index.html" className="logo">
                            <img className="logo-white" src="img/logo.png" alt=""/>
                            <img className="logo-dark" src="img/logo-dark.png" alt=""/>
                        </a>
                    </div>
                    <div className="top-nav s-12 l-10">
                        <p className="nav-text"></p>
                        <ul className="right chevron">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
                            <li><a>Services</a>
                            <ul>
                                <li><a>Service 1</a>
                                <ul>
                                    <li><a>Service 1 A</a></li>
                                    <li><a>Service 1 B</a></li>
                                </ul>
                                </li>
                                <li><a>Service 2</a></li>
                            </ul>
                            </li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        </div>
                </nav>
            </header>
            <main role="main">    
                <header>
                    <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center">
                    <div className="item">
                        <div className="s-12">
                        <img src={imgFundo} className='imgbottom'/>
                        <div className="carousel-content">
                            <div className="content-center-vertical line">
                            <div className="margin-top-bottom-80">
                                
                                <h1 className="text-white margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1">
                                    Arquetipos Editor
                                </h1>
                                <div className="s-12 m-10 l-8 center">
                                    <p className="text-white text-size-14 margin-bottom-40">
                                    Lorem ipsum quisque suspendisse quam hendrerit augue senectus malesuada euismod massa interdum curae felis auctor maecenas senectus, sit imperdiet viverra feugiat convallis tempor tristique iaculis litora laoreet tincidunt ultricies maecenas
                                    </p>
                                </div>
                                <div className="line">
                                <div className="s-12 m-12 l-3 center">
                                    <a className="button button-white-stroke s-12" href="/#">Saiba Mais</a>
                                </div>       
                                </div>  
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>              
                    </div>               
                </header>
            </main>
            <section className="section-small-padding background-white text-center"> 
                <div class="line">
                <div class="margin">
                    <div class="s-12 m-12 l-4 margin-m-bottom">
                    <div class="padding-2x block-bordered">
                        <AiOutlineFileDone size={40} color={'#1C1C1C'} />
                        <h2 class="text-thin">Admissão do Paciente</h2>
                        <p class="margin-bottom-30">Este arquétipo ADMIN_ENTRY de admissão foi projetado para representar os dados mínimos de admissão. Foi baseado na Implementação padrão da Austrália.</p>
                        <Link class="button button-dark-stroke text-size-12" to="/admission">Selecionar</Link>
                    </div>
                    </div>
                    <div class="s-12 m-12 l-4 margin-m-bottom">
                    <div class="padding-2x block-bordered">
                        <AiOutlineContainer size={40} color={'#1C1C1C'}/>
                        <h2 class="text-thin">Resultados do exame</h2>
                        <p class="margin-bottom-30">Registrar uma descrição narrativa e interpretação clínica dos achados observados durante o exame físico de um sistema corporal ou estrutura anatômica.</p>
                        <Link class="button button-dark-stroke text-size-12" to="/exam">Selecionar</Link>
                    </div>
                    </div>
                    <div class="s-12 m-12 l-4 margin-m-bottom">
                    <div class="padding-2x block-bordered">
                        <i class="icon-sli-home icon3x text-dark center margin-bottom-30"></i>
                        <h2 class="text-thin">Histórico familiar</h2>
                        <p class="margin-bottom-30">Para registrar informações sobre a ocorrência de problemas significativos relacionados com a saúde de membros da família.</p>
                        <Link class="button button-dark-stroke text-size-12" to="/family">Selecionar</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div class="line">
                <div class="margin" style={{display:'flex', justifyContent:'center', marginTop:'20px'}}>
                    <div class="s-12 m-12 l-4 margin-m-bottom">
                    <div class="padding-2x block-bordered">
                        <i class="icon-sli-shield icon3x text-dark center margin-bottom-30"></i>
                        <h2 class="text-thin">Pressão Arterial</h2>
                        <p class="margin-bottom-30">Para registrar a pressão arterial sistêmica de um indivíduo.</p>
                        <Link class="button button-dark-stroke text-size-12" to="/bloodPressure">Selecionar</Link>
                    </div>
                    </div>
                    <div class="s-12 m-12 l-4 margin-m-bottom">
                    <div class="padding-2x block-bordered">
                        <i class="icon-sli-umbrella icon3x text-dark center margin-bottom-30"></i>
                        <h2 class="text-thin">Respirações</h2>
                        <p class="margin-bottom-30">Registrar as características observadas da respiração.</p>
                        <Link class="button button-dark-stroke text-size-12" to="/breath">Selecionar</Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        <footer>
            <section class="padding background-dark full-width">
                <div class="s-12 l-6">
                <p class="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
                <p class="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
                </div>
                <div class="s-12 l-6">
                <a class="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br/> by Responsee Team</a>
                </div>
            </section>
        </footer>
        </div>
    )
}