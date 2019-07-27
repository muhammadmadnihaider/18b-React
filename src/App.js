import React from 'react';
import logo from './logo.svg';
import './App.css';
import { jsxFragment } from '@babel/types';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import Comp4 from './Comp4';

let Container = {
  display: 'flex',
  flexDirection:'column',
  paddingLeft:'250px',
  paddingRight:'250px',
  justifyContent:'space-between',
  height:'56vh',
  color:'white',
  fontWeight:'bold'
}

function App() {
  return (
    <div className="App" style={Container}>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp4 />
    </div>
  );
}

export default App;
