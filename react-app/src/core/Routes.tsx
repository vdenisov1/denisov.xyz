import HomePage from "../pages/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}