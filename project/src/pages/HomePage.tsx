import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Shield, 
  Clock, 
  Award, 
  Car, 
  Cog, 
  Battery, 
  Gauge,
  ChevronRight,
  Star
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Our ASE-certified mechanics provide expert service you can trust.'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Most services completed the same day with our efficient workflow.'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'All work backed by our comprehensive warranty and satisfaction guarantee.'
    }
  ];

  const services = [
    {
      icon: Cog,
      title: 'Engine Repair',
      description: 'Complete engine diagnostics and repair services',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpFGo1Y_OGUwEZBkGPDKjqTj4K4kOLW0zRA&s'
    },
    {
      icon: Battery,
      title: 'Battery Service',
      description: 'Battery testing, replacement, and maintenance',
      image: 'https://images.pexels.com/photos/4315854/pexels-photo-4315854.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      icon: Gauge,
      title: 'Brake Service',
      description: 'Comprehensive brake inspection and repair',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    
    {
      name: 'Charith Jayashan',
      text: 'Trustworthy mechanics who explain everything clearly. Great customer service!',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Nipuna Motor Engineering <br />
              <span className="text-orange-400">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional vehicle maintenance and repair services with certified technicians
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Nipuna Motor Engineering?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine years of experience with cutting-edge technology to provide the best automotive care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive automotive services to keep your vehicle running smoothly
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <service.icon className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get your vehicle the care it deserves. Book your appointment today!
          </p>
          <Link
            to="/appointment"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;