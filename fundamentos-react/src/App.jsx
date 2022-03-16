import React from 'react'

import First from './components/basicos/First'
import Parameters from './components/basicos/Parameters'
import Fragments from './components/basicos/Fragments'

export default _ =>

    <div id="app">
        <h1>Fundamentos React (Arrow)</h1>
        <Fragments />
        <Parameters
            titulo="Situação do Aluno"
            aluno="Lucas Soares" nota={9.2}
        />
        <First></First>
    </div>

