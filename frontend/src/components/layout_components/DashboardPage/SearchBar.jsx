import React from 'react';
import { Search } from "lucide-react";
import styles from '../../../pages/Dashboard.module.css'  

function SearchBar({ onSearch }) {
  return (
    <div className={styles.searchWrapper}>
      <Search size={18} className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search scripts..."
        className={styles.searchBar}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;