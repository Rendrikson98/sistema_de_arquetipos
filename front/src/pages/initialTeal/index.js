import React from 'react';
import {Link} from 'react-router-dom';
import {BsChevronDoubleDown} from 'react-icons/bs';
import {AiOutlineFileDone, AiOutlineContainer} from 'react-icons/ai';
import {IoMdPulse} from 'react-icons/io';
import {GrGroup} from 'react-icons/gr';
import {GiLungs} from 'react-icons/gi';


import '../../css/components.css';

import imgFundo from '../../assets/med_03.jpg';

import '../../css/responsee.css';
import '../../css/template-style.css';
import './styles.css';

export default function initial(){
   
    return(
        <div>
            {/*MENU*/ }
            <header role='_blank' className='position-absolute'>
                <nav className="background-transparent background-transparent-hightlight full-width sticky">
                    <div className='s-12 l-2'>
                        <Link to="index.html" className="logo">
                            <img className="logo-white" src={'/'} alt=""/>
                            <img className="logo-dark" src={'/'} alt=""/>
                        </Link>
                    </div>
                    <div className="top-nav s-12 l-10">
                        <p className="nav-text"></p>
                        <ul className="right chevron">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>Arquetipos</a>
                            <ul>
                                <li><Link to='/admission'>Admissão do Paciente</Link></li>
                                <li><Link to='/exam'>Resultado do Exame</Link></li>
                                <li><Link to='/family'>Histórico Familiar</Link></li>
                                <li><Link to='/bloodPressure'>Pressão Arterial</Link></li>
                                <li><Link to='/breath'>Respiração</Link></li>
                            </ul>
                            </li>
                            <li><Link to="products.html">Casos</Link>
                                <ul>
                                    <li><Link to='/listAdmission'>Admissão do Paciente</Link></li>
                                    <li><Link to='/list'>Resultado do Exame</Link></li>
                                    <li><Link to='/listFamily'>Histórico Familiar</Link></li>
                                    <li><Link to='/listBloodPressure'>Pressão Arterial</Link></li>
                                    <li><Link to='/listBreath'>Respiração</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/'>Sobre</Link></li>
                        </ul>
                        </div>
                </nav>
            </header>

            {/*BANNER*/}

            <main role="main">    
                <header>
                    <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center">
                    <div className="item">
                        <div className="s-12">
                        <img src={imgFundo} className='imgbottom'/>
                        <div className="carousel-content">
                            <div className="content-center-vertical line">
                            <div className="margin-top-bottom-80">
                                
                                <h1 className="text-white margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1" style={{marginTop:'-20px'}}>
                                    Arquetipos Editor
                                </h1>
                                <div className="s-12 m-10 l-8 center">
                                    <p className="text-white text-size-16 margin-bottom-50">
                                    Lorem ipsum quisque suspendisse quam hendrerit augue senectus malesuada euismod massa interdum curae felis auctor maecenas senectus, sit imperdiet viverra feugiat convallis tempor tristique iaculis litora laoreet tincidunt ultricies maecenas
                                    </p>
                                </div>
                                <div className="line">
                                <div className="s-12 m-12 l-3 center">
                                    <BsChevronDoubleDown color={'#FFF'} size={27}/>
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

            {/*CARDS*/}

            <section className="section-small-padding background-white text-center"> 
                <div className="line ">
                <div className="margin ">
                    <div className="s-12 m-12 l-4 margin-m-bottom cardTop">
                    <div className="padding-2x block-bordered">
                        <AiOutlineFileDone size={40} color={'#1C1C1C'} />
                        <h2 className="text-thin">Admissão do Paciente</h2>
                        <p className="margin-bottom-30">Este arquétipo ADMIN_ENTRY de admissão foi projetado para representar os dados mínimos de admissão. Foi baseado na Implementação padrão da Austrália.</p>
                        <Link className="button button-dark-stroke text-size-12" to="/admission">Selecionar</Link>
                    </div>
                    </div>
                    <div className="s-12 m-12 l-4 margin-m-bottom cardTop">
                    <div className="padding-2x block-bordered">
                        <AiOutlineContainer size={40} color={'#1C1C1C'}/>
                        <h2 className="text-thin">Resultados do exame</h2>
                        <p className="margin-bottom-30">Registrar uma descrição narrativa e interpretação clínica dos achados observados durante o exame físico de um sistema corporal ou estrutura anatômica.</p>
                        <Link className="button button-dark-stroke text-size-12" to="/exam">Selecionar</Link>
                    </div>
                    </div>
                    <div className="s-12 m-12 l-4 margin-m-bottom">
                    <div className="padding-2x block-bordered">
                        <GrGroup size={40} color={'#1C1C1C'}/>
                        <h2 className="text-thin">Histórico familiar</h2>
                        <p className="margin-bottom-30">Para registrar informações sobre a ocorrência de problemas significativos relacionados com a saúde de membros da família tanto vivos quanto falecidos.</p>
                        <Link className="button button-dark-stroke text-size-12" to="/family">Selecionar</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="line">
                <div className="margin cardDown" style={{marginTop:'20px'}}>
                    <div className="s-12 m-12 l-4 margin-m-bottom ">
                    <div className="padding-2x block-bordered">
                        <IoMdPulse size={40} color={'#1C1C1C'} />
                        <h2 className="text-thin">Pressão Arterial</h2>
                        <p className="margin-bottom-30">Para registrar a pressão arterial sistêmica de um indivíduo.</p>
                        <Link className="button button-dark-stroke text-size-12" to="/bloodPressure">Selecionar</Link>
                    </div>
                    </div>
                    <div className="s-12 m-12 l-4 margin-m-bottom">
                    <div className="padding-2x block-bordered">
                        <GiLungs size={40} color={'#000'} />
                        <h2 className="text-thin">Respirações</h2>
                        <p className="margin-bottom-30">Registrar as características observadas da respiração.</p>
                        <Link className="button button-dark-stroke text-size-12" to="/breath">Selecionar</Link>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
        {/*RODAPE */}
        <footer>
            <section className="padding background-dark full-width">
                <div className="s-12 l-6">
                <p className="text-size-12" style={{marginTop: '-2px'}}>Arquetipos Editor</p>
                <p className="text-size-12" style={{marginBottom:'-8px'}}>Copyright 2020, Rendrikson Oliveira</p>
                </div>
                {/*<div className="s-12 l-6">
                <a className="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding<br/> by Responsee Team</a>
                </div>*/}
            </section>
        </footer>
        </div>
    )
}