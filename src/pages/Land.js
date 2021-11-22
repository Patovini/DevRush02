import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Land.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer'

function Land() {
    return (

        <div className="backgroundland">


            <nav id="menu">
                <ul>
                <li><Link to="/login">Login</Link></li>

                </ul>
            </nav>

            <div className="div-top-mark" >
                <h1 >
                    Mentrical
                </h1>
                <p>Um projeto para todos.</p>
								<p>A mentrical tem como principal objetivo trazer qualidade de vida </p>
								<p>
									a todos os seus usuarios, um aplicativo que beneficia tanto o profissional quanto o paciente.
								</p>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

            </div>


<Footer />

        </div >

    )
}

export default Land;