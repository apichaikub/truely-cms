import { meContants } from '../constants'

const initialState = {
  loading: false,
  error: null,

  // response data from api
  data: {},
}

const meReducer = (state = initialState, action) => {  
  switch(action.type) {
    case meContants.GET_ME_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case meContants.GET_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          userId: action.payload.userId,
          username: action.payload.username,
          role: action.payload.role,
        },
      }
    case meContants.GET_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      }
    default: 
      return state
  }
}

export default meReducer