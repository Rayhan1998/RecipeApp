import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import HomePage from "./Pages/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
