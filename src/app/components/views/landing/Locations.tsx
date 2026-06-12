import { ChevronDown, Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

const locations = [
  {
    name: 'Oficina Central',
    address: 'Segundo anillo 5, Santa Cruz de la Sierra',
    phone: '+591 7 7306576',
    wphone: '59177306576',
    email: 'ventas@correascenter.com',
    hours: 'Lun - Vie: 8:00 - 18:00 | Sáb: 8:00 - 13:00',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20802.77187535896!2d-63.22224718533964!3d-17.79752330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e818129b636f%3A0xb79a33ec5254f60c!2sCORREAS%20CENTER%20LTDA!5e1!3m2!1ses-419!2sbo!4v1780433048739!5m2!1ses-419!2sbo'
  },
  {
    name: 'Sucursal Banzer',
    address: 'Av. Cristo Redentor 2260, Santa Cruz de la Sierra',
    phone: '+591 7 500-8216',
    wphone: '59175008216',
    email: 'cajabanzer.correasc@gmail.com',
    hours: 'Lun - Vie: 8:00 - 12:00 y 14:00 - 18:00 | Sáb: 8:00 - 13:00',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20806.27427524379!2d-63.211398785339654!3d-17.76744909999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e7c2698f3d4b%3A0x1d491b56825dba72!2sCorreas%20Center%20Ltda%20Sucursal%201!5e1!3m2!1ses-419!2sbo!4v1780432576106!5m2!1ses-419!2sbo'
  },
  {
    name: 'Sucursal Pampa de la Isla',
    address: 'Av Virgen De Cotoca, Santa Cruz de la Sierra',
    phone: '+591 7 416-2510',
    wphone: '59174162510',
    email: 'ronalsanchez@correascenter.com',
    hours: 'Lun - Vie: 8:00 - 12:00 y 14:00 - 18:00 | Sáb: 8:00 - 13:00',
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20805.695440343206!2d-63.15496336566989!3d-17.77242280214628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e965c22926a9%3A0xa4a21021c446dd9a!2sCORREAS%20CENTER%20Ltda%20Sucursal%202!5e1!3m2!1ses-419!2sbo!4v1780432463578!5m2!1ses-419!2sbo'
  },
  {
    name: 'Sucursal Montero',
    address: 'Av. Hernando Siles #789, Montero',
    phone: '+591 7 500-8215',
    wphone: '59175008215',
    email: 'cajamontero.correasc@gmail.com',    
    hours: 'Lun - Vie: 8:00 - 12:00 y 14:00 - 18:00 | Sáb: 8:00 - 13:00',
    maps: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3188.6736409998502!2d-63.261638324836305!3d-17.336964783541582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIwJzEzLjEiUyA2M8KwMTUnMzIuNiJX!5e1!3m2!1ses!2sbo!4v1780489828187!5m2!1ses!2sbo'
  }
];

export default function Locations() {
  const [expandedLocation, setExpandedLocation] = useState<number | null>(null);

  const openWhatsApp = (wphone: string, locationName: string) => {
    const message = `Hola, estoy interesado en información sobre ${locationName}`;
    const url = `https://wa.me/${wphone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">UBICACIONES</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cobertura estratégica para atenderte mejor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-[#EA0A2A] transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#EA0A2A] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 text-sm">{location.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-[#EA0A2A] flex-shrink-0" size={20} />
                    <a href={`tel:${location.phone}`} className="text-gray-700 text-sm hover:text-[#EA0A2A] transition-colors">
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-[#EA0A2A] flex-shrink-0" size={20} />
                    <a href={`mailto:${location.email}`} className="text-gray-700 text-sm hover:text-[#EA0A2A] transition-colors">
                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-[#EA0A2A] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 text-sm">{location.hours}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setExpandedLocation(expandedLocation === index ? null : index)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#EA0A2A] text-white px-4 py-3 rounded-md hover:bg-[#C10923] transition-all font-semibold text-sm"
                  >
                    {expandedLocation === index ? 'Ocultar Mapa' : 'Ver Ubicación'}
                    <ChevronDown size={16} className={`transition-transform ${expandedLocation === index ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <button
                    onClick={() => openWhatsApp(location.wphone, location.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-all font-semibold text-sm"
                  >
                    Contactar
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>

              {/* Mapa expandido */}
              {expandedLocation === index && (
                <div className="border-t border-gray-200">
                  <div className="h-64 w-full">
                    <iframe
                      src={location.maps}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa de ${location.name}`}
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}