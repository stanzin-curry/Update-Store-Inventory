document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const quantity = document.getElementById('productQuantity').value;
    const category = document.getElementById('productCategory').value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - $${price} - Quantity: ${quantity} - Category: ${category}`;

    // Add the list item to the inventory list
    document.getElementById('inventory').appendChild(listItem);

    // Clear the form
    this.reset();
});
