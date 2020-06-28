import serviceApi from '../../services/api'
import { authContants } from '../constants'

const { GET_TOKENS_REQUEST, GET_TOKENS_SUCCESS, GET_TOKENS_FAILURE, SET_IS_LOGGED_IN } = authContants

const authActions = {
    getTokens: ({ username, password }) => {
        const request = () => ({ type: GET_TOKENS_REQUEST })
        const success = (payload) => ({ type: GET_TOKENS_SUCCESS, payload })
        const failure = (payload) => ({ type: GET_TOKENS_FAILURE, payload })

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

    setIsLoggedIn: (isLoggedIn) => {
        return {
            type: SET_IS_LOGGED_IN,
            payload: {
                isLoggedIn: isLoggedIn
            }
        }
    }
}

export default authActions