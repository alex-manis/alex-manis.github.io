import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import lightTheme from "./assets/light.JPG";
import darkTheme from "./assets/dark.JPG";
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
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
