import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Home } from "lucide-react";

export function Navbar() {
  const [session, setSession] = useState<any>(null);

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
    <nav className="fixed w-full top-0 z-[100] bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center gap-2 hover:text-primary transition-colors relative z-[101]"
        >
          <Home className="h-5 w-5" />
          StayIntern
        </Link>
        <div className="flex gap-4">
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