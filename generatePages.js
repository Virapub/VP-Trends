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
    <img src="../${product.image}" alt="${product.name}" />
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
