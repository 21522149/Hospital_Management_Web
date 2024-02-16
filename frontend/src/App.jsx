import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import Footer from "./components/footer/Footer";
import "../src/assets/css/main.css";
import "../src/assets/css/utilites.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="page-wrapper">
        <Header />
        <div>
          <Home />
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
