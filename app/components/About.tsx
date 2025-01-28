export default function About() {
  return (
    <section id="about" className="pt-4 pb-6 overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionizing Refill Solutions</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            EcoSuds is leading the way in sustainable vending solutions, making it easier than ever to reduce plastic
            waste while accessing premium products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="w-full max-w-md mx-auto aspect-square relative overflow-hidden rounded-lg shadow-xl">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20241209_092936%20con-KssRteuFOFqY4rcNnIA0TCURGkyz0m.webm"
              className="w-full h-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to reducing single-use plastic waste by providing convenient refill solutions in
                high-traffic locations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Smart Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Our machines are equipped with IoT sensors and smart dispensing technology for precise and efficient
                refills.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with premium brands to ensure you get the highest quality products in every refill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

