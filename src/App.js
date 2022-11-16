import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
          <Routes>
              <Route exact path="/" element={<News key="general" category = 'general' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/business" element={<News key="business" category = 'business' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/entertainment" element={<News key="entertainment" category = 'entertainment' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/health" element={<News key="health" category = 'health' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/science" element={<News key="science" category = 'science' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/sports" element={<News key="sports" category = 'sports' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/technology" element={<News key="technology" category = 'technology' country = 'in' pageSize = {this.pageSize} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

} 

export default App;
