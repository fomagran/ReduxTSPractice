import {combineReducers} from 'redux';
import counterReducer from '../Counter/redux/reducers/CounterReducer';
import todoReducer from '../TodoList/redux/reducers/TodoReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  todoList: todoReducer,
});

export interface RootState {
  counter: Counter;
  todoList: TodosState;
}
