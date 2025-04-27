document.getElementById('loginBtn').addEventListener('click', function () {
    window.location.href = 'loginform.html';
}
);
document.getElementById('item1').addEventListener('click', function () {
    window.location.href = 'organicVegies.html';
}
);
document.getElementById('item2').addEventListener('click', function () {
    window.location.href = 'freshFruits.html';
}
);
document.getElementById('item3').addEventListener('click', function () {
    window.location.href = 'coldDrinks.html';
}
);
document.getElementById('item4').addEventListener('click', function () {
    window.location.href = 'instantFood.html';
}
);
document.getElementById('item5').addEventListener('click', function () {
    window.location.href = 'dairyProducts.html';
}
);
document.getElementById('item6').addEventListener('click', function () {
    window.location.href = 'bakery&Breads.html';
}
);
document.getElementById('item7').addEventListener('click', function () {
    window.location.href = 'Grains.html';
}
);
document.getElementById('shopBtn').addEventListener('click', function () {
    window.location.href = 'allProducts.html';
}
);
  
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const popup = document.getElementById('cart-popup');
    popup.style.display = 'flex';
    setTimeout(() => popup.style.display = 'none', 2000);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.querySelector('.search-box');
  const searchInput = searchBox.querySelector('input');
  const searchIcon = searchBox.querySelector('i.fa-search');
  const searchResults = document.createElement('div');
  searchResults.className = 'search-results';
  searchBox.parentElement.style.position = 'relative';
  searchBox.parentElement.appendChild(searchResults);

  const products = [
    { id: 1, name: 'Potato 500g', category: 'Vegetables', price: '₹49', image: 'potato_image_1.png' },
    { id: 2, name: 'Tomato 1kg', category: 'Vegetables', price: '₹38', image: 'tomato_image.png' },
    { id: 3, name: 'Carrot 500g', category: 'Vegetables', price: '₹54', image: 'carrot_image.png' },
    { id: 4, name: 'Spinach 500g', category: 'Vegetables', price: '₹35', image: 'spinach_image_1.png' },
    { id: 5, name: 'Onion 500g', category: 'Vegetables', price: '₹45', image: 'onion_image_1.png' },
  
    { id: 6, name: 'Apple 1kg', category: 'Fruits', price: '₹38', image: 'apple_image.png' },
    { id: 7, name: 'Banana 12pcs', category: 'Fruits', price: '₹54', image: 'banana_image_1.png' },
    { id: 8, name: 'Mango 1kg', category: 'Fruits', price: '₹35', image: 'mango_image_1.png' },
    { id: 9, name: 'Grapes 500g', category: 'Fruits', price: '₹45', image: 'grapes_image_1.png' },
    { id: 10, name: 'Orange 1Kg', category: 'Fruits', price: '₹49', image: 'orange_image.png' },

    { id: 11, name: 'Milk 1L', category: 'Dairy Products', price: '₹60', image: 'milk_image.png' },
    { id: 12, name: 'Cheese 200g', category: 'Dairy Products', price: '₹120', image: 'cheese_image.png' },
    { id: 13, name: 'Butter 500g', category: 'Dairy Products', price: '₹250', image: 'butter_image.png' },
    { id: 14, name: 'Yogurt 400g', category: 'Dairy Products', price: '₹50', image: 'yogurt_image.png' },
  
    { id: 15, name: 'Wheat Flour 5kg', category: 'Grains', price: '₹230', image: 'grain_image.png' },
    { id: 16, name: 'Rice 1kg', category: 'Grains', price: '₹60', image: 'rice_image.png' },
    { id: 17, name: 'Lentils 1kg', category: 'Grains', price: '₹120', image: 'lentils_image.png' },
  
    { id: 18, name: 'Brown Bread 400g', category: 'Bakery', price: '₹35', image: 'bakery_image.png' },
    { id: 19, name: 'Croissant 200g', category: 'Bakery', price: '₹80', image: 'croissant_image.png' },
    { id: 20, name: 'Muffins 4pcs', category: 'Bakery', price: '₹150', image: 'muffins_image.png' },

    { id: 21, name: 'Coca-Cola 1.5L', category: 'Cold Drinks', price: '₹50', image: 'coca_cola_image.png' },
    { id: 22, name: 'Pepsi 1.5L', category: 'Cold Drinks', price: '₹50', image: 'pepsi_image.png' },
    { id: 23, name: 'Sprite 1.5L', category: 'Cold Drinks', price: '₹50', image: 'sprite_image_1.png' },
  
    { id: 24, name: 'Instant Noodles 70g', category: 'Instant Food', price: '₹12', image: 'noodles_image.png' },
    { id: 25, name: 'Pasta 500g', category: 'Instant Food', price: '₹150', image: 'pasta_image.png' },
    { id: 26, name: 'Soup Mix 50g', category: 'Instant Food', price: '₹40', image: 'soup_image.png' }
  ];

  const performSearch = (term) => {
    const results = term.length >= 2
      ? products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term))
      : [];
    displaySearchResults(results);
  };

  const displaySearchResults = (results) => {
    searchResults.innerHTML = results.length
      ? results.map(p => `
        <div class="search-result-item" data-id="${p.id}">
          <img src="${p.image}" alt="${p.name}">
          <div>
            <div>${p.name}</div>
            <div>${p.price}</div>
          </div>
        </div>
      `).join('')
      : '<div>No products found</div>';
    searchResults.style.display = results.length ? 'block' : 'none';
  };

  searchInput.addEventListener('input', () => performSearch(searchInput.value.trim().toLowerCase()));
  searchIcon.addEventListener('click', () => performSearch(searchInput.value.trim().toLowerCase()));
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-cart')) searchResults.style.display = 'none';
  });
});