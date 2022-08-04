import {View, Pressable, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import {TodoAction, TodoActionType} from '../redux/actions/TodoAction';
import AddModal from '../components/AddModal';
import {styles} from '../Styles/TodoListStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import ToDoComponent from '../components/TodoComponent';

const Home = () => {
  const dispatch = useDispatch();
  let todos = useSelector<RootState, Todo[]>(state => state.todoList.todos);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, [todos]);

  const [todo, setTodo] = useState<Todo>({
    title: '',
    content: '',
    author: '',
  });

  const act = (type: TodoActionType, selectedIndex: number) => {
    let action: TodoAction = {
      type: type,
      payload: todo,
      selectedIndex: selectedIndex,
    };
    dispatch(action);
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          To Do List
        </Text>
        <Pressable onPress={() => act(TodoActionType.tapDelete, 1)}>
          <Icon name="plus-a" style={styles.plus} />
        </Pressable>
      </View>
      <AddModal isModalVisible={isModalVisible} todo={todo}></AddModal>
      <FlatList
        style={styles.list}
        contentContainerStyle={{paddingBottom: 50}}
        data={todos}
        keyExtractor={item => item.author}
        renderItem={({item, index}) => {
          return <ToDoComponent todo={item} index={index} />;
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {todoList: state.todoList};
};

export default connect(mapStateToProps)(Home);
