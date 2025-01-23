interface PartnerLogo {
  name: string;
  logo: string;
}

const partners: PartnerLogo[] = [
  {
    name: "Google",
    logo: "/logos/google.svg"
  },
  {
    name: "Meta",
    logo: "/logos/meta.svg"
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.svg"
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg"
  },
  {
    name: "Apple",
    logo: "/logos/apple.svg"
  },
  {
    name: "PayPal",
    logo: "/logos/paypal.svg"
  }
];

export function PartnersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-12">
          Trusted by Interns From Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="w-[120px] h-[60px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-h-[40px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 