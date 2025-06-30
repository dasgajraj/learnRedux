import { combineReducers } from 'redux'
import { reducer } from './Reducer'
import { themeReducer } from './ThemeReducer'

export default combineReducers({
    reducer,
    themeReducer,
})