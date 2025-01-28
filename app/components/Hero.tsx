'use client'

import { Button } from '@/components/ui/button'
import VendingMachine from './VendingMachine'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-16 pb-12 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Smart Refill Solutions for a{' '}
              <span className="text-primary">Sustainable</span> Future
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join the revolution in eco-friendly vending with our smart refill stations. 
              Reduce plastic waste while providing convenient access to premium products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              >
                <Link href="/products">
                  Explore Solutions
                </Link>
              </Button>
             
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[600px]">
            <VendingMachine />
          </div>
        </div>
      </div>
    </section>
  )
}

