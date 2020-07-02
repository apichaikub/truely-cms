import { authContants } from '../constants'

const initialState = {
  loading: false,
  error: null,

  // use to check user is logged in the app
  loggedin: false,

  // response data from api
  data: {},
}

const authReducer = (state = initialState, action) => {  
  switch(action.type) {
    case authContants.GET_TOKENS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        data: {
          accessToken: null,
          refreshToken: null,
        },
      }
    case authContants.GET_TOKENS_SUCCESS:
      return {
        ...state,
        data: {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
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