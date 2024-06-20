// Example usage: Assuming you have the object defined

const cartContainer = document.getElementById('cart-generator');

function generateCart(cartData) {
    // Clear the existing content (optional, prevents duplicate items)
    cartContainer.innerHTML = '';

    let totalHarga = 0;

    cartData.forEach(item => {
        const productHTML = `
      <div class= "flex">
        <div class="flex items-center mt-3 w-1/2">
          <img src="${item.gambarLink}" alt="Product Image" class="mr-4 w-20">
          <div>
            <h2 class="font-bold">${item.nama}</h2>
            <p class="text-gray-700">Quantity: <input type="number" value="${item.buyQuantity}" class="w-16 text-center quantity-input" data-item-index="${cartData.indexOf(item)}"></p>
          </div>
        </div>
        <div class="flex justify-end w-1/2">
          <span class="font-bold place-content-center">Rp ${item.harga} / unit</span>
        </div>
      </div>
    `;

        const productElement = document.createElement('div');
        productElement.innerHTML = productHTML;

        cartContainer.appendChild(productElement);

        // Update totalHarga on quantity change
        const quantityInput = productElement.querySelector('.quantity-input');
        quantityInput.addEventListener('change', () => {
            const newQuantity = parseInt(quantityInput.value, 10);
            if (isNaN(newQuantity) || newQuantity < 0) {
                quantityInput.value = item.buyQuantity; // Set back to original value if invalid
                return;
            }
            item.buyQuantity = newQuantity; // Update item quantity in data
            totalHarga = calculateTotalHarga(cartData); // Recalculate total
            document.getElementById('total-harga').innerText = 'Rp ' + totalHarga;
        });
        totalHarga += item.buyQuantity * item.harga;
    });


    document.getElementById('total-harga').innerText = 'Rp ' + totalHarga;
}

function calculateTotalHarga(cartData) {
    let total = 0;
    cartData.forEach(item => {
        total += item.buyQuantity * item.harga;
    });
    return total;
}

const checkoutButton = document.getElementById('checkout-Button');

function validateCartStock(cartData) {
  let hasOutOfStock = false;
  cartData.forEach(item => {
    if (item.buyQuantity > item.stock) {
      hasOutOfStock = true;
      // console.warn(`Item: ${item.nama} - Requested quantity: ${item.buyQuantity}, Available stock: ${item.stock}`); // Log for debugging (optional)
      alert(`Item: ${item.nama} - Requested quantity: ${item.buyQuantity}, Available stock: ${item.stock}`)
    }
  });
  return hasOutOfStock;
}

checkoutButton.addEventListener('click', () => {
  // Perform stock validation before checkout
  const hasOutOfStock = validateCartStock(cartData);

  if (hasOutOfStock) {
    // Inform user about out-of-stock items
    return alert(`silakan kurangi stock item yang kehabisan stock`);
  }

  if (document.getElementById('total-harga').innerText === 'Rp 0') {
    return alert('Masukkan beberapa obat dalam keranjang')
  }

  // Proceed with checkout logic (e.g., sending cart data to server for payment processing)
  console.log('Cart data is valid, proceed with checkout!'); // Replace with your actual checkout logic 
  showBarcode();
});