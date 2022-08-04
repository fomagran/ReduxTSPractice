export enum TodoActionType {
  tapAdd,
  tapDelete,
  tapUpdate,
}

export type TodoAction = {
  type: TodoActionType;
  payload: Todo;
  selectedIndex: number;
};
