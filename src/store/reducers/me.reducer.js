import { meContants } from '../constants'

const { GET_ME_REQUEST, GET_ME_SUCCESS, GET_ME_FAILURE } = meContants

const initialState = {
  isLoading: false,
  errorMessage: null,
  userId: null,
  username: null,
  role: null,
}

const meReducer = (state = initialState, action) => {  
  switch(action.type) {
    case GET_ME_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case GET_ME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userId: action.payload.userId,
        username: action.payload.username,
        role: action.payload.role,
      }
    case GET_ME_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.message,
      }
    default: 
      return state
  }
}

export default meReducer