import { authContants } from '../constants'

const { GET_TOKENS_REQUEST, GET_TOKENS_SUCCESS, GET_TOKENS_FAILURE } = authContants

const initialState = {
  isLoading: false,
  errorMessage: null,
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
        errorMessage: action.payload.message,
      }
    default: 
      return state
  }
}

export default authReducer