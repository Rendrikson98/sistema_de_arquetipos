import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from 'react-bootstrap';
import {BsPencil} from 'react-icons/bs'


const Menu = (props) =>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
    <div className="container">
        <Link className="navbar-brand" to="/" id='titulo'>Arquétipos Editor - {props.name}</Link>
    </div>
    <div style={{marginRight:'20px'}}>
        <Link to={props.link}>Listar</Link>
    </div>
    </nav>

const MenuList = (props) =>
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark" id="ftco-navbar">
    <div className="container">
        <Link className="navbar-brand" to="/" id='titulo' style={{marginLeft:'20px'}}>Lista - {props.name}</Link>
    </div>
    <div style={{marginRight:'20px', fontStyle: '#F0F0F0'}}>
    <Link to={props.link}>voltar</Link>
    </div>
</nav>

function saveID(id){
    localStorage.setItem('ID', id);
 }

const Posts = ({ posts, loading}) => {
   if(loading){
    return <h1>Loading...</h1>
   }

   return(
    
       <>
        {posts.map(post => (
            <Col md={6}>
            <li key={post.id}>
               <strong>ID</strong>
            <p>{post.id}</p>
            
            <strong>Sistema</strong>
            <p>{post.systeOrEstru}</p>

            <strong>Local do corpo</strong>
            <p>{post.bodyLocation}</p>

            <strong>Anormalidade</strong>
            <p>{post.noAbnormality}</p>

            <strong>Descrição clínica</strong>
            <p>{post.clinicalDescription}</p>

            <strong>Interpretação clínica</strong>
            <p>{post.clinicalInterpretation}</p>

            <strong>Comentários</strong>
            <p>{post.comment}</p>

            <button type='button' onClick={()=>saveID(post.id)}>
                <Link to={'/examUpdate/' + post.id}><BsPencil size={18}/></Link>
            </button>
            </li>
            </Col>
        ))}
        </>
    )
}

const PostBreath = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <Container>
            <ul>
                <Row>
                    {posts.map(post=>(
                        <Col md={6}>
                            <li key={post.id}>
                                <strong>ID</strong>
                                <p>{post.id}</p>

                                <strong>Histórico</strong>
                                <p>{post.history}</p>

                                <strong>Presença</strong>
                                <p>{post.presence}</p>

                                <strong>Frequência</strong>
                                <p>{post.frequency}</p>

                                <strong>Regularidade</strong>
                                <p>{post.regularity}</p>

                                <strong>Profundidade</strong>
                                <p>{post.depth}</p>

                                <strong>Descrição Clínica</strong>
                                <p>{post.clinicalDescription}</p>

                                <strong>Interpretação clínca</strong>
                                <p>{post.clinicalInterpretation}</p>

                                <strong>Comentário</strong>
                                <p>{post.comment}</p>

                                <strong>Posição do corpo</strong>
                                <p>{post.bodyPosition}</p>

                                <strong>Fatores de confusão</strong>
                                <p id='ultimo'>{post.confoundingFactors}</p>

                                <button type='button' onClick={()=>saveID(post.id)}>
                                    <Link to={'/breathUpdate/' + post.id}><BsPencil size={18}/></Link>
                                </button>
                            </li>
                        </Col>
                    ))}
                </Row>
            </ul>
        </Container>
      
    )
}

