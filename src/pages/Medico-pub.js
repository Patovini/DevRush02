import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import "../assets/css/medico-pub.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer';

function MedicoPub() {
  const [activy, setActivy] = useState(true)

  return (
    <div className="background">
      {/* <div id="mod-view-user">
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
                <label>Masculino</label>
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
                <button>Vsoltar</button>
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
                <button><Link to="/medico" > Voltar </Link></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

{/* FIM DO MODAL */}
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
          <p><Link to="/medico-cons">Consultas</Link></p>
          <p><Link to="/medico-rel">Relatório</Link></p>
          <p><Link to="/medico-pub">Público</Link></p>
        </aside>
        <div className="cont-med-pub-cen">
          <h1>
            Pacientes
          </h1>

        </div>
      </div>
      <Footer />
    </div >
  )
}

export default MedicoPub;