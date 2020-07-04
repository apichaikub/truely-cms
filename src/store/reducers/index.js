import { combineReducers } from 'redux'

import uiReducer from './ui.reducer'
import authReducer from './auth.reducer'
import meReducer from './me.reducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  me: meReducer,
})

export default rootReducer