import { combineReducers } from 'redux'

import uiReducer from './ui.reducer'
import authReducer from './auth.reducer'
import meReducer from './me.reducer'
import productReducer from './product.reducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  me: meReducer,
  product: productReducer,
})

export default rootReducer