import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles/index.css'
import AppCss from './App.module.css'
import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editor from "./pages/Editor";
import SelectionCard from "./components/layout_components/SelectionCard";

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Editor" element={<Editor/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;
