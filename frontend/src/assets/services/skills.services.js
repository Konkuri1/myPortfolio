import { apiClient } from "./config";



export const apiGetAllSkills = async () => {
    return apiClient.get("/skills");
};

export const apiGetAllSkill = async => {
    return apiClient.get(`skills/${id}`);
};