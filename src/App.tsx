import React, {lazy} from "react";
import "../styles/index.scss";
import { Link, Route, Router, Switch } from "wouter";

const About = lazy(() => import("./About"));

declare global {
  interface Window {
    viewValues: {sample: string};
  }
}

export const App: React.VFC = () => {
  return (
    <Router>
    <div>
      {window.viewValues.sample}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <React.Suspense fallback="loading...">
            <About />
          </React.Suspense>
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
