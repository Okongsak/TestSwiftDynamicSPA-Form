import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Form Data to Table</h1>
      <Profile />
    </div>
  );
}
export default App;