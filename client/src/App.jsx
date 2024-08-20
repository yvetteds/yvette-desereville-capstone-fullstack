import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Projects } from "./pages/Projects/Projects";
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails";
import { AddProject } from "./pages/AddProject/AddProject";
import { EditProjectDetails } from "./pages/EditProjectDetails/EditProjectDetails";
import { Prompt } from "./pages/Prompt/Prompt";

function App() {
  const [isNewProject, setIsNewProject] = useState(0);
  const [isEditProject, setIsEditProject] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects isNewProject={isNewProject} />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route
          path="/addProject"
          element={
            <AddProject
              isNewProject={isNewProject}
              setIsNewProject={setIsNewProject}
            />
          }
        />
        <Route
          path="/project/:projectId/editProject"
          element={
            <EditProjectDetails
              isEditProject={isEditProject}
              setIsEditProject={setIsEditProject}
            />
          }
        />
        <Route path="/prompt" element={<Prompt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
