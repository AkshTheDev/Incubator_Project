import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CreateScriptModal.module.css";
import {save} from "../../api/Save_Logout";

export default function CreateScriptModal({onClose}) {
  const handlesavedata = async()=>{
    try{
      // const dataToSend = {
      //   ...formData,
      //   pageTarget: parseInt(formData.pageTarget),
      // };
      const response = await save(formData)
      console.log("script:",response)
      onClose()
    }
    catch(error){
      console.log(error)
    }
  }
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    writtenBy: "",
    genre: "",
    pageTarget: "",
    logline: "",
  });
  
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <>
      <div className={
        isOpen ? styles.modal : styles.hidden
        }>
        <h2 className={styles.title}>New Script</h2>
        <div className={styles.form}>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Title"
            onChange={handleChange}
          />
          <div className={styles.row}>
            <input
              type="text" 
              name="subtitle"
              value={formData.subtitle}
              placeholder="Subtitle"
              onChange={handleChange}
            />
            <input
              type="text"
              name="writtenBy"
              value={formData.writtenBy}
              placeholder="Written By"
              onChange={handleChange}
            />
          </div>
          <div className={styles.row}>
            <input
              type="text"
              name="genre"
              value={formData.genre}
              placeholder="Genre"
              onChange={handleChange}
            />
            <input
              type="number"
              name="pageTarget"
              value={formData.pageTarget}
              placeholder="Page Target"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="logline"
            value={formData.logline}
            placeholder="Logline"
            onChange={handleChange}
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.createScript} onClick={handlesavedata}>
            Create Script
          </button>
        </div>
      </div>
    </>
  );
}
