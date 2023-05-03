import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { appTypes } from "../context/types/types"

export const useTabs = () => {
  const {dispatch} = useContext(AppContext)

  const setNewTab = (tab) => {
    dispatch({
      type: 'SET_TAB_VIEW',
      payload: tab
    })
  }

  return { setNewTab }
}