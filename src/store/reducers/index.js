import { combineReducers } from 'redux'

import authReducer from './auth.reducer'
import meReducer from './me.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  me: meReducer,
})

export default rootReducer