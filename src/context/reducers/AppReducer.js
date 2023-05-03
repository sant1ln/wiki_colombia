import { initialState } from "../../App"
import { appTabs, appTypes } from "../types/types"

export const AppReducer = (state, action) => {
  console.log(action, state)
  switch(action.type){
    case appTypes.LOAD_COUNTRIES:
      return action.payload
    case 'SET_TAB_VIEW':
      return {
        api_data: [],
        current_tab: action.payload
      }
    default:
      return {state}
  }
}