import React,{useState} from 'react'
import styles from './Dashboard.module.css';
import DashboardNavBar from '../components/layout_components/DashboardPage/DashboardNavBar'
import DashboardSidebar from '../components/layout_components/DashboardPage/DashboardSidebar'
import DashboardFiles from './DashboardFiles'

import {
  Search,
  Cloud,
  List,
  LayoutGrid,
  MoreHorizontal,
} from "lucide-react";

function Component({ files, sortBy, setsortBy, viewMode, setViewMode, onRename, onDelete }){
  const sortFiles = (files) => {
    return [...files].sort((a, b) => {
      if (sortBy === "title") {
        return a.name.localeCompare(b.name);
      }
      
      return b.size - a.size;
    });
  };

  const sortedFiles = sortFiles(files);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.dashboardContainer}>
          <h1 className={styles.title}>Dashboard</h1>

          <div className={styles.searchWrapper}>
            <Search size={18} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search scripts..."
              className={styles.searchBar}
            />
          </div>

          {/* <div className={styles.sectionHeader}>
            <div className={styles.recentsLabel}>Recents</div>
          </div> */}
          {/* <div className={styles.recentsContainer}>
            <div className={styles.recentGrid}>
              {files.slice(0, 3).map((file, index) => (
                <div key={index} className={styles.recentCard}>
                  <h3>{file.name}</h3>
                  <p>{file.size} KB</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className={styles.sectionHeader}>
            <div className={styles.myFilesLabel}>My Files</div>
            <div className={styles.controls}>
              <select 
                className={styles.filterSelect}
                onChange={(e) => setsortBy(e.target.value)}
                value={sortBy}
              >
                <option value="last edited">Last edited</option>
                <option value="title">Title</option>
              </select>
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
            </div>
          </div>
          
          <div className={styles.filesContainer}>
            <DashboardFiles 
              files={sortedFiles} 
              viewMode={viewMode} 
              onRename={onRename}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function Dashboard() {
  const [sortBy, setsortBy] = useState("last edited");
  const [viewMode, setViewMode] = useState("grid");
  const [files, setFiles] = useState([
    { name: "File1.txt", size: 14 },
    { name: "File2.docx", size: 45 },
    { name: "File3.pdf", size: 78 },
  ]);

  const handleRename = (file, newName) => {
    const updatedFiles = files.map(f => 
      f === file ? { ...f, name: newName } : f
    );
    setFiles(updatedFiles);
  };

  const handleDelete = (fileToDelete) => {
    const updatedFiles = files.filter(f => f !== fileToDelete);
    setFiles(updatedFiles);
  };

  return (
    <>
      <DashboardNavBar/>
      <DashboardSidebar/>
      <Component 
        files={files} 
        sortBy={sortBy} 
        setsortBy={setsortBy}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onRename={handleRename}
        onDelete={handleDelete}
      /> 
    </>
  );
}

export default Dashboard;