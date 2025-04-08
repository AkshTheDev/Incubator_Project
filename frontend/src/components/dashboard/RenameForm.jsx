import React, { useState } from 'react';
import styles from '../../pages/Dashboard.module.css';

function RenameForm({ file, onRename, onCancel }) {
  const [newFileName, setNewFileName] = useState(file.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRename(file, newFileName);
  };

  return (
    <form className={styles.renameForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={newFileName}
        onChange={(e) => setNewFileName(e.target.value)}
        autoFocus
      />
      <div className={styles.buttonGroup}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default RenameForm;
