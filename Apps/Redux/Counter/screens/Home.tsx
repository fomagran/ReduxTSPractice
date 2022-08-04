import {View, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
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
      <Text style={styles.count}> {count} </Text>

      <Pressable
        onPress={() => {
          act(CounterActionType.increment);
        }}>
        <Text style={styles.increment}>Increment</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          act(CounterActionType.decrement);
        }}>
        <Text style={styles.decrement}>Decrement</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  count: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    margin: 20,
    padding: 5,

    color: 'black',
  },
  increment: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#B32134',
  },
  decrement: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#0096FF',
  },
});

export default Home;
