"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
let products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Ebook', price: 200 },
];
let categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
];
// Products
app.get('/api/products', (req, res) => {
    res.json(products);
});
app.get('/api/products/:id', (req, res) => {
    const productsId = parseInt(req.params.id);
    const product = products.find(product => product.id === productsId);
    if (products) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product not found" });
    }
});
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.put('/api/products/:id', (req, res) => {
    const productsId = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === productsId);
    if (productIndex !== -1) {
        products[productIndex] = Object.assign({ id: productsId }, req.body);
        res.json(products[productIndex]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.status(204).send();
});
// Categories
app.get('/api/categories', (req, res) => {
    res.json(categories);
});
app.get('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(category => category.id === categoryId);
    if (categories) {
        res.json(category);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
});
app.post('/api/categories', (req, res) => {
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;
    categories.push(newCategory);
    res.status(201).json(newCategory);
});
app.put('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(category => category.id === categoryId);
    if (categoryIndex !== -1) {
        categories[categoryIndex] = Object.assign({ id: categoryId }, req.body);
        res.json(categories[categoryIndex]);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
});
app.delete('/api/categories/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(category => category.id !== categoryId);
    res.status(204).send();
});
let productWithCategory = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }
];
app.get('/api/search', (req, res) => {
    const query = req.query.name;
    const searchResult = productWithCategory.find(product => product.name.toLowerCase() === (query === null || query === void 0 ? void 0 : query.toString().toLowerCase()));
    res.json(searchResult);
});
app.get('/api/search/:category/products/', (req, res) => {
    const query = req.query.name;
    const paramCategory = req.params.category;
    const searchResult = productWithCategory.filter(product => product.category.toLowerCase() === paramCategory.toLowerCase() && product.name.toLowerCase() === (query === null || query === void 0 ? void 0 : query.toString().toLowerCase()));
    res.json(searchResult);
});
app.listen(port, () => {
    console.info(`Server is running at <http://localhost:${port}>`);
});
