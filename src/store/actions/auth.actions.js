import serviceApi from '../../services/api'
import { authContants } from '../constants'
import { RESPONSE_KEY } from '../../enum'

const authActions = {
    requestGetTokens: ({ username, password }) => {
        const request = () => ({ type: authContants.GET_TOKENS_REQUEST })
        const success = (payload) => ({ type: authContants.GET_TOKENS_SUCCESS, payload })
        const failure = (payload) => ({ type: authContants.GET_TOKENS_FAILURE, payload })

        return async (dispatch) => {
            try {
                dispatch(request())

                const response = await serviceApi.getOAuth2Token({
                    grant_type: 'password',
                    username: username,
                    password: password
                })
                const payload = response.data[RESPONSE_KEY.ENUM.RESULTS]
                dispatch(success(payload))
            } catch(error) {
                const payload = {message: error.message}
                dispatch(failure(payload))
            }
        }
    },

    setloggedin: (loggedin) => {
        return {
            type: authContants.SET_LOGGEDIN,
            payload: {
                loggedin: loggedin
            }
        }
    }
}

export default authActions