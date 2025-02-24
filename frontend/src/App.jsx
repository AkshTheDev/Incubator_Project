import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/index.css'
import AppCss from './App.module.css'
import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
  );
}

export default App;
