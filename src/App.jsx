import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Navbar, Projects } from "./components";

function App() {
  return (
    <>
      <main className="bg-slate-300/20">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
