import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import CintaTrFImg from "../assets/img/hero/Cinta transportadora Fabrica.jpeg";
import CintaTrCImg from "../assets/img/hero/Cinta_transportadora_Cargada.png";
/* import CCMono from "../assets/img/hero/CC_blanco.png";
import SKFMono from "../assets/img/hero/SKF blanco.png";
import BoliviaMono from "../assets/img/hero/Bolivia blanco.png";
import SoporteMono from "../assets/img/hero/Soporte blanco.png"; */

const carouselSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwaHlkcmF1bGljJTIwc3lzdGVtc3xlbnwxfHx8fDE3ODAyODUwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Soluciones Industriales Confiables",
    subtitle:
      "Más de 25 años brindando repuestos, fabricación especializada y soporte técnico para la industria boliviana.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwcGFydHN8ZW58MXx8fHwxNzgwMjg1MDE3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Calidad SKF Garantizada",
    subtitle:
      "Fabricación autorizada SKF con los más altos estándares de calidad internacional.",
  },
  {
    image: CintaTrFImg,
    title: "Correas y Transmisiones de Alta Resistencia",
    subtitle:
      "Amplio stock en correas en V, dentadas, variadoras y acanaladas para todo tipo de maquinaria.",
  },
  {
    image: CintaTrCImg,
    title: "Sistemas Hidráulicos y Neumáticos",
    subtitle:
      "Mangueras, conectores y componentes hidráulicos de las mejores marcas del mercado.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc4MDI4NTAxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Cobertura Nacional Inmediata",
    subtitle:
      "Entregas rápidas a todo Bolivia con el respaldo de nuestro equipo técnico especializado.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousSlide(currentSlide);
      setCurrentSlide(
        (prev) => (prev + 1) % carouselSlides.length,
      );
      setContentVisible(false);
      // El contenido aparece después de que la imagen comienza a transicionar
      setTimeout(() => setContentVisible(true), 1000);
    }, 7000);

    // Inicialmente mostrar contenido
    //setContentVisible(true);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo negro semitransparente con imagen visible - Overlay más ligero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/15 to-black/10">
        {/* Imagen actual con escala suave */}
        <img
          src={carouselSlides[currentSlide].image}
          alt="Industrial background"
          className="absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out scale-105"
          style={{ opacity: 1 }}
        />

        {/* Imagen anterior para transición cross-fade */}
        {previousSlide !== currentSlide && (
          <img
            src={carouselSlides[previousSlide].image}
            alt=""
            className="absolute w-full h-full object-cover transition-all duration-[4000ms] ease-in-out scale-100"
            style={{ opacity: 0 }}
            aria-hidden="true"
          />
        )}

        {/* Overlay negro semitransparente - Más ligero para resaltar imagen */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/15"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge con animación */}
          <div 
            className={`inline-block bg-white/10 border border-white/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <p className="text-white text-sm font-medium">
              Líder en Soluciones Industriales
            </p>
          </div>

          {/* Contenido del carrusel - Título */}
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-500 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {carouselSlides[currentSlide].title}
          </h1>

          {/* Contenido del carrusel - Subtítulo */}
          <p 
            className={`text-xl text-white/90 mb-8 leading-relaxed transition-all duration-1000 delay-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {carouselSlides[currentSlide].subtitle}
          </p>

          {/* Botones con animación */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#EA0A2A] px-8 py-4 rounded-md hover:bg-gray-100 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Asesoría
              <ArrowRight size={20} />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md hover:bg-white/20 transition-all font-semibold text-lg border border-white/30"
            >
              Ver Productos
            </a>
          </div>

          {/* Indicadores del carrusel */}
          <div 
            className={`flex gap-2 mt-8 justify-center sm:justify-start transition-all duration-1000 delay-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setPreviousSlide(currentSlide);
                  setCurrentSlide(index);
                  setContentVisible(false);
                  setTimeout(() => setContentVisible(true), 800);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}