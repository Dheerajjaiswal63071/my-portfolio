
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import TechStack from './components/TechStack'
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppContent() {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App