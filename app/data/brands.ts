export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  description: string;
  features: string[];
}

const brandsData: Omit<Brand, 'id' | 'rating'>[] = [
  {
    name: "PMU",
    logo: "/logos/pmu.png",
    bonus: "100% jusqu'à 85€",
    description: "Offre mise en avant",
    features: ["Leader français des paris hippiques", "Expérience de plus de 90 ans"],
    url: "https://pmu.fr/register?clickid=",
    isMobile: true,
    votes: 5469,
  }
];

export const brands: Brand[] = brandsData.map((brand) => ({
  ...brand,
  id: brand.name.toLowerCase().replace(/\s+/g, '-'),
  rating: 9.9,
}));
