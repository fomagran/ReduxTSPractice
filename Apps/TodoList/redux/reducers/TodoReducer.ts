import {todos} from '../../Datas/todoDatas';
import {TodoAction, TodoActionType} from '../actions/TodoAction';

/*
왜 newState를 만들어서 return newState를 반환하면 바로 업데이트가 안될까?
아래처럼 ...state에 todos: 새로운 todos를 해줘야 바로 업데이트가 됨.
*/

const initialState: TodosState = {todos: todos};

const todoReducer = (
  state: TodosState = initialState,
  action: TodoAction,
): TodosState => {
  let newTodos = state.todos;
  switch (action.type) {
    case TodoActionType.tapAdd:
      newTodos.push(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    case TodoActionType.tapDelete:
      newTodos.splice(action.selectedIndex, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case TodoActionType.tapUpdate:
      newTodos[action.selectedIndex] = action.payload;
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
