"use client"

import { Suspense, useRef } from "react"
import { ScanIcon, PinIcon as PayIcon, RecycleIcon as RefillIcon, ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"

const VendingMachine3D = dynamic(() => import("./VendingMachine3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center">Loading 3D Vending Machine...</div>
  ),
})

export default function HowItWorks() {
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="how-it-works" className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-1 lg:order-1 w-full h-[400px] lg:h-[600px] relative">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">Loading 3D Vending Machine...</div>
              }
            >
              <VendingMachine3D className="w-full h-full" />
            </Suspense>
            <Button
              className="block lg:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
              onClick={scrollToContent}
              aria-label="Scroll to content"
            >
              <ChevronDown className="mr-2 h-4 w-4" />
              Learn More
            </Button>
          </div>
          <div ref={contentRef} className="space-y-8 order-2 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                <ScanIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Scan</h3>
                <p className="text-muted-foreground">
                  Use your smartphone to scan the QR code displayed on the vending machine's screen. This initiates the
                  refill process and connects you to our secure payment system.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                <PayIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pay</h3>
                <p className="text-muted-foreground">
                  Select your desired product and quantity through our user-friendly interface. Complete the payment
                  using your preferred method - credit card, mobile wallet, or EcoSuds account balance.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                <RefillIcon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Refill</h3>
                <p className="text-muted-foreground">
                  Once payment is confirmed, place your container under the appropriate nozzle. The machine will
                  dispense your chosen product with precision, ensuring a clean and efficient refill experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

