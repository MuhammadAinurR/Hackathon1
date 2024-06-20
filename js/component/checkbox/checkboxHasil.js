function checkPenyakit(gejalaUser, db) {
    const result = {}
    let finalResult = []
    for (const gejala of gejalaUser) {
        for (const dbPenyakit in db) {
            for (const gejalaDb of db[dbPenyakit]) {
                if (result[dbPenyakit] === undefined) result[dbPenyakit] = 0
                if (gejalaDb === gejala) result[dbPenyakit]++
            }
        }
    }

    for (hasilHitung in result) {
        if (finalResult.length < 1) finalResult.push(hasilHitung), finalResult.push(result[hasilHitung]), finalResult.push(0);
        if (result[hasilHitung] > finalResult[1]) finalResult[0] = hasilHitung, finalResult[1] = result[hasilHitung];
    }

    for (hasilHitung in result) {
        if (result[hasilHitung] === finalResult[1]) finalResult[2]++
    }

    if (finalResult[2] > 1 || Object.keys(result).length < 1) return 'ambigu';
    return finalResult[0];
}


// Render Function
function checkBoxResult() {
    hideMain();
    handleCheckboxChange();
    const container = document.getElementById("hasilCheckbox");
    let gejalaPenyakit = handleCheckboxChange()
    const katakata = document.createElement("p");
    katakata.id = 'notif-penyakit';
    
    let result = checkPenyakit(gejalaPenyakit, db_penyakit) === 'ambigu' ? 'gejala terlalu ambigu, silakan pilih gejala lebih lengkap':`Anda terindikasi terjangkit ${checkPenyakit(gejalaPenyakit, db_penyakit)}, kami sarankan untuk konsumsi obat berikut`;
    katakata.innerText = result;
    (document.getElementById('notif-penyakit')) ? document.getElementById('notif-penyakit').innerText = result : container.appendChild(katakata)
    createSearchResult(filterData(checkPenyakit(gejalaPenyakit, db_penyakit), dataObat));
    showSearchResult()
}
