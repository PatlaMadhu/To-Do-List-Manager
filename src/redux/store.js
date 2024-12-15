import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';  // Import taskSlice reducer

const store = configureStore({
  reducer: {
    tasks: taskReducer,  // Make sure tasks reducer is added correctly
  },
});

export default store;
