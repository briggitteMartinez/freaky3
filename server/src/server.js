import express from 'express';

const port = 8000;

const app = express();

app.get('/products', (req, res) => {    
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 }, 
    { id: 2, name: 'Product 2', price: 20.99 },
    { id: 3, name: 'Product 3', price: 30.99 },
    { id: 4, name: 'Product 4', price: 40.99 },
    { id: 5, name: 'Product 5', price: 50.99 },
    { id: 6, name: 'Product 6', price: 60.99 },
    { id: 7, name: 'Product 7', price: 70.99 },
    { id: 8, name: 'Product 8', price: 80.99 },
    { id: 9, name: 'Product 9', price: 90.99 },
    { id: 10, name: 'Product 10', price: 100.99 }];
  res.json(products);   
}); 

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const products = [
        { id: 1, name: 'Product 1', price: 10.99 }, 
        { id: 2, name: 'Product 2', price: 20.99 },
        { id: 3, name: 'Product 3', price: 30.99 },
        { id: 4, name: 'Product 4', price: 40.99 },
        { id: 5, name: 'Product 5', price: 50.99 },
        { id: 6, name: 'Product 6', price: 60.99 },
        { id: 7, name: 'Product 7', price: 70.99 },
        { id: 8, name: 'Product 8', price: 80.99 },
        { id: 9, name: 'Product 9', price: 90.99 },
        { id: 10, name: 'Product 10', price: 100.99 }];
    
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