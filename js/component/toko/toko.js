let cartData = [];

function createTokoItem(data) {
    const container = document.getElementById('etalaseToko');
    container.innerHTML = ''; // Clear existing content
  
    data.forEach(item => {
      const productElement = document.createElement('div');
      productElement.className = 'w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700';
  
      // Create product image
      const productImage = document.createElement('img');
      productImage.className = 'rounded-t-lg';
      productImage.src = item.gambarLink;
  
      // Create product info container
      const productInfo = document.createElement('div');
      productInfo.className = 'p-5';
  
      // Create product name link
      const productNameLink = document.createElement('a');
      productNameLink.className = 'block mb-2';
      productNameLink.href = '#'; // Adjust link behavior as needed
  
      const productName = document.createElement('h5');
      productName.className = 'text-md font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2';
      productName.innerText = item.nama;
  
      productNameLink.appendChild(productName);
  
      // Create price and add to cart section
      const productDetails = document.createElement('div');
      productDetails.className = 'flex items-center justify-between';
  
      const productPrice = document.createElement('span');
      productPrice.className = 'text-md font-bold text-gray-900 dark:text-white';
      productPrice.innerText = `Rp. ${item.harga}`;
  
      const addToCartButton = document.createElement('button');
      addToCartButton.className = '';
      addToCartButton.innerText = 'Add to Cart';
  
      // Add click event listener to "Add to Cart" button
      addToCartButton.addEventListener('click', () => {
        const newItem = {
          gambarLink: item.gambarLink, // Initial quantity
          nama: item.nama,
          harga: item.harga,
          stock: item.stock, // Assuming you have a stock property
          buyQuantity: 1,
        };

  
        // Check for duplicate item and update quantity
        const existingItemIndex = cartData.findIndex(cartItem => cartItem.nama === newItem.nama);
        if (existingItemIndex !== -1) {
          cartData[existingItemIndex].buyQuantity++;
        } else {
          cartData.push(newItem);
        }
  
        // Update cartData in localStorage
        localStorage.setItem('cartData', JSON.stringify(cartData));
  
        // Optional: Display confirmation message or update cart UI
        console.log(`${item.nama} added to cart!`); // Replace with your desired action
      });
  
      productDetails.appendChild(productPrice);
      productDetails.appendChild(addToCartButton);
  
      productInfo.appendChild(productNameLink);
      productInfo.appendChild(productDetails);
  
      productElement.appendChild(productImage);
      productElement.appendChild(productInfo);
  
      container.appendChild(productElement);
    });
  }
  createTokoItem(dataObat)
  // Example usage: Assuming you have the dataObat array defined
  
  
  // Access and use cartData from localStorage (optional)
  // let cartData = JSON.parse(localStorage.getItem('cartData'));
  // // Use cartData for further processing (e.g., display cart items)
  