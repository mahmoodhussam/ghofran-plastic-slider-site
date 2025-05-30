
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Factory } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/lovable-uploads/57419b09-c4f6-4586-b909-3fe62b90c14c.png',
      title: 'Al-Ghofran Plastic Factory',
      subtitle: 'Leading manufacturer of plastic pipes and fittings since 1996'
    },
    {
      id: 2,
      image: '/lovable-uploads/bf94f533-f033-4e25-b305-e6dc8dbcf76e.png',
      title: 'PPRC Pipes',
      subtitle: 'High-quality polypropylene random copolymer pipes'
    },
    {
      id: 3,
      image: '/lovable-uploads/ad453382-c59d-4165-8d3e-643eedd17d11.png',
      title: 'HDPE Pipes',
      subtitle: 'Durable high-density polyethylene piping solutions'
    },
    {
      id: 4,
      image: '/lovable-uploads/8efdc249-21bb-4064-a756-3bce47b5e61c.png',
      title: 'Electrical Conduits',
      subtitle: 'Professional electrical and telecommunications network solutions'
    },
    {
      id: 5,
      image: '/lovable-uploads/fe48dce8-ddca-4737-a7f7-58db8bc3571e.png',
      title: 'Drainage Systems',
      subtitle: 'Complete drainage, waste and vent piping solutions'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2">
                <span className="text-2xl font-bold text-red-700">GP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">AL-Ghofran Plastic Factory</h1>
                <p className="text-sm opacity-90">مصنع الغفران للبلاستيك</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-red-200 transition-colors">Home</a>
              <a href="#about" className="hover:text-red-200 transition-colors">About</a>
              <a href="#products" className="hover:text-red-200 transition-colors">Products</a>
              <a href="#contact" className="hover:text-red-200 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section id="home" className="relative h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl opacity-90 animate-fade-in">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Al-Ghofran Plastic Factory</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <p className="text-lg text-gray-700 mb-6">
                  Established in 1996, Al-Ghofran Plastic Factory is one of the biggest Jordanian factories 
                  specialized in manufacturing plastic pipes and fittings of material HDPE, MDPE, LDPE, UPVC, CPVC, PPRC.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our production facilities are equipped with the latest global machinery and operated under 
                  the supervision of qualified engineers to serve industrial and construction sectors.
                </p>
                <div className="flex items-center space-x-2 text-red-600 font-semibold">
                  <Factory size={24} />
                  <span>ISO 9001:2015 Certified</span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To achieve our vision through ambitious goals that offer the finest services to our customers 
                  and meet their needs and aspirations.
                </p>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  Strive to be known locally and internationally as pioneers in innovation in manufacturing 
                  plastics industry and achieve the requirements of our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">PPRC Pipes</h3>
              <p className="mb-4">Polypropylene random copolymer pipes for hot and cold water systems</p>
              <ul className="text-sm space-y-1">
                <li>• Domestic hot and cold water</li>
                <li>• Central heating systems</li>
                <li>• Industrial applications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">HDPE Pipes</h3>
              <p className="mb-4">High-density polyethylene pipes for water and sewage networks</p>
              <ul className="text-sm space-y-1">
                <li>• Water distribution</li>
                <li>• Sewage systems</li>
                <li>• Gas distribution</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">UPVC Pipes</h3>
              <p className="mb-4">Unplasticized PVC pipes for electrical and water applications</p>
              <ul className="text-sm space-y-1">
                <li>• Electrical conduits</li>
                <li>• Water supply</li>
                <li>• Telecommunications</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">CPVC Pipes</h3>
              <p className="mb-4">Chlorinated PVC pipes for hot water applications</p>
              <ul className="text-sm space-y-1">
                <li>• Hot water systems</li>
                <li>• Industrial processes</li>
                <li>• Chemical resistance</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">Corrugated Ducts</h3>
              <p className="mb-4">Flexible corrugated ducts for electrical installations</p>
              <ul className="text-sm space-y-1">
                <li>• Electrical protection</li>
                <li>• Cable management</li>
                <li>• Easy installation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-3">Drainage Systems</h3>
              <p className="mb-4">Complete drainage, waste and vent piping solutions</p>
              <ul className="text-sm space-y-1">
                <li>• Waste water systems</li>
                <li>• Soil and waste discharge</li>
                <li>• Ventilation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-300">info@alghofran-plastic.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone & Fax</h3>
              <p className="text-gray-300">Tel: +962 6 4029554</p>
              <p className="text-gray-300">Fax: +962 6 4029556</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-300">Sahab- King Abdullah II Industrial Estate</p>
              <p className="text-gray-300">Str.8 - Building 321</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Website</h3>
              <p className="text-gray-300">www.ghofranplasticfactory.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-red-600 rounded-lg p-2">
              <span className="text-xl font-bold">GP</span>
            </div>
            <div>
              <h3 className="text-lg font-bold">AL-Ghofran Plastic Factory</h3>
              <p className="text-sm opacity-75">مصنع الغفران للبلاستيك</p>
            </div>
          </div>
          <p className="text-gray-400">&copy; 2024 Al-Ghofran Plastic Factory. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Since 1996 - Leading manufacturer of plastic pipes and fittings</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
