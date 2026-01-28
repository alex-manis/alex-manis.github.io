import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Background from "./components/Background/Background";
import lightTheme from "./assets/light.jpg";
import darkTheme from "./assets/dark.jpg";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div
        className="app-container"
        style={{
          "--bg-light": `url(${lightTheme})`,
          "--bg-dark": `url(${darkTheme})`,
        }}
      >
        <Background />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contacts />
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
