// function filterData(input, db) {
//     const result = [];
//     for (item of db) {
//         if (item.nama === input) result.push(item)
//         for (gejala of item.gejala){
//             if (input === gejala) result.push(item)
//         }
//     }
//     return result;
// }

function filterData(str, database){
    let result = [];
    for (let i = 0; i < database.length; i++){
        let perobat = database[i];
        for (let j = 0; j < perobat.gejala.length; j++){
            if (str === perobat.gejala[j]){
                result.push(perobat);
            }
        }
    }
    return result
}

// Test Case
// let dataObat = [
//     {
//         nama: "Paramex",
//         harga: 4000,
//         stock: 28,
//         gejala: ['flu', 'pilek', 'demam', 'lemas', 'antrax'],
//         tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//         gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//     },
//     {
//         nama: "Paramex1",
//         harga: 4000,
//         stock: 28,
//         gejala: ['flu', 'pilek', 'demam'],
//         tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//         gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//     },
//     {
//         nama: "Paramex2",
//         harga: 4000,
//         stock: 28,
//         gejala: ['pilek', 'demam', 'lemas'],
//         tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//         gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//     },
//     {
//         nama: "Paramex3",
//         harga: 4000,
//         stock: 28,
//         gejala: ['flu', 'pilek', 'demam'],
//         tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//         gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//     },
//     {
//         nama: "Paramex4",
//         harga: 4000,
//         stock: 28,
//         gejala: ['pilek', 'demam'],
//         tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//         gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//     },
// ]

// console.log(filterData('Paramex4', dataObat)[0].nama)
// // Output : 'Paramex4'
// console.log(filterData('flu', dataObat))
// /*
// Output
// [
//   {
//     nama: 'Paramex',
//     harga: 4000,
//     stock: 28,
//     gejala: [ 'flu', 'pilek', 'demam', 'lemas', 'antrax' ],
//     tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//     gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//   },
//   {
//     nama: 'Paramex1',
//     harga: 4000,
//     stock: 28,
//     gejala: [ 'flu', 'pilek', 'demam' ],
//     tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//     gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//   },
//   {
//     nama: 'Paramex3',
//     harga: 4000,
//     stock: 28,
//     gejala: [ 'flu', 'pilek', 'demam' ],
//     tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
//     gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
//   }
// ]
// */