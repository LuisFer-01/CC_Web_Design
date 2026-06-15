import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/commons/Layout';
import Brands from './components/views/landing/Brands';
import Contact from './components/views/landing/Contact';
import Differentials from './components/views/landing/Differentials';
import Hero from './components/views/landing/Hero';
import Industries from './components/views/landing/Industries';
import Locations from './components/views/landing/Locations';
import Products from './components/views/landing/Products';
import Services from './components/views/landing/Services';
import ProductsPage from './components/views/products';
import ProductDetailPage from './components/views/products/components/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal (Landing) */}
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Hero />
              <Products />
              <Brands />
              <Services />
              <Industries />
              <Differentials />
              <Locations />
              <Contact />
            </>
          } />
        </Route>

        {/* Ruta de productos */}
        <Route path="/products" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path=":code" element={<ProductDetailPage />} />
        </Route>

        {/* Futuras rutas */}
        {/* <Route path="/services" element={<Layout />}>
          <Route index element={<ServicesPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
