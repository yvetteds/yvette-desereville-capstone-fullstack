import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

/* -------------------------------------------------------------------------- */
/*                     GET ALL PROJECTS                                       */
/* -------------------------------------------------------------------------- */

const getAllProjects = async (_req, res) => {
  try {
    const data = await knex("projects").join(
      "projectDetails",
      "projects.id",
      "projectDetails.project_id"
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(`Error retrieving projects: ${err}`);
  }
};

/* -------------------------------------------------------------------------- */
/*                             GET SINGLE PROJECT                             */
/* -------------------------------------------------------------------------- */

const getSingleProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const singleProjectDetails = await knex("projects")
      .join("projectDetails", "projects.id", "projectDetails.project_id")
      .where("projects.id", projectId)
      .first();

    if (!singleProjectDetails)
      res.status(404).send(`The #ID: ${projectId} you provided is invalid.`);

    res.json(singleProjectDetails);
  } catch (error) {
    return res
      .status(500)
      .json(
        `Unable to retrieve project details. Please try again. ["ERROR_MESSAGE"]: ${error}`
      );
  }
};

/* -------------------------------------------------------------------------- */
/*                             DELETE PROJECT BY ID                           */
/* -------------------------------------------------------------------------- */

const deleteProjectById = async (req, res) => {
  try {
    const projectRowsDeleted = await knex("projects")
      .where({ id: req.params.projectId })
      .delete();

    if (projectRowsDeleted === 0) {
      return res.status(404).json({
        message: `Project item with ID ${req.params.projectId} not found`,
      });
    }

    // No Content response
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete project ${req.params.projectId}: ${error}`,
    });
  }
};

/* -------------------------------------------------------------------------- */
/*                             EDIT PROJECT                                   */
/* -------------------------------------------------------------------------- */

const editProject = async (req, res) => {
  try {
    const rowsUpdated = await knex("projects")
      .join("projectDetails", "projects.id", "projectDetails.project_id")
      .where({ project_id: req.params.projectId })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `Project with ID ${req.params.projectId} not found`,
      });
    }

    const updatedProject = await knex("projects")
      .join("projectDetails", "projects.id", "projectDetails.project_id")
      .where({
        id: req.params.projectId,
      });

    res.json(updatedProject[0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

/* -------------------------------------------------------------------------- */
/*                             ADD PROJECT                                    */
/* -------------------------------------------------------------------------- */

const addProject = async (req, res) => {
  //   const projectData = req.body;

  try {
    const result = await knex("projects").insert(req.body);

    const newProjectID = result[0];
    const createdProject = await knex("projects").where({ id: newProjectID });

    await knex("projectDetails").insert({
      project_id: newProjectID,
      goal: "",
      wins: "",
      metrics: "",
      post_mortem: "",
      tools: "",
      to_do: newProjectID,
    });

    res.status(201).json(createdProject);
  } catch (error) {
    res.status(500).json({ message: "Error creating new project", error });
  }
};

/* -------------------------------------------------------------------------- */
/*                             GET TO DO LIST                                 */
/* -------------------------------------------------------------------------- */

const getToDo = async (req, res) => {
  try {
    const { projectId } = req.params;
    const singleTodo = await knex("to_do").where("to_do.project_id", projectId);

    if (!singleTodo)
      res.status(404).send(`The #ID: ${id} you provided is invalid.`);

    res.json(singleTodo);
  } catch (error) {
    return res
      .status(500)
      .json(
        `Unable to retrieve todo details. Please try again. ["ERROR_MESSAGE"]: ${error}`
      );
  }
};

/* -------------------------------------------------------------------------- */
/*                             EDIT TO DO LIST                                 */
/* -------------------------------------------------------------------------- */

const editTodo = async (req, res) => {
  const { id } = req.params.id;
  try {
    const rowsUpdated = await knex("to_do")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `Todo Item with ID ${req.params.id} not found`,
      });
    }

    const updatedTodo = await knex("to_do").where({
      project_id: req.params.projectId,
    });

    res.json(updatedTodo[0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating project", error });
  }
};

/* -------------------------------------------------------------------------- */
/*                             ADD TODO ITEM                                  */
/* -------------------------------------------------------------------------- */

const addTodoItem = async (req, res) => {
  try {
    const result = await knex("to_do").insert({
      project_id: req.params.projectId,
      description: req.body.description,
      status: req.body.status,
    });

    const newTodoId = result[0];
    const createdItem = await knex("to_do").where({ id: newTodoId });

    res.status(201).json(createdItem);
  } catch (error) {
    res.status(500).json({ message: "Error creating new to do item", error });
  }
};

/* -------------------------------------------------------------------------- */
/*                             DELETE TODO BY ID                              */
/* -------------------------------------------------------------------------- */

const deleteTodoItem = async (req, res) => {
  try {
    const todoItemsDeleted = await knex("to_do")
      .where({ id: req.params.id })
      .delete();

    if (todoItemsDeleted === 0) {
      return res.status(404).json({
        message: `Item item with ID ${req.params.id} not found`,
      });
    }

    // No Content response
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete item ${req.params.projectId}: ${error}`,
    });
  }
};

export {
  getAllProjects,
  getSingleProject,
  deleteProjectById,
  editProject,
  addProject,
  getToDo,
  editTodo,
  addTodoItem,
  deleteTodoItem,
};
