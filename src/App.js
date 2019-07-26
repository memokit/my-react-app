import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown'

function App() {

  let provinces = [
    {name: 'Bangkok'},
    {name: 'Chonburi'},
  ]

  return (
    <div>
      <LocationDropDown locations={provinces}></LocationDropDown>
    </div>
  );
}

export default App;
