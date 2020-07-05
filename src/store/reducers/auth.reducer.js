import { authContants } from '../constants'
import { authTransforms } from '../transforms'
import storage from '../../storages'

const initialState = {
  loading: false,
  error: null,
  loggedin: false, // use to check user is logged in the app
  data: {
    accessToken: storage.getAccessToken() ?? null,
    refreshToken: storage.getRefreshToken() ?? null,
  },
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
        data: authTransforms.tokens(action.payload),
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

      case authContants.LOGOUT:
        return {
          ...state,
          loggedin: false,
          data: {},
        }
      
    default: 
      return state
  }
}

export default authReducer