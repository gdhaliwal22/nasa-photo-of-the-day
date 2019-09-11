import React from "react";
import axios from "axios";
import PodList from "./components/PodList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PodList />
    </div>
  );
}

export default App;
