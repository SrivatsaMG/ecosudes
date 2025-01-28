import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Interested in installing our vending machines at your location? 
            Let's discuss how we can work together.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form action="https://formspree.io/f/mbllbonw" method="POST" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input type="text" name="name" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input type="email" name="email" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <Input type="text" name="subject" placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <Textarea 
                name="message"
                placeholder="Tell us about your requirements..." 
                className="min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

