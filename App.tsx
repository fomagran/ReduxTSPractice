/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Home from './Apps/Redux/TodoList/screens/Home';
import {createStore} from 'redux';
import {rootReducer} from './Apps/Redux/store/configureStore';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
