import { STORAGE_NAME } from '../../enum'

export const getAccessToken = () => {
  return localStorage[STORAGE_NAME.ENUM.ACCESS_TOKEN]
}

export const getRefreshToken = () => {
  return localStorage[STORAGE_NAME.ENUM.REFRESH_TOKEN]
}

export const setAccessToken = (accessToken) => {
  return localStorage[STORAGE_NAME.ENUM.ACCESS_TOKEN] = accessToken
}

export const setRefreshToken = (refreshToken) => {
  return localStorage[STORAGE_NAME.ENUM.REFRESH_TOKEN] = refreshToken
}

export const clearTokens = (callback) => {
  localStorage.removeItem(STORAGE_NAME.ENUM.ACCESS_TOKEN)
  localStorage.removeItem(STORAGE_NAME.ENUM.REFRESH_TOKEN)
  callback && callback()
}