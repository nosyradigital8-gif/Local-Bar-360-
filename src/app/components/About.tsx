export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1 bg-amber-100 rounded-full">
              <p className="text-sm text-amber-800">About Us</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
              Celebrating Ghanaian Taste with Class
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              At Local Bar 360 GH, we celebrate Ghanaian taste with locally made beverages and snacks, served with class and hospitality.
            </p>
            
            <p className="text-gray-600 mb-8">
              We specialize in bringing authentic Ghanaian refreshments to your special events. From traditional palm wine and sobolo to fresh fruit juices and local snacks, we provide a complete bar and catering experience that honors our rich cultural heritage while delivering modern, professional service.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl text-amber-600 mb-2">500+</div>
                <p className="text-gray-600">Events Served</p>
              </div>
              <div>
                <div className="text-3xl text-green-600 mb-2">100%</div>
                <p className="text-gray-600">Local Ingredients</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1758810742443-b82f48355828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZWxlZ2FudCUyMGNhdGVyaW5nfGVufDF8fHx8MTc2NTg4NDYyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Event setup"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1575433287483-8ec588f72417?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHJlc3RhdXJhbnQlMjBzbWlsaW5nfGVufDF8fHx8MTc2NTg4NDYyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy customers"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1713965588378-4771f415f2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNhdGVyaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTg4NDYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bar setup"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1764269720811-d9b6532aba08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwZHJpbmtzJTIwc29jaWFsfGVufDF8fHx8MTc2NTg4NDYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Drinks service"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
