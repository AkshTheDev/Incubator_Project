import React from 'react';
import styles from '../../../pages/Dashboard.module.css'  

function FileSort({ sortBy, setSortBy }) {
  return (
    <select 
      className={styles.filterSelect}
      onChange={(e) => setSortBy(e.target.value)}
      value={sortBy}
    >
      <option value="last edited">Last edited</option>
      <option value="title">Title</option>
    </select>
  );
}

export default FileSort;