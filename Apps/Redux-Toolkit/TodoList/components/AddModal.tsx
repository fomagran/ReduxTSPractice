import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Modal, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {TodoPayload} from '../types/TodoPayload';
import todoSlice from '../redux/TodoSlice';
import {styles} from '../Styles/AddModalStyles';
import {useAddTodoMutation} from '../api/TodoAPISlice';
import {useEditTodoMutation} from '../api/TodoAPISlice';

interface AddModalProps {
  todo: TodoModel;
  isModalVisible: boolean;
  selectedIndex: number;
}

const AddModal: React.FC<AddModalProps> = props => {
  const dispatch = useDispatch();
  const actions = todoSlice.actions;
  const [addTodo] = useAddTodoMutation();
  const [editTodo] = useEditTodoMutation();

  const [todo, setTodo] = useState<TodoModel>({
    id: -1,
    title: '',
    content: '',
  });

  const handleInputChange = (key: string, value: string | number) => {
    setTodo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    setTodo(props.todo);
  }, [props]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      presentationStyle={'overFullScreen'}
      visible={props.isModalVisible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            value={todo.title}
            style={styles.input}
            placeholder="title"
            onChangeText={text => {
              handleInputChange('title', text);
            }}></TextInput>
          <TextInput
            value={todo.content}
            style={styles.input}
            placeholder="content"
            onChangeText={text => {
              handleInputChange('content', text);
            }}></TextInput>
          <View style={styles.closeContainer}>
            <Pressable
              onPress={() => {
                if (props.selectedIndex == -1) {
                  addTodo(todo);
                  dispatch(actions.add());
                } else {
                  editTodo(todo);
                  dispatch(actions.edit());
                }
              }}>
              <Text style={styles.button}> Submit </Text>
            </Pressable>
            <Pressable onPress={() => dispatch(actions.modalClose())}>
              <Text style={styles.button}> Close </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;
