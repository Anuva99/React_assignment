import React from 'react';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';

import dashboard from './common/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
