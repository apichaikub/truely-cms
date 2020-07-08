import serviceApi from '../../services/api'
import { productContants } from '../constants'
import { RESPONSE_KEY } from '../../enum'

const meActions = {
  requestGetProducts: () => {
    const request = () => ({ type: productContants.GET_PRODUCTS_REQUEST })
    const success = (payload) => ({ type: productContants.GET_PRODUCTS_SUCCESS, payload })
    const failure = (payload) => ({ type: productContants.GET_PRODUCTS_FAILURE, payload })

    return async (dispatch) => {
      try {
        dispatch(request())

        const { data } = await serviceApi.getProducts()
        const payload = data[RESPONSE_KEY.ENUM.PRODUCTS]
        dispatch(success(payload))
      } catch(error) {
        const payload = {message: error.message}
        dispatch(failure(payload))
      }
    }
  },

  requestGetProduct: ({ id }) => {
    const request = () => ({ type: productContants.GET_PRODUCT_REQUEST })
    const success = (payload) => ({ type: productContants.GET_PRODUCT_SUCCESS, payload })
    const failure = (payload) => ({ type: productContants.GET_PRODUCT_FAILURE, payload })

    return async (dispatch) => {
      try {
        dispatch(request())

        const { data } = await serviceApi.getProduct({ id })
        const payload = data[RESPONSE_KEY.ENUM.PRODUCT]
        dispatch(success(payload))
      } catch(error) {
        const payload = {message: error.message}
        dispatch(failure(payload))
      }
    }
  },
}

export default meActions