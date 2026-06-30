export interface InvestOpportunity {
  id: string;
  country: string;
  flag: string;
  propertiesCount: string;
  avgRoi: string;
  startingPrice: string;
  image: string;
}

export interface AgencyPartner {
  id: string;
  name: string;
  country: string;
  flag: string;
  rating: number;
  propertiesCount: string;
  logoText: string;
}

export const INVESTMENT_OPPORTUNITIES: InvestOpportunity[] = [
  { id: 'io-1', country: 'Japan', flag: '🇯🇵', propertiesCount: '3,892 Properties', avgRoi: '8.7%', startingPrice: '$120,000 USD', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-2', country: 'Sri Lanka', flag: '🇱🇰', propertiesCount: '2,456 Properties', avgRoi: '9.2%', startingPrice: '$90,000 USD', image: 'https://images.unsplash.com/photo-1588598126284-a14df9cfbd1f?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-3', country: 'UAE', flag: '🇦🇪', propertiesCount: '5,102 Properties', avgRoi: '7.8%', startingPrice: '$200,000 USD', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-4', country: 'Thailand', flag: '🇹🇭', propertiesCount: '1,892 Properties', avgRoi: '8.1%', startingPrice: '$110,000 USD', image: 'https://images.unsplash.com/photo-1528181304800-2f1258bb9f35?w=600&auto=format&fit=crop&q=80' },
  { id: 'io-5', country: 'USA', flag: '🇺🇸', propertiesCount: '12,340 Properties', avgRoi: '6.9%', startingPrice: '$250,000 USD', image: 'https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?w=600&auto=format&fit=crop&q=80' }
];

export const AGENCIES: AgencyPartner[] = [
  { id: 'a-1', name: "Sotheby's Realty", country: 'Japan', flag: '🇯🇵', rating: 4.8, propertiesCount: '320+ Properties', logoText: 'List Sotheby\'s' },
  { id: 'a-2', name: 'LankaPropertyWeb', country: 'Sri Lanka', flag: '🇱🇰', rating: 4.7, propertiesCount: '380+ Properties', logoText: 'LankaPropertyWeb' },
  { id: 'a-3', name: 'ERA Real Estate', country: 'UAE', flag: '🇦🇪', rating: 4.6, propertiesCount: '450+ Properties', logoText: 'ERA' },
  { id: 'a-4', name: 'CBRE Group', country: 'USA', flag: '🇺🇸', rating: 4.8, propertiesCount: '1,250+ Properties', logoText: 'CBRE' },
  { id: 'a-5', name: 'RE/MAX Thailand', country: 'Thailand', flag: '🇹🇭', rating: 4.6, propertiesCount: '290+ Properties', logoText: 'RE/MAX' },
  { id: 'a-6', name: 'Coldwell Banker', country: 'Singapore', flag: '🇸🇬', rating: 4.7, propertiesCount: '310+ Properties', logoText: 'Coldwell Banker' }
];

export const MARKET_CHART_DATA = [
  { year: '2024', height: 'h-12' },
  { year: '2025', height: 'h-16' },
  { year: '2026', height: 'h-24' },
  { year: '2027', height: 'h-28' },
  { year: '2028', height: 'h-36' },
  { year: '2029', height: 'h-44' }
];      