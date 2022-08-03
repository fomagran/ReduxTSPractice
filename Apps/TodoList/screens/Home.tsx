import {View, Pressable, Text, StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import {TodoAction, TodoActionType} from '../redux/actions/TodoAction';
import AddModal from '../components/AddModal';
import {styles} from '../Styles/TodoListStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import ToDoComponent from '../components/TodoComponent';

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootState, Todo[]>(state => state.todoList.todos);
  const [todo, setTodo] = useState<Todo>();

  function act(type: TodoActionType) {
    let action: TodoAction = {
      type: type,
      payload: todo!,
    };
    dispatch(action);
  }

  return (
    <View>
      <View style={styles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          To Do List
        </Text>
        <Pressable onPress={() => {}}>
          <Icon name="plus-a" style={styles.plus} />
        </Pressable>
      </View>
      {/* <AddModal
        isModalVisible={isModalVisible}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        todo={todo}></AddModal> */}
      <FlatList
        style={styles.list}
        contentContainerStyle={{paddingBottom: 50}}
        data={todos}
        keyExtractor={item => item.author}
        renderItem={({item, index}) => {
          return <ToDoComponent />;
        }}
      />
      <Pressable style={styles.sortContainer} onPress={() => {}}>
        <Text style={styles.sort}>Sort by priority</Text>
      </Pressable>
    </View>
  );
};

export default Home;
