import { authContants } from '../constants'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = authContants

const initialState = {
  isLoading: false,
  errorMessage: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false
}

const authReducer = (state = initialState, action) => {  
  switch(action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isLoading: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
      }
    default: 
      return state
  }
}

export default authReducer