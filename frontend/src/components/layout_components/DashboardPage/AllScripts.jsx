import React from "react"
import Styles from './AllScripts.module.css'
import instance from "../../../api/axios"
import {useState, useEffect} from 'react'
import { openScript } from "../../../api/openScript"
import { useNavigate } from "react-router-dom"
export default function AllScripts({script}){
        const navigate = useNavigate()
    const handleclick = async(id)=>{
        try{

            const response = await openScript(id)
            console.log("box clicked: ",response)
            navigate("/Editor")
        }
        catch(error){
            console.log(error)
        }
    }
    
    return (
        <>
        <div className={Styles.container}>
            {script.length>0?script.map((script,index)=>(
                <div key={index} className={Styles.box} onClick={() => handleclick(script.id)}>
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