import { useReducer } from "react";
import { AppReducer } from "./context/reducers/AppReducer";
import { AppContext } from "./context/AppContext";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Content } from "./containers/Content";


function App() {
  const [appState, dispatch] = useReducer(AppReducer, []);
  return (
    <AppContext.Provider value={{appState,dispatch}}>
      <Navbar />
      <Content>

      </Content>
    </AppContext.Provider>
  );
}

export default App;
