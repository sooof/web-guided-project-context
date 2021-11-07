import React ,{useState} from "react";
import ReactDOM from "react-dom";

import FamilyContext from "./contexts/FamilyContext";
import { data } from "./data";
import App from "./App";

const Application = () => {
    const [families] = useState(data);
    const [activeFamily, setActiveFamily] = useState(families[0]);
    
    console.log("families = ",families)
    console.log("activeFamily", activeFamily)
    return(
      <FamilyContext.Provider value={{families, activeFamily}}>
        <App />
      </FamilyContext.Provider>
          )
 }
const rootElement = document.getElementById("root");
ReactDOM.render(
         <Application />
, rootElement);

