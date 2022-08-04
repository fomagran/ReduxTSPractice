export enum CounterActionType {
  increment,
  decrement,
}

export type CounterAction = {
  type: CounterActionType;
  payload: Counter;
};
