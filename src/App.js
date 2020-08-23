import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My first react app </p>
        <Person name="Shakib khan" home="DHK"></Person>
        <Person name ="Rubel" home="CTG"></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(props){
  use
  const personStyle={
    border : '2px solid red',
    margin: '10px',
    width : '400px'
  }
  return (
  <div style={personStyle}>
    <h1>Name:{props.name}</h1>
  <h3>Address:{props.home}</h3>
  </div>
  )
    
}

export default App;
