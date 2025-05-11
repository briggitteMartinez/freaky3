import express from 'express';
import Database from 'better-sqlite3';

const port = 8000;
const app = express();
//Vi vill se sql kommandon som körs, i konsolen
const db = new Database('./db/products.db', { verbose: console.log });


app.use(express.json());

//GET /api/products
app.get('/products', (req, res) => {
    
    // Hämta alla produkter från databasen
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
});

//GET /api/products/:id
app.get('/products/:id', (req, res) => {
    
    // Hämta slug från databasen
    const productId = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    
    res.json(productId);
});
//GET /api/products/:slug
app.get('/products/:slug', (req, res) => {
    
    // Hämta slug från databasen
    const productSlug = db.prepare('SELECT * FROM products WHERE slug = ?').get(req.params.slug);
    
    res.json(productSlug);
});

app.get('/search/:q', (req, res) => {
    const search = db.prepare('SELECT * FROM products WHERE name LIKE ?').all(`%${req.params.q}%`);
    res.json(search);
});

app.post('/products', (req, res) => {
    const product = req.body;
    const insert = db.prepare(`
      INSERT INTO products (name, slug, description, sku, img_url, price, brand)
      VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
    const result = insert.run(product.name, product.slug, product.description, product.sku, product.img_url, product.price, product.brand);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});