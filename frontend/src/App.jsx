import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;