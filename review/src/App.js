   
import React, { useState, createContext, useContext, useReducer } from 'react';
import { reducer,initialState,setLocation, setName } from './reducer';
import data from  './data'
// console.log(data)

const PersonContext = createContext();
console.log("PersonContext = ", PersonContext)

const DogContext = createContext();

const App = ()=> {
    // const [person, setPerson] = useState(data)

    const [person, dispatch]= useReducer(reducer, initialState)
    console.log("Func---App ", person)
    return(<div className="App component">
        <h1>Main App</h1>
        <PersonContext.Provider  value= {{person, dispatch, name: "warren", arr:[1,2,3,4,5]}}>
            <DogContext.Provider value={'fidp'}>
                <SubComp1  />
            </DogContext.Provider>
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = (props) => {
    const {person, name} = useContext(PersonContext)
    console.log("context = ", person)
    console.log("Fubc---SubComp1 ", person)
    console.log("Fubc---nema ", name)

    const context = useContext(PersonContext)
    // console.log("context = ", context)
    return (<div className="component">
        <h1>SubComp1</h1>
        <p>{`${person.name.title} ${person.name.first}`}</p>
        <p>{`${context.person.name.title} ${context.person.name.first}   ${context.name} ` }</p>
        <p>{`${useContext(PersonContext).person.name.title} ${useContext(PersonContext).person.name.first}`}</p>
        <SubComp2 />
    </div>)
}
const SubComp2 = (props) => {
    // const {person, setPerson} = useContext(PersonContext)
    const {person, dispatch} = useContext(PersonContext)
    console.log("Fubc---SubComp2 ", person)

    const dogName = useContext(DogContext)
    const handleClick = () => {
        dispatch(
            setLocation({
                 
                    street: "222",
                    city: "San ",
                    state: "CA",
                    postcode: "94706"
                
            })
        )
        // setPerson({
        //     ...person,
        //     location: {
        //         street: "222",
        //         city: "San ",
        //         state: "CA",
        //         postcode: "94706"

        //     }
        // });
    }
    return (<div className="component">
        <h1>SubComp2</h1>
        <p> Dog name is {dogName}</p>
        <button onClick={handleClick}>Change Location</button>
        <SubComp3 />
    </div>)
}
const SubComp3 = (props) => {
    const {person, setPerson, arr} = useContext(PersonContext)

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
    console.log("arr = ", arr)
    return (<div className="component">
        <h1>SubComp3</h1>
        <p>{`${person.location.street} ${person.location.scity} ${person.location.postcode}`}</p>
        <button onClick={handleClick}>Change Name</button>
    </div>)
}

export default App;