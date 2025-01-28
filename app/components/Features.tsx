import { Leaf, Smartphone, MapPin, CreditCard, BarChart, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: 'Eco-Friendly',
    description: 'Reduce plastic waste with our refill solutions'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    title: 'Smart App',
    description: 'Control and monitor your refills from your phone'
  },
  {
    icon: <MapPin className="h-8 w-8 text-green-600" />,
    title: 'Multiple Locations',
    description: 'Find our machines in convenient locations'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: 'Easy Payments',
    description: 'Multiple payment options for your convenience'
  },
  {
    icon: <BarChart className="h-8 w-8 text-green-600" />,
    title: 'Usage Analytics',
    description: 'Track your impact on the environment'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-green-600" />,
    title: 'Regular Refills',
    description: 'Subscribe for automatic refill credits'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Smart Features for Smart Refills
          </h2>
          <p className="text-xl text-gray-600">
            Our vending machines are packed with features to make refilling easy, 
            efficient, and environmentally friendly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

