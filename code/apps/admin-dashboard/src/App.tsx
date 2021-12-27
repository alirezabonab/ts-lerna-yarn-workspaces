import { add } from '@foxmono/common';
import { SpecialButton } from '@foxmono/react-component-library';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p> sum of 3 , 4 is : {add(3, 4)}</p>
      <SpecialButton name="this is star"></SpecialButton>
    </div>
  );
}

export default App;
