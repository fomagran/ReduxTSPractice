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
import Home from './Apps/Redux-Toolkit/TodoList/screens/Home';
import store from './Apps/Redux-Toolkit/store';
import {todoAPISlice} from './Apps/Redux-Toolkit/TodoList/api/TodoAPISlice';
import {ApiProvider} from '@reduxjs/toolkit/dist/query/react';

const App = () => {
  return (
    <ApiProvider api={todoAPISlice}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ApiProvider>
  );
};

export default App;
