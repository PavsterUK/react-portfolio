import Header from "./components/Global_UI_Comp/Header";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Global_UI_Comp/Footer";

function App() {
  return (
    <HashRouter className="column">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
