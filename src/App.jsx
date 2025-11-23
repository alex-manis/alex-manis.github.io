import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Background from './components/Background'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Background />
        <Header />
        <Hero />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

