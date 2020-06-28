import ENDPOINT from '../../services/api/rest/endpoint'
import storage from '../../storages'

const interceptorSuccess = (response) => {
  const { url: requestUrl } = response.config
  const { results } = response.data

  switch(requestUrl) {
    case ENDPOINT.OAUTH2TOKEN:
      storage.setAccessToken(results.accessToken)
      storage.setRefreshToken(results.refreshToken)
    break;
    default:
  }

	return response;
}

export default interceptorSuccess