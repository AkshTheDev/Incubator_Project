import React, { useState } from 'react';
import styles from '../../../pages/Dashboard.module.css'  
import FileCard from './FileCard';
import RenameForm from './RenameForm';

function DashboardFiles({ files, viewMode, onRename, onDelete }) {
  const [editingFile, setEditingFile] = useState(null);
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
    <div className={viewMode === 'grid' ? styles.filesGrid : styles.filesList}>
      {files.length > 0 ? (
        files.map((file, index) => (
          editingFile === file ? (
            <RenameForm
              key={index}
              file={file}
              onRename={onRename}
              onCancel={() => setEditingFile(null)}
            />
          ) : (
            <FileCard
              key={index}
              file={file}
              viewMode={viewMode}
              onRename={onRename}
              onDelete={onDelete}
              onEdit={() => setEditingFile(file)}
              onClick={handleclick(file.id)}
            />
          )
        ))
      ) : (
        <p>No files available</p>
      )}
    </div>
  );
}

export default DashboardFiles;