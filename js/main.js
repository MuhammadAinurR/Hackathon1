function showMain() {
    document.getElementById('homepage').classList.remove('hidden');
    hideToko();
    hideCart();
    hideLandingPage();
}

function showLandingPage() {
    document.getElementById('landing-page').classList.remove('hidden');
    hideToko();
    hideCart();
    hideMain();
}

function showCart() {
    generateCart(cartData)
    document.getElementById('chart-element').classList.remove('hidden')
    hideMain();
    hideToko();
    hideLandingPage();
}

function showToko() {
    document.getElementById('toko-element').classList.remove('hidden');
    hideMain();
    hideCart();
    createTokoItem(dataObat);
    hideBarcode();
    hideLandingPage();
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

function hideBarcode() {
    document.getElementById('barcode').classList.add('hidden')
    document.getElementById('barcode2').classList.add('hidden')
    hideLandingPage();
}

// Hidden Function

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

