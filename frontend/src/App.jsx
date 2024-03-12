import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home"
import Login from "./page/login/Login"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);
  return(
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        {/* <Route path="/FindDoctor" element={<FindDoctor/>}></Route>
        <Route path="/AboutUs" element={<AboutUs/>}></Route> */}
      </Routes>
     </BrowserRouter>
  )
}

export default App;
