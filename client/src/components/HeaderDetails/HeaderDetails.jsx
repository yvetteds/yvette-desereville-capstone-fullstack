import "./HeaderDetails.scss";
import {
  deleteProject,
  getAllProjects,
  getSingleProject,
} from "../../lib/api-projects";
import { Modal } from "../../components/Modal/Modal.jsx";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HeaderDetails = ({ projectId, projectName }) => {
  //   const { pathname } = useLocation();
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getSingleProject(setProject, projectId);
  }, [projectId]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDeleteProject = async () => {
    await deleteProject(projectId);
    await getAllProjects(setProjects);
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          onDelete={handleDeleteProject}
          onClose={() => setIsModalOpen(false)}
          projectName={project.project_name}
        />
      )}

      <header className="header">
        <div className="header__content">
          <div className="header__text">
            <div className="header__name">{projectName}</div>
          </div>

          <div className="del-btn__contianer">
            <button
              type="button"
              onClick={() => handleOpenModal({ projectId, projectName })}
              className="delete__button"
            >
              <img
                src="/src/assets/icons/delete.svg"
                alt="delete-icon"
                className="delete-icon"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
