import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { RoomCard } from "@/components/RoomCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Calendar, DollarSign, Search } from "lucide-react";

const Rooms = () => {
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const rooms = [
    {
      id: "1",
      title: "Modern Studio near PayPal Office",
      location: "Austin, TX",
      price_per_month: 1200,
      stay_length: "3 months",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      description: "Bright and modern studio apartment with floor-to-ceiling windows and contemporary furnishings",
      roommate: {
        name: "Alex",
        occupation: "Software Engineer at PayPal",
        interests: ["Tech", "Hiking", "Photography"],
        age: 25
      }
    },
    {
      id: "2",
      title: "Cozy Room in Tech District",
      location: "San Francisco, CA",
      price_per_month: 2000,
      stay_length: "6 months",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.1&auto=format&fit=crop&w=2340&q=80",
      description: "Stylish room in a shared apartment with a dedicated workspace and city views",
      roommate: {
        name: "Sarah",
        occupation: "Product Manager at Meta",
        interests: ["Yoga", "Cooking", "Startups"],
        age: 27
      }
    },
    {
      id: "3",
      title: "Shared Apartment near Google",
      location: "Mountain View, CA",
      price_per_month: 1500,
      stay_length: "3 months",
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.1&auto=format&fit=crop&w=2340&q=80",
      description: "Modern apartment with a spacious common area and fully equipped kitchen",
      roommate: {
        name: "Mike",
        occupation: "Software Engineer at Google",
        interests: ["Gaming", "Basketball", "AI"],
        age: 24
      }
    },
    {
      id: "4",
      title: "Downtown Loft near Meta",
      location: "Seattle, WA",
      price_per_month: 1800,
      stay_length: "4 months",
      image: "/placeholder.svg",
      description: "Stylish loft in the heart of the city with stunning views",
      roommate: {
        name: "Emily",
        occupation: "Data Scientist at Meta",
        interests: ["Reading", "Traveling", "Art"],
        age: 26
      }
    },
    {
      id: "5",
      title: "Student Housing near Microsoft",
      location: "Redmond, WA",
      price_per_month: 1300,
      stay_length: "6 months",
      image: "/placeholder.svg",
      description: "Affordable student housing with a vibrant community",
      roommate: {
        name: "Daniel",
        occupation: "Student at University of Washington",
        interests: ["Sports", "Music", "Technology"],
        age: 20
      }
    },
    {
      id: "6",
      title: "Tech Hub Apartment",
      location: "San Jose, CA",
      price_per_month: 1700,
      stay_length: "3 months",
      image: "/placeholder.svg",
      description: "Modern apartment in the heart of Silicon Valley",
      roommate: {
        name: "Olivia",
        occupation: "Software Developer at Google",
        interests: ["Tech", "Gaming", "Hiking"],
        age: 23
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Find Your Perfect Room</h1>
          
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 border rounded-md p-3">
              <MapPin className="text-primary h-5 w-5" />
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border-0 focus-visible:ring-0"
              />
            </div>
            
            <div className="flex items-center gap-2 border rounded-md p-3">
              <Calendar className="text-primary h-5 w-5" />
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="border-0">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="4">4 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2 border rounded-md p-3">
              <DollarSign className="text-primary h-5 w-5" />
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="border-0">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000-1500">$1000 - $1500</SelectItem>
                  <SelectItem value="1500-2000">$1500 - $2000</SelectItem>
                  <SelectItem value="2000+">$2000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              id={room.id}
              title={room.title}
              location={room.location}
              price={`$${room.price_per_month}/month`}
              duration={`${room.stay_length}`}
              image={room.image}
              description={room.description}
              roommate={room.roommate}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Rooms;