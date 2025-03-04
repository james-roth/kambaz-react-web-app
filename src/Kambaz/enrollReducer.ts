import { createSlice } from "@reduxjs/toolkit"; 
import { enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: enrollments
}

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const enrollmentObj: any = {
                _id: uuidv4(),
                user: enrollment.user,
                course: enrollment.course,
            }
            state.enrollments = [...state.enrollments, enrollmentObj] as any;
        },

        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (e: any) => e._id !== enrollmentId);
        },
    },
});

export const { addEnrollment, deleteEnrollment } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;