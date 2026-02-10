const products = {
    // ============================================
    // MANGA PRODUCTS
    // ============================================
    manga: [
        { id: 1,  name: "Chainsaw Man Vol 31",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7597895-01.jpg", badge: "" },
        { id: 2,  name: "Chainsaw Man Vol 2",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7694178-02.jpg", badge: "" },
        { id: 3,  name: "Chainsaw Man Vol 3",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7793245-03.jpg", badge: "" },
        { id: 4,  name: "Chainsaw Man Vol 4",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7902566-04.jpg", badge: "" },
        { id: 5,  name: "Chainsaw Man Vol 5",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8002591-05.jpg", badge: "" },
        { id: 6,  name: "Chainsaw Man Vol 6",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8084565-06.jpg", badge: "" },
        { id: 7,  name: "Chainsaw Man Vol 7",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/8185334-07.jpg", badge: "" },
        { id: 8,  name: "Chainsaw Man Vol 8",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8283825-4181227440-97814.jpg", badge: "" },
        { id: 9,  name: "Chainsaw Man Vol 9",  price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/8363258-4505369067-98592.jpg", badge: "" },
        { id: 10, name: "Chainsaw Man Vol 10", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11115/111152973/8439965-chainsawmanv10%282022%29-page1.jpg", badge: "" },
        { id: 11, name: "Chainsaw Man Vol 11", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11158/111580527/8531791-71joichqygl.jpg", badge: "" },
        { id: 12, name: "Chainsaw Man Vol 12", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9119938-chainsawman-c098%28v12%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 13, name: "Chainsaw Man Vol 13", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9188086-chainsawman-c104%28v13%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 14, name: "Chainsaw Man Vol 14", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11160/111607459/9261243-chainsawman-c113%28v14%29-p000%5Bvizmedia%5D%5Bdigital%5D%5B1r0n%5D.jpg", badge: "" },
        { id: 15, name: "Chainsaw Man Vol 15", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9354333-1194381157-81SwG.jpg", badge: "" },
        { id: 16, name: "Chainsaw Man Vol 16", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9464301-3247294773-818hk.jpg", badge: "" },
        { id: 17, name: "Chainsaw Man Vol 17", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11145/111458479/9595180-5175667596-81X2O.jpg", badge: "" },
        { id: 18, name: "Chainsaw Man Vol 18", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111567728/9718795-6863719678-24220.jpg", badge: "" },
        { id: 19, name: "Chainsaw Man Vol 19", price: 250, image: "https://comicvine.gamespot.com/a/uploads/scale_small/11154/111547112/9886242-0762374814-81RjR.jpg", badge: "" },
        { id: 20, name: "Death Note Vol 1",  price: 250, image: "https://m.media-amazon.com/images/I/81iDNjn-r3L._SY425_.jpg", badge: "" },
        { id: 21, name: "Death Note Vol 2",  price: 250, image: "https://m.media-amazon.com/images/I/61Kx4vs5yCL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 22, name: "Death Note Vol 3",  price: 250, image: "https://m.media-amazon.com/images/I/61YClPOqjVL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 23, name: "Death Note Vol 4",  price: 250, image: "https://m.media-amazon.com/images/I/91mgtWmsepL._SY425_.jpg", badge: "" },
        { id: 24, name: "Death Note Vol 5",  price: 250, image: "https://m.media-amazon.com/images/I/61RhrBxecnL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 25, name: "Death Note Vol 6",  price: 250, image: "https://m.media-amazon.com/images/I/617LLH0ZabL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 26, name: "Death Note Vol 7",  price: 250, image: "https://m.media-amazon.com/images/I/61giqeei2QL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 27, name: "Death Note Vol 8",  price: 250, image: "https://m.media-amazon.com/images/I/61Kc-jQ9yQL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 28, name: "Death Note Vol 9",  price: 250, image: "https://m.media-amazon.com/images/I/61rNRGygD9L._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 29, name: "Death Note Vol 10", price: 250, image: "https://m.media-amazon.com/images/I/61Vw+U6AvnL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 30, name: "Death Note Vol 11", price: 250, image: "https://m.media-amazon.com/images/I/61y1zZQ4fhL._SY445_SX342_FMwebp_.jpg", badge: "" },
        { id: 31, name: "Death Note Vol 12", price: 250, image: "https://m.media-amazon.com/images/I/61nBCgvM1LL._SY445_SX342_FMwebp_.jpg", badge: "" }, 
    ],
    // ============================================
    // NOVEL PRODUCTS
    // ============================================
    novels: [
        {
            id: 101,
            name: "The Great Gatsby",
            price: 450,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop",
            badge: "Classic"
        },
        {
            id: 102,
            name: "1984 by George Orwell",
            price: 420,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
            badge: "Bestseller"
        },
        {
            id: 103,
            name: "Pride and Prejudice",
            price: 480,
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop",
            badge: ""
        },
        {
            id: 104,
            name: "To Kill a Mockingbird",
            price: 460,
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop",
            badge: "Popular"
        },
        // ADD MORE NOVELS HERE - Just copy the format above!
    ]
};

// ================================================================
// AUTO-RENDER FUNCTIONS (Don't edit below unless you know what you're doing)
// ================================================================

function renderProducts(productArray, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    const html = productArray.map(product => `
        <div class="product-card">
            <div class="image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">৳${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}')">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    grid.innerHTML = html;
    updateProductCount(productArray.length);
}

function updateProductCount(count) {
    const countElement = document.querySelector('.filter-bar span');
    if (countElement) {
        countElement.textContent = `Showing ${count} product${count !== 1 ? 's' : ''}`;
    }
}

function setupSearch(productArray, gridId) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = productArray.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        renderProducts(filtered, gridId);
    });
}

// Auto-initialize based on current page
document.addEventListener('DOMContentLoaded', function() {
    const path = (window.location.pathname || window.location.href || '').toLowerCase();
    
    if (path.includes('manga')) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            renderProducts(products.manga, 'productsGrid');
            setupSearch(products.manga, 'productsGrid');
        }
    } else if (path.includes('novel')) {
        const grid = document.getElementById('productsGrid');
        if (grid) {
            renderProducts(products.novels, 'productsGrid');
            setupSearch(products.novels, 'productsGrid');
        }
    }
});

// Cart functions (if not already defined)
if (typeof addToCart === 'undefined') {
    function addToCart(name, price, image) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.name === name);
        
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({ name, price, image, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showToast();
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        const countEl = document.getElementById('cartCount');
        if (countEl) countEl.textContent = total;
    }

    function showToast() {
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    }

    // Initialize cart count
    document.addEventListener('DOMContentLoaded', updateCartCount);
}
