import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [],
};

const worksheetSlice = createSlice({
    name: 'worksheet',
    initialState,
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
    },
});

export const { addQuestion } = worksheetSlice.actions;

export const selectAllQuestions = (state) => state.worksheet.questions;

export default worksheetSlice.reducer;
