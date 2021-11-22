import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import "../assets/css/login.css"

function Login() {
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const usuarios = [
    {
      login: "pac",
      senha: "1234",
      tipo: 1
    },
    {
      login: "med",
      senha: "1234",
      tipo: 0
    }
  ]

  function makeLogin(event) {
    event.preventDefault()
    console.log(email, senha)
    usuarios.map(usuario => {
      if (usuario.login == email && usuario.senha == senha) {
        if (usuario.tipo == 0) {
          history.push("/medico")
        } else {
          history.push("/paciente")
        }

      }
    })
  }
  return (

    <div className="background">
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <div className="container-login">
        <div className="container-form">
          <h1 className="container-title">Mentrical</h1>
          <span className="container-text">Efetue login para acessar os recursos</span>
          <form className="form-login">
            <div>
              <label>Login: </label>
              <input onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Senha: </label>
              <input type="password" onChange={e => setSenha(e.target.value)} />
            </div>
            <div className="div-cad">
              <span className="spn-cad"> Clique aqui para cadastrar </span>
              <button id="botaocadastrar" className="form-button btn btn-secondary" onClick={(e) => makeLogin(e)}><Link to="/medico">Entrar</Link></button>
            </div>
          </form>
        </div>
      </div>


      <Footer />
    </div >
  )
}

export default Login;