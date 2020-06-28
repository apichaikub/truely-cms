import { authContants } from '../constants'

const { GET_TOKENS_REQUEST, GET_TOKENS_SUCCESS, GET_TOKENS_FAILURE, SET_IS_LOGGED_IN } = authContants

const initialState = {
  isLoading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false
}

const authReducer = (state = initialState, action) => {  
  switch(action.type) {
    case GET_TOKENS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case GET_TOKENS_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
      }
    case GET_TOKENS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      }
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      }
    default: 
      return state
  }
}

export default authReducer