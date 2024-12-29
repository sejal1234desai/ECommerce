// document.addEventListener('DOMContentLoaded', () => {
//     updateProductDisplay();
    
//     const productSearchInput = document.getElementById('productSearchInput');
    
//     productSearchInput.addEventListener('input', () => {
//         updateProductDisplay(productSearchInput.value.toLowerCase());
//     });
// });

// function updateProductDisplay(searchQuery = '') {
//     const productBoxes = document.querySelectorAll('.box');
    
//     productBoxes.forEach(box => {
//         const productName = box.dataset.name.toLowerCase();
        
//         if (productName.includes(searchQuery)) {
//             box.style.display = 'block';
//         } else {
//             box.style.display = 'none';
//         }
//     });
// }


// document.addEventListener('DOMContentLoaded', () => {
//     const searchInput = document.getElementById('productSearchInput');
//     if (searchInput) {
//         searchInput.addEventListener('input', () => {
//             const searchQuery = searchInput.value.toLowerCase();
//             updateProductDisplay(searchQuery);
//         });
//     }
//     // Initial product display
//     updateProductDisplay();
// });

// function updateProductDisplay(searchQuery = '') {
//     const productBoxes = document.querySelectorAll('.shop-section .box');
//     productBoxes.forEach(box => {
//         const productName = box.dataset.name.toLowerCase();
//         if (productName.includes(searchQuery)) {
//             box.style.display = 'block';
//         } else {
//             box.style.display = 'none';
//         }
//     });
// }
