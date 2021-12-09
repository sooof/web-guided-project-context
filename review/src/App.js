   
import React, { useState, createContext, useContext } from 'react';
import data from  './data'
// console.log(data)

const PersonContext = createContext();
console.log("PersonContext = ", PersonContext)

const App = ()=> {
    const [person, setPerson] = useState(data)
    console.log("Func---App ", person)
    return(<div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider  value= {{person, setPerson}}>
            <SubComp1  />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = (props) => {
    const {person, setPerson} = useContext(PersonContext)
    console.log("context = ", person)
    console.log("Fubc---SubComp1 ", person)
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first}`}</p>
        <SubComp2 />
    </div>)
}
const SubComp2 = (props) => {
    const {person, setPerson} = useContext(PersonContext)
    console.log("Fubc---SubComp2 ", person)
    const handleClick = () => {
        setPerson({
            ...person,
            location: {
                street: "222",
                city: "San ",
                state: "CA",
                postcode: "94706"

            }
        });
    }
    return (<div className="component">
        <h1>SubComp2</h1>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 />
    </div>)
}
const SubComp3 = (props) => {
    const {person, setPerson} = useContext(PersonContext)

    const handleClick = () => {
        setPerson({
            ...person,
            name: {
                title: "222",
                first: "San ",
                last: "CA",
            }
        });
    }
    console.log("Fubc---SubComp3 ", person)
    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.scity} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default App;