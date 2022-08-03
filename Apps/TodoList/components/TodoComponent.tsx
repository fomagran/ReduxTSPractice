import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {styles} from '../Styles/TodoStyles';

const ToDoComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>하이</Text>
      <Text style={styles.content}>헬로</Text>
      <View style={styles.footer}>
        <Pressable onPress={() => {}}>
          <Icon style={styles.update} name="surgical-knife"></Icon>
        </Pressable>
        <Pressable onPress={() => {}}>
          <Icon style={styles.trash} name="trash"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default ToDoComponent;
