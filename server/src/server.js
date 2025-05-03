import express from 'express';

const port = 8000;

const app = express();

app.get('/products', (req, res) => {    
  const products =[
    {
      "id": 1,
      "name": "Dior Addict Lip Glow",
      "slug": "dior-addict-lip-glow",
      "description": "Moisturizing lip balm with subtle color enhancement.",
      "sku": "DIOR-BEAUTY-001",
      "img_url": "https://picsum.photos/seed/1/400/400?grayscale",
      "price": 41.50,
      "brand": "Dior"
    },
    {
      "id": 2,
      "name": "Diorshow Iconic Overcurl Mascara",
      "slug": "diorshow-iconic-overcurl-mascara",
      "description": "Volume mascara for long-lasting curled lashes.",
      "sku": "DIOR-BEAUTY-002",
      "img_url": "https://picsum.photos/seed/2/400/400?grayscale",
      "price": 37.00,
      "brand": "Dior"
    },
    {
      "id": 3,
      "name": "Dior Backstage Foundation",
      "slug": "dior-backstage-foundation",
      "description": "Professional finish foundation with a natural glow.",
      "sku": "DIOR-BEAUTY-003",
      "img_url": "https://picsum.photos/seed/3/400/400?grayscale",
      "price": 51.50,
      "brand": "Dior"
    },
    {
      "id": 4,
      "name": "Dior Forever Skin Glow",
      "slug": "dior-forever-skin-glow",
      "description": "Long-wear foundation with a luminous finish.",
      "sku": "DIOR-BEAUTY-004",
      "img_url": "https://picsum.photos/seed/4/400/400?grayscale",
      "price": 54.50,
      "brand": "Dior"
    },
    {
      "id": 5,
      "name": "Rouge Dior Lipstick",
      "slug": "rouge-dior-lipstick",
      "description": "Highly pigmented lipstick with caring ingredients.",
      "sku": "DIOR-BEAUTY-005",
      "img_url": "https://picsum.photos/seed/5/400/400?grayscale",
      "price": 42.00,
      "brand": "Dior"
    },
    {
      "id": 6,
      "name": "Capture Totale Super Potent Serum",
      "slug": "capture-totale-super-potent-serum",
      "description": "Anti-aging serum with high concentration actives.",
      "sku": "DIOR-BEAUTY-006",
      "img_url": "https://picsum.photos/seed/6/400/400?grayscale",
      "price": 122.50,
      "brand": "Dior"
    },
    {
      "id": 7,
      "name": "Dior Prestige La Crème",
      "slug": "dior-prestige-la-creme",
      "description": "Luxurious facial cream enriched with rose extract.",
      "sku": "DIOR-BEAUTY-007",
      "img_url": "https://picsum.photos/seed/7/400/400?grayscale",
      "price": 297.50,
      "brand": "Dior"
    },
    {
      "id": 8,
      "name": "Dior Lip Maximizer",
      "slug": "dior-lip-maximizer",
      "description": "Plumping lip gloss with mirror shine.",
      "sku": "DIOR-BEAUTY-008",
      "img_url": "https://picsum.photos/seed/8/400/400?grayscale",
      "price": 41.50,
      "brand": "Dior"
    },
    {
      "id": 9,
      "name": "Forever Cushion Powder",
      "slug": "forever-cushion-powder",
      "description": "Lightweight powder with a soft matte finish.",
      "sku": "DIOR-BEAUTY-009",
      "img_url": "https://picsum.photos/seed/9/400/400?grayscale",
      "price": 62.00,
      "brand": "Dior"
    },
    {
      "id": 10,
      "name": "Dior Sauvage Parfum",
      "slug": "dior-sauvage-parfum",
      "description": "Deeper version of the iconic Sauvage fragrance.",
      "sku": "DIOR-BEAUTY-010",
      "img_url": "https://picsum.photos/seed/10/400/400?grayscale",
      "price": 119.50,
      "brand": "Dior"
    },
    {
      "id": 11,
      "name": "Miss Dior Eau de Parfum",
      "slug": "miss-dior-eau-de-parfum",
      "description": "Floral scent with rose, patchouli and vanilla.",
      "sku": "DIOR-BEAUTY-011",
      "img_url": "https://picsum.photos/seed/11/400/400?grayscale",
      "price": 122.00,
      "brand": "Dior"
    },
    {
      "id": 12,
      "name": "Dior Addict Lip Tint",
      "slug": "dior-addict-lip-tint",
      "description": "Long-lasting lip tint with a natural finish.",
      "sku": "DIOR-BEAUTY-012",
      "img_url": "https://picsum.photos/seed/12/400/400?grayscale",
      "price": 39.50,
      "brand": "Dior"
    },
    {
      "id": 13,
      "name": "Backstage Glow Face Palette",
      "slug": "backstage-glow-face-palette",
      "description": "Highlight and blush palette for professional glow.",
      "sku": "DIOR-BEAUTY-013",
      "img_url": "https://picsum.photos/seed/13/400/400?grayscale",
      "price": 56.50,
      "brand": "Dior"
    },
    {
      "id": 14,
      "name": "Forever Natural Bronze",
      "slug": "forever-natural-bronze",
      "description": "Silky bronzing powder for a natural sun-kissed look.",
      "sku": "DIOR-BEAUTY-014",
      "img_url": "https://picsum.photos/seed/14/400/400?grayscale",
      "price": 51.00,
      "brand": "Dior"
    },
    {
      "id": 15,
      "name": "Capture Youth Glow Booster",
      "slug": "capture-youth-glow-booster",
      "description": "Vitamin C serum for radiant and energized skin.",
      "sku": "DIOR-BEAUTY-015",
      "img_url": "https://picsum.photos/seed/15/400/400?grayscale",
      "price": 107.00,
      "brand": "Dior"
    },
    {
      "id": 16,
      "name": "Lip Sugar Scrub",
      "slug": "lip-sugar-scrub",
      "description": "Melting lip scrub for soft, hydrated lips.",
      "sku": "DIOR-BEAUTY-016",
      "img_url": "https://picsum.photos/seed/16/400/400?grayscale",
      "price": 39.50,
      "brand": "Dior"
    },
    {
      "id": 17,
      "name": "Dior Prestige Le Nectar",
      "slug": "dior-prestige-le-nectar",
      "description": "Concentrated anti-aging serum with rose molecules.",
      "sku": "DIOR-BEAUTY-017",
      "img_url": "https://picsum.photos/seed/17/400/400?grayscale",
      "price": 352.00,
      "brand": "Dior"
    },
    {
      "id": 18,
      "name": "Forever Undercover Concealer",
      "slug": "forever-undercover-concealer",
      "description": "Full coverage concealer with 24h wear.",
      "sku": "DIOR-BEAUTY-018",
      "img_url": "https://picsum.photos/seed/18/400/400?grayscale",
      "price": 39.50,
      "brand": "Dior"
    },
    {
      "id": 19,
      "name": "Dior Vernis Nail Lacquer",
      "slug": "dior-vernis-nail-lacquer",
      "description": "High-shine nail polish with gel effect.",
      "sku": "DIOR-BEAUTY-019",
      "img_url": "https://picsum.photos/seed/19/400/400?grayscale",
      "price": 29.50,
      "brand": "Dior"
    },
    {
      "id": 20,
      "name": "Hydra Life Fresh Sorbet Creme",
      "slug": "hydra-life-fresh-sorbet-creme",
      "description": "Hydrating daily gel cream for smooth skin.",
      "sku": "DIOR-BEAUTY-020",
      "img_url": "https://picsum.photos/seed/20/400/400?grayscale",
      "price": 69.00,
      "brand": "Dior"
    }
  ];

  res.json(products);   
}); 

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const products = [
      {
        "id": 1,
        "name": "Dior Addict Lip Glow",
        "slug": "dior-addict-lip-glow",
        "description": "Moisturizing lip balm with subtle color enhancement.",
        "sku": "DIOR-BEAUTY-001",
        "img_url": "https://picsum.photos/seed/1/400/400?grayscale",
        "price": 41.50,
        "brand": "Dior"
      },
      {
        "id": 2,
        "name": "Diorshow Iconic Overcurl Mascara",
        "slug": "diorshow-iconic-overcurl-mascara",
        "description": "Volume mascara for long-lasting curled lashes.",
        "sku": "DIOR-BEAUTY-002",
        "img_url": "https://picsum.photos/seed/2/400/400?grayscale",
        "price": 37.00,
        "brand": "Dior"
      },
      {
        "id": 3,
        "name": "Dior Backstage Foundation",
        "slug": "dior-backstage-foundation",
        "description": "Professional finish foundation with a natural glow.",
        "sku": "DIOR-BEAUTY-003",
        "img_url": "https://picsum.photos/seed/3/400/400?grayscale",
        "price": 51.50,
        "brand": "Dior"
      },
      {
        "id": 4,
        "name": "Dior Forever Skin Glow",
        "slug": "dior-forever-skin-glow",
        "description": "Long-wear foundation with a luminous finish.",
        "sku": "DIOR-BEAUTY-004",
        "img_url": "https://picsum.photos/seed/4/400/400?grayscale",
        "price": 54.50,
        "brand": "Dior"
      },
      {
        "id": 5,
        "name": "Rouge Dior Lipstick",
        "slug": "rouge-dior-lipstick",
        "description": "Highly pigmented lipstick with caring ingredients.",
        "sku": "DIOR-BEAUTY-005",
        "img_url": "https://picsum.photos/seed/5/400/400?grayscale",
        "price": 42.00,
        "brand": "Dior"
      },
      {
        "id": 6,
        "name": "Capture Totale Super Potent Serum",
        "slug": "capture-totale-super-potent-serum",
        "description": "Anti-aging serum with high concentration actives.",
        "sku": "DIOR-BEAUTY-006",
        "img_url": "https://picsum.photos/seed/6/400/400?grayscale",
        "price": 122.50,
        "brand": "Dior"
      },
      {
        "id": 7,
        "name": "Dior Prestige La Crème",
        "slug": "dior-prestige-la-creme",
        "description": "Luxurious facial cream enriched with rose extract.",
        "sku": "DIOR-BEAUTY-007",
        "img_url": "https://picsum.photos/seed/7/400/400?grayscale",
        "price": 297.50,
        "brand": "Dior"
      },
      {
        "id": 8,
        "name": "Dior Lip Maximizer",
        "slug": "dior-lip-maximizer",
        "description": "Plumping lip gloss with mirror shine.",
        "sku": "DIOR-BEAUTY-008",
        "img_url": "https://picsum.photos/seed/8/400/400?grayscale",
        "price": 41.50,
        "brand": "Dior"
      },
      {
        "id": 9,
        "name": "Forever Cushion Powder",
        "slug": "forever-cushion-powder",
        "description": "Lightweight powder with a soft matte finish.",
        "sku": "DIOR-BEAUTY-009",
        "img_url": "https://picsum.photos/seed/9/400/400?grayscale",
        "price": 62.00,
        "brand": "Dior"
      },
      {
        "id": 10,
        "name": "Dior Sauvage Parfum",
        "slug": "dior-sauvage-parfum",
        "description": "Deeper version of the iconic Sauvage fragrance.",
        "sku": "DIOR-BEAUTY-010",
        "img_url": "https://picsum.photos/seed/10/400/400?grayscale",
        "price": 119.50,
        "brand": "Dior"
      },
      {
        "id": 11,
        "name": "Miss Dior Eau de Parfum",
        "slug": "miss-dior-eau-de-parfum",
        "description": "Floral scent with rose, patchouli and vanilla.",
        "sku": "DIOR-BEAUTY-011",
        "img_url": "https://picsum.photos/seed/11/400/400?grayscale",
        "price": 122.00,
        "brand": "Dior"
      },
      {
        "id": 12,
        "name": "Dior Addict Lip Tint",
        "slug": "dior-addict-lip-tint",
        "description": "Long-lasting lip tint with a natural finish.",
        "sku": "DIOR-BEAUTY-012",
        "img_url": "https://picsum.photos/seed/12/400/400?grayscale",
        "price": 39.50,
        "brand": "Dior"
      },
      {
        "id": 13,
        "name": "Backstage Glow Face Palette",
        "slug": "backstage-glow-face-palette",
        "description": "Highlight and blush palette for professional glow.",
        "sku": "DIOR-BEAUTY-013",
        "img_url": "https://picsum.photos/seed/13/400/400?grayscale",
        "price": 56.50,
        "brand": "Dior"
      },
      {
        "id": 14,
        "name": "Forever Natural Bronze",
        "slug": "forever-natural-bronze",
        "description": "Silky bronzing powder for a natural sun-kissed look.",
        "sku": "DIOR-BEAUTY-014",
        "img_url": "https://picsum.photos/seed/14/400/400?grayscale",
        "price": 51.00,
        "brand": "Dior"
      },
      {
        "id": 15,
        "name": "Capture Youth Glow Booster",
        "slug": "capture-youth-glow-booster",
        "description": "Vitamin C serum for radiant and energized skin.",
        "sku": "DIOR-BEAUTY-015",
        "img_url": "https://picsum.photos/seed/15/400/400?grayscale",
        "price": 107.00,
        "brand": "Dior"
      },
      {
        "id": 16,
        "name": "Lip Sugar Scrub",
        "slug": "lip-sugar-scrub",
        "description": "Melting lip scrub for soft, hydrated lips.",
        "sku": "DIOR-BEAUTY-016",
        "img_url": "https://picsum.photos/seed/16/400/400?grayscale",
        "price": 39.50,
        "brand": "Dior"
      },
      {
        "id": 17,
        "name": "Dior Prestige Le Nectar",
        "slug": "dior-prestige-le-nectar",
        "description": "Concentrated anti-aging serum with rose molecules.",
        "sku": "DIOR-BEAUTY-017",
        "img_url": "https://picsum.photos/seed/17/400/400?grayscale",
        "price": 352.00,
        "brand": "Dior"
      },
      {
        "id": 18,
        "name": "Forever Undercover Concealer",
        "slug": "forever-undercover-concealer",
        "description": "Full coverage concealer with 24h wear.",
        "sku": "DIOR-BEAUTY-018",
        "img_url": "https://picsum.photos/seed/18/400/400?grayscale",
        "price": 39.50,
        "brand": "Dior"
      },
      {
        "id": 19,
        "name": "Dior Vernis Nail Lacquer",
        "slug": "dior-vernis-nail-lacquer",
        "description": "High-shine nail polish with gel effect.",
        "sku": "DIOR-BEAUTY-019",
        "img_url": "https://picsum.photos/seed/19/400/400?grayscale",
        "price": 29.50,
        "brand": "Dior"
      },
      {
        "id": 20,
        "name": "Hydra Life Fresh Sorbet Creme",
        "slug": "hydra-life-fresh-sorbet-creme",
        "description": "Hydrating daily gel cream for smooth skin.",
        "sku": "DIOR-BEAUTY-020",
        "img_url": "https://picsum.photos/seed/20/400/400?grayscale",
        "price": 69.00,
        "brand": "Dior"
      }
    ]

    ;
    
        const product = products.find(p => p.id === productId);
    
        if (product) {
        res.json(product);
        } else {
        res.status(404).json({ message: 'Product not found' });
        }
    });    


    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });   