import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Smartphone, MapPin, CreditCard, BarChart, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Eco-Friendly Solutions',
    description: 'Our refill stations eliminate the need for single-use plastic containers, significantly reducing plastic waste.'
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Smart App Integration',
    description: 'Control and monitor your refills from your smartphone. Track usage, find locations, and manage payments.'
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: 'Convenient Locations',
    description: 'Find our machines in shopping centers, offices, and public spaces near you.'
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: 'Easy Payments',
    description: 'Support for multiple payment methods including contactless, mobile, and subscription-based options.'
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Usage Analytics',
    description: 'Track your environmental impact and savings through detailed usage analytics.'
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: 'Subscription Options',
    description: 'Save money with our flexible subscription plans for regular refills.'
  }
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-xl text-muted-foreground">
          Discover how EcoSuds is revolutionizing the refill experience with smart technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border bg-card">
            <CardHeader>
              <div className="mb-4">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

