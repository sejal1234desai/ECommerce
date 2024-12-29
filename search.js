// Get the input field
var input = document.getElementById("searchInput");

// Add event listener for the input event
input.addEventListener("input", function() {
    // Get the value of the input field
    var filter = input.value.toLowerCase();

    // Get all product boxes
    var boxes = document.querySelectorAll(".box");

    // Loop through each product box
    boxes.forEach(function(box) {
        // Get the product name from the data-name attribute
        var productName = box.dataset.name.toLowerCase();

        // Check if the product name contains the filter text
        if (productName.indexOf(filter) > -1) {
            // If the product name matches, display the product box
            box.style.display = "";
        } else {
            // If the product name does not match, hide the product box
            box.style.display = "none";
        }
    });
});
