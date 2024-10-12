import React from 'react';
import { useState } from 'react';
import './App.css';
import Formdata from './components/Formdata';
import Header from './components/Header';

const App = () => {
  const [age, setAge] = useState("ACBD");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
    <>
    <Header />
    <Formdata age={age} handleChange={handleChange} />
    </>
  );
}

export default App;
