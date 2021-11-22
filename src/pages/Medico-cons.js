import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico-cons.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer';

function MedicoCons() {
  const [ismodalopenConsulta, setismodalopenConsulta] = useState(false)

  return (
    <div className="background">

      {
                ismodalopenConsulta && <>
                    <div className='background-mod'>
                        <div className='modal-cad'>
                            <div className='div-x'>
                                <button className='close-btn' onClick={() => setismodalopenConsulta(false)}>X</button>
                            </div>
                            <div id="mod-report-user">
                            <div className="modal-bg">
          <div className="mod-add-cons">
            <div className="mod-add-cons-content">
              <div class="form-group">
                <label>Nome: </label>
                <input type="text" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>  
              </div>
              <div class="form-group">
                <label>Paciente (CPF): </label>
                <input type="number" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>  
              </div>
              <div class="form-group">
              <label>Data: </label>
                <input type="date" class="form-control" placeholder="Titulo" aria-label="Username" aria-describedby="basic-addon1"></input>              </div>
              <div class="form-group">
                <label>Tipo: </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option value="event"> Eventual </option>
                  <option value="rotina"> Rotina </option>
                </select>
              </div>

              <div>
                <button class="btn btn-primary">Registrar</button>
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
          <p><Link to="/medico-pac">Pacientes</Link></p>
          <p className="selected-side-op"><Link to="/medico-cons">Consultas</Link></p>
          <p><Link to="/medico-rel">Relatório</Link></p>
          <p><Link to="/medico-pub">Público</Link></p>
        </aside>
        <div className="cont-cons-l">
        <iframe width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiOGEwMjVkN2ItNjgyZi00NzQyLTlkYWMtOTUzNmNlMWUxNzYzIiwidCI6ImVjY2U3N2ZhLThhOWYtNDYzMC05MDNmLTg0YmVmNzZiZTliNyJ9" frameborder="0" allowFullScreen="true"></iframe>
          <button class="btn btn-dark" onClick={() => setismodalopenConsulta(true)}>Nova consulta</button>
        </div>      
      </div>
      <Footer />
    </div >
  )
}

export default MedicoCons;