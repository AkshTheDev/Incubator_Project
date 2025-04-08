import {React, useState, useEffect} from 'react'
import DashboardLayout from '../layouts/DashboardLayout'
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import AllScripts from '../components/layout_components/DashboardPage/AllScripts'
import instance from '../api/axios'

function Dashboard() {
  const [script, setScripts] = useState([])
      useEffect(()=>{
          const fetchScripts = async () => {
              // const url = '/getscript';
              // console.log("📡 Hitting endpoint:", instance.defaults.baseURL + url);
              try {
                const response = await instance.get('/getScript'); // adjust the endpoint
                setScripts(response.data); // assuming response.data is an array
                console.log("📄 All scripts:", response);
              } catch (error) {
                console.error("❌ Failed to fetch scripts:", error);
              }
            };
            fetchScripts();
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