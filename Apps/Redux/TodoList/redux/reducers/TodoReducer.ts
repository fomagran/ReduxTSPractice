import {todos} from '../../Datas/todoDatas';
import {TodoAction, TodoActionType} from '../actions/TodoAction';

/*
왜 newState를 만들어서 return newState를 반환하면 바로 업데이트가 안될까?
아래처럼 ...state에 todos: 새로운 todos를 해줘야 바로 업데이트가 됨.
*/

const initialState: TodoState = {
  todos: todos,
  isModalVisible: false,
  selectedIndex: -1,
};

const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction,
): TodoState => {
  let newTodos = state.todos;
  switch (action.type) {
    case TodoActionType.tapAdd:
      newTodos.push(action.payload.todo);
      return {
        ...state,
        todos: newTodos,
        isModalVisible: false,
      };
    case TodoActionType.tapDelete:
      newTodos.splice(action.payload.selectedIndex, 1);
      return {
        ...state,
        todos: newTodos,
      };
    case TodoActionType.tapUpdate:
      newTodos[action.payload.selectedIndex] = action.payload.todo;
      return {
        ...state,
        todos: newTodos,
        selectedIndex: action.payload.selectedIndex,
        isModalVisible: false,
      };
    case TodoActionType.modalClose:
      return {
        ...state,
        isModalVisible: false,
        selectedIndex: -1,
      };
    case TodoActionType.modalOpen:
      return {
        ...state,
        isModalVisible: true,
        selectedIndex: action.payload.selectedIndex,
      };
    default:
      return state;
  }
};

export default todoReducer;
