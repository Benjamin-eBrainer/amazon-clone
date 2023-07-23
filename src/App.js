import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </StateProvider>
  );
}

export default App;
