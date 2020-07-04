export const STORAGE_NAME = Object.freeze({
  ENUM: {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
    SIDEBAR_SHOW: "sidebarShow",
    SIDEBAR_MINIMIZE: "sidebarMinimize",
  },
  get values() {
    return Object.values(this.ENUM)
  },
})