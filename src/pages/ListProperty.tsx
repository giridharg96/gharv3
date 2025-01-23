import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";

export default function ListProperty() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // If not logged in, redirect to auth page
        toast({
          title: "Please sign in first",
          description: "You need to be signed in to list a property",
        });
        navigate("/auth", { state: { returnTo: "/list-property" } });
        return;
      }

      const { error } = await supabase.from("properties").insert({
        title,
        price_per_month: parseInt(price),
        location: JSON.stringify({ city: location }),
        stay_length: duration,
        owner_id: session.user.id
      });

      if (error) throw error;

      toast({
        title: "Property listed successfully!",
      });
      navigate("/rooms");
    } catch (error: any) {
      toast({
        title: "Error listing property",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8">List Your Property</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Cozy Room in Downtown"
                className="h-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Price per Month ($)</label>
              <Input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="1000"
                className="h-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Location (City)</label>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="San Francisco"
                className="h-12"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Stay Length</label>
              <Input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="3 months"
                className="h-12"
                required
              />
            </div>
            <Button type="submit" className="w-full h-12" disabled={loading}>
              {loading ? "Listing..." : "List Property"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}