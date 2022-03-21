import "./App.css";
import React from "react";

import StudentList from "./repeat/StudentList";
import Family from "./components/basicos/Family";
import FamilyMember from "./components/basicos/FamilyMember";
import Card from "./components/layout/Card";
import Random from "./components/basicos/Random";
import First from "./components/basicos/First";
import Parameters from "./components/basicos/Parameters";
import Fragments from "./components/basicos/Fragments";

export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="CardsContainer">
    <Card titulo="#06 - Repeat" color="#89997C">
        <StudentList></StudentList>
      </Card>
      <Card titulo="#05 - Family Components" color="#4F0A1B">
        <Family sobrenome="Soares">
          <FamilyMember nome="Lucaz" />
          <FamilyMember nome="Charles" />
          <FamilyMember nome="Pedro" />
        </Family>
      </Card>
      <Card titulo="#04 - Random Challenge" color="#89388C">
        <Random min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragments" color="#DC3965">
        <Fragments />
      </Card>
      <Card titulo="#02 - Parameters" color="#EFB837">
        <Parameters
          titulo="Situação do Aluno"
          aluno="Lucas Soares"
          nota={9.2}
        />
      </Card>
      <Card titulo="#01 - First component" color="#5ABFB8">
        <First></First>
      </Card>
    </div>
  </div>
);
