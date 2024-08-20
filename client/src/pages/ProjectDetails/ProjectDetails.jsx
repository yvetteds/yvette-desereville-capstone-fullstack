import "./ProjectDetails.scss";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { HeaderDetails } from "../../components/HeaderDetails/HeaderDetails";
import { Todo } from "../../components/Todo/Todo.jsx";
import { getSingleProject, getTodo } from "../../lib/api-projects";

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getSingleProject(setProject, projectId);
    getTodo(setTodo, projectId);
  }, [projectId]);

  if (!project || !todo) return "Loading...";

  return (
    <main className="main">
      <HeaderDetails projectName={project.project_name} projectId={projectId} />
      <div className="card">
        <div className="card__header--container">
          <h2 className="card__header">
            Overarching Goal/Hypothesis/Motivation
          </h2>
        </div>
        <p className="card__body">{project.goal}</p>
      </div>
      <div className="card">
        <div className="card__header--container">
          <h2 className="card__header">Task List</h2>
        </div>
        <div className="card__body">
          <Todo projectId={projectId} />
        </div>
      </div>
      <div></div>
      <div className="metrics-and-tools">
        <div className="card--m-and-t">
          <div className="card__header--container-m-and-t">
            <h2 className="card__header">Metrics</h2>
          </div>
          <p className="card__body--m-and-t">{project.metrics}</p>
        </div>
        <div className="card--m-and-t">
          <div className="card__header--container-m-and-t">
            <h2 className="card__header">Tools</h2>
          </div>
          <p className="card__body--m-and-t">{project.tools}</p>
        </div>
      </div>
      <div className="card">
        <div className="card__header--container">
          <h2 className="card__header">Key Wins</h2>
        </div>
        <p className="card__body">{project.wins}</p>
      </div>
      <div className="card">
        <div className="card__header--container">
          <h2 className="card__header">Post-Mortem</h2>
        </div>
        <p className="card__body">{project.post_mortem}</p>
      </div>
      <footer className="footer">
        <NavLink to="/">
          <img src="/src/assets/icons/home.svg" alt="home-house" />
        </NavLink>
        <NavLink to={`/project/${project.id}/editProject`}>
          <div className="project__add">
            <button type="button" className="project__add--button">
              <img
                src="/src/assets/icons/edit-pencil.svg"
                alt="edit-pencil"
                className="edit"
              />
            </button>
          </div>
        </NavLink>
        <NavLink to="/prompt">
          <img src="/src/assets/icons/automation.svg" alt="favorite-star" />
        </NavLink>
      </footer>
    </main>
  );
};
