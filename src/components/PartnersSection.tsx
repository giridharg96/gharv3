interface PartnerLogo {
  name: string;
  logo: string;
}

const partners: PartnerLogo[] = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
  },
  {
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  }
];

export function PartnersSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Partnering with Industry Leaders
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We collaborate with top tech companies to provide verified housing options for their interns and new hires
        </p>
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