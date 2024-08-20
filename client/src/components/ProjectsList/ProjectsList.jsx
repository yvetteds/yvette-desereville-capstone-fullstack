import "./ProjectsList.scss";
import { PieChart } from "@mui/x-charts/PieChart";
import "../../styles/partials/_colors.scss";
import { Link } from "react-router-dom";

import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

import { Header } from "../Header/Header";

export const ProjectsList = ({ projects }) => {
  const activeProjects = projects.filter(
    (project) => project.project_status.toLowerCase() === "ongoing"
  );

  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 20,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <>
      <Header />
      <div className="pL__greeting">
        <form action="submit" className="pL__search-form">
          <img
            src="/src/assets/icons/search.svg"
            alt="magnifying-glass"
            className="pL__search--icon"
          />
          <input type="text" className="pL__search" placeholder="Search" />
        </form>
      </div>
      <div className="greeting__bar">
        <div className="greeting__card">
          <div className="greeting__text">
            <h1 className="pL__hi">Hi, Maggie!</h1>
            <h2 className="pL__no-projects">
              You have {activeProjects.length} active projects.
            </h2>
            <h3 className="pL__slogan">
              Remember, you are the PM of your own life.
            </h3>
          </div>
          <div className="greeting__icon--container">
            <img
              src="/src/assets/icons/engineer-logo.svg"
              alt="engineer-in-hardhat-with-gears"
              className="greeting__icon"
            />
          </div>
        </div>
        <div className="status__tracker">
          <PieChart
            margin={{ top: 50, bottom: 50, left: 10, right: 100 }}
            colors={["#112d4e", "#dbe2ef"]}
            series={[
              {
                data: [
                  {
                    id: 0,
                    value: activeProjects.length / projects.length,
                    label: "ONGOING",
                  },
                  {
                    id: 1,
                    value:
                      (projects.length - activeProjects.length) /
                      projects.length,
                    label: "COMPLETED",
                  },
                ],
                innerRadius: 90,
              },
            ]}
            width={350}
            height={190}
            slotProps={{
              legend: {
                position: {
                  vertical: "middle",
                  horizontal: "right",
                },
                itemMarkWidth: 20,
                itemMarkHeight: 2,
                markGap: 5,
                itemGap: 10,
                labelStyle: {
                  fontSize: 8,
                  fontType: "Open Sans",
                },
              },
            }}
          >
            <PieCenterLabel className="pie-label">
              Project Tracker
            </PieCenterLabel>
          </PieChart>
        </div>
      </div>
      <h3 className="project__header">Project Portfolio</h3>
      <div className="project__list">
        {projects
          .slice(0)
          .reverse()
          .map((project) => (
            <div className="project__card" key={project.id}>
              <h4 className="project__date">
                {project.created_at.slice(0, 10)}
              </h4>
              <div className="project__id">
                <h5 className="project__name">{project.project_name}</h5>
              </div>
              {project.project_type === "Personal" ? (
                <img
                  src="/src/assets/icons/personal.svg"
                  alt="person-caricature"
                  className="project__type"
                />
              ) : project.project_type === "Academic" ? (
                <img
                  src="/src/assets/icons/academic.svg"
                  alt="person-caricature"
                  className="project__type"
                />
              ) : project.project_type === "Industry" ? (
                <img
                  src="/src/assets/icons/industry.svg"
                  alt="briefcase"
                  className="project__type"
                />
              ) : (
                <img
                  src="/src/assets/icons/question.svg"
                  alt="person-caricature"
                  className="project__type"
                />
              )}
              <div
                className={`${
                  project.project_status.toLowerCase() === "completed"
                    ? "project__status--closed"
                    : "project__status"
                }`}
              >
                {project.project_status.toUpperCase()}
              </div>
              <div>
                <Link to={`/project/${project.id}`}>
                  <img
                    src="/src/assets/icons/more.svg"
                    alt="3-vertical-dots"
                    className="project__more"
                  />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
