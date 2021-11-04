import React from 'react';


const SubComp1 = () => {
    return (<div className="component">
        <h1>SubComp1</h1>
        <SubComp2/>
    </div>)
}

const SubComp2 = () => {
    return (<div className="component">
        <h1>SubComp2</h1>
    </div>)
}


const App = ()=> {
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1/>
    </div>);
};

export default App;