import { meContants } from '../constants'
import { meTransforms } from '../transforms'

const initialState = {
  loading: false,
  error: null,
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
        data: meTransforms.info(action.payload)
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