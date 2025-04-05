import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './styles/index.css'
import AppCss from './App.module.css'
import Home from './pages/Home'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Editor from "./pages/Editor";
import SelectionCard from "./components/layout_components/SelectionCard";
import TextEditorLayout from "./components/layout_components/editorpage/TextEditorLayout";
import Desktop from "./components/layout_components/editorpage/Desktop";
import Notification from "./components/layout_components/editorpage/Notification";
import Search from "./components/layout_components/editorpage/Search";
import CreateScript from "./components/layout_components/editorpage/CreateScript";

function App() {
  return(
    
    <Router>
      <TextEditorLayout/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Editor" element={<Editor/>}/>
      <Route path="/sel" element={<SelectionCard/>}/>
      <Route path="/Desktop" element={<Desktop/>}/>
      <Route path="/Search" element={<Search/>} />
      <Route path="/Notification" element={<Notification/>}/>
      <Route path="/CreateScript" element={<CreateScript/>} />
    </Routes>
  </Router>
  );
}

export default App;
