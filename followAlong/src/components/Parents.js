import React, { useContext } from "react";

import FamilyContext from "../contexts/FamilyContext";
const Parents = props => {
  const family = useContext(FamilyContext)
  console.log("Parents.js Family", family)
  return (
    <section className="parents">
      {family.parents.map(p => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Parents;
