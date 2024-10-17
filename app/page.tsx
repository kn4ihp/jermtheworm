"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calendar } from "@/components/ui/calendar"
import { Instagram, MapPin, Scissors, Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Example availability data (you would typically fetch this from a backend)
  const availableDates = [
    new Date(2024, 9, 15),
    new Date(2024, 9, 16),
    new Date(2024, 9, 18),
    new Date(2024, 9, 20),
    new Date(2024, 9, 22),
    new Date(2024, 9, 25),
  ]

  return (
    <div className="relative min-h-screen bg-[#006BB6]/90 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            //"url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          opacity: 0.2,
        }}
      />
      <div className="relative z-10">
        <header className="bg-gradient-to-r from-[#006BB6] to-[#F58426] py-6">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Jerm The Worm</h1>
              <div className="flex space-x-4">
                <a href="#services" className="hover:text-[#F58426]">
                  Services
                </a>
                <a href="#gallery" className="hover:text-[#F58426]">
                  Gallery
                </a>
                <a href="#availability" className="hover:text-[#F58426]">
                  Availability
                </a>
                <a href="#booking" className="hover:text-[#F58426]">
                  Book Now
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main>
          <section className="py-20 text-center">
            <h2 className="mb-4 text-5xl font-extrabold">Master Barber Services</h2>
            <p className="mb-8 text-xl">Precision Cuts and Personalized Care to your doorstep</p>
            <Button size="lg" className="bg-[#F58426] hover:bg-[#F58426]/80 text-white">
              Book Your Cut
            </Button>
          </section>

          <section id="services" className="bg-[#006BB6]/80 py-16">
  <div className="container mx-auto px-4">
    <h2 className="mb-8 text-4xl font-bold text-center text-white">Our Services</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="bg-[#F58426]/80 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardContent className="p-8 text-center">
          <Scissors className="mb-4 h-12 w-12 text-white" />
          <h3 className="mb-2 text-2xl font-semibold text-white">Precision Cuts</h3>
          <p className="text-gray-200">Tailored haircuts for every face shape and style preference.</p>
        </CardContent>
      </Card>
      <Card className="bg-[#F58426]/80 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardContent className="p-8 text-center">
          <Star className="mb-4 h-12 w-12 text-white" />
          <h3 className="mb-2 text-2xl font-semibold text-white">VIP Experience</h3>
          <p className="text-gray-200">Luxury grooming with premium products and personalized service.</p>
        </CardContent>
      </Card>
      <Card className="bg-[#F58426]/80 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <CardContent className="p-8 text-center">
          <MapPin className="mb-4 h-12 w-12 text-white" />
          <h3 className="mb-2 text-2xl font-semibold text-white">Mobile Service</h3>
          <p className="text-gray-200">We come to you - at home, on set, or wherever you need us.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

          <section id="gallery" className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold">Style Gallery</h2>
              <Carousel className="mx-auto w-full max-w-xs" opts={{ loop: true }} autoPlay={true} interval={3000}>
                <CarouselContent>
                  {[1, 2, 3, 4, 5].map((index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="bg-[#F58426]/80">
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img
                              src={`/placeholder.svg?height=300&width=300&text=Style+${index}`}
                              alt={`Hairstyle ${index}`}
                              className="rounded-lg object-cover"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </section>

          <section id="availability" className="bg-[#006BB6]/80 py-16">
            <div className="container mx-auto px-4">
              <h2 className="mb-8 text-3xl font-bold text-center">Availability</h2>
              <div className="flex justify-center">
                <Card className="bg-[#F58426]/80">
                  <CardContent className="p-6">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border text-[#006BB6]"
                      modifiers={{
                        available: availableDates,
                      }}
                      modifiersStyles={{
                        available: { backgroundColor: "#006BB6", color: "white" },
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="mt-8 text-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-[#F58426] text-white hover:bg-[#F58426]/80">Check Time Slots</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-[#006BB6] text-white">
                    <DialogHeader>
                      <DialogTitle>Available Time Slots</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <Button variant="outline" className="text-[#006BB6] hover:bg-[#F58426] hover:text-white">9:00 AM - 10:00 AM</Button>
                      <Button variant="outline" className="text-[#006BB6] hover:bg-[#F58426] hover:text-white">11:00 AM - 12:00 PM</Button>
                      <Button variant="outline" className="text-[#006BB6] hover:bg-[#F58426] hover:text-white">2:00 PM - 3:00 PM</Button>
                      <Button variant="outline" className="text-[#006BB6] hover:bg-[#F58426] hover:text-white">4:00 PM - 5:00 PM</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </section>

          <section id="booking" className="bg-gradient-to-r from-[#006BB6] to-[#F58426] py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Step Up Your Style?</h2>
              <p className="mb-8">Stay Sharp- Hit Us Up for a Cut!</p>
              <Button size="lg" variant="secondary" className="bg-white text-[#006BB6] hover:bg-[#F58426] hover:text-white">
                Schedule Now
              </Button>
            </div>
          </section>
        </main>

        <footer className="bg-[#006BB6]/80 py-8">
          <div className="container mx-auto flex items-center justify-between px-4">
            <p>&copy; 2024 Jermtheworm All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F58426]">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}