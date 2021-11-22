import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./css/Land.css"
import "./css/menu.css"
import "./css/modal.css"

function Land() {
    return (
        
        <div className="Landpage">

            <nav id="menu">
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/medico">Médicos</Link></li>
                    <li><Link to="/paciente">Pacientes</Link></li>
                </ul>
            </nav>
            <div className="fundo1">
                <h1 className="Name">
                    Flare Not
                </h1>
                <h2 className="Frase">
                    Clique no botão para denunciar um incêndio!
                </h2>
            </div>

            <div className="slogan">
                <p>

                </p>
            </div>
            <div className="fall">
                <div className="about">

                </div>

            </div>
        </div >
    )
}

export default Land;