import './App.css'
import React from "react";

import Card from "./components/layout/Card";
import Random from "./components/basicos/Random";
import First from "./components/basicos/First";
import Parameters from "./components/basicos/Parameters";
import Fragments from "./components/basicos/Fragments";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="CardsContainer">
    <Card titulo="#04 - Random Challenge">
    <Random min={1} max={60} />
    </Card>
    <Card titulo="#03 - Fragments">
    <Fragments />
    </Card>
    <Card titulo="#02 - Parameters">
    <Parameters titulo="Situação do Aluno" aluno="Lucas Soares" nota={9.2} />
    </Card>
    <Card titulo="#01 - First component">
    <First></First>
    </Card>
    </div>
    
   
  </div>
);
