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


function listGejala(database){
    let objgejala = {};
    for (let i = 0; i < database.length; i++){
        let perobatgejala = database[i].gejala;
        for (let j = 0; j < perobatgejala.length; j++){
            if (objgejala[perobatgejala[j]] === undefined){
                objgejala[perobatgejala[j]] = [];
            }
            objgejala[perobatgejala[j]].push(database[i])
        }
    }
    return objgejala
}

function outputUser(array, db) {
    const result = [];
    const addedItems = new Set(); // Set to keep track of added items
    
    for (penyakit in db) {
        for (usergejala of array) {
            if (usergejala === penyakit) {
                // Iterate through items in db[penyakit]
                for (const item of db[penyakit]) {
                    if (!addedItems.has(item)) {
                        result.push(item);
                        addedItems.add(item); // Add item to Set
                    }
                }
            }
        }
    }
    
    return result;
}

const dbGejala = listGejala(dataObat);

// Render Function  
function checkBoxResult() {
    console.log('ea')
    hideMain();
    let gejalaPenyakit = handleCheckboxChange()
    if (gejalaPenyakit.length < 1) {
        alert('masukkan gejala terlebih dahulu')
        showMain()
    } else {
        const container = document.getElementById("hasilCheckbox");
        const katakata = document.createElement("p");
        katakata.id = 'notif-penyakit';
        katakata.innerText = 'Anda dapat menkonsumsi obat-obat berikut';
        (document.getElementById('notif-penyakit')) ? document.getElementById('notif-penyakit').innerText = 'Anda dapat menkonsumsi obat-obat berikut' : container.appendChild(katakata)
        showToko()
        createTokoItem(outputUser(gejalaPenyakit, dbGejala))
    }

}
