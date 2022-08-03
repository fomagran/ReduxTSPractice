import {CounterAction, CounterActionType} from '../actions/CounterAction';

const initialState: Counter = {
  count: 0,
};

const counterReducer = (
  state: Counter = initialState,
  action: CounterAction,
): Counter => {
  switch (action.type) {
    case CounterActionType.increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case CounterActionType.decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
