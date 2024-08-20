import "./EditProjectDetails.scss";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { API_PROJECTS_URL } from "../../lib/api-projects";

export const EditProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [goal, setGoal] = useState("");
  const [metrics, setMetrics] = useState("");
  const [tools, setTools] = useState("");
  const [wins, setWins] = useState("");
  const [postMortem, setPostMortem] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(API_PROJECTS_URL);
        const projects = response.data;

        const project = projects.find(
          (project) => project.id.toString() == projectId
        );

        if (project) {
          setName(project.project_name);
          setType(project.project_type);
          setStatus(project.project_status);
          setGoal(project.goal);
          setMetrics(project.metrics);
          setTools(project.tools);
          setWins(project.wins);
          setPostMortem(project.postMortem);
        } else {
          alert("Project not found");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching project", error);
        alert("Error fetching project");
      }
    };
    fetchProject();
  }, [projectId]);

  const saveHandler = async (event) => {
    event.preventDefault();

    const projectEditInfo = {
      project_name: name,
      project_status: status,
      project_type: type,
      goal: goal,
      metrics: metrics,
      tools: tools,
      wins: wins,
      post_mortem: postMortem,
    };

    try {
      await axios.put(`${API_PROJECTS_URL}/${projectId}`, projectEditInfo);
      navigate(-1);
    } catch (error) {
      console.error("Project Edit Page", error);
    }
  };

  return (
    <main className="main">
      <form action="submit" className="form" onSubmit={saveHandler}>
        <div className="label-and-input">
          <label htmlFor="name" className="label">
            Project Name
          </label>
          <input
            className="input"
            type="text"
            placeholder="Name your project"
            name="project_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
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
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">Project Status</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="label-and-input">
          <label htmlFor="goal" className="label">
            Goal
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="High-level Goal"
            name="goal"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          />
        </div>

        <div className="label-and-input">
          <label htmlFor="metrics" className="label">
            Metrics
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Metrics to measure success"
            name="metrics"
            value={metrics}
            onChange={(event) => setMetrics(event.target.value)}
          />
        </div>

        <div className="label-and-input">
          <label htmlFor="tools" className="label">
            Tools
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Any tools used"
            name="tools"
            value={tools}
            onChange={(event) => setTools(event.target.value)}
          />
        </div>

        <div className="label-and-input">
          <label htmlFor="wins" className="label">
            Wins
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Celebrate your wins"
            name="wins"
            value={wins}
            onChange={(event) => setWins(event.target.value)}
          />
        </div>

        <div className="label-and-input">
          <label htmlFor="post" className="label">
            Post-mortem
          </label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Reflect on the project once it's completed. What went well, how you dealt with failure. Iterate. Improve."
            name="post"
            value={postMortem}
            onChange={(event) => setPostMortem(event.target.value)}
          />
        </div>

        <div className="submit-button__container">
          <button type="submit" className="submit-button">
            Update
          </button>
        </div>
      </form>
      <footer className="footer">
        <NavLink to={`/project/${projectId}`}>
          <div className="project__add">
            <button type="button" className="home-button">
              <img
                src="/src/assets/icons/back.svg"
                alt="back-arrow"
                className="home-icon"
              />
            </button>
          </div>
        </NavLink>
      </footer>
    </main>
  );
};
