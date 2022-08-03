import {combineReducers} from 'redux';
import counterReducer from '../reducers/CounterReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
