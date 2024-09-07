import express, {Request, Response} from 'express';

const app = express();
const port = 4000;

app.use(express.json());

interface Products {
    id: number,
    name: string,
    price: number,
}

interface Category {
    id: number,
    name: string,
}

let products: Array<Products> = [
    {id: 1, name: 'Laptop', price: 1000},
    {id: 2, name: 'Phone', price: 500},
    {id: 3, name: 'Ebook', price: 200},
];

let categories: Array<Category> = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Perabotan' },
];


// Products

app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
});

app.get('/api/products/:id', (req: Request, res: Response) => {
    const productsId = parseInt(req.params.id);
    const product = products.find(product => product.id === productsId);

    if(products) {
        res.json(product);
    } else {
        res.status(404).json({message: "Product not found"});
    }
});

app.post('/api/products', (req: Request, res: Response) => {
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1;

    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req: Request, res: Response) => {
    const productsId = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === productsId);

    if(productIndex !== -1) {
        products[productIndex] = {id: productsId, ...req.body};
        res.json(products[productIndex]);
    } else {
        res.status(404).json({message: 'Product not found'});
    }
});

app.delete('/api/products/:id', (req: Request, res: Response) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);

    res.status(204).send();
});


// Categories

app.get('/api/categories', (req: Request, res: Response) => {
    res.json(categories);
});

app.get('/api/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(category => category.id === categoryId);

    if(categories) {
        res.json(category);
    } else {
        res.status(404).json({message: 'Category not found'});
    }
});

app.post('/api/categories', (req: Request, res: Response) => {
    const newCategory = req.body;
    newCategory.id = categories.length ? categories[categories.length - 1].id + 1 : 1;

    categories.push(newCategory);
    res.status(201).json(newCategory);
});

app.put('/api/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(category => category.id === categoryId);

    if(categoryIndex !== -1) {
        categories[categoryIndex] = {id: categoryId, ...req.body};
        res.json(categories[categoryIndex]);
    } else {
        res.status(404).json({message: 'Category not found'});
    }
});

app.delete('/api/categories/:id', (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    categories = categories.filter(category => category.id !== categoryId);
    res.status(204).send();
});


// Product with Category.

interface ProductWithCategory {
    id: number,
    name: string,
    category: string,
}

let productWithCategory: Array<ProductWithCategory> = [
    { id: 1, name: 'Laptop', category: 'Elektronik' },
    { id: 2, name: 'Meja', category: 'Perabotan' }];


app.get('/api/search', (req: Request, res: Response) => {
    const query = req.query.name;
    const searchResult = productWithCategory.find(product => product.name.toLowerCase() === query?.toString().toLowerCase());

    res.json(searchResult);
});

app.get('/api/search/:category/products/', (req: Request, res: Response) => {
    const query = req.query.name;
    const paramCategory = req.params.category;

    const searchResult = productWithCategory.filter(product => product.category.toLowerCase() === paramCategory.toLowerCase() && product.name.toLowerCase() === query?.toString().toLowerCase());
    res.json(searchResult);
})



app.listen(port, () => {
    console.info(`Server is running at <http://localhost:${port}>`);
});
