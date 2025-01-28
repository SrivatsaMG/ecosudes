export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Benefits of Choosing EcoSuds
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of environmentally conscious consumers and businesses 
            who are making a difference.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              number: 1,
              title: "Reduce Plastic Waste",
              description: "Each refill prevents another plastic bottle from entering the waste stream."
            },
            {
              number: 2,
              title: "Cost Effective",
              description: "Save money by paying only for the product, not the packaging."
            },
            {
              number: 3,
              title: "Premium Quality",
              description: "Access high-quality products from trusted brands."
            },
            {
              number: 4,
              title: "Convenient Locations",
              description: "Find our machines in shopping centers, offices, and public spaces."
            },
            {
              number: 5,
              title: "Track Your Impact",
              description: "Monitor your environmental impact through our smart app."
            },
            {
              number: 6,
              title: "24/7 Availability",
              description: "Access refills whenever you need them, day or night."
            }
          ].map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background shadow-md">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                {benefit.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

