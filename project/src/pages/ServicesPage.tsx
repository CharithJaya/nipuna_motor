import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Cog, 
  Battery, 
  Gauge, 
  Thermometer, 
  Settings, 
  Shield, 
  Car,
  CheckCircle
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Cog,
      title: 'Engine Repair & Diagnostics',
      description: 'Complete engine diagnostic and repair services using state-of-the-art equipment.',
      features: ['Computer diagnostics', 'Engine rebuilds', 'Performance tuning', 'Check engine light'],
      price: 'Starting at RS 30000',
      image: 'https://images.pexels.com/photos/3964704/pexels-photo-3964704.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Gauge,
      title: 'Brake Service & Repair',
      description: 'Professional brake inspection, maintenance, and repair to keep you safe on the road.',
      features: ['Brake pad replacement', 'Rotor resurfacing', 'Brake fluid service', 'ABS diagnostics'],
      price: 'Starting at Rs 10000',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Battery,
      title: 'Electrical System Service',
      description: 'Complete electrical system diagnostics, battery service, and alternator repair.',
      features: ['Battery testing & replacement', 'Alternator service', 'Starter repair', 'Wiring diagnostics'],
      price: 'Starting at Rs 15000',
      image: 'https://images.pexels.com/photos/4315854/pexels-photo-4315854.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Thermometer,
      title: 'Cooling System Service',
      description: 'Radiator service, coolant flushes, and complete cooling system maintenance.',
      features: ['Radiator repair', 'Coolant flush', 'Thermostat replacement', 'Water pump service'],
      price: 'Starting at Rs 5000',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVm6VAeiw-WCkCxgNvEjU-1HtCj-5sX3frg&s'
    },
    {
      icon: Settings,
      title: 'Transmission Service',
      description: 'Expert transmission diagnostics, fluid service, and repair for automatic and manual transmissions.',
      features: ['Transmission fluid service', 'Clutch repair', 'Transmission rebuild', 'Diagnostics'],
      price: 'Starting at Rs 56000',
      image: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Car,
      title: 'Oil Change & Maintenance',
      description: 'Regular maintenance services to keep your vehicle running smoothly and efficiently.',
      features: ['Oil & filter change', 'Multi-point inspection', 'Fluid top-offs', 'Air filter replacement'],
      price: 'Starting at Rs 70000',
      image: 'https://images.pexels.com/photos/4315854/pexels-photo-4315854.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete automotive services performed by certified technicians using the latest equipment and techniques
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                      <Link
                        to="/appointment"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-200"
                      >
                        Book Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to meet all your vehicle needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Tire Service & Alignment',
              'Air Conditioning Service',
              'Exhaust System Repair',
              'Suspension Service',
              'Fuel System Cleaning',
              'Timing Belt Replacement',
              'Pre-Purchase Inspections',
              'Fleet Maintenance'
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
              >
                <Wrench className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Guarantee</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We stand behind our work with comprehensive warranties and a commitment to customer satisfaction. 
              All services include our 12-month/12,000-mile guarantee.
            </p>
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Your Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;