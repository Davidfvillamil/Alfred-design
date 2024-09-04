import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/howitworks.jsx';
import Services from './components/services/Services';
import Counter from './components/counter/Counter';
import Portafolio from './components/Portafolio/Portafolio';
import Testimonials from './components/testimonials/Testimonials';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import Contact from './components/Contact/ct.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Faqs from './components/FAQS/faqs.jsx';
import TrabajosHechos from './components/TrabajosHechos/TrabajosHechos.jsx'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portafolio />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <Team />
            <Faqs/>
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/trabajos-hechos" element={<TrabajosHechos />} /> {/* Nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;

