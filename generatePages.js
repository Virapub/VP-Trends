name: Generate Product Pages

on:
  push:
    paths:
      - data.js
permissions:
  contents: write
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: 18

    - name: Generate HTML files
      run: |
        npm install
        node generatePages.js

    - name: Commit generated files
      run: |
        git config user.name "GitHub Actions"
        git config user.email "actions@github.com"
        git add products/
        git commit -m "Auto-generated product pages"
        git push
const fs = require("fs");
const { products } = require("./data.js");

products.forEach((product) => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>${product.name}</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <div class="container">
    <h1>${product.name}</h1>
    "https://m.media-amazon.com/images/I/61jdVmdnBgL._SL1500_.jpg"
    <p><strong>Price:</strong> ₹${product.priceINR}</p>
    <p>${product.description}</p>
    <a href="${product.link}" target="_blank">Buy on Amazon</a>
    <br><a href="../products.html">← Back to Products</a>
  </div>
</body>
</html>
  `;
  fs.writeFileSync(`products/${product.id}.html`, html);
});
