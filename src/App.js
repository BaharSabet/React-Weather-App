import React from "react";
import SearchPage from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header">
          <SearchPage city = "Lisbon"/>
        </div>
      </div>
      <div className="App-footer">
        Coded by
        <a href="https://github.com/BaharSabet/React-Weather-App" target="-blank">
          {" "}
          Bahar
        </a>
      </div>
    </div>
  );
}

export default App;
