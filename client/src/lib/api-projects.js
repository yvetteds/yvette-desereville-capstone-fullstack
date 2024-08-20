import axios from "axios";

export const API_PROJECTS_URL = "http://localhost:8080/api/projects";

export const getAllProjects = async (fn) => {
  try {
    const res = await axios.get(API_PROJECTS_URL);

    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const getSingleProject = async (fn, id) => {
  try {
    const res = await axios.get(`${API_PROJECTS_URL}/${id}`);
    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const getTodo = async (fn, id) => {
  try {
    const res = await axios.get(`${API_PROJECTS_URL}/${id}/todo`);
    return fn(res.data);
  } catch (error) {
    console.error(error);
  }
};

export const deleteProject = async (id) => {
  try {
    const res = await axios.delete(`${API_PROJECTS_URL}/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodoItem = async (pId, id) => {
  try {
    const res = await axios.delete(`${API_PROJECTS_URL}/${pId}/todo/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postProject = async (formValues) => {
  try {
    await axios.post(API_PROJECTS_URL, formValues);
  } catch (error) {
    console.error(error);
  }
};

export const postTodo = async (id, formValues) => {
  try {
    await axios.post(`${API_PROJECTS_URL}/${id}/todo`, formValues);
  } catch (error) {
    console.error(error);
  }
};

export const editProject = async (formValues) => {
  try {
    await axios.put(API_PROJECTS_URL, formValues);
  } catch (error) {
    console.error(error);
  }
};

export const editTodoItem = async (pId, id, formValues) => {
  try {
    await axios.put(`${API_PROJECTS_URL}/${pId}/todo/${id}`, formValues);
  } catch (error) {
    console.error(error);
  }
};
