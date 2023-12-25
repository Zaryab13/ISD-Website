import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Hero, Navbar, About, Contact, Footer } from "./components";
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      <section className="bg-zinc-400 relative box-border">
        <div className="bg-slate-200 bg-cover bg-center">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/home" element={<Hero />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
            <Footer />
          </main>
        </div>
      </section>
    </Router>
  );
};

export default App;
