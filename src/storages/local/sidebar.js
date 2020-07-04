import { STORAGE_NAME } from '../../enum'
import { parseBool } from '../../utils'

const { ENUM: STORAGE } = STORAGE_NAME

export const getSidebarShow = () => {
  const value = localStorage[STORAGE.SIDEBAR_SHOW]
  return value === undefined 
    ? undefined 
    : parseBool(value)
}

export const getSidebarMinimize = () => {
  const value = localStorage[STORAGE.SIDEBAR_MINIMIZE]
  return value === undefined 
    ? undefined
    : parseBool(value)
}

export const setSidebarShow = (show = false) => (
  localStorage[STORAGE.SIDEBAR_SHOW] = show.toString()
)

export const setSidebarMinimize = (minimize = false) => (
  localStorage[STORAGE.SIDEBAR_MINIMIZE] = minimize.toString()
)