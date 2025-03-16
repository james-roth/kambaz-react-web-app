import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    enrollments: []
}

const enrollmentSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
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

export const { addEnrollment, deleteEnrollment, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;