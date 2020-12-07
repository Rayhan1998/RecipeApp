import { Switch, Route, HashRouter } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/:recipeId">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
