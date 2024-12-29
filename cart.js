document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');  // Debugging log

    // Show all sections initially
    showSection('all');

    // Update cart count on page load
    updateCartCount();

    // Add event listeners to cart buttons
    const cartButtons = document.querySelectorAll('.cart-btn');
    console.log(`Found ${cartButtons.length} cart buttons.`);  // Debugging log

    if (cartButtons.length > 0) {
        cartButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('Cart button clicked');  // Debugging log
                const box = button.closest('.box');
                if (box) {
                    const name = box.getAttribute('data-name');
                    const price = parseFloat(box.getAttribute('data-price'));
                    const img = box.getAttribute('data-img');
                    console.log(`Adding to cart: ${name}, ${price}, ${img}`);  // Debugging log
                    addToCart({ name, price, img });
                    updateCartCount();
                } else {
                    console.error('No parent .box found for this button');  // Debugging log
                }
            });
        });
    } else {
        console.error("No cart buttons found.");
    }
});

function showSection(gender) {
    console.log(`Filtering by gender: ${gender}`);
    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => {
        box.style.display = 'block';
    });
    if (gender !== 'all') {
        allBoxes.forEach(box => {
            if (!box.classList.contains(gender)) {
                box.style.display = 'none';
            }
        });
    }
}

function getCart() {
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (e) {
        console.error('Error parsing cart from localStorage', e);
    }
    console.log('Current cart:', cart);
    return cart;
}

function saveCart(cart) {
    console.log('Saving cart:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
    console.log('Updated cart count:', totalItems);
}

function addToCart(item) {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    saveCart(cart);
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show the back to top button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
});
