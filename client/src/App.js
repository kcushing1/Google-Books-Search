import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Container>
          <Jumbotron />
          <Switch>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route exact path={["/search", "/"]}>
              <Search />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
