$(document).ready(function() {
  const categories = ['low-budget', 'mid-range', 'premium'];
  categories.forEach(category => {
    $.get(`/api/products/${category}`, function(data) {
      const container = $('#product-list');
      container.append(`<h3>${category.replace('-', ' ').toUpperCase()}</h3>`);
      data.forEach(product => {
        const item = `
          <div class="card mb-2">
            <div class="card-body">
              <h5>${product.title}</h5>
              <button class="btn btn-danger" onclick="deleteProduct('${category}', '${product.id}')">Delete</button>
            </div>
          </div>`;
        container.append(item);
      });
    });
  });

  $('#add-product-form').submit(function(e) {
    e.preventDefault();
    const product = {
      title: $('#title').val(),
      image: $('#image').val(),
      price: $('#price').val(),
      affiliateLink: $('#affiliateLink').val()
    };
    const category = $('#category').val();
    $.post(`/api/products/${category}`, product, function() {
      alert('Product added!');
      location.reload();
    });
  });
});

function deleteProduct(category, id) {
  if (confirm('Are you sure you want to delete this product?')) {
    $.ajax({
      url: `/api/products/${category}/${id}`,
      type: 'DELETE',
      success: function() {
        alert('Product deleted!');
        location.reload();
      }
    });
  }
}
