import Brands from './components/Brands';
import Contact from './components/Contact';
import Differentials from './components/Differentials';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Locations from './components/Locations';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Services from './components/Services';

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