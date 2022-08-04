import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {useDispatch} from 'react-redux';
import {TodoAction, TodoActionType} from '../redux/actions/TodoAction';
import {styles} from '../Styles/TodoStyles';

interface TodoProps {
  todo: Todo;
  index: number;
}

const ToDoComponent: React.FC<TodoProps> = props => {
  const dispatch = useDispatch();

  function act(type: TodoActionType) {
    let action: TodoAction = {
      type: type,
      payload: {title: '', content: '', author: ''},
      selectedIndex: props.index,
    };
    dispatch(action);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.todo.title}</Text>
      <Text style={styles.content}>{props.todo.content}</Text>
      <View style={styles.footer}>
        <Pressable onPress={() => act(TodoActionType.modalOpen)}>
          <Icon style={styles.update} name="surgical-knife"></Icon>
        </Pressable>
        <Pressable onPress={() => act(TodoActionType.tapDelete)}>
          <Icon style={styles.trash} name="trash"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default ToDoComponent;
