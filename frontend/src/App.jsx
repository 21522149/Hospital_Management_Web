import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home"
import Login from "./page/login/Login"
import "../src/assets/css/main.css";
import "../src/assets/css/utilites.css";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SignUp from "./page/signup/SignUp";

function App() {
  const [count, setCount] = useState(0);
  return(

    <BrowserRouter>

      <Routes>

        <Route index element={<Header/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
     </BrowserRouter>
  )

  
}

export default App;
/*
        <Route path="/findDoctor" element={<Home/>}/>
        <Route path="/app" element={<Home/>}/>
        <Route path="/Testimonials" element={<Home/>}/>
        <Route path="/About us" element={<Home/>}/>
        */