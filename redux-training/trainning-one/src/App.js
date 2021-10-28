import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index";
import TodoList from "./component/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
