import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({})
const middlewares = [thunkMiddleware]

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
)

export default store