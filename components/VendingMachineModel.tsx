import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with us for any inquiries about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                info@ecosuds.com
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                (123) 456-7890
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                123 Eco Street, Green City, 12345
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action="https://formspree.io/f/mbllbonw" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="subject">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your requirements..." 
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

