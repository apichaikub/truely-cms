import serviceApi from '../../services/api'
import { meContants } from '../constants'
import { authActions } from './'

const meActions = {
    getMe: () => {
        const request = () => ({ type: meContants.GET_ME_REQUEST })
        const success = (payload) => ({ type: meContants.GET_ME_SUCCESS, payload })
        const failure = (payload) => ({ type: meContants.GET_ME_FAILURE, payload })

        return async (dispatch) => {
            try {
                dispatch(request())

                const response = await serviceApi.getMe()

                const payload = response.data.me
                dispatch(success(payload))

                // set `loggedin` in auth state to `true`
                dispatch(authActions.setloggedin(true))
            } catch(error) {
                const payload = {message: error.message}
                dispatch(failure(payload))

                // set `loggedin` in auth state to `false`
                dispatch(authActions.setloggedin(false))
            }
        }
    },
}

export default meActions