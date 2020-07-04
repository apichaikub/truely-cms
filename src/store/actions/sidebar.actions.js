import { uiContants } from '../constants'

const sidebarActions = {
    toggleShow: (show) => {
      return {
        type: uiContants.SIDEBAR_TOGGLE_SHOW,
        payload: { show }
      }
    },
    toggleMinimize: (minimize) => {
      return {
        type: uiContants.SIDEBAR_TOGGLE_MINIMIZE,
        payload: { minimize }
      }
    }
}

export default sidebarActions