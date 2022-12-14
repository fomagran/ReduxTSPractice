import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch} from 'react-redux';
import {TodoPayload} from '../types/TodoPayload';
import todoSlice from '../redux/TodoSlice';
import {styles} from '../Styles/TodoStyles';
import {useDeleteTodoMutation} from '../api/TodoAPISlice';

interface TodoProps {
  todo: TodoModel;
  index: number;
}

const ToDoComponent: React.FC<TodoProps> = props => {
  const dispatch = useDispatch();
  const actions = todoSlice.actions;
  const [deleteTodo] = useDeleteTodoMutation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.todo.title}</Text>
      <Text style={styles.content}>{props.todo.content}</Text>
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            const payload: TodoPayload = {
              todo: null,
              selectedIndex: props.index,
            };
            dispatch(actions.modalOpen(payload));
          }}>
          <Icon style={styles.update} name="surgical-knife"></Icon>
        </Pressable>
        <Pressable
          onPress={() => {
            deleteTodo(props.todo.id);
          }}>
          <Icon style={styles.trash} name="trash"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default ToDoComponent;
