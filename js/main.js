function hideMain() {
    // should add class hidden
    document.getElementById('homepage').classList.add('hidden')
    document.getElementById('hasilGejala').classList.remove('hidden')
}

function showSearchResult() {
    document.getElementById('hasilSearch').classList.remove('hidden')
}

function showMain() {
    document.getElementById('homepage').classList.remove('hidden')
    document.getElementById('hasilGejala').classList.add('hidden')
    document.getElementById('hasilSearch').classList.add('hidden')
}

function toko() {
    console.log('ke klik toko')
    document.getElementById('homepage').classList.add('hidden')
    console.log(document.getElementById('toko').setAttribute("aria-current", "page"))
    
}