function showMain() {
    document.getElementById('homepage').classList.remove('hidden');
    hideSearchResult();
    hideToko();
    hideCart();
}

function showSearchResult() {
    document.getElementById('search-element').classList.remove('hidden');
    hideMain();
    hideToko();
    hideCart();
}

function showCart() {
    generateCart(cartData)
    document.getElementById('chart-element').classList.remove('hidden')
    hideMain();
    hideToko();
    hideSearchResult();
}

function showToko() {
    document.getElementById('toko-element').classList.remove('hidden');
    hideMain();
    hideSearchResult();
    hideCart();
}

function showBarcode() {
    document.getElementById('barcode').classList.remove('hidden')
}

// Hidden Function

function hideMain() {
    document.getElementById('homepage').classList.add('hidden')
}

function hideSearchResult() {
    document.getElementById('search-element').classList.add('hidden')
}

function hideToko() {
    document.getElementById('toko-element').classList.add('hidden')
}

function hideCart() {
    document.getElementById('chart-element').classList.add('hidden')
}

