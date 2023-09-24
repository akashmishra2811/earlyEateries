import "./App.css";
import { Button } from "reactstrap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Display from "./Components/Display";
import SignUpForm from "./Components/SignUpForm";
import AuthenticationPage from "./Components/AuthenticationPage";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useState } from "react";
import background from "./Store/Photos/background.jpg";
function App() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      {isLogin ? (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<AuthenticationPage />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
