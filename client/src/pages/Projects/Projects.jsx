import "./Projects.scss";
import { ProjectsList } from "../../components/ProjectsList/ProjectsList.jsx";
import { useState, useEffect } from "react";
import { getAllProjects } from "../../lib/api-projects.js";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Projects = ({ isNewProject }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects(setProjects);
  }, [isNewProject]);

  if (!projects.length) return "Loading...";

  return (
    <main className="main">
      <ProjectsList projects={projects} />
      <Footer />
    </main>
  );
};
