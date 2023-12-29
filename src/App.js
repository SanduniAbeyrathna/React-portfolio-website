import React from "react";
import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
import Banner from './components/Banner'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <main className="main-content">
        {/* Other components or content can go here */}
      </main>
    </div>
  );
}

export default App;
