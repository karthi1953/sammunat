import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Solutions from './components/Solutions' 
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Solutions /> 
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App