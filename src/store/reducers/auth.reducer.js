import { authContants } from '../constants'
import { authTransform } from '../transforms'

const initialState = {
  loading: false,
  error: null,
  data: {},
  loggedin: false, // use to check user is logged in the app
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case authContants.GET_TOKENS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: {},
      }

    case authContants.GET_TOKENS_SUCCESS:
      return {
        ...state,
        data: authTransform.tokens(action.payload),
        loading: false,
      }

    case authContants.GET_TOKENS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }

    case authContants.SET_LOGGEDIN:
      return {
        ...state,
        loggedin: action.payload.loggedin
      }
      
    default: 
      return state
  }
}

export default authReducer