import {
    Search,
    Cloud,
    List,
    LayoutGrid,
    MoreHorizontal,
  } from "lucide-react";
import DashboardFiles from "./Dashboardfiles";
import styles from '../../../pages/Dashboard.module.css'  
function Component({ files, sortBy, setsortBy, viewMode, setViewMode, onRename, onDelete }){
    const sortFiles = (files) => {
        if (!Array.isArray(files)) return []; 
      return [...files].sort((a, b) => {
        if (sortBy === "title") {
          return a.name.localeCompare(b.name);
        }
        if(a.size && b.size){

            return b.size - a.size;
        }
        return new Date(b.lastModified) - new Date(a.lastModified);
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
export default Component