function showMain() {
    document.getElementById('homepage').classList.remove('hidden');
    hideToko();
    hideCart();
    hideLandingPage();
    hideNavbar()
}

function showLandingPage() {
    document.getElementById('landing-page').classList.remove('hidden');
    hideToko();
    hideCart();
    hideMain();
    showNavbar()
}

function showCart() {
    generateCart(cartData)
    document.getElementById('chart-element').classList.remove('hidden')
    hideMain();
    hideToko();
    hideLandingPage();
    showNavbar();
}

function showToko() {
    document.getElementById('toko-element').classList.remove('hidden');
    hideMain();
    hideCart();
    createTokoItem(dataObat);
    hideBarcode();
    hideLandingPage();
    hideNavbar();
}

let isAnotherBarcode = true;

function showBarcode() {
    if (isAnotherBarcode) {
        document.getElementById('barcode2').classList.add('hidden')
        document.getElementById('barcode').classList.remove('hidden');
        isAnotherBarcode = false;
    } else {
        document.getElementById('barcode').classList.add('hidden')
        document.getElementById('barcode2').classList.remove('hidden');
        isAnotherBarcode = true;
    }
    hideLandingPage();
}

function showNavbar() {
    document.getElementById('navbar').classList.remove('hidden')
}

// Hidden Function


function hideBarcode() {
    document.getElementById('barcode').classList.add('hidden')
    document.getElementById('barcode2').classList.add('hidden')
    hideLandingPage();
}

function hideNavbar() {
    document.getElementById('navbar').classList.add('hidden')
}

function hideLandingPage() {
    document.getElementById('landing-page').classList.add('hidden')
}

function hideMain() {
    document.getElementById('homepage').classList.add('hidden')
}


function hideToko() {
    document.getElementById('toko-element').classList.add('hidden')
}

function hideCart() {
    document.getElementById('chart-element').classList.add('hidden')
}

