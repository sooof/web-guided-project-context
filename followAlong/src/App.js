import React, { useState, createContext, useContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

import FamilyContext from "./contexts/FamilyContext";

// export const FamilyContext =   createContext()
// console.log("FamilyContext", FamilyContext)


export default function App() {
  const [families] = useState(data);
  console.log("families = ",families)
  const [activeFamily, setActiveFamily] = useState(families[0]);
  console.log("activeFamily", activeFamily)
  console.log("App FamilyContext", FamilyContext)
  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(family => (
          <button
            className={`family-button ${family.familyName ===
              activeFamily.familyName && "active"}`}
            key={family.familyName}
            onClick={() => setActiveFamily(family)}
          >
            {family.familyName}
          </button>
        ))}
      </section>
      <FamilyContext.Provider value={activeFamily}>
        {activeFamily && <FamilyTree />}
      </FamilyContext.Provider>
    </div>
  );
}