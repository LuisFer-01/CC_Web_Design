import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Brands from './components/views/landing/Brands';
import Contact from './components/views/landing/Contact';
import Differentials from './components/views/landing/Differentials';
import Hero from './components/views/landing/Hero';
import Industries from './components/views/landing/Industries';
import Locations from './components/views/landing/Locations';
import Products from './components/views/landing/Products';
import Services from './components/views/landing/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Products />
      <Brands />
      <Services />
      <Industries />
      <Differentials />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}