import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {todos} from '../Datas/todoDatas';
import {TodoPayload} from './actions/TodoPayload';

export interface TodoState {
  todos: TodoModel[];
  selectedIndex: number;
  isModalVisible: boolean;
}

const initialState: TodoState = {
  todos: todos,
  selectedIndex: -1,
  isModalVisible: false,
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoPayload>) => {
      let newTodos = state.todos;
      newTodos.push(action.payload.todo);
      state.todos = newTodos;
      state.isModalVisible = false;
    },
    delete: (state, action: PayloadAction<TodoPayload>) => {
      let newTodos = state.todos;
      newTodos.splice(action.payload.selectedIndex, 1);
      state.todos = newTodos;
    },
    edit: (state, action: PayloadAction<TodoPayload>) => {
      console.log(action.payload);

      state.todos[action.payload.selectedIndex] = action.payload.todo;
      console.log(state.todos);
      state.isModalVisible = false;
    },
    modalOpen: (state, action: PayloadAction<TodoPayload>) => {
      state.isModalVisible = true;
      state.selectedIndex = action.payload.selectedIndex;
    },
    modalClose: state => {
      state.isModalVisible = false;
      state.selectedIndex = -1;
    },
  },
});

export default todoSlice;
