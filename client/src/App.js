import React from 'react';
import './App.css';
import Header from './components/Header';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';

const App = () => {
  return (
    <>
      <Header />
      {<Form1 />}
      {<Form2 />}
      {<Form3 />}
    </>
  );
}

export default App;
