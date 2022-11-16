import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () =>{
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API;
 
  const [progress, setProgress] = useState(0)
  const changeProgress=(progress)=>{
    setProgress(progress)
  }
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <LoadingBar
        color='#6b0513'
        progress= {progress}
        
      />
          <Routes>
              <Route exact path="/" element={<News apiKey={apiKey} setProgress={changeProgress} key="general" category = 'general' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/business" element={<News apiKey={apiKey} setProgress={changeProgress} key="business" category = 'business' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={changeProgress} key="entertainment" category = 'entertainment' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/health" element={<News apiKey={apiKey} setProgress={changeProgress} key="health" category = 'health' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/science" element={<News apiKey={apiKey} setProgress={changeProgress} key="science" category = 'science' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={changeProgress} key="sports" category = 'sports' country = 'in' pageSize = {pageSize} />} />
              <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={changeProgress} key="technology" category = 'technology' country = 'in' pageSize = {pageSize} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}


export default App;
