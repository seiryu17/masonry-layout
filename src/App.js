import { useState } from "react";
import Navbar from "./layout/Navbar/Navbar";
import Main from "../src/layout/Main/Main";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <Navbar onHandleChangeSearch={(e) => setSearchText(e.target.value)} />
      {/* <Main searchText={searchText} /> */}
    </div>
  );
}

export default App;
