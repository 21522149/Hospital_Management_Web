import { useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import "../src/assets/css/main.css";
import "../src/assets/css/utilites.css";

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/*
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
*/

function App() {
  const [count, setCount] = useState(0);
  return (

     <Header/>

  );
}

export default App;
