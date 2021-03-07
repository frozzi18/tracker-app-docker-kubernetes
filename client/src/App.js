import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import AddUsername from "./Form/AddUsername";
import AddExercise from "./Form/AddExercise";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Form/EditExercise";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <ExerciseList />
          </Route>
          <Route path="/username/add" component={AddUsername} />

          <Route path="/exercise/add" component={AddExercise} />

          <Route path="/exercises/update/:exerId" component={EditExercise} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
