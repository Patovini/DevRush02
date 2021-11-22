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
                    <li><img src="https://static.wixstatic.com/media/0fbf32_0b8feca532354252b3d4dd49fbcaf095~mv2.gif" className="logoMenu" alt="logoMenu" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/medico">Médicos</Link></li>
                    <li><Link to="/paciente">Pacientes</Link></li>
                </ul>
            </nav>
            <div className="fundo1">

            </div>

            <div className="fall">
                <div className="about">
                    <p className="p-common"> Nosso projeto consiste em facilitar e icentivar as pessoas a denunciarem quaisquer foco de incêndio! </p>
                </div>

            </div>
        </div >
    )
}

export default Land;