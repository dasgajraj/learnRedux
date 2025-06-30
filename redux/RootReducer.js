// RootReducer.js
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reducer } from './Reducer';
import { themeReducer } from './ThemeReducer';
import { userReducer } from './userReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeReducer', 'reducer', 'userReducer'],
};

const rootReducer = combineReducers({
  reducer,
  themeReducer,
  userReducer,
});

export default persistReducer(persistConfig, rootReducer);
