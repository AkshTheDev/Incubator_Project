import React from "react"
import Styles from './AllScripts.module.css'
import instance from "../../../api/axios"
import {useState, useEffect} from 'react'
export default function AllScripts(){
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
        <div className={Styles.container}>
            {script.length>0?script.map((script,index)=>(
                <div key={index} className={Styles.box}>
                    <i className={"fa-regular fa-file"} style={{ color: "black" }}></i>
                    <div className={Styles.details}>
                        <span className={Styles.title}>{script.title}</span>
                        <span className={Styles.meta}>User: {script.user_id}</span>
                        <span className={Styles.meta}>
                        Created: {new Date(script.created_at).toLocaleString()}
                        </span>
                    </div>
                </div>
            )):(
                <p style={{paddingLeft: '1rem'}}>No script found</p>
            )}
        </div>
        </>
    );
}