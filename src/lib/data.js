
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
  },

  // Electronics
  {
    id: 16,
    name: 'Bluetooth Speaker',
    description: 'Portable wireless speaker with deep bass',
    price: 89.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 17,
    name: 'Tablet',
    description: 'Lightweight tablet for work and play',
    price: 399.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
    {
    id: 24,
    name: 'Phone',
    description: 'Lightweight phone for work and play',
    price: 499.99,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },

  // Fashion
  {
    id: 18,
    name: 'Sneakers',
    description: 'Trendy sneakers for everyday wear',
    price: 109.99,
    category: 'Fashion',
    image_url: 'https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 19,
    name: 'Summer Jacket',
    description: 'Light and breezy summer jacket',
    price: 59.99,
    category: 'Fashion',
    image_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
  },

  // Home & Kitchen
  {
    id: 20,
    name: 'Blender',
    description: 'Powerful blender for smoothies and shakes',
    price: 79.99,
    category: 'Home & Kitchen',
    image_url: 'https://plus.unsplash.com/premium_photo-1717749801344-8ed38d55aead?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 21,
    name: 'Cookware Set',
    description: 'Non-stick cookware set for all your cooking needs',
    price: 129.99,
    category: 'Home & Kitchen',
    image_url: 'https://images.unsplash.com/photo-1588279102567-67db026f11c0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },

  // Sports
  {
    id: 22,
    name: 'Tennis Racket',
    description: 'Lightweight tennis racket for all levels',
    price: 69.99,
    category: 'Sports',
    image_url: 'https://images.unsplash.com/photo-1617883861744-13b534e3b928?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 23,
    name: 'Fitness Tracker',
    description: 'Track your workouts and health stats',
    price: 49.99,
    category: 'Sports',
    image_url: 'https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },

  // Accessories
  {
    id: 25,
    name: 'Scarf',
    description: 'Soft scarf for chilly days',
    price: 24.99,
    category: 'Accessories',
    image_url: 'https://images.unsplash.com/photo-1485527691629-8e370684924c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },

  // Pet Supplies
  {
    id: 26,
    name: 'Dog Leash',
    description: 'Durable leash for daily walks',
    price: 14.99,
    category: 'Pet Supplies',
    image_url: 'https://images.unsplash.com/photo-1615394968637-de55ca4b2e64?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    id: 27,
    name: 'Cat Bed',
    description: 'Cozy bed for your feline friend',
    price: 34.99,
    category: 'Pet Supplies',
    image_url: 'https://images.unsplash.com/photo-1541188495357-ad2dc89487f4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];


// Sample categories data
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
  },
  {
    id: 6,
    name: 'Pet Supplies',
    image_url: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];


export { initialProducts, categories }