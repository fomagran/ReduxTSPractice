import {todos} from '../../Datas/todoDatas';
import {TodoAction, TodoActionType} from '../actions/TodoAction';

const initialState: TodosState = {todos: todos};

const todoReducer = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  let newState = state;
  switch (action.type) {
    case TodoActionType.tapAdd:
      newState.todos.push(action.payload);
      return newState;
    case TodoActionType.tapDelete:
      newState.todos.splice(action.payload.index, 1);
      return newState;
    case TodoActionType.tapUpdate:
      newState.todos[action.payload.index] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
