import React from 'react';
import { Award, Users, Clock, Shield, Wrench, Star } from 'lucide-react';


const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Satisfied Customers', value: '1,500+' },
    { icon: Clock, label: 'Years in Business', value: '15+' },
    { icon: Wrench, label: 'Services Completed', value: '2,000+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' }
  ];

  const team = [
    
    {
      name: 'pathum thushara',
      role: 'Service Advisor',
      experience: '15+ years',
      certifications: 'Customer Service Excellence',
      image: 'data:image/jpeg;base64,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'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We believe in honest, transparent service. No upselling, no hidden fees - just straightforward automotive care.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We use only the highest quality parts and follow manufacturer specifications to ensure lasting repairs.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We take time to explain issues and provide solutions that fit your needs and budget.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'We respect your time and provide accurate estimates, timely service, and reliable repairs you can count on.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nipuna Motor Engineering </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted automotive partner since 2010, providing honest, reliable service with a personal touch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  nipuna auto motor engineering was founded in 2010 with a simple mission: to provide honest, reliable automotive 
                  service that customers can trust. What started as a small neighborhood garage has grown into 
                  one of the most respected auto service centers in the area.
                </p>
                <p>
                  Our founder, Pathum thushara, saw too many customers being taken advantage of by unscrupulous 
                  shops. He wanted to create a place where transparency, quality, and customer satisfaction 
                  came first - where you could bring your vehicle knowing you'd receive honest advice and 
                  fair pricing.
                </p>
                <p>
                  Today, we've serviced over 50,000 vehicles and built lasting relationships with more than 
                  1,500 customers. Our success comes from our commitment to treating every customer like family 
                  and every vehicle like our own.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0KGBpyVFmHTKi8II2w7hkoPnChR1ft_V9w&s"
                alt="AutoCare Pro facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-blue-100">of trusted service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-lg text-gray-600">Our track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and every interaction we have with our customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <value.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified technicians and service advisors are the heart of our operation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-1">Experience: {member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.certifications}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by industry leaders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">ASE Certified Shop</h3>
              <p className="text-gray-600">Automotive Service Excellence certification ensures quality service</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">BBB A+ Rating</h3>
              <p className="text-gray-600">Better Business Bureau's highest rating for business integrity</p>
            </div>
            <div className="text-center p-6">
              <Star className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">2023 Customer Choice</h3>
              <p className="text-gray-600">Voted best auto service center by local customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the AutoCare Pro Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          <a
            href="/appointment"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Schedule Your Service Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;