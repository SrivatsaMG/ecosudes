'use client'

import { ChefHat, MapPin, User } from 'lucide-react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Contact us for any further questions, possible projects 
            and business partnerships
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                <ChefHat className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Let's have a chat!</h2>
              <p className="text-muted-foreground mb-2">
                Telephone: +91 8892719001
              </p>
              <Link 
                href="mailto:hello@ecorefill.biz" 
                className="text-primary hover:underline"
              >
                hello@ecorefill.biz
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Visit our location</h2>
              <p className="text-muted-foreground text-center">
                B720 Brigade Altamont, Kothanur,<br />
                Bangalore - 560 077, India
              </p>
              <Link 
                href="https://maps.google.com/?q=B720+Brigade+Altamont+Kothanur+Bangalore"
                target="_blank"
                className="mt-4 text-primary hover:underline"
              >
                GET DIRECTIONS
              </Link>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-4">Looking for a career?</h2>
              <Link 
                href="mailto:careers@ecorefill.biz"
                className="text-primary hover:underline"
              >
                careers@ecorefill.biz
              </Link>
            </div>
          </div>

          <div className="w-full h-[500px] bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0374839356727!2d77.63795731482233!3d13.075897990787592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19721a651fd3%3A0x3f3c737840c853c7!2sBrigade%20Altamont!5e0!3m2!1sen!2sin!4v1674558234408!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

