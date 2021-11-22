import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico-rel.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer';

function MedicoRel() {

  return (
    <div className="background">
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medico">Painel</Link></li>
          <li><Link to="/">Sair</Link></li>
        </ul>
      </nav>

      <div className="cont-principal-rel">
        <aside className="side-menu">
          <p><Link to="/medico-pac">Pacientes</Link></p>
          <p><Link to="/medico-cons">Consultas</Link></p>
          <p className="selected-side-op"><Link to="/medico-rel">Relatório</Link></p>
          <p><Link to="/medico-pub">Público</Link></p>
        </aside>
        <div className="cont-rel-center">
        <iframe width="100%" height="100%" src="https://app.powerbi.com/view?r=eyJrIjoiOTk0YWUyOTctNGZlZS00YmZhLWIyNGMtMGIxMzM3YmJlMTY0IiwidCI6ImVjY2U3N2ZhLThhOWYtNDYzMC05MDNmLTg0YmVmNzZiZTliNyJ9" frameborder="0" allowFullScreen="true"></iframe>
        </div>

      </div>
      
      <Footer />


    </div >
  )
}

export default MedicoRel;