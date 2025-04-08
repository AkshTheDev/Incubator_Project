import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import styles from './Script.module.css';
import DashboardNavBar from './DashboardNavBar';


function Script() {
  return (
    <>
    <DashboardNavBar/>
    <DashboardSidebar />
    </>
  );
}

export default Script;

