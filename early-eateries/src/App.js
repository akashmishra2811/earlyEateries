import "./App.css";
import { Button } from "reactstrap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Display from "./Components/Display";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Display />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
