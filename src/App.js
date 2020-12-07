import { Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/:recipeId">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
