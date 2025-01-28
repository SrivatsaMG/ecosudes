import { Check } from 'lucide-react'

const benefits = [
  {
    title: "Environmental Impact",
    points: [
      "Reduce plastic waste",
      "Lower carbon footprint",
      "Support sustainable practices",
      "Contribute to cleaner oceans"
    ]
  },
  {
    title: "Cost Savings",
    points: [
      "Pay only for the product",
      "Bulk pricing benefits",
      "Subscription discounts",
      "No packaging costs"
    ]
  },
  {
    title: "Convenience",
    points: [
      "24/7 availability",
      "Multiple locations",
      "Quick refill process",
      "Mobile app integration"
    ]
  },
  {
    title: "Quality Assurance",
    points: [
      "Premium products",
      "Consistent quality",
      "Regular maintenance",
      "Hygienic dispensing"
    ]
  }
]

export default function BenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Benefits</h1>
        <p className="text-xl text-muted-foreground">
          Discover the advantages of choosing EcoSuds for your refill needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-card rounded-lg p-6 border">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              {benefit.title}
            </h2>
            <ul className="space-y-3">
              {benefit.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto bg-muted rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Join the Sustainable Revolution
        </h2>
        <p className="text-center text-muted-foreground">
          By choosing EcoSuds, you're not just making a smart choice for your household – 
          you're contributing to a more sustainable future for our planet.
        </p>
      </div>
    </div>
  )
}

