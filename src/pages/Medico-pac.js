import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import "../assets/css/medico-pac.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer';


function MedicoPac() {
    const [activy, setActivy] = useState(true)
    const [ismodalopen, setismodalopen] = useState(false)
    const [ismodalopencontratar, setismodalopencontratar] = useState(false)
    const [ismodalopenreportar, setismodalopenreportar] = useState(false)

      // tabelas
  const PacientesTab = [
    {nome:"Jose",horas:"12/01", obs:"903159774", data: "47232355306", },
    {nome:"Pedro",horas:"15/01", obs:" 905459344", data: "47262380202", },
    {nome:"Rodrigo",horas:"28/01", obs:"955159774", data: "27232355156",  },
    {nome:"Joao",horas:"11/02", obs:"903154334", data: "15123553888", },
    {nome:"Paulo",horas:"15/02", obs:"931155745", data: "42123553206", },
    {nome:"Gabriel",horas:"10/02", obs:"990806554", data: "55515122354", },
  ]
  const renderPacientesTab = (pacientetab, index) => {
    return (
      <tr key={index}>
        <td>{pacientetab.nome}</td>
        <td>{pacientetab.horas}</td>
        {/* <td>{consulta.tipo}</td> */}
        <td>{pacientetab.obs}</td>
        <td>{pacientetab.data}</td>
        <td><button class="btn btn-secondary" onClick={() => setismodalopencontratar(true)}> Contatar </button></td>
        <td><button class="btn btn-danger" onClick={() => setismodalopenreportar(true)}> reportar </button></td>
        {/* <td><button class="btn btn-danger"> Reportar </button></td> */}
      </tr>
    )
  }

    return (
        <div className="background">

            {/* <div id="mod-add-pac">
                <div className="modal-bg">
                    <div className="modal-add-pac">
                        <div class="user add">
                        </div>
                        <div className="switcher-add-pac">
                            <span className={(activy == true ? "activy" : "")} onClick={() => setActivy(true)}>Novo Usuário</span>
                            <span className={(activy == false ? "activy" : "")} onClick={() => setActivy(false)}>Usuário Existente</span>
                        </div>
                        {
                            activy == true && (
                                <>
                                    <div className="mod-add-itens-nu">
                                        <div>
                                            <label>Nome: </label>
                                            <input />
                                        </div>
                                        <div>
                                            <label>Nascimento: </label>
                                            <input />
                                        </div>
                                        <div>
                                            <label>Genêro: </label>
                                            <select>
                                                <option value="hetero"> Cis (Masculino/Feminino) </option>
                                                <option value="hetero"> Agênero </option>
                                                <option value="hetero"> Trans </option>
                                                <option value="hetero"> Não Binario </option>
                                                <option value="hetero"> Outro </option>
                                                <option value="hetero"> Prefiro não responder </option>
                                            </select>
                                        </div>
                                        <div>
                                            <label>Sexualidade: </label>
                                            <select>
                                                <option value="hetero"> Hetero </option>
                                                <option value="hetero"> Homo </option>
                                                <option value="hetero"> Bi </option>
                                                <option value="hetero"> Trans </option>
                                                <option value="hetero"> Outro </option>
                                                <option value="hetero"> Prefiro não responder </option>
                                            </select>
                                        </div>
                                        <div>
                                            <button>Adicionar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            activy == false && (
                                <>
                                    <div className="mod-add-itens-ue">
                                        <p> AQUI VAI USERS EXISTENTES</p>
                                        <div>
                                            <label>e-mail: </label>
                                            <input />
                                        </div>
                                        <center>
                                            <div>
                                                <h3>
                                                    OU
                                                </h3>
                                            </div>
                                        </center>
                                        <div>
                                            <label>Código: </label>
                                            <input />
                                        </div>
                                        <div>
                                            <button>Adicionar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>

            <div id="mod-view-user">
                <div className="modal-bg">
                    <div className="modal-view-pac">
                        <div class="user exist">
                        </div>
                        <div>
                            <h2>
                                Nome do Perfil
                            </h2>
                        </div>
                        <div className="mod-view-content">
                            <div>
                                <label>Nome: </label>
                                <input />
                            </div>
                            <div>
                                <label>Nascimento: </label>
                                <input />
                            </div>
                            <div>
                                <label>Genêro: </label>
                                <select>
                                    <option value="hetero"> Cis (Masculino/Feminino) </option>
                                    <option value="hetero"> Agênero </option>
                                    <option value="hetero"> Trans </option>
                                    <option value="hetero"> Não Binario </option>
                                    <option value="hetero"> Outro </option>
                                    <option value="hetero"> Prefiro não responder </option>
                                </select>
                            </div>
                            <div>
                                <label>Sexualidade: </label>
                                <select>
                                    <option value="hetero"> Hetero </option>
                                    <option value="hetero"> Homo </option>
                                    <option value="hetero"> Bi </option>
                                    <option value="hetero"> Trans </option>
                                    <option value="hetero"> Outro </option>
                                    <option value="hetero"> Prefiro não responder </option>
                                </select>
                            </div>
                            <div>
                                <button>Contatar</button>
                                <button>Reportar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="mod-contact-user">
                <div className="modal-bg">
                    <div className="modal-contact-pac">
                        <div class="user exist">
                        </div>
                        <div>
                            <h2>
                                Nome do Perfil
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Entre em contato com este usuário:
                            </h3>
                        </div>
                        <div className="mod-contact-content">
                            <div>
                                <label>Titulo: </label>
                                <input />
                            </div>
                            <div>
                                <label>Mensagem: </label>
                                <textarea />
                            </div>

                            <div>
                                <button>Enviar</button>
                                <button>Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="mod-report-user">
                <div className="modal-bg">
                    <div className="modal-report-pac">
                        <div class="user exist">
                        </div>
                        <div>
                            <h2>
                                Nome do Perfil
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Reporte este usuário:
                            </h3>
                        </div>
                        <div className="mod-report-content">
                            <div>
                                <label>Titulo: </label>
                                <input />
                            </div>
                            <div>
                                <label>Detalhes: </label>
                                <textarea />
                            </div>

                            <div>
                                <button>Reportar</button>
                                <button>Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


{/* fim do modal */}

            <nav id="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/medico">Painel</Link></li>
                    <li><Link to="/">Sair</Link></li>
                </ul>
            </nav>

            <div className="cont-principal">
                <aside className="side-menu">
                    <p className="selected-side-op">Pacientes</p>
                    <p><Link to="/medico-cons">Consultas</Link></p>
                    <p><Link to="/medico-rel">Relatório</Link></p>
                    <p><Link to="/medico-pub">Público</Link></p>
                </aside>
                <div className="cont-med-pac-cen">
                {/* <Table striped bordered hover size="sm"> */}
                    <h1>
                        Pacientes
                    </h1>
                <table >
                    <thead>
                        <tr>
                        <th>Nome</th>
                        <th>Data</th>
                        {/* <th>Tipo</th> */}
                        <th>celular</th>
                        <th>CPF</th>
                        <th>Ver</th>
                        <th>Contratar</th>
                        {/* <th>Reportar</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {PacientesTab.map(renderPacientesTab)}
                    </tbody>
                    </table>
                    {/* </Table> */}
  
        <button type="button" class="btn btn-primary" onClick={() => setismodalopen(true)}>Adicionar Novo    </button>
                    {/* <!-- Modal Adicionar--> */}

 {
                ismodalopen && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopen(false)}>X</button>
                            </div>
                            <div className="mod-add-itens-nu">
                                        <div class="form-group">
                                            <label>Nome: </label>
                                            <input type="text" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>                                        </div>
                                        <div class="form-group">
                                            <label>Nascimento: </label>
                                            <input type="text" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>                                        </div>
                                            <div class="form-group">
                                            <label>Genêro: </label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option value="hetero"> Cis (Masculino/Feminino) </option>
                                                <option value="hetero"> Agênero </option>
                                                <option value="hetero"> Trans </option>
                                                <option value="hetero"> Não Binario </option>
                                                <option value="hetero"> Outro </option>
                                                <option value="hetero"> Prefiro não responder </option>
                                            </select>
                                            </div>
                                            <div class="form-group">
                                            <label> Sexualidade: </label>
                                            <select class="form-control" id="exampleFormControlSelect1">
                                                <option value="hetero"> Hetero </option>
                                                <option value="hetero"> Homo </option>
                                                <option value="hetero"> Bi </option>
                                                <option value="hetero"> Trans </option>
                                                <option value="hetero"> Outro </option>
                                                <option value="hetero"> Prefiro não responder </option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <button  class="btn btn-primary">Adicionar</button>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </>
            }

            {/* Modal contratar */}
            {
                ismodalopencontratar && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopencontratar(false)}>X</button>
                            </div>
                            <div id="mod-contact-user">
                <div className="modal-bg">
                    <div className="modal-contact-pac">
                        <div class="user exist">
                        </div>
                        <div>
                            <h2>
                                Nome do Perfil
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Entre em contato com este usuário:
                            </h3>
                        </div>
                        
                        <div className="mod-contact-content">
                            <div class="form-group">
                                <label>Titulo: </label>
                                <input type="text" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                            <div class="form-group">
                                <label>Mensagem: </label>
                                <textarea class="form-control" aria-label="With textarea"  placeholder="descreva"></textarea>
                            </div>

                            <div className="divbtnmodal">
                                <button class="btn btn-primary">Enviar</button>
                                <button class="btn btn-secondary">Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                        </div>
                    </div>
                </>
            }
            {/* Modal reportar */}

            {
                ismodalopenreportar && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopenreportar(false)}>X</button>
                            </div>
                            <div id="mod-report-user">
                <div className="modal-bg">
                    <div className="modal-report-pac">
                        <div class="user exist">
                        </div>
                        <div>
                            <h2>
                                Nome do Perfil
                            </h2>
                        </div>
                        <div>
                            <h3>
                                Reporte este usuário:
                            </h3>
                        </div>
                        <div className="mod-report-content">
                            <div class="form-group">
                                <label>Titulo: </label>
                                <input type="text" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>
                            </div>
                            <div class="form-group">
                                <label>Detalhes: </label>
                                <textarea class="form-control" aria-label="With textarea" placeholder="descreva"></textarea>

                            </div>

                            <div className="divbtnmodal">
                                <button class="btn btn-danger">Reportar</button>
                                <button class="btn btn-secondary">Voltar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                        </div>
                    </div>
                </>
            }

                </div>
            </div>
            <Footer />
        </div >
    )
}

export default MedicoPac;