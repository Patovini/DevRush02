import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico.css"
import "../assets/css/menu.css"
import Footer from '../components/Footer'



function Medico() {
   
    return (
        <div className="background">
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
                <div className="cont-med-l">
                    {/* <h1>Bem vindo</h1>
                    <br></br> */}
                <iframe width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiNWE4MGIwYWItZjA2NC00ZGYyLTk2MDQtMDczNjRiZjM2YTBmIiwidCI6ImVjY2U3N2ZhLThhOWYtNDYzMC05MDNmLTg0YmVmNzZiZTliNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                </div>
                {/* <div className="cont-med-r">
                    <h1>Pacientes</h1>
                    <br></br>
                    <iframe width="100%" height="75%" src="https://app.powerbi.com/view?r=eyJrIjoiZjUwNzFiZTktMTcyMS00NTI0LWFkNWQtMmU5NmVmOTA3Yjk3IiwidCI6ImVjY2U3N2ZhLThhOWYtNDYzMC05MDNmLTg0YmVmNzZiZTliNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                </div> */}
            </div>
            <Footer />
        </div >
    )
}

export default Medico;