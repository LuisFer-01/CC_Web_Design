import { useNavigate, useParams } from 'react-router-dom';
import { productsDatabase } from '../../../../../data/products';
import Breadcrumbs from '../../../commons/Breadcrumbs';
import ProductDetail from '../components/ProductDetail';

export default function ProductDetailPage() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();

  const product = productsDatabase.find(p => p.code === code);

  if (!product) {
    return (
      <section className="pt-16 sm:pt-18 md:pt-20 min-h-screen">
        <Breadcrumbs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-8">El producto que buscas no existe o fue removido.</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#EA0A2A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#C10923] transition-colors"
          >
            Volver a productos
          </button>
        </div>
      </section>
    );
  }

  return <ProductDetail product={product} onBack={() => navigate('/products')} />;
}