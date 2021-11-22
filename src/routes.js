import React from 'react'
import Land from './pages/Land'
import Medico from './pages/Medico'
import MedicoPac from './pages/Medico-pac'
import MedicoCons from './pages/Medico-cons'
import MedicoRel from './pages/Medico-rel'
import MedicoPub from './pages/Medico-pub'
import Paciente from './pages/Paciente'
import Login from './pages/Login'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Land} />
            <Route path="/medico" exact component={Medico} />
            <Route path="/medico-pac" exact component={MedicoPac} />
            <Route path="/medico-cons" exact component={MedicoCons} />
            <Route path="/medico-rel" exact component={MedicoRel} />
            <Route path="/medico-pub" exact component={MedicoPub} />
            <Route path="/paciente" exact component={Paciente} />
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
    )
}

export default Routes