import ENDPOINT from './endpoint'
import httpClient from '../../httpClient/axios'

export const getOAuth2Token = (data) => httpClient.post(ENDPOINT.OAUTH2TOKEN, data)
