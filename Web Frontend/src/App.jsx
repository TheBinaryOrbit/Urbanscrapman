import './App.css'
import Footer from './Component/Footer'
import Hero from './Component/Hero'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Pricing from './Component/Pricing'
import Rates from './Component/Rates'

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='pricing' element={<Pricing />} /> */}
        <Route path='/rates' element={<Rates />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
