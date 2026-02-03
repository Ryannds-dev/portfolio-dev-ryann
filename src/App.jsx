import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Education />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
