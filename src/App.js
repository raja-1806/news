import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pageSize = 6;
  state = {
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='#6b0513'
        progress= {this.state.progress}
        
      />
          <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} key="general" category = 'general' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" category = 'business' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" category = 'entertainment' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" category = 'health' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" category = 'science' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" category = 'sports' country = 'in' pageSize = {this.pageSize} />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" category = 'technology' country = 'in' pageSize = {this.pageSize} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

} 

export default App;
