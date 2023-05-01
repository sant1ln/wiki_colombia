import { useReducer } from "react";
import "./App.css";
import { Card, Text, Metric } from "@tremor/react";
import { AppReducer } from "./context/reducers/AppReducer";
import { AppContext } from "./context/AppContext";
import { Navbar } from "./components/Navbar";


function App() {
  const [appState, dispatch] = useReducer(AppReducer, []);
  return (
    <AppContext.Provider value={{appState,dispatch}}>
      <Navbar />
    </AppContext.Provider>
  );
}

export default App;
