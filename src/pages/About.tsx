import { Navbar } from "@/components/Navbar";
import { Building2, Users, Heart, Home, Briefcase, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Manifesto Section */}
        <section className="px-4 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Our Mission
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Where Interns Stay in Turns,
              <br />
              Stories Continue
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At StayIntern, we believe in the power of shared experiences. Our platform connects 
              each generation of interns with comfortable, pre-vetted housing passed down through 
              the tech community. More than just a place to stay, it's a legacy of support where 
              today's residents become tomorrow's hosts, creating an ever-growing network of 
              tech professionals helping each other thrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                From Interns, For Interns
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Community-Driven Housing
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Tech Hub Network
              </span>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community First</h3>
                <p className="text-gray-600">
                  We're creating more than just a housing platform - we're building a 
                  community where interns can connect, share experiences, and support 
                  each other.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified Housing</h3>
                <p className="text-gray-600">
                  Every listing is verified and curated specifically for interns, 
                  ensuring safe, convenient, and tech-friendly accommodations near 
                  major tech companies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Intern-Centric</h3>
                <p className="text-gray-600">
                  Built by former interns who understand the challenges, our platform 
                  prioritizes the unique needs of tech interns and early-career 
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 mb-16 bg-white py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-gray-600">Happy Interns</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Tech Hubs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Verified Listings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Partner Companies</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We envision a future where housing is never a barrier to pursuing your 
              dream internship. StayIntern isn't just a platform—it's the foundation 
              for a community where interns feel supported, connected, and empowered 
              to focus on what matters most: launching their tech careers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="h-5 w-5 text-primary" />
                <span>Global Community</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="h-5 w-5 text-primary" />
                <span>Career Growth</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Home className="h-5 w-5 text-primary" />
                <span>Safe Housing</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 