import { Heart, Briefcase, PartyPopper, Flower2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    title: 'Weddings',
    description: 'Make your special day unforgettable with our authentic Ghanaian beverages and snacks. We bring elegance and tradition to your celebration.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1758810742443-b82f48355828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGNhdGVyaW5nfGVufDF8fHx8MTc2NTg4NDYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-rose-500'
  },
  {
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with professional bar service featuring premium local drinks and refreshments.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1713965588378-4771f415f2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNhdGVyaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTg4NDYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-blue-500'
  },
  {
    title: 'Social Gatherings',
    description: 'From birthday parties to family reunions, we provide the perfect selection of drinks and snacks to keep your guests delighted.',
    icon: PartyPopper,
    image: 'https://images.unsplash.com/photo-1764269720811-d9b6532aba08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwZHJpbmtzJTIwc29jaWFsfGVufDF8fHx8MTc2NTg4NDYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-purple-500'
  },
  {
    title: 'Funerals',
    description: 'We provide dignified and respectful catering services with traditional beverages and refreshments for memorial services.',
    icon: Flower2,
    image: 'https://images.unsplash.com/photo-1644413816296-9533c9d831bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZnVuZXJhbCUyMG1lbW9yaWFsJTIwc2VydmljZXxlbnwxfHx8fDE3NjU4ODQ2MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'bg-gray-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-amber-100 rounded-full">
            <p className="text-sm text-amber-800">Our Services</p>
          </div>
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            Professional Catering for Every Occasion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring authentic Ghanaian hospitality to your event
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${service.color} p-3 rounded-full`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
