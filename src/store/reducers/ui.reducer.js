import { uiContants } from '../constants'

const initialState = {
  // sidebar on left side of the pages
  sidebar: {
    show: true,
    minimize: false,
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