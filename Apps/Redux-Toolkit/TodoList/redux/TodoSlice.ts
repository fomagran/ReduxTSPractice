import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoPayload} from '../types/TodoPayload';

export interface TodoState {
  selectedIndex: number;
  isModalVisible: boolean;
}

const initialState: TodoState = {
  selectedIndex: -1,
  isModalVisible: false,
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: state => {
      state.isModalVisible = false;
    },
    edit: state => {
      state.isModalVisible = false;
    },
    modalOpen: (state, action: PayloadAction<TodoPayload>) => {
      state.isModalVisible = true;
      state.selectedIndex = action.payload.selectedIndex!;
    },
    modalClose: state => {
      state.isModalVisible = false;
      state.selectedIndex = -1;
    },
  },
});

export default todoSlice;
