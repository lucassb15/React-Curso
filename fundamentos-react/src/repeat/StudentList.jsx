import React from "react";
import student from "../data/student";

export default (props) => {
  const studentsJSX = student.map((students) => {
    return (
      <li key={students.id}>
        {students.id}) {students.nome} {"->"} {students.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsJSX}</ul>
    </div>
  );
};
