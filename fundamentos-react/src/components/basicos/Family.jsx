import React from "react";
import FamilyMember from './FamilyMember'

export default (props) => {
  return (
      <div>
          <FamilyMember nome="Lucas" sobrenome={props.sobrenome}/>
          <FamilyMember nome="Charles" {...props}/>
          <FamilyMember nome="Pedro" {...props}/>
      </div>
  )
};
