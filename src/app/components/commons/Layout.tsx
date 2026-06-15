import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Navigation from './Navigation';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  const location = useLocation();
  
  // Rutas donde NO queremos mostrar breadcrumbs
  const hideBreadcrumbsRoutes = ['/', '/products'];
  const showBreadcrumbs = !hideBreadcrumbsRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 sm:pt-18 md:pt-20">
        {showBreadcrumbs && <Breadcrumbs />}
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
