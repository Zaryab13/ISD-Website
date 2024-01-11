import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage, Header, About, Contact, Footer } from "./components";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <Router>
      <section className="bg-zinc-400 relative box-border">
        <div className="bg-slate-200 bg-cover bg-center">
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/home" element={<Homepage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
            </Routes>
          </main>
        </div>
      </section>
    </Router>
  );
};

export default App;
