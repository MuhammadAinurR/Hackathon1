function createSearchResult(data) {
    let container = document.getElementById('hasilSearch')
    container.innerHTML = '';
    data.forEach(item => {
        const div1 = document.createElement("div");
        div1.className = "w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700";

        const a2 = document.createElement("a");
        a2.setAttribute("href", "#")

        const img3 = document.createElement("img");
        img3.className = "rounded-t-lg"
        img3.src = item.gambarLink

        const div2 = document.createElement("div");
        div2.className = "p-5";

        const a3 = document.createElement("a");
        a3.className = "block mb-2";

        const h54 = document.createElement("h5");
        h54.className = "text-md font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2"
        h54.innerText = item.nama

        const div3 = document.createElement("div");
        div3.className = "flex items-center justify-between";

        const span4 = document.createElement("span");
        span4.className = "text-md font-bold text-gray-900 dark:text-white"
        span4.innerText = `Rp. ${item.harga}`

        const a4 = document.createElement("a");
        a4.className = ""
        a4.innerText = 'Add to cart'

        div3.append(span4)
        div3.append(a4)
        a3.append(h54)

        a2.append(img3)
        div2.append(a3)
        div2.append(div3)

        div1.append(a2)
        div1.append(div2)

        container.append(div1)
        hideMain()
    })
}

function search(ele) {
    if(event.key === 'Enter') {
        if (!ele.value) {
            alert('Silakan masukkan sesuatu')
        }
        if (Number(ele.value)) {
            alert('Silakan masukkan input yang benar')
        }
        createSearchResult(filterData(ele.value, dataObat));
        document.getElementById('hasilSearch').classList.remove('hidden')        
    } 
}