import { Home } from "@templates";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home store={store} />
      </Provider>
    </div>
  );
}

export default App;
