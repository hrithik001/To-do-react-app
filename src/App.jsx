import AppName from "./components/AppName";
import AddData from "./components/AddData";
import TodoItems from "./components/TodoItems";
import OnEmpty from "./components/OnEmpty";
import WrapperProvider from "./store/ItemsList";
import "./App.css";

function App() {
  return (
    <WrapperProvider>
      <center className="todo-container">
        <AppName />
        <AddData />
        <OnEmpty />
        <TodoItems />
      </center>
    </WrapperProvider>
  );
}

export default App;
