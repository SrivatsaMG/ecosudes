import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About EcoSuds</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-xl mb-6">
            EcoSuds is revolutionizing the way we think about household products through our innovative refill vending machines.
          </p>

          <div className="grid gap-8 my-12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                We're on a mission to eliminate single-use plastic waste while making sustainable choices convenient and accessible for everyone.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p>
                We envision a world where refilling is the norm, not the exception. Where every community has easy access to sustainable solutions through our smart vending machines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Environmental Stewardship</li>
                <li>Innovation in Sustainability</li>
                <li>Community Engagement</li>
                <li>Quality and Reliability</li>
              </ul>
            </section>
          </div>

          <div className="bg-muted p-6 rounded-lg my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-muted-foreground">Bottles Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Locations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Happy Users</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

