import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Hero, Navbar, About, Contact, Footer } from "./components";

const App = () => {
  const [activeLink, setActiveLink] = useState("");
  const activePageHandler = (id) => {
    setActiveLink(id);
  };

  return (
    <Router>
      <section className="bg-zinc-400 relative box-border">
        <div className="bg-slate-200 bg-cover bg-center">
          <Navbar onActivePage={activePageHandler} />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </div>
     
      </section>
    </Router>
  );
};

export default App;
