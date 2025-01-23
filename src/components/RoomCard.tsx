import { MapPin } from "lucide-react";

interface RoomCardProps {
  title: string;
  location: string;
  price: string;
  duration: string;
  image: string;
}

export function RoomCard({ title, location, price, duration, image }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video relative">
        <img 
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-1 text-gray-600 mb-2">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-primary font-semibold">{price}</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}