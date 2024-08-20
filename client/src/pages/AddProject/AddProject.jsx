import "./AddProject.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { postProject } from "../../lib/api-projects";

export const AddProject = ({ setIsNewProject }) => {
  const [formValues, setFormValues] = useState({
    project_name: "",
    project_type: "",
    project_status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    try {
      await postProject(formValues);
      setIsNewProject((isNewProject) => isNewProject + 1);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main">
      <form action="submit" className="add_form" onSubmit={handleSubmit}>
        <div className="label-and-input">
          <label htmlFor="name" className="label">
            Project Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Name your project"
            name="project_name"
            value={formValues.project_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="label-and-input">
          <label htmlFor="type" className="label">
            Project Type
          </label>
          <select
            className="input--select"
            placeholder="Select the type of project"
            name="project_type"
            value={formValues.project_type}
            onChange={handleInputChange}
          >
            <option value="Project Type">Project Type</option>
            <option value="Personal">Personal</option>
            <option value="Academic">Academic</option>
            <option value="Industry">Industry</option>
          </select>
        </div>
        <div className="label-and-input">
          <label htmlFor="status" className="label">
            Project Status
          </label>
          <select
            className="input--select"
            placeholder="Select the type of project"
            name="project_status"
            value={formValues.project_status}
            onChange={handleInputChange}
          >
            <option value="">Project Status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="submit-button__container">
          <button type="submit" className="submit-button">
            + Add Project
          </button>
        </div>
      </form>
      <footer className="footer">
        <NavLink to="/">
          <div className="project__add">
            <button type="button" className="home-button">
              <img
                src="/src/assets/icons/home.svg"
                alt="home-house"
                className="home-icon"
              />
            </button>
          </div>
        </NavLink>
      </footer>
    </main>
  );
};
