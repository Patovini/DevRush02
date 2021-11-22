import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/Land.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"
import Footer from '../components/Footer'

function Land() {
	return (

		<div className="background">
			<nav id="menu">
				<ul>
					<li><Link to="/login">Login</Link></li>
				</ul>
			</nav>

			<div className="div-top-mark">
				<h1>
					Mentrical
				</h1>
				<h2>
					Um projeto para todos.
				</h2>
			</div>

			<div className="div-middle-pic">
				<div className="div-mid-img">
					<img src={"https://www.thechicagoschool.edu/insightadmin/2019/11/why-psychology.jpg"} />
				</div>
				<div className="div-mid-text">
					<h2>
						Nossa ambição é poder
						ajudar todos a ter uma
						qualidade de vida melhor.
					</h2>
					<h2>
						Para isso, bla bla bla bla bla
						bla bla bla bla bla bla bla bla
						bla bla bla.
					</h2>
				</div>
			</div>

			<Footer />
		</div >
	)
}

export default Land;