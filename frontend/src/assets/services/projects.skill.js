import { apiClient } from "./config";



export const apiGetAllProjects = async () => {
    return apiClient.get("/projects");
};

export const apiGetAllProject = async => {
    return apiClient.get(`projects/${id}`);
};