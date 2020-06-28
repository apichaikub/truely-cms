import serviceApi from '../../services/api'
import { meContants } from '../constants'
import { authActions } from './'

const { GET_ME_REQUEST, GET_ME_SUCCESS, GET_ME_FAILURE } = meContants

const meActions = {
    getMe: () => {
        const request = () => ({ type: GET_ME_REQUEST })
        const success = (payload) => ({ type: GET_ME_SUCCESS, payload })
        const failure = (payload) => ({ type: GET_ME_FAILURE, payload })

        return async (dispatch) => {
            try {
                dispatch(request())

                const response = await serviceApi.getMe()

                const payload = response.data.me
                dispatch(success(payload))

                // set `isLoggedIn` in auth state to `true`
                dispatch(authActions.setIsLoggedIn(true))
            } catch(error) {
                const payload = {message: error.message}
                dispatch(failure(payload))

                // set `isLoggedIn` in auth state to `false`
                dispatch(authActions.setIsLoggedIn(false))
            }
        }
    },
}

export default meActions