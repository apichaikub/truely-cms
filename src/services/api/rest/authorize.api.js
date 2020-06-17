import ENDPOINT from './endpoint'
import httpClient from './axios.client'

export const getOAuth2Token = (data) => httpClient.post(ENDPOINT.OAUTH2TOKEN, data)
