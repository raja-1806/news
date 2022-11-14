import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <News pageSize={6} />
      </div>
    );
  }
}

export default App;
