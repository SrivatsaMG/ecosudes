'use client'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">EcoSuds</h3>
            <p className="text-muted-foreground">
              Smart refill solutions for a sustainable future.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/#about" 
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/#features" 
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  href="/#benefits" 
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#benefits')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="text-muted-foreground hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>B720 Brigade Altamont</li>
              <li>Kothanur,Bangalore - 560 077</li>
              <li>Phone: +91 8892719001</li>
              <li>Email: hello@ecorefill.biz</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 EcoSuds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

