import { useContext, useEffect, useReducer, useState } from "react";
import { AppReducer } from "./context/reducers/AppReducer";
import { AppContext } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Content } from "./containers/Content";
import { appTabs } from "./context/types/types";
import ThemeProvider from "./context/ThemeContext";

const mock_test = {
  [appTabs.home]: 'You are in home',
  [appTabs.states]: 'You are in departaments',
  [appTabs.presidents]: 'You are in presidents',
  [appTabs.turism]: 'You are in turism',
  [appTabs.natural]: 'You are in natural'
}

export const initialState = {
  api_data: [],
  current_tab: appTabs.home
}

function App() {
  const [appState, dispatch] = useReducer(AppReducer, initialState);
  const current_view = appState.current_tab;
  return (
    <ThemeProvider>
      <AppContext.Provider value={{ appState, dispatch }}>
        <Navbar />
        <Content>
          <h2>{mock_test[current_view]}</h2>
        </Content>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
