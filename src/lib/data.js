
// Sample products data
const initialProducts = [
  {
    id: 1,
    name: 'Modern Laptop',
    description: 'High-performance laptop for professionals',
    price: 999.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Premium noise-canceling headphones',
    price: 199.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 3,
    name: 'Running Shoes',
    description: 'Comfortable athletic shoes for runners',
    price: 89.99,
    category: 'Sports',
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 4,
    name: 'Coffee Maker',
    description: 'Automatic drip coffee maker',
    price: 49.99,
    category: 'Home & Kitchen',
    image_url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 5,
    name: 'Backpack',
    description: 'Durable everyday backpack',
    price: 59.99,
    category: 'Accessories',
    image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja3BhY2t8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 6,
    name: 'Smartwatch',
    description: 'Feature-rich smartwatch with fitness tracking',
    price: 249.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1542541864-4abf21a55761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 7,
    name: 'Leather Jacket',
    description: 'Classic men\'s leather jacket',
    price: 299.99,
    category: 'Fashion',
    image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVhdGhlciUyMGphY2tldHxlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 8,
    name: 'Yoga Mat',
    description: 'Non-slip yoga mat for exercise',
    price: 29.99,
    category: 'Sports',
    image_url: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW9nYSUyMG1hdHxlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 9,
    name: 'Table Lamp',
    description: 'Stylish table lamp for your living room',
    price: 39.99,
    category: 'Home & Kitchen',
    image_url: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 10,
    name: 'Sunglasses',
    description: 'Classic aviator sunglasses',
    price: 79.99,
    category: 'Accessories',
    image_url: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 11,
    name: 'Gaming Mouse',
    description: 'High-precision gaming mouse with RGB lighting',
    price: 59.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1616296425622-4560a2ad83de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 12,
    name: 'Denim Jeans',
    description: 'Comfortable and stylish denim jeans',
    price: 69.99,
    category: 'Fashion',
    image_url: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVuaW0lMjBqZWFuc3xlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 13,
    name: 'Basketball',
    description: 'Official size basketball for indoor/outdoor play',
    price: 24.99,
    category: 'Sports',
    image_url: 'https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbHxlbnwwfHwwfHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 14,
    name: 'Throw Pillow',
    description: 'Soft and decorative throw pillow for your couch',
    price: 19.99,
    category: 'Home & Kitchen',
    image_url: 'https://images.unsplash.com/photo-1679224105358-e9015fa50c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhyb3clMjBwaWxsb3d8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 15,
    name: 'Wallet',
    description: 'Slim and stylish leather wallet',
    price: 49.99,
    category: 'Accessories',
    image_url: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
  }
];

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image_url: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    name: 'Fashion',
    image_url: "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image_url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWUlMjBhbmQlMjBsaXZpbmd8ZW58MHx8MHx8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    name: 'Sports',
    image_url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    name: 'Accessories',
    image_url: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
  }
];


export { initialProducts, categories }