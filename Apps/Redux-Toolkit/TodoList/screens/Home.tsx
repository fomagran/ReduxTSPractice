import {View, Pressable, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import AddModal from '../components/AddModal';
import {styles} from '../Styles/TodoListStyles';
import Icon from 'react-native-vector-icons/Fontisto';
import ToDoComponent from '../components/TodoComponent';
import todoSlice, {TodoState} from '../redux/TodoSlice';
import {TodoPayload} from '../types/TodoPayload';

const Home = () => {
  const dispatch = useDispatch();
  const todoState = useSelector<RootState, TodoState>(state => state.todoList);
  const emptyTodo: TodoModel = {title: '', content: ''};
  const actions = todoSlice.actions;

  useEffect(() => {}, [todoState]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={{marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          To Do List
        </Text>
        <Pressable
          onPress={() => {
            const payload: TodoPayload = {todo: null, selectedIndex: -1};
            dispatch(actions.modalOpen(payload));
          }}>
          <Icon name="plus-a" style={styles.plus} />
        </Pressable>
      </View>
      <AddModal
        isModalVisible={todoState.isModalVisible}
        todo={
          todoState.selectedIndex == -1
            ? emptyTodo
            : todoState.todos[todoState.selectedIndex]
        }
        selectedIndex={todoState.selectedIndex}></AddModal>
      <FlatList
        style={styles.list}
        contentContainerStyle={{paddingBottom: 50}}
        data={todoState.todos}
        keyExtractor={item => item.title}
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
