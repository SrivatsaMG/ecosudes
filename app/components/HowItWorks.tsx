import { ScanIcon, PayIcon, RefillIcon } from './Icons'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4">
              <ScanIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scan</h3>
            <p className="text-muted-foreground">Use your smartphone to scan the QR code displayed on the vending machine's screen. This initiates the refill process and connects you to our secure payment system.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4">
              <PayIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pay</h3>
            <p className="text-muted-foreground">Select your desired product and quantity through our user-friendly interface. Complete the payment using your preferred method - credit card, mobile wallet, or EcoSuds account balance.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4">
              <RefillIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Refill</h3>
            <p className="text-muted-foreground">Once payment is confirmed, place your container under the appropriate nozzle. The machine will dispense your chosen product with precision, ensuring a clean and efficient refill experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

