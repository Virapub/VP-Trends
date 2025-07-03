const fs = require('fs');
const path = require('path');
const data = require('./data.js');

// Create products directory if it doesn't exist
const productsDir = path.join(__dirname, 'products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir);
}

// Create category subdirectories and product pages
Object.entries(data.productsByCategory).forEach(([category, products]) => {
  // Create category directory name (lowercase with hyphens)
  const categoryDirName = category.toLowerCase().replace(/\s+/g, '-');
  const categoryDir = path.join(productsDir, categoryDirName);
  
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir);
  }

  // Generate each product page
  products.forEach(product => {
    const productFileName = product.name.toLowerCase().replace(/\s+/g, '-') + '.html';
    const productFilePath = path.join(categoryDir, productFileName);
    
    const productPageContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${product.name} | KitchenLink</title>
  <link rel="stylesheet" href="../style.css">
  <style>
    .product-container {
      display: flex;
      gap: 40px;
      margin: 30px 0;
    }
    .product-image {
      flex: 1;
      max-width: 500px;
      border-radius: 8px;
    }
    .product-details {
      flex: 1;
    }
    .price {
      font-size: 1.5rem;
      margin: 20px 0;
    }
    .price-inr {
      color: #e63946;
      font-weight: bold;
    }
    .price-usd {
      color: #666;
      margin-left: 10px;
    }
    .features {
      margin: 20px 0;
    }
    .features li {
      margin-bottom: 8px;
    }
    .btn {
      display: inline-block;
      padding: 10px 20px;
      background: #333;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">KitchenLink</div>
    <nav>
      <a href="../index.html">Home</a>
      <a href="../products.html">Products</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main class="container">
    <div class="product-container">
      <img src="../${product.image}" alt="${product.name}" class="product-image">
      <div class="product-details">
        <h1>${product.name}</h1>
        <div class="price">
          <span class="price-inr">${product.price.inr}</span>
          <span class="price-usd">${product.price.usd}</span>
        </div>
        <p>${product.description}</p>
        
        <div class="features">
          <h3>Key Features:</h3>
          <ul>
            <li>High-quality materials</li>
            <li>Energy efficient</li>
            <li>Easy to use and maintain</li>
            <li>1-year manufacturer warranty</li>
          </ul>
        </div>
        
        <a href="#" class="btn">Add to Cart</a>
      </div>
    </div>
  </main>

  <footer>
    <p>&copy; 2023 KitchenLink. All prices in INR (₹) and USD ($).</p>
  </footer>
</body>
</html>`;

    fs.writeFileSync(productFilePath, productPageContent);
    console.log(`Generated: ${productFilePath}`);
  });
});

console.log('All product pages generated successfully!');
