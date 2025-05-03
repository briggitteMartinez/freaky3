export interface Product {
  id?: number;   // Unique identifier for the product
  name: string; // Name of the product 
  slug: string; // URL-friendly version of the product name
  description: string; // Description of the product
  sku: string; // Unique identifier for inventory management
  image_url: string; // URL of the product image
  price: number; // Price of the product
  brand: string; // Brand of the product
  };                