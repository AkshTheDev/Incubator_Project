import {React, useState, useEffect} from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import AllScripts from '../components/layout_components/DashboardPage/AllScripts'
import { fetchScripts } from '../api/fetchScripts'

function Dashboard() {
  const [script, setScripts] = useState([])
  
      useEffect(()=>{
        const getData = async () => {
          try {
            const data = await fetchScripts(); 
            setScripts(data);
            console.log("All scripts:", data);
          } catch (error) {
            console.error("Error loading scripts in Dashboard:", error);
          }
        };
    
        getData();
          },[]);
  return (
    <>
    <DashboardLayout>
      <AllScripts script={script}/>
    </DashboardLayout>
    </>

  )
}

export default Dashboard