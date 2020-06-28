import serviceApi from '../../services/api'
import { authContants } from '../constants'

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } = authContants

const authActions = {
    getTokens: ({ username, password }) => {
        const request = () => ({ type: LOGIN_REQUEST })
        const success = (payload) => ({ type: LOGIN_SUCCESS, payload })
        const failure = (payload) => ({ type: LOGIN_FAILURE, payload })

        return async (dispatch) => {
            try {
                dispatch(request())

                const response = await serviceApi.getOAuth2Token({
                    grant_type: 'password',
                    username: username,
                    password: password
                })

                const payload = response.data.results
                dispatch(success(payload))
            } catch(error) {
                const payload = {message: error.message}
                dispatch(failure(payload))
            }
        }
    },
}

export default authActions