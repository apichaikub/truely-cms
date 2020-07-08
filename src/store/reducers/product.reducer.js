import { productContants } from '../constants'
import { productTransforms } from '../transforms'

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
  // get products
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
          data: productTransforms.list(action.payload),
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
    
    // get a product
    case productContants.GET_PRODUCT_REQUEST:
      return {
        ...state,
        one: {
          loading: true,
          error: null,
          data: {},
        }
      }
    case productContants.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        one: {
          ...state.one,
          loading: false,
          data: productTransforms.one(action.payload),
        },
      }
    case productContants.GET_PRODUCT_FAILURE:
      return {
        ...state,
        one: {
          ...state.one,
          loading: false,
          error: action.payload.message,
        },
      }
      
    default: 
      return state
  }
}

export default productReducer