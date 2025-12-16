import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Akosua Mensah',
    role: 'Bride',
    image: 'https://images.unsplash.com/photo-1575433287483-8ec588f72417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHJlc3RhdXJhbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2NTg4NDYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Local Bar 360 GH made our wedding reception absolutely perfect! The palm wine and sobolo were authentic and delicious. Our guests couldn\'t stop talking about the excellent service.'
  },
  {
    name: 'Kwame Boateng',
    role: 'Corporate Event Manager',
    image: 'https://images.unsplash.com/photo-1575433287483-8ec588f72417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHJlc3RhdXJhbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2NTg4NDYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Professional, reliable, and exceptional quality. They handled our company\'s annual celebration with such elegance. The local drinks were a huge hit with international clients!'
  },
  {
    name: 'Ama Darko',
    role: 'Family Event Host',
    image: 'https://images.unsplash.com/photo-1575433287483-8ec588f72417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHJlc3RhdXJhbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2NTg4NDYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'From the first consultation to the event day, everything was seamless. The team understood exactly what we wanted and delivered beyond expectations. Highly recommend!'
  }
];

export function Testimonials() {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-amber-100 rounded-full">
            <p className="text-sm text-amber-800">Testimonials</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who've experienced our service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
