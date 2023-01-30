import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import React from 'react';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
        <Route  path="/"  element={<Home/>}/>
        <Route  path="/users"  element={<Users/>}/>
    </Routes>
    </div>
  );
}

export default App;
