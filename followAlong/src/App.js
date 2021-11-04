import React, {useContext} from "react";
import FamilyContext from './contexts/FamilyContext';

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export default function App() {
  const { families, activeFamily} = useContext(FamilyContext);

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
        {/* {activeFamily && <FamilyTree />} */}
      </FamilyContext.Provider>
    </div>
  );
}