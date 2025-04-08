import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './styles/index.css'
import AppCss from './App.module.css'
import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editor from "./pages/Editor";
import SelectionCard from "./components/layout_components/SelectionCard";
import TextEditorLayout from "./components/layout_components/DashboardPage/DashboardNavBar";
import Desktop from "./components/layout_components/DashboardPage/Desktop";
import Notification from "./components/layout_components/Notification";
import Search from "./components/layout_components/Search";
import CreateScript from "./components/layout_components/DashboardPage/CreateScript";
import Dashboard from "./pages/Dashboard";
import DashboardSidebar from "./components/layout_components/DashboardPage/DashboardSidebar";

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
    </Routes>
  </Router>
  );
}

export default App;
