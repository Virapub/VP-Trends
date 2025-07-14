$(document).ready(function() {
  const categories = ['low-budget', 'mid-range', 'premium'];

  categories.forEach(category => {
    $.get(`/api/products/${category}`, function(data) {
      const container = $(`#${category}-products`);
      data.forEach(product => {
        const card = `
          <div class="col-md-4 product-card">
            <img src="${product.image}" alt="${product.title}" class="img-fluid">
            <h5>${product.title}</h5>
            <p>Price: ${product.price}</p>
            <a href="${product.affiliateLink}" class="btn btn-primary" target="_blank">Shop Now</a>
            <button class="btn btn-outline-secondary" onclick="shareToPinterest('${product.image}', '${product.title}', '${product.affiliateLink}')">Pin It</button>
          </div>`;
        container.append(card);
      });
    });
  });
});

function shareToPinterest(image, title, url) {
  const pinUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`;
  window.open(pinUrl, '_blank');
}
