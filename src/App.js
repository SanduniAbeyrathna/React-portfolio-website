import React from "react";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="main-content">
        {/* Other components or content can go here */}
      </main>
    </div>
  );
}

export default App;
