import { uiContants } from '../constants'
import storage from '../../storages'

const initialState = {
  // sidebar on left side of the pages
  sidebar: {
    // if value was not set in loacl storage, default as true
    show: storage.getSidebarShow() ?? true,
    // if value was not set in loacl storage, default as false
    minimize: storage.getSidebarMinimize() ?? false,
  }
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case uiContants.SIDEBAR_TOGGLE_SHOW:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          show: action.payload.show,
        },
      }

    case uiContants.SIDEBAR_TOGGLE_MINIMIZE:
      return {
        ...state,
        sidebar: {
          ...state.sidebar,
          minimize: action.payload.minimize,
        },
      }
      
    default: 
      return state
  }
}

export default uiReducer