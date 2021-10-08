import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import ListOfUsers from "./components/ListOfUsers";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className="navbar">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Todo" className="navbar">
                  Todo-List
                </Link>
              </li>
              <li>
                <Link to="/users" className="navbar">
                  ListOfUsers
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/Todo">
              <Todo />
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
    </>
  );
}
function Home() {
  return (
    <div className="homepage">
      <h2 className="home">Welcome Guest</h2>
      <div className="img">
        <img
          src="https://excellencetechnologies.in/assets/svg/excellence-logo-white.svg"
          alt="brake"
        />
        
      </div>
    </div>
  );
}

function Todo() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

function Users() {
  return (
    <ListOfUsers/>
  )
}
export default App;
