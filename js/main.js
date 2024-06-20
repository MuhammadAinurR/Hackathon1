function showMain() {
    document.getElementById('homepage').classList.remove('hidden');
    hideSearchResult();
    hideToko();
    hideCart();
    hideLandingPage();
}

function showLandingPage() {
    document.getElementById('landing-page').classList.remove('hidden');
    hideSearchResult();
    hideToko();
    hideCart();
    hideMain();
}

function showSearchResult() {
    document.getElementById('search-element').classList.remove('hidden');
    hideMain();
    hideToko();
    hideCart();
    hideLandingPage();
}

function showCart() {
    generateCart(cartData)
    document.getElementById('chart-element').classList.remove('hidden')
    hideMain();
    hideToko();
    hideSearchResult();
    hideLandingPage();
}

function showToko() {
    document.getElementById('toko-element').classList.remove('hidden');
    hideMain();
    hideSearchResult();
    hideCart();
    createTokoItem(dataObat);
    hideBarcode();
    hideLandingPage();
}

function showBarcode() {
    document.getElementById('barcode').classList.remove('hidden')
    hideLandingPage();
}

function hideBarcode() {
    document.getElementById('barcode').classList.add('hidden')
    hideLandingPage();
}

// Hidden Function

function hideLandingPage() {
    document.getElementById('landing-page').classList.add('hidden')
}

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

