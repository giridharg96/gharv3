import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Building2, HomeIcon } from "lucide-react";

export function Navbar() {
  const [session, setSession] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <nav className="fixed w-full top-0 z-[9999] bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <div className="relative">
            <Building2 className="h-6 w-6 text-primary" />
            <HomeIcon className="h-3 w-3 text-blue-600 absolute -bottom-1 -right-1" />
          </div>
          <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 text-transparent bg-clip-text">
            StayIntern
          </span>
        </Link>
        <div className="flex gap-4">
          <Link to="/about" className="hover:text-primary">About Us</Link>
          <Link to="/rooms" className="hover:text-primary">Find Rooms</Link>
          <Link to="/list-property" className="hover:text-primary">List Property</Link>
          <Link to="/channels" className="hover:text-primary">Channels</Link>
          {session ? (
            <button onClick={() => supabase.auth.signOut()} className="hover:text-primary">Sign Out</button>
          ) : (
            <Link to="/auth" className="hover:text-primary">Sign In</Link>
          )}
        </div>
      </div>
    </nav>
  );
}