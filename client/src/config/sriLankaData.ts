export interface PropertyCard {
  id: string;
  badge: string;
  title: string;
  location: string;
  price: string;
  specs: string[];
  image: string;
}

export interface ProjectCard {
  id: string;
  isFeatured?: boolean;
  title: string;
  location: string;
  type: string;
  roi: string;
  minInvestment: string;
  image: string;
}

export interface LocationChip {
  name: string;
  tag: string;
  avgPrice: string;
  image: string;
}

export const SRI_LANKA_PROPERTIES: PropertyCard[] = [
  { id: 'slp-1', badge: 'Luxury Apartment', title: 'Colombo Skyline Residence', location: 'Colombo 02', price: '$450,000 USD', specs: ['🛏️ 3 Beds', '🛁 3 Baths', '📐 1,650 sqft'], image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80' },
  { id: 'slp-2', badge: 'Villa', title: 'Oceanfront Villa', location: 'Galle, Unawatuna', price: '$780,000 USD', specs: ['🛏️ 4 Beds', '🛁 4 Baths', '📐 2,800 sqft'], image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80' },
  { id: 'slp-3', badge: 'House', title: 'Modern Family Home', location: 'Kaduwela, Colombo', price: '$155,000 USD', specs: ['🛏️ 3 Beds', '🛁 2 Baths', '📐 1,200 sqft'], image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=80' },
  { id: 'slp-4', badge: 'Land', title: 'Seaside Land', location: 'Tangalle', price: '$125,000 USD', specs: ['📐 50 Perches'], image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80' },
  { id: 'slp-5', badge: 'Commercial', title: 'Commercial Building', location: 'Colombo 03', price: '$1,250,000 USD', specs: ['📐 10,000 sqft'], image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80' },
  { id: 'slp-6', badge: 'Apartment', title: 'Luxury Apartment', location: 'Negombo', price: '$210,000 USD', specs: ['🛏️ 2 Beds', '🛁 2 Baths', '📐 1,050 sqft'], image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=80' }
];

export const SRI_LANKA_PROJECTS: ProjectCard[] = [
  { id: 'slj-1', isFeatured: true, title: 'Port City Colombo', location: 'Colombo', type: 'Mixed-Use Development', roi: '8% - 12%', minInvestment: '$25,000 USD', image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=600&auto=format&fit=crop&q=80' },
  { id: 'slj-2', title: 'New Galle Marina', location: 'Galle', type: 'Luxury Marina & Residences', roi: '7% - 11%', minInvestment: '$30,000 USD', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80' },
  { id: 'slj-3', title: 'Mirigama Industrial Zone', location: 'Mirigama', type: 'Industrial & Logistics Park', roi: '9% - 14%', minInvestment: '$20,000 USD', image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600&auto=format&fit=crop&q=80' },
  { id: 'slj-4', title: 'Kandy City Center', location: 'Kandy', type: 'Retail & Hotel Complex', roi: '7% - 10%', minInvestment: '$15,000 USD', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80' },
  { id: 'slj-5', title: 'Bentota Beach Resort', location: 'Bentota', type: 'Beach Resort & Spa', roi: '8% - 13%', minInvestment: '$25,000 USD', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&auto=format&fit=crop&q=80' }
];

export const TOP_LOCATIONS: LocationChip[] = [
  { name: 'Colombo', tag: 'Commercial Capital', avgPrice: '$1,800/sqft', image: 'https://images.unsplash.com/photo-1568849676085-51415703900f?w=400' },
  { name: 'Galle', tag: 'Heritage & Tourism Hub', avgPrice: '$1,200/sqft', image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400' },
  { name: 'Kandy', tag: 'Cultural City', avgPrice: '$950/sqft', image: 'https://images.unsplash.com/photo-1588598126284-a14df9cfbd1f?w=400' },
  { name: 'Negombo', tag: 'Coastal Living', avgPrice: '$900/sqft', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400' },
  { name: 'Jaffna', tag: 'Emerging Market', avgPrice: '$750/sqft', image: 'https://images.unsplash.com/photo-1625736314815-56fa0842e472?w=400' },
  { name: 'Batticaloa', tag: 'High Growth Potential', avgPrice: '$600/sqft', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400' }
];