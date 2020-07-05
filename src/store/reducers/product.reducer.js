import { productContants } from '../constants'
import { productTransform } from '../transforms'

const initialState = {
  list: {
    loading: false,
    error: null,
    data: [],
  },
  one: {
    loading: false,
    error: null,
    data: {},
  }
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case productContants.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        list: {
          loading: true,
          error: null,
          data: [],
        }
      }

    case productContants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          data: productTransform.list(action.payload),
        },
      }

    case productContants.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          error: action.payload.message,
        },
      }
      
    default: 
      return state
  }
}

export default productReducer