import React , { useContext } from "react";
import FamilyContext from "./contexts/FamilyContext";


import FamilyTree from "./components/FamilyTree";
import "./styles.scss";


// export const FamilyContext =   createContext()
// console.log("FamilyContext", FamilyContext)


export default function App() {
  console.log("families = ")
  // const [families] = useState(data);
  // console.log("families = ",families)
  // const [activeFamily, setActiveFamily] = useState(families[0]);
  // console.log("activeFamily", activeFamily)
  const {families, activeFamily} = useContext(FamilyContext)
  console.log("2 families = ",families)
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
      {/* <FamilyContext.Provider value={activeFamily}> */}
        {activeFamily && <FamilyTree />}
      {/* </FamilyContext.Provider> */}
    </div>
  );
}