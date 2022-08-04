export enum TodoActionType {
  tapAdd,
  tapDelete,
  tapUpdate,
  modalOpen,
  modalClose,
}

export type TodoAction = {
  type: TodoActionType;
  payload: Todo;
  selectedIndex: number;
};
