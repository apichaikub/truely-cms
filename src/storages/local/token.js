import { STORAGE_NAME } from '../../enum'

const { ENUM: STORAGE } = STORAGE_NAME

export const getAccessToken = () => (
  localStorage[STORAGE.ACCESS_TOKEN]
)

export const getRefreshToken = () => (
  localStorage[STORAGE.REFRESH_TOKEN]
)

export const setAccessToken = (accessToken) => (
  localStorage[STORAGE.ACCESS_TOKEN] = accessToken
)

export const setRefreshToken = (refreshToken) => (
  localStorage[STORAGE.REFRESH_TOKEN] = refreshToken
)

export const clearTokens = (callback) => {
  localStorage.removeItem(STORAGE.ACCESS_TOKEN)
  localStorage.removeItem(STORAGE.REFRESH_TOKEN)
  callback && callback()
}