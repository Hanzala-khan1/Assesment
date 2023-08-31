import { configureStore } from '@reduxjs/toolkit';
import worksheetReducer from './worksheetSlice';

const store = configureStore({
    reducer: {
        worksheet: worksheetReducer,
    },
});

export default store;
