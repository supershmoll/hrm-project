import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import coursesReducer from '../features/courses/coursesSlice';
import employeesReducer from '../features/employees/employeesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    employees: employeesReducer,
  },
});
