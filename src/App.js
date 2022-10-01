import "./App.css";
import PersonAdd from "./components/PersonAdd";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <PersonList />
      <PersonAdd />
    </div>
  );
}

export default App;
