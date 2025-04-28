import React, { useState } from 'react';
import { MoreVertical, Edit2, Trash2 } from 'lucide-react';
import styles from '../../../pages/Dashboard.module.css'  

function FileActions({ file, onRename, onDelete, onEdit }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className={styles.fileActions}>
      <button 
        className={styles.menuButton}
        onClick={(e) => {
          e.stopPropagation();
          setIsPopupOpen(!isPopupOpen);
        }}
      >
        <MoreVertical size={16} />
      </button>
      {isPopupOpen && (
        <div className={styles.popup}>
          <button onClick={() => {
            onEdit(file);
            setIsPopupOpen(false);
          }}>
            <Edit2 size={16} /> Rename
          </button>
          <button onClick={() => {
            onDelete(file);
            setIsPopupOpen(false);
          }}>
            <Trash2 size={16} /> Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default FileActions;