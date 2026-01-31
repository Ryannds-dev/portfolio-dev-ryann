import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export default App;
