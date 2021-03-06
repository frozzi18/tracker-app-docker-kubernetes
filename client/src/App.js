import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import AddUsername from "./Form/AddUsername";
import AddExercise from "./Form/AddExercise";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <h1>Hello</h1>
          </Route>
          <Route path="/username/add">
            <AddUsername />
          </Route>
          <Route path="/exercise/add">
            <AddExercise />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
