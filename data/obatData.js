// Data for checkboxes
const checkboxData = [
    { id: "batuk darah", label: "batuk darah"},
    { id: "batuk kering", label: "batuk kering"},
    { id: "cairan di paru-paru", label: "cairan di paru-paru"},
    { id: "demam", label: "demam"},
    { id: "diare", label: "diare"},
    { id: "gangguan pernafasan akut", label: "gangguan pernafasan akut"},
    { id: "lemas", label: "lemas" },
    { id: "mual", label: "mual"},
    { id: "ngilu", label: "ngilu" },
    { id: "nyeri otot", label: "nyeri otot"},
    { id: "nyeri saat menelan", label: "nyeri saat menelan"},
    { id: "sesak nafas", label: "sesak nafas" },
    { id: "sakit bagian abdonimal", label: "sakit bagian abdonimal"},
    { id: "sakit tenggorokan", label: "sakit tenggorokan"},
    { id: "sulit bernafas", label: "sulit bernafas"},
    { id: "tidak enak badan", label: "tidak enak badan"},
    { id: "tidak nafsu makan", label: "tidak nafsu makan"},
    { id: "tidak nyaman di dada", label: "tidak nyaman di dada"},

];

const db_penyakit = {
    flu: [
        "Sakit tenggorokan",
        "sulit bernafas",
        "demam",
        "tidak nyaman di dada",
        "nyeri otot",
        "nyeri saat menelan",
        "mual",
        "batuk darah",
        "lemas",
    ],
    antrax: [
        "lemas",
        "sesak nafas",
        "ngilu",
        "tidak enak badan",
        "mual",
        "diare",
        "demam",
        "nyeri otot",
        "batuk kering",
        "gangguan pernafasan akut",
        "cairan di paru-paru",
        "sakit bagian abdominal",
        "tidak nafsu makan",
    ],
};

let dataObat = [
    {
        nama: "Paramex",
        harga: 4000,
        stock: 28,
        gejala: ['flu', 'pilek', 'demam', 'lemas', 'antrax'],
        tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
        gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
    },
    {
        nama: "Paramex1",
        harga: 4000,
        stock: 28,
        gejala: ['flu', 'pilek', 'demam'],
        tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
        gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
    },
    {
        nama: "Paramex2",
        harga: 4000,
        stock: 28,
        gejala: ['pilek', 'demam', 'lemas'],
        tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
        gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
    },
    {
        nama: "Paramex3",
        harga: 4000,
        stock: 28,
        gejala: ['flu', 'pilek', 'demam'],
        tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
        gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
    },
    {
        nama: "Paramex4",
        harga: 4000,
        stock: 28,
        gejala: ['pilek', 'demam'],
        tokopediaLink: 'https://www.tokopedia.com/search?st=&q=panadol&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=',
        gambarLink: 'https://down-id.img.susercontent.com/file/bf71b1b6417e71ed15f34911bce5647d'
    },
]