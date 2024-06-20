let isMenu = false;
function menuButton() {
    if (!isMenu) {
        document.getElementById('menu-button').classList.remove('hidden');
        isMenu = true;
    } else {
        document.getElementById('menu-button').classList.add('hidden');
        isMenu = false;
    }
}
