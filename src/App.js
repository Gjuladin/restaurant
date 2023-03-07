import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//Pages

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Staff from "./pages/Staff";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Boootstrap Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
