export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

const brandsData: Omit<Brand, 'id' | 'rating'>[] = [
  {
    name: "Léon Casino",
    logo: "/logos/leon.svg",
    bonus: "100% jusqu'à 500€ + 20 Tours Gratuits",
    url: "https://leon.casino/click?payload=",
    isMobile: true,
    votes: 1245,
  },
  {
    name: "Betclic",
    logo: "/logos/betclic.svg",
    bonus: "Votre premier pari remboursé jusqu'à 100€",
    url: "https://betclic.fr/signup?clickid=",
    isMobile: true,
    votes: 3560,
  },
  {
    name: "Winamax",
    logo: "/logos/winamax.svg",
    bonus: "Dépôt doublé jusqu'à 100€ en Freebets",
    url: "https://winamax.fr/register?subid=",
    isMobile: false,
    votes: 5210,
  },
  {
    name: "Bwin",
    logo: "/logos/bwin.svg",
    bonus: "Bonus de bienvenue jusqu'à 120€",
    url: "https://bwin.fr/promo?visit_id=",
    isMobile: true,
    votes: 2100,
  },
  {
    name: "Unibet",
    logo: "/logos/unibet.svg",
    bonus: "Jusqu'à 150€ offerts sur votre premier pari",
    url: "https://unibet.fr/registration?clickid=",
    isMobile: false,
    votes: 4320,
  },
  {
    name: "PokerStars",
    logo: "/logos/pokerstars.svg",
    bonus: "100% de bonus jusqu'à 100€ sur votre 1er dépôt",
    url: "https://pokerstars.fr/register?payload=",
    isMobile: true,
    votes: 2890,
  }
];

export const brands: Brand[] = brandsData
  .sort((a, b) => b.votes - a.votes)
  .map((brand, index) => ({
    ...brand,
    id: brand.name.toLowerCase().replace(/\s+/g, '-'),
    rating: Number((10 - index * 0.2).toFixed(1)), // Descending ratings
  }));
