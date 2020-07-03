export const STORAGE_NAME = Object.freeze({
  ENUM: {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken'
  },
  get values() {
    return Object.values(this.ENUM)
  },
})