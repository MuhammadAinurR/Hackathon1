// Data for checkboxes
const db_penyakit = {
    flu: [
        "sakit tenggorokan",
        "sulit bernafas",
        "demam",
    ],
    antrax: [
        "lemas",
        "sesak nafas",
        "ngilu",
    ],
};

let dataObat = [
    {
        nama: "Paramex",
        harga: 4000,
        stock: 28,
        gejala: [`sakit kepala`, `sakit gigi`],
        tokopediaLink: ``,
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/9490-1665779892.jpeg'
    },
    {
        nama: "Paramex Flu & Batuk",
        harga: 4000,
        stock: 28,
        gejala: [`demam`, `sakit kepala`, `hidung tersumbat`, `batuk kering`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/9963-1665780348.webp'
    },
    {
        nama: "Paramex Nyeri Otot",
        harga: 4000,
        stock: 28,
        gejala: [`nyeri otot`, `nyeri sendi`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/72337_18-6-2020_14-4-37-1665782199.webp'
    },
    {
        nama: "Panadol Biru",
        harga: 4000,
        stock: 28,
        gejala: [`sakit kepala`, `sakit gigi`, `nyeri otot`, `demam`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/222822_24-8-2022_11-38-12-1665760972.webp'
    },
    {
        nama: "Panadol Hijau-Merah",
        harga: 4000,
        stock: 28,
        gejala: [`demam`, `sakit kepala`, `hidung tersumbat`, `bersin-bersin`, `batuk kering`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/729801_22-11-2021_14-10-58-1665791638.png'
    },
    {
        nama: "Mylanta",
        harga: 4000,
        stock: 28,
        gejala: [`sakit maag`, `asam lambung`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/854811_29-5-2022_21-2-6-1665780051.webp'
    },
    {
        nama: "Promag",
        harga: 4000,
        stock: 28,
        gejala: [`sakit maag`, `GERD`, `perut kembung`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/881948_2-12-2021_16-26-6-1665834167.webp'
    },
    {
        nama: "Actifed",
        harga: 4000,
        stock: 28,
        gejala: [`pilek`, `bersin-bersin`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/2468_22-1-2024_17-18-11.webp'
    },
    {
        nama: "Actifed Plus Expectorant",
        harga: 4000,
        stock: 28,
        gejala: ['pilek', 'batuk berdahak'],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/725469_1-3-2024_9-51-53.webp'
    },
    {
        nama: "Neo Rheumacyl",
        harga: 4000,
        stock: 28,
        gejala: ['nyeri otot', 'nyeri sendi'],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/11449-1665782058.webp'
    },
    {
        nama: "Tolak Angin Cair",
        harga: 4000,
        stock: 28,
        gejala: [`perut kembung`, `mual`, `bersin-bersin`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/49874_26-4-2021_8-26-37-1665791637.webp'
    },
    {
        nama: "Aciblok",
        harga: 4000,
        stock: 28,
        gejala: [`asam lambung`, `GERD`],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/256029_17-1-2020_14-38-41-1665794049.jpeg'
    },
    {
        nama: "Antimo Herbal",
        harga: 4000,
        stock: 28,
        gejala: [`perut kembung`, `mual`],
        tokopediaLink: '',
        gambarLink: 'https://images.tokopedia.net/img/cache/700/hDjmkQ/2021/12/30/961c13a8-8fa6-479e-bada-5d433b6ba5ce.jpg'
    },
    {
        nama: "Bisolvon Extra",
        harga: 4000,
        stock: 28,
        gejala: ['batuk berdahak'],
        tokopediaLink: '',
        gambarLink: 'https://d2qjkwm11akmwu.cloudfront.net/products/329457_16-6-2020_10-7-14-1665779176.webp'
    },
]