import React from 'react';
import styles from '../../pages/Dashboard.module.css';
import FileActions from './FileActions';

function FileCard({ file, viewMode, onRename, onDelete, onEdit }) {
  return (
    <div className={viewMode === 'grid' ? styles.fileCard : styles.fileRow}>
      <h3>{file.name}</h3>
      <div className={styles.fileInfo}>
        <FileActions 
          file={file}
          onRename={onRename}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    </div>
  );
}

export default FileCard;
