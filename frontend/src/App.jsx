import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <div>
        <Home/>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
