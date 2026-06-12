import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#EA0A2A]/10 rounded-full px-4 py-2 mb-4">
            <p className="text-[#EA0A2A] font-semibold text-sm">CONTÁCTANOS</p>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo está listo para asesorarte y encontrar la mejor solución
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-[#EA0A2A] to-[#C10923] p-8 rounded-xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#EA0A2A]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <a href="tel:+59177306576" target="_blank" className="text-white/90 hover:text-white transition-colors">
                      +591 7 7306-576
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#EA0A2A]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:ventas@correascenter.com" target="_blank" className="text-white/90 hover:text-white transition-colors">
                      ventas@correascenter.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-[#EA0A2A]" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <a href="https://wa.me/59177306576" target="_blank" className="text-white/90 hover:text-white transition-colors">
                      +591 7 7306-576
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/59177306576"
                target="_blank" 
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex-1"
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
              </a>
              <a
                href="tel:+59177306576"
                target="_blank" 
                className="flex items-center justify-center gap-2 bg-[#EA0A2A] text-white px-6 py-4 rounded-lg hover:bg-[#C10923] transition-colors font-semibold flex-1"
              >
                <Phone size={20} />
                Llamar Ahora
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA0A2A] focus:border-transparent"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA0A2A] focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA0A2A] focus:border-transparent"
                      placeholder="+591 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA0A2A] focus:border-transparent"
                      placeholder="email@empresa.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Consulta *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EA0A2A] focus:border-transparent resize-none"
                    placeholder="Cuéntanos qué necesitas..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#EA0A2A] text-white px-6 py-4 rounded-lg hover:bg-[#C10923] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Enviar Consulta
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
