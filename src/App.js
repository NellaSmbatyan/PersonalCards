import "./App.css";
import Person from "./components/Person";
import PersonalList from "./context/PersonalList";

function App() {
  return (
    <PersonalList>
      <Person />
    </PersonalList>
  );
}

export default App;
