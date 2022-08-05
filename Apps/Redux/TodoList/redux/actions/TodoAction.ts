export enum TodoActionType {
  tapAdd,
  tapDelete,
  tapUpdate,
  modalOpen,
  modalClose,
}

export type TodoPayload = {
  todo: Todo;
  selectedIndex: number;
};

export type TodoAction = {
  type: TodoActionType;
  payload: TodoPayload;
};
