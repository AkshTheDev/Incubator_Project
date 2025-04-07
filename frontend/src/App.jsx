import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './styles/index.css'

import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editor from "./pages/Editor";
import Desktop from "./components/layout_components/DashboardPage/Desktop";
import Dashboard from "./pages/Dashboard";

function App() {
  return(
    
    <Router>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Editor" element={<Editor/>}/>
      <Route path="/Desktop" element={<Desktop/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      
    </Routes>
  </Router>
  );
}

export default App;
