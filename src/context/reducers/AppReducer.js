import { AppTypes } from "../types/types"

const initialState = []

export const AppReducer = (action, state = initialState ) => {
  switch(action){
    case AppTypes.LOAD_COUNTRIES:
      return action.payload
    default: return state
  }
}