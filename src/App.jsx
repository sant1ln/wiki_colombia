import { useReducer } from "react";
import "./App.css";
import { Card, Text, Metric } from "@tremor/react";
import { AppReducer } from "./context/reducers/AppReducer";
import { AppContext } from "./context/AppContext";


function App() {
  const [appState, dispatch] = useReducer(AppReducer, []);
  return (
    <AppContext.Provider value={{appState,dispatch}}>
      <Card className="max-w-xs mx-auto">
        <Text>Sales</Text>
        <Metric>$ 34,743</Metric>
      </Card>
    </AppContext.Provider>
  );
}

export default App;
