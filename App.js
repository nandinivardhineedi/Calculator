import React from 'react';
import './App.css';
import Co from './componets/Converter/Co'; // Corrected the spelling of 'components'

const App = () => {
  return (
    <div className="App">
       <center> <h1 className='header'>Welcome to the Converter App</h1> </center>
        <Co />
     
    </div>
  );
}

export default App;
