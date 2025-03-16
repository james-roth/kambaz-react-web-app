import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/course`;

export const findAssignmentForCourse = async (courseId: string, aid: string) => {
    const cid_api_str = `${ASSIGNMENT_API}/${courseId}/assignments`;
    const response = await axios.get(`${cid_api_str}/${aid}`);
    return response.data;
};
export const findAllAssignmentsForCourse = async (courseId: string) => {
    const cid_api_str = `${ASSIGNMENT_API}/${courseId}/assignments`;
    const response = await axios.get(cid_api_str);
    return response.data;
};
export const deleteAssignmentForCourse = async (courseId: string, aid: string) => {
    const cid_api_str = `${ASSIGNMENT_API}/${courseId}/assignments`;
    const response = await axios.delete(`${cid_api_str}/${aid}`);
    return response.data;
};
export const updateAssignmentForCourse = async (courseId: string, aid: string, updates: any) => {
    const cid_api_str = `${ASSIGNMENT_API}/${courseId}/assignments`;
    const response = await axios.put(`${cid_api_str}/${aid}`, updates);
    return response.data;
};
export const addAssignmentForCourse = async (courseId: string, assignment: any) => {
    const cid_api_str = `${ASSIGNMENT_API}/${courseId}/assignments`;
    const response = await axios.post(`${cid_api_str}/${assignment._id}`, assignment);
    return response.data;
};