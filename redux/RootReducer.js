// RootReducer.js
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { reducer } from './Reducer'
import { themeReducer } from './ThemeReducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeReducer','reducer'] // only persist theme (or add 'reducer' for cart too!)
}

const rootReducer = combineReducers({
  reducer,
  themeReducer,
})

export default persistReducer(persistConfig, rootReducer);