const PostFamily = ({posts, loading})=>{
    if(loading){
        return <h2>loading</h2>
    }

    return(
        <Container>
            <ul>
                <Row>
                    {posts.map(post => (
                        <Col md={6}>
                        <li key={post.id}>
                            <strong>ID</strong>
                            <p>{post.id}</p>

                            <strong>Relação</strong>
                            <p>{post.relationship}</p>

                            <strong>Data de Nascimento</strong>
                            <p>{post.dateOfBirth}</p>

                            <strong>Falecido</strong>
                            <p>{post.deceased}</p>

                            <strong>Idade de falecimento</strong>
                            <p>{post.ageAtDeath} {post.ageMeasureDeath}</p>

                            <strong>Data de óbito</strong>
                            <p>{post.deathDate}</p>

                            <strong>Diagnótico do problema</strong>
                            <p>{post.ProblemDiagno}</p>

                            <strong>Descrição clínica</strong>
                            <p>{post.clinicalDescription}</p>

                            <strong>Idade da detecção do problema</strong>
                            <p>{post.problemDetectionAge} {post.ageMeasurement}</p>

                            <strong>Causa da morte</strong>
                            <p>{post.causeOfDeath}</p>

                            <strong>Descrição da causa da morte</strong>
                            <p>{post.causeOfDeathDescription}</p>

                            <strong>Comentário</strong>
                            <p id='last'>{post.comment}</p>

                            <button type='button' onClick={()=> saveID(post.id)}> 
                                <Link to={'/familyUpdate/' + post.id}><BsPencil size={18} /></Link>
                            </button>
                        </li>
                        </Col>
                    ))}
                </Row>
            </ul>
        </Container>
    )
}

const PostBloodPressure = ({posts, loading}) =>{
    if(loading){
        return <h2>Loading...</h2>
    }

    return(
        <Container>
            <ul>
                <Row id='row'>
                {posts.map(post =>(
                    <Col md={6}>
                        <li key={post.id}>
                            <strong>ID</strong>
                            <p>{post.id} </p>

                            <strong>Sistólica</strong>
                            <p>{post.systotic + " mm[Hg]"}</p>
                            
                            <strong>Diastólica</strong>
                            <p>{post.diastotic + " mm[Hg]"}</p>

                            <strong>Pressão arterial média</strong>
                            <p>{post.bloodPressure + " mm[Hg]"}</p>

                            <strong>Pressão de pulso</strong>
                            <p>{post.pulsePressure + " mm[Hg]"}</p>

                            <strong>Interpretação clínica</strong>
                            <p>{post.clinicalInterpretation}</p>

                            <strong>Comentário</strong>
                            <p>{post.commentary}</p>

                            <strong>Posição</strong>
                            <p>{post.position}</p>

                            <strong>Status de sono</strong>
                            <p>{post.sleepStatus}</p>

                            <strong>Fatores</strong>
                            <p>{post.factors}</p>

                            <strong>inclinação</strong>
                            <p>{post.tilted + " deg"}</p>

                            <strong>Tamanho da braçadeira</strong>
                            <p>{post.clamp}</p>

                            <strong>Localização da medição</strong>
                            <p>{post.measurementLocation}</p>

                            <strong>Método</strong>
                            <p>{post.method}</p>

                            <strong>Fomulário de Pressão Sistólica</strong>
                            <p>{post.systoticForm}</p>

                            <strong>Fomulário de Pressão Diastólica</strong>
                            <p>{post.finalDiastole}</p>

                            <strong>Fomulário de Pressão Arterial</strong>
                            <p>{post.bloodPressuerForm}</p>

                            <strong>Final da Diástole</strong>
                            <p id='lastB'>{post.diastoliPressure}</p>

                            <button type='button' onClick={()=>saveID(post.id)}>
                                <Link to={'/bloodPressureUpdate/' + post.id}><BsPencil size={18}/></Link>
                                </button>
                        </li>
                    </Col>
                ))}
                </Row>
            </ul>
        </Container>
    )
}

const PaginationNumber = ({postsPerPage, totalPosts, paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
    <Container className='d-flex justify-content-center'>
            <Row>
                <Col md={12}>
                    <nav>
                        <ul className='pagination'>
                            {pageNumbers.map(number => (
                                <li key={number} className='page-item'>
                                    <Link onClick={() => paginate(number)} to={'#'} className='page-link'>
                                        {number}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Col>
            </Row>
    </Container>
    )
}

export {Menu, MenuList, Posts, PaginationNumber, PostBreath, PostFamily, PostBloodPressure};

