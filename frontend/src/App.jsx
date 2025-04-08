import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './styles/index.css'
import AppCss from './App.module.css';
import Home from './pages/Home'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editor from "./pages/Editor";
import SelectionCard from "./components/layout_components/SelectionCard";
import Desktop from "./components/layout_components/DashboardPage/Desktop";
import Dashboard from "./pages/Dashboard";
import DashboardSidebar from "./components/layout_components/DashboardPage/DashboardSidebar";
import Script from "./components/layout_components/DashboardPage/Script";
import Projects from "./components/layout_components/DashboardPage/Projects";
function App() {
  return(
    
    <Router>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Editor" element={<Editor/>}/>
      <Route path="/sel" element={<SelectionCard/>}/>
      <Route path="/Desktop" element={<Desktop/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/DashboardSidebar" element={<DashboardSidebar/>}/>
      <Route path="/Dashboard/script" element={<Script/>}/>
      <Route path="/Dashboard/projects" element={<Projects/>}/>

    </Routes>
  </Router>
  );
}

export default App;
