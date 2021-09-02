import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Leatile',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
        ],
    products:[
        {
           
            name: 'Converse Kim Jones',
            category: 'Hi-Top',
            image: '/images/p1.webp',
            price: 1499.95,
            countInStock: 9,
            brand: 'Converse',
            rating: 5,
            numReviews: 22,
            description: 'High quality product',

    },
    {
       
        name: 'Air Jordan 1 J.Balvin',
        category: 'Hi-Top',
        image: '/images/p2.webp',
        price: 4949.95,
        countInStock: 11,
        brand: 'Nike',
        rating: 4.4,
        numReviews: 25,
        description: 'High quality product',

},
{
    
    name: 'Reebok Insta Pump Fury Boost',
    category: 'Low-Top',
    image: '/images/p3.webp',
    price: 1899.95,
    countInStock: 3,
    brand: 'Reebok',
    rating: 4.3,
    numReviews: 16,
    description: 'High quality product',

},
{
    
    name: 'Adidas Yeezy 500 Taupe',
    category: 'Low-Top',
    image: '/images/p4.webp',
    price: 2249.95,
    countInStock: 2,
    brand: 'Adidas',
    rating: 3.8,
    numReviews: 13,
    description: 'High quality product',

},
{
    
    name: 'Balenciaga Speed LT',
    category: 'High-Top',
    image: '/images/p5.webp',
    price: 7299.95,
    countInStock: 0,
    brand: 'Balenciaga',
    rating: 4.9,
    numReviews: 19,
    description: 'High quality product',

},
{
    
    name: 'Balenciaga Track Lace-up',
    category: 'Low-Top',
    image: '/images/p6.webp',
    price: 8899.95,
    countInStock: 3,
    brand: 'Balenciaga',
    rating: 5,
    numReviews: 27,
    description: 'High quality product',

},
{
    
    name: 'Dior Air Jordan 1',
    category: 'High-Top',
    image: '/images/p7.webp',
    price: 120689.95,
    countInStock: 7,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 17,
    description: 'High quality product',

},
{
    
    name: 'Air Max Travis Scott Cactus Trails',
    category: 'Low-Top',
    image: '/images/p8.webp',
    price: 2799.95,
    countInStock: 0,
    brand: 'Nike',
    rating: 5,
    numReviews: 22,
    description: 'High quality product',

},
],
};
export default data;