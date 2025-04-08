import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import FileCard from '../components/dashboard/FileCard';
import RenameForm from '../components/dashboard/RenameForm';

function DashboardFiles({ files, viewMode, onRename, onDelete }) {
  const [editingFile, setEditingFile] = useState(null);

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