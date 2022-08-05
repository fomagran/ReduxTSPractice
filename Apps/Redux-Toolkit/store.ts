import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Counter/Redux/counterSlice';
import todoSlice from './TodoList/redux/TodoSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
