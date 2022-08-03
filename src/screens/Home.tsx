import {View, Pressable, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/CounterStore';
import {CounterAction, CounterActionType} from '../redux/actions/CounterAction';

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootState>(state => state.counter.count);

  function act(type: CounterActionType) {
    let counter: Counter = {count: Number(count)};
    let action: CounterAction = {
      type: type,
      payload: counter,
    };
    dispatch(action);
  }

  return (
    <View>
      <Pressable
        onPress={() => {
          act(CounterActionType.increment);
        }}>
        <Text>Increment</Text>
      </Pressable>
      <Text> {count} </Text>
      <Pressable
        onPress={() => {
          act(CounterActionType.decrement);
        }}>
        <Text>Decrement</Text>
      </Pressable>
      <Text>하이염</Text>
    </View>
  );
};

export default Home;
