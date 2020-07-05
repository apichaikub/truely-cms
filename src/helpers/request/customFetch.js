import apiService from '../../services/api'
import storage from '../../storages'
import { getHeadersOAuth2 } from '.'
import { getFinalResponse } from '../response'
import { ROUTER_PATH, RESPONSE_KEY } from '../../enum'

const customFetch = (uri, options) => {
  // set authorization on header if access token is stored.
  options.headers = getHeadersOAuth2(options.headers, { accessToken: storage.getAccessToken() })

  // create client request, in this case we use fetch as a native javascript api.
  const initialRequest = fetch(uri, options)

  // The apolloHttpLink expects that whatever fetch function is used, it returns a promise, and return as json
  return initialRequest.then((response) => response.json())
  .then((json) => {
    // check unauthenticated from response
    if(json && json.errors && json.errors[0] && json.errors[0].extensions.code === 'UNAUTHENTICATED') {
      // if response with unauthenticated, try to call api to get new tokens.
      const refreshPromise = apiService.getOAuth2Token({
        grant_type: 'refresh_token',
        refresh_token: storage.getRefreshToken()
      })
      // if still unauthenticated, fource user to logout
      .catch(() => {
        // clear tokens in local storage and redirect to login pages
        storage.clearTokens(() => window.location = ROUTER_PATH.ENUM.LOGIN)
      })
      // if retry success return with a new access token.
      .then((responseRefreshToken) => {
        const { data } = responseRefreshToken;
        const accessToken = data[RESPONSE_KEY.ENUM.RESULTS]?.accessToken
        return accessToken
      })

      // try to make a new request as same as fails before with a new access token
      return refreshPromise.then((accessToken) => {
        options.headers = getHeadersOAuth2(options.headers, { accessToken })
        return fetch(uri, options)
      })
    }

    // if there were no errors in the initialRequest, we need to repackage the promise and return it as the final response.
    const response = getFinalResponse(json)

    return response
  })
}

export default customFetch