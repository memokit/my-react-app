import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationDropDown from './components/LocationDropDown'

function App() {

  let provinces = [
    {id: 1, name: 'Bangkok'},
    {id: 2, name: 'Chonburi'},
  ]

  return (
    <div>
      <LocationDropDown defaultLabel="จังหวัด" locations={provinces}></LocationDropDown>
    </div>
  );
}

export default App;
