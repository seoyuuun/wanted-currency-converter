import React from 'react';
import FirstConverter from './pages/FirstConverter';
import SecondConverter from './pages/secondConverter';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FirstConverter />} />
        <Route exact path="/second" element={<SecondConverter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;