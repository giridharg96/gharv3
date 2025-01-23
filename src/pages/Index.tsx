import { Navbar } from "@/components/Navbar";
import { RoomCard } from "@/components/RoomCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function Index() {
  const [featuredRooms, setFeaturedRooms] = useState([
    {
      id: 1,
      title: "Modern Studio near Tech Hub",
      location: JSON.stringify({ city: "San Francisco, CA" }),
      price_per_month: 2000,
      stay_length: "3-6 months",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 2,
      title: "Cozy Room in Downtown",
      location: JSON.stringify({ city: "Seattle, WA" }),
      price_per_month: 1500,
      stay_length: "3-12 months",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    },
    {
      id: 3,
      title: "Shared Apartment near Campus",
      location: JSON.stringify({ city: "Boston, MA" }),
      price_per_month: 1200,
      stay_length: "3-6 months",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
    }
  ]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineering Intern",
      company: "Google",
      quote: "Found my perfect apartment through StayIntern. The process was smooth and the location is perfect!",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "Product Management Intern",
      company: "Meta",
      quote: "Great platform for interns! Found roommates and a great place within days.",
      image: "/placeholder.svg",
    },
    {
      name: "Emily Davis",
      role: "Data Science Intern",
      company: "Amazon",
      quote: "The verified listings gave me peace of mind when booking from another state.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Find Your Perfect Intern Housing
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with other interns, find housing near your workplace, and make the most of your internship experience.
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 border rounded-md p-3">
                <MapPin className="text-primary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-2 border rounded-md p-3">
                <Calendar className="text-primary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Duration"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <div className="flex items-center gap-2 border rounded-md p-3">
                <DollarSign className="text-primary h-5 w-5" />
                <input
                  type="text"
                  placeholder="Budget"
                  className="w-full outline-none bg-transparent"
                />
              </div>
              <Button className="w-full h-12">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Listings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRooms.map((room: any) => (
              <RoomCard
                key={room.id}
                title={room.title}
                location={JSON.parse(room.location).city}
                price={`$${room.price_per_month}/month`}
                duration={room.stay_length}
                image={room.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What Interns Say */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What Interns Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Room?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of interns who found their perfect housing through our platform.
          </p>
          <Button size="lg" className="h-12 px-8">
            Get Started
          </Button>
        </div>
      </section>
    </div>
  );
}