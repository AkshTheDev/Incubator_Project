import { React, useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardNavBar from "../components/layout_components/DashboardPage/DashboardNavBar";
import AllScripts from "../components/layout_components/DashboardPage/AllScripts";
import { fetchScripts } from "../api/fetchScripts";
import Component from "../components/layout_components/DashboardPage/Components";

function Dashboard() {
  const [sortBy, setsortBy] = useState("last edited");
  const [viewMode, setViewMode] = useState("grid");
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchScripts();
        setFiles(data);
        console.log("All scripts:", data);
      } catch (error) {
        console.error("Error loading scripts in Dashboard:", error);
      }
    };

    getData();
  }, []);

  const handleRename = (file, newName) => {
    const updatedFiles = files.map((f) =>
      f === file ? { ...f, name: newName } : f
    );
    setFiles(updatedFiles);
  };

  const handleDelete = (fileToDelete) => {
    const updatedFiles = files.filter((f) => f !== fileToDelete);
    setFiles(updatedFiles);
  };

  return (
    <>
      <DashboardLayout
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
