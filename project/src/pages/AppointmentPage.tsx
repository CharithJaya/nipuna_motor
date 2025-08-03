import React, { useState } from 'react';
import { Calendar, Clock, Car, User, Phone, Mail, CheckCircle } from 'lucide-react';
import { format, addDays, startOfToday, parse, isBefore, isAfter } from 'date-fns';

const AppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    service: '',
    date: '',
    time: '',
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      vehicle: {
        year: '',
        make: '',
        model: '',
        mileage: ''
      }
    },
    notes: ''
  });

  const services = [
    { id: 'oil-change', name: 'Oil Change & Filter', duration: '30 min', price: '$39' },
    { id: 'brake-service', name: 'Brake Service', duration: '90 min', price: '$149' },
    { id: 'engine-diagnostic', name: 'Engine Diagnostic', duration: '60 min', price: '$89' },
    { id: 'transmission', name: 'Transmission Service', duration: '120 min', price: '$129' },
    { id: 'electrical', name: 'Electrical System Service', duration: '90 min', price: '$79' },
    { id: 'cooling', name: 'Cooling System Service', duration: '90 min', price: '$99' },
    { id: 'general-repair', name: 'General Repair', duration: 'TBD', price: 'Quote' }
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
  ];

  const generateAvailableDates = () => {
    const dates = [];
    const today = startOfToday();
    
    for (let i = 1; i <= 14; i++) {
      const date = addDays(today, i);
      const dayOfWeek = date.getDay();
      // Skip Sundays (0)
      if (dayOfWeek !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handleServiceSelect = (serviceId: string) => {
    setAppointmentData({ ...appointmentData, service: serviceId });
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setAppointmentData({ ...appointmentData, date });
    setStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setAppointmentData({ ...appointmentData, time });
    setStep(4);
  };

  const handleCustomerInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5);
  };

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === 'customerInfo') {
      setAppointmentData({
        ...appointmentData,
        customerInfo: {
          ...appointmentData.customerInfo,
          [field]: value
        }
      });
    } else if (section === 'vehicle') {
      setAppointmentData({
        ...appointmentData,
        customerInfo: {
          ...appointmentData.customerInfo,
          vehicle: {
            ...appointmentData.customerInfo.vehicle,
            [field]: value
          }
        }
      });
    } else {
      setAppointmentData({
        ...appointmentData,
        [field]: value
      });
    }
  };

  const confirmAppointment = () => {
    // Handle appointment submission here
    console.log('Appointment confirmed:', appointmentData);
    alert('Appointment confirmed! You will receive a confirmation email shortly.');
  };

  const selectedService = services.find(s => s.id === appointmentData.service);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule your vehicle service in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= stepNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > stepNumber ? <CheckCircle className="h-6 w-6" /> : stepNumber}
                </div>
                {stepNumber < 5 && (
                  <div
                    className={`w-12 h-1 mx-2 ${
                      step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={step >= 1 ? 'text-blue-600' : 'text-gray-500'}>Service</span>
            <span className={step >= 2 ? 'text-blue-600' : 'text-gray-500'}>Date</span>
            <span className={step >= 3 ? 'text-blue-600' : 'text-gray-500'}>Time</span>
            <span className={step >= 4 ? 'text-blue-600' : 'text-gray-500'}>Details</span>
            <span className={step >= 5 ? 'text-blue-600' : 'text-gray-500'}>Confirm</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Select Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-200"
                >
                  <Car className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>Duration: {service.duration}</span>
                    <span className="font-semibold text-blue-600">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date Selection */}
        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Choose Your Date
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Selected Service:</h3>
              <p className="text-blue-600">{selectedService?.name} - {selectedService?.price}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {availableDates.map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateSelect(format(date, 'yyyy-MM-dd'))}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-center"
                >
                  <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">
                    {format(date, 'EEEE')}
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {format(date, 'MMM d')}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Time Selection */}
        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Select Your Time
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Appointment Details:</h3>
              <p className="text-blue-600">{selectedService?.name} on {format(new Date(appointmentData.date), 'EEEE, MMMM d, yyyy')}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 text-center"
                >
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-semibold text-gray-900">{time}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Customer Information */}
        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Your Information
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Appointment Summary:</h3>
              <p className="text-blue-600">
                {selectedService?.name} on {format(new Date(appointmentData.date), 'EEEE, MMMM d, yyyy')} at {appointmentData.time}
              </p>
            </div>
            <form onSubmit={handleCustomerInfoSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={appointmentData.customerInfo.name}
                    onChange={(e) => handleInputChange('customerInfo', 'name', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={appointmentData.customerInfo.email}
                    onChange={(e) => handleInputChange('customerInfo', 'email', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={appointmentData.customerInfo.phone}
                  onChange={(e) => handleInputChange('customerInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                  <input
                    type="text"
                    required
                    value={appointmentData.customerInfo.vehicle.year}
                    onChange={(e) => handleInputChange('vehicle', 'year', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Make *</label>
                  <input
                    type="text"
                    required
                    value={appointmentData.customerInfo.vehicle.make}
                    onChange={(e) => handleInputChange('vehicle', 'make', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                  <input
                    type="text"
                    required
                    value={appointmentData.customerInfo.vehicle.model}
                    onChange={(e) => handleInputChange('vehicle', 'model', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mileage</label>
                  <input
                    type="text"
                    value={appointmentData.customerInfo.vehicle.mileage}
                    onChange={(e) => handleInputChange('vehicle', 'mileage', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  value={appointmentData.notes}
                  onChange={(e) => handleInputChange('', 'notes', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe any specific issues or concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Continue to Confirmation
              </button>
            </form>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Confirm Your Appointment
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Details</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Service:</span> {selectedService?.name}</p>
                  <p><span className="font-medium">Date:</span> {format(new Date(appointmentData.date), 'EEEE, MMMM d, yyyy')}</p>
                  <p><span className="font-medium">Time:</span> {appointmentData.time}</p>
                  <p><span className="font-medium">Estimated Price:</span> {selectedService?.price}</p>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {appointmentData.customerInfo.name}</p>
                  <p><span className="font-medium">Email:</span> {appointmentData.customerInfo.email}</p>
                  <p><span className="font-medium">Phone:</span> {appointmentData.customerInfo.phone}</p>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Vehicle:</span> {appointmentData.customerInfo.vehicle.year} {appointmentData.customerInfo.vehicle.make} {appointmentData.customerInfo.vehicle.model}</p>
                  {appointmentData.customerInfo.vehicle.mileage && (
                    <p><span className="font-medium">Mileage:</span> {appointmentData.customerInfo.vehicle.mileage}</p>
                  )}
                </div>
              </div>

              {appointmentData.notes && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Notes</h3>
                  <p className="text-gray-600">{appointmentData.notes}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
                >
                  Back to Edit
                </button>
                <button
                  onClick={confirmAppointment}
                  className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;