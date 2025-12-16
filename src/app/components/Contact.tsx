import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-amber-100 rounded-full">
            <p className="text-sm text-amber-800">Get In Touch</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Let's Plan Your Perfect Event
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring authentic Ghanaian hospitality to your next event? Contact us today for a quote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Mensah"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+233 XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your event..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Call Us</p>
                      <a href="tel:+233123456789" className="text-gray-900 hover:text-amber-600">
                        +233 XX XXX XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                      <a href="https://wa.me/233123456789" className="text-gray-900 hover:text-amber-600">
                        +233 XX XXX XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <a href="mailto:info@localbar360gh.com" className="text-gray-900 hover:text-amber-600">
                        info@localbar360gh.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="text-gray-900">Accra, Ghana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-green-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl mb-2">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
