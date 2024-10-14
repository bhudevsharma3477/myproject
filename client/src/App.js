import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';

const App = () => {
  const [data, set_data] = useState("ACBD");

  const handleChange = (event) => {
    set_data(event.target.value);
  };

  return(
    <>
    <Header />
    {/*<Form1 data={data} handleChange={handleChange} />*/}
    {/*<Form2 />*/}
    {<Form3 />}
    </>
  );
}

export default App;
