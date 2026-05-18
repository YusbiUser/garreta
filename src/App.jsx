import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered ? (
        <LoadingScreen setEntered={setEntered} />
      ) : (
        <main>
          <Navbar />
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Reservations />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}

export default App