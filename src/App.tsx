import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Character from "./components/Character";
import Episode from "./components/Episode";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      {/* <Character country={"Un saludo a pablo sobrado"}></Character> */}
      <Episode></Episode>
      <Location></Location>
    </div>
  );
}

export default App;
