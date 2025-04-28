import React from 'react';
import { List, LayoutGrid } from "lucide-react";
import styles from '../../../pages/Dashboard.module.css'  

function FileViewToggle({ viewMode, setViewMode }) {
  return (
    <div className={styles.viewControls}>
      <button 
        className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
        onClick={() => setViewMode('list')}
      >
        <List size={20} />
      </button>
      <button 
        className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
        onClick={() => setViewMode('grid')}
      >
        <LayoutGrid size={20} />
      </button>
    </div>
  );
}

export default FileViewToggle;