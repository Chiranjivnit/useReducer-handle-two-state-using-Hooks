import React from 'react';
import './App.css';
import CountOne from './components/CounterOne';
import Counttwo from './components/CountTwo';
import CounterThree from './components/CounterThree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CountOne/> */}
        {/* <Counttwo /> */}
        <CounterThree/>
      </header>
    </div>
  );
}

export default App;

// NOTE *****

// Uncomment one by one component and check all the component documents available inside each indivisual component.
// every component having different concept apply.

