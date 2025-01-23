import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Users, Wifi, Home, Car } from "lucide-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface RoomDetail {
  id: string;
  title: string;
  location: string;
  price_per_month: number;
  stay_length: string;
  description: string;
  amenities: string[];
  images: string[];
  roommate: {
    name: string;
    occupation: string;
    interests: string[];
    age: number;
  };
  host: {
    name: string;
    rating: number;
    response_time: string;
  };
}

export default function RoomDetail() {
  const { id } = useParams();
  const [room, setRoom] = useState<RoomDetail | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  // Mock data - replace with actual API call
  useEffect(() => {
    setRoom({
      id: "1",
      title: "Modern Studio near Tech Hub",
      location: "San Francisco, CA",
      price_per_month: 2000,
      stay_length: "3-6 months",
      description: "Beautiful modern studio apartment located in the heart of San Francisco's tech district. Perfect for interns, featuring high-speed internet, modern appliances, and a dedicated workspace.",
      amenities: ["Wifi", "Furnished", "Parking", "Gym", "Laundry", "Air Conditioning"],
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.1&auto=format&fit=crop&w=2340&q=80",
        "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.1&auto=format&fit=crop&w=2340&q=80"
      ],
      roommate: {
        name: "Sarah",
        occupation: "Product Manager at Meta",
        interests: ["Yoga", "Cooking", "Startups"],
        age: 27
      },
      host: {
        name: "Sarah Chen",
        rating: 4.9,
        response_time: "< 24 hours"
      }
    });
  }, [id]);

  if (!room) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Image Gallery */}
      <div className="pt-16">
        <div className="relative h-[60vh] bg-gray-100">
          <img 
            src={room.images[activeImage]} 
            alt={room.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-2 h-2 rounded-full ${
                  activeImage === idx ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{room.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <MapPin className="h-5 w-5" />
              <span>{room.location}</span>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">About this space</h2>
              <p className="text-gray-600 mb-6">{room.description}</p>

              <h3 className="font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-gray-600" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">About your roommate</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-lg">{room.roommate.name}, {room.roommate.age}</h3>
                    <p className="text-gray-600">{room.roommate.occupation}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.roommate.interests.map((interest) => (
                      <span 
                        key={interest}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <div className="text-2xl font-bold text-primary">
                  ${room.price_per_month}
                  <span className="text-sm font-normal text-gray-600">/month</span>
                </div>
                <div className="text-sm text-gray-600">
                  {room.stay_length}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span>Available Now</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>Single Occupancy</span>
                </div>
              </div>

              <Button className="w-full mb-4">
                Contact Host
              </Button>
              <Button variant="outline" className="w-full">
                Save for Later
              </Button>

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <div className="font-semibold">{room.host.name}</div>
                    <div className="text-sm text-gray-600">
                      Response time: {room.host.response_time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 