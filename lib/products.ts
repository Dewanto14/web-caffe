export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export const PRODUCTS: Product[] = [
  { id: 'gayo-200g', name: 'Gayo Wine Process · 200g', description: 'Berry, wine, dark chocolate.', priceInCents: 145000 },
  { id: 'gayo-500g', name: 'Gayo Wine Process · 500g', description: 'Berry, wine, dark chocolate.', priceInCents: 315000 },
  { id: 'kintamani-200g', name: 'Kintamani Natural · 200g', description: 'Citrus, floral, brown sugar.', priceInCents: 155000 },
  { id: 'kintamani-500g', name: 'Kintamani Natural · 500g', description: 'Citrus, floral, brown sugar.', priceInCents: 335000 },
  { id: 'house-200g', name: 'Budi House Blend · 200g', description: 'Nutty, cocoa, caramel.', priceInCents: 135000 },
  { id: 'house-500g', name: 'Budi House Blend · 500g', description: 'Nutty, cocoa, caramel.', priceInCents: 285000 },
  { id: 'gayo-5kg', name: 'Gayo Wine Process · 5kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 2700000 },
  { id: 'gayo-10kg', name: 'Gayo Wine Process · 10kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 5000000 },
  { id: 'gayo-20kg', name: 'Gayo Wine Process · 20kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 9200000 },
  { id: 'kintamani-5kg', name: 'Kintamani Natural · 5kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 2850000 },
  { id: 'kintamani-10kg', name: 'Kintamani Natural · 10kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 5300000 },
  { id: 'kintamani-20kg', name: 'Kintamani Natural · 20kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 9800000 },
  { id: 'house-5kg', name: 'Budi House Blend · 5kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 2350000 },
  { id: 'house-10kg', name: 'Budi House Blend · 10kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 4350000 },
  { id: 'house-20kg', name: 'Budi House Blend · 20kg', description: 'Bulk specialty beans for cafe and hospitality.', priceInCents: 8000000 },
]
