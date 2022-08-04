import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Modal, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {TodoAction, TodoActionType} from '../redux/actions/TodoAction';
import {styles} from '../Styles/AddModalStyles';

interface AddModalProps {
  todo: Todo;
  isModalVisible: boolean;
  selectedIndex: number;
}

const AddModal: React.FC<AddModalProps> = props => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState<Todo>({
    author: '',
    title: '',
    content: '',
  });

  const handleInputChange = (key: string, value: string | number) => {
    setTodo(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  function act(type: TodoActionType) {
    let action: TodoAction = {
      type: type,
      payload: todo,
      selectedIndex: props.selectedIndex,
    };
    dispatch(action);
  }

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
            value={todo.author}
            onChangeText={text => {
              handleInputChange('author', text);
            }}
            style={styles.input}
            placeholder="author"></TextInput>
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
              onPress={() =>
                props.selectedIndex == -1
                  ? act(TodoActionType.tapAdd)
                  : act(TodoActionType.tapUpdate)
              }>
              <Text style={styles.button}> Submit </Text>
            </Pressable>
            <Pressable onPress={() => act(TodoActionType.modalClose)}>
              <Text style={styles.button}> Close </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;
