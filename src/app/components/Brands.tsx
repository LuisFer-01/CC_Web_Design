import { useEffect, useState } from 'react';

import APC from '../assets/img/brands/APC.png';
import FD from '../assets/img/brands/F&D.png';
import GMORS from '../assets/img/brands/GMORS.jpg';
import HERCULES from '../assets/img/brands/HERCULES.jpg';
import INA from '../assets/img/brands/INA.jpg';
import KFB from '../assets/img/brands/KFB.png';
import PerfectPower from '../assets/img/brands/Perfect Power.png';
import Pix from '../assets/img/brands/PIX.jpg';
import SKF from '../assets/img/brands/SKF-DISTRIBUIDOR-ESPECIALISTA-EN-SELLOS-HORIZONTAL.png';

const brands = [
  { name: 'PERFECT POWER', logo: PerfectPower },
  { name: 'SKF', logo: SKF },
  { name: 'SAV', logo: 'https://iconape.com/wp-content/png_logo_vector/sav-retenes-logo.png' },
  { name: 'ARCA', logo: 'https://www.boliviaentusmanos.com/amarillas/businesscard/certificaciones-medicos/arca-retenedores.jpg' },
  { name: 'FAG', logo: 'https://cdn.freebiesupply.com/logos/large/2x/fag-2-logo-png-transparent.png' },
  { name: 'INA', logo: INA },
  { name: 'NSK', logo: 'https://images.seeklogo.com/logo-png/10/1/nsk-logo-png_seeklogo-101282.png' },
  { name: 'NTN', logo: 'https://logodix.com/logo/1888827.png' },
  { name: 'JASON MEGADYNE', logo: 'https://bandasybandas.co/wp-content/uploads/2022/03/logo-jason-300x176.png' },
  { name: 'MITSUBA', logo: 'https://i0.wp.com/haneimotors.com/wp-content/uploads/2023/02/marcas-mitsuba.jpg?fit=271%2C155&ssl=1' },
  { name: 'GATES', logo: 'https://logos-world.net/wp-content/uploads/2022/07/Gates-Symbol.png' },
  { name: 'ABIX', logo: 'https://www.abactransmisiones.com.ar/storage/brands/abix.jpg' },
  { name: 'PIX', logo: Pix },
  { name: 'ZMTE', logo: 'https://media.licdn.com/dms/image/v2/D4D16AQFBegh09-0A5A/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1665370759641?e=1781740800&v=beta&t=Egqk0pEUbCqkTc_skXjpQz3Rdu661Hi_tv1DjlBDQKw' },
  { name: 'Pabovi', logo: 'https://worldplasticconnectionsummit.com/wp-content/uploads/2025/06/Logo-Pabovi-exp-2023-1.png' },
  { name: 'APC', logo: APC },
  { name: 'GMORS', logo: GMORS },
  { name: 'HERCULES', logo: HERCULES },
  { name: 'WORLD GASKET', logo: 'https://ellegi.com/wp-content/uploads/2024/10/Logo-World-Gasket-Ellegi-SC-Bi-Pos-RGB.png' },
  { name: 'F&D', logo: FD },
  { name: 'FBJ', logo: 'https://images.seeklogo.com/logo-png/5/1/fbj-bearings-logo-png_seeklogo-52396.png' },
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
