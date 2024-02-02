import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;