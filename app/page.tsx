import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

