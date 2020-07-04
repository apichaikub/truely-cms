export const STORAGE_NAME = Object.freeze({
  ENUM: {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    SIDEBAR_SHOW: "sidebar_show",
    SIDEBAR_MINIMIZE: "sidebar_minimize",
  },
  get values() {
    return Object.values(this.ENUM)
  },
})