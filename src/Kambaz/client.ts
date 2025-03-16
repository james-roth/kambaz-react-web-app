import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const getEnrollmentsForUser = async (userId: string) => {
    const response = await axios.get(`${ENROLLMENT_API}/${userId}`);
    return response.data;
};
export const deleteEnrollment = async (enrollId: string) => {
    const response = await axios.delete(`${ENROLLMENT_API}/${enrollId}`);
    return response.data;
};
export const addEnrollment = async (enrollment: any) => {
    const response = await axios.post(ENROLLMENT_API, enrollment);
    return response.data;
};