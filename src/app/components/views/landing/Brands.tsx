import { useEffect, useState } from 'react';

import Abix from '../../../assets/img/brands/ABIX.png';
import APC from '../../../assets/img/brands/APC.png';
import Arca from '../../../assets/img/brands/ARCA.png';
import FD from '../../../assets/img/brands/F&D.png';
import FAG from '../../../assets/img/brands/FAG-2.png';
import FBJ from '../../../assets/img/brands/FBJ.png';
import Gates from '../../../assets/img/brands/GATES.png';
import GMORS from '../../../assets/img/brands/GMORS.jpg';
import HERCULES from '../../../assets/img/brands/HERCULES.jpg';
import INA from '../../../assets/img/brands/INA.jpg';
import Jason from '../../../assets/img/brands/JASON MEGADYNE.jpg';
import KFB from '../../../assets/img/brands/KFB.png';
import Mitsuba from '../../../assets/img/brands/mitsuba.jpg';
import NSK from '../../../assets/img/brands/NSK.png';
import NTN from '../../../assets/img/brands/NTN.png';
import Pabovi from '../../../assets/img/brands/Pabovi.png';
import PerfectPower from '../../../assets/img/brands/Perfect Power.png';
import Pix from '../../../assets/img/brands/PIX.jpg';
import Sav from '../../../assets/img/brands/SAV.png';
import SKF from '../../../assets/img/brands/SKF-DISTRIBUIDOR-ESPECIALISTA-EN-SELLOS-HORIZONTAL.png';
import WorldG from '../../../assets/img/brands/WORLD GASKET.png';
import ZMTE from '../../../assets/img/brands/ZMTE.png';

const brands = [
  { name: 'PERFECT POWER', logo: PerfectPower },
  { name: 'SKF', logo: SKF },
  { name: 'SAV', logo: Sav },
  { name: 'ARCA', logo: Arca },
  { name: 'FAG', logo: FAG },
  { name: 'INA', logo: INA },
  { name: 'NSK', logo: NSK },
  { name: 'NTN', logo: NTN },
  { name: 'JASON MEGADYNE', logo: Jason },
  { name: 'MITSUBA', logo: Mitsuba },
  { name: 'GATES', logo: Gates },
  { name: 'ABIX', logo: Abix },
  { name: 'PIX', logo: Pix },
  { name: 'ZMTE', logo: ZMTE },
  { name: 'Pabovi', logo: Pabovi },
  { name: 'APC', logo: APC },
  { name: 'GMORS', logo: GMORS },
  { name: 'HERCULES', logo: HERCULES },
  { name: 'WORLD GASKET', logo: WorldG },
  { name: 'F&D', logo: FD },
  { name: 'FBJ', logo: FBJ },
  { name: 'KFB', logo: KFB },
];

export default function Brands() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 1;
        const totalWidth = brands.length * 200; // 200px es el ancho aproximado de cada marca
        return newOffset >= totalWidth ? 0 : newOffset;
      });
    }, 30); // Se mueve cada 30ms para suavidad

    return () => clearInterval(interval);
  }, []);

  // Duplicar las marcas para crear el efecto infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">MARCAS LÍDERES</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Representamos las Mejores Marcas Internacionales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calidad garantizada con productos de fabricantes reconocidos mundialmente
          </p>
        </div>

        {/* Carrusel Infinito */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex gap-8 transition-transform duration-75 ease-linear"
              style={{ transform: `translateX(-${offset}px)` }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 hover:border-[#EA0A2A] hover:shadow-lg transition-all duration-300 p-4"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradientes laterales para efecto de desvanecimiento */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#EA0A2A] to-[#C10923] p-8 rounded-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-white"></div>
            <p className="text-white font-bold text-lg">FABRICANTE AUTORIZADO</p>
            <div className="h-1 w-12 bg-white"></div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">
            Licencia Exclusiva SKF para Bolivia
          </h3>
          <p className="text-white/90 text-lg">
            Únicos autorizados para fabricar sellos y retenes SKF en el país
          </p>
        </div>
      </div>
    </section>
  );
}
