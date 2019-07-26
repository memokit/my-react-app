import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown'
import ThaiLocationSelectForm from './components/ThaiLocationSelectForm';

function App() {

  let provinces = [
    {id: 1, name: 'Bangkok'},
    {id: 2, name: 'Chonburi'},
  ]

  return (
    <div>
      <ThaiLocationSelectForm/>
    </div>
  );
}

export default App;
