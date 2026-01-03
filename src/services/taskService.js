import axios from "axios";

const API = "http://localhost:8080/api/tasks";

export const getTasksByProject = (projectId) =>
  axios.get(`${API}/project/${projectId}`);

export const createTask = (projectId, task) =>
  axios.post(`${API}/${projectId}`, task);
