import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1633860486128-cdc6e43497fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZHJpbmtzJTIwY29ja3RhaWxzJTIwZWxlZ2FudCUyMGV2ZW50fGVufDF8fHx8MTc2NTg4NDYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Local drinks and snacks at elegant event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-500/90 rounded-full">
            <p className="text-sm text-white">Premium Ghanaian Catering Services</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Bringing Authentic Ghanaian Refreshment to Every Occasion
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Local Drinks • Snacks • Fruit Juices for Weddings, Corporate & Social Events
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-6 text-lg group"
          >
            Get a Quote
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
