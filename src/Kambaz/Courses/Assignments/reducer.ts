import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: assignment._id,
                title: assignment.title,
                course: assignment.course,
                avail_date_str: assignment.avail_date_str, 
                due_date_str: assignment.due_date_str,
                avail_until_date_str: assignment.avail_until_date_str,
                points: assignment.points,
            }
            console.log(newAssignment);
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a._id === assignment._id ? assignment : a
            ) as any;
        },
        // editAssignment: (state, { payload: assignmentsId }) => {
        //     state.assignments = state.assignments.map((m: any) =>
        //         m._id === assignmentsId ? { ...m, editing: true } : m
        //     ) as any;
        // },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;