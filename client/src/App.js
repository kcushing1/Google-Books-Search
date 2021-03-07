import React from "react";
import "./App.css";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar/Navbar";
import Saved from "./pages/Saved";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Jumbotron />
        <Saved />
      </Container>
    </div>
  );
}

export default App;
