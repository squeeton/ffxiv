import React, { Component } from 'react'

const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        classJobs: [],
        data: [],
        items: [],
        recipe: [],
        filterClass: {},
        classString: '',
        loadPercent: 0,
        loadIncrementAmount: 0,
        pageNumber: 1,
        pageTotal: 0,
        totalResults: 0,
        specificLoaded: 0,
        specificTotal: 100
    }

    //TODO:: add item pictures for each item
    test() {
        var testData = [
            {
                "History": [
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Athena Nyx",
                        "ID": "1e1b6c5d1405073293d8c8c34f9e1c1b4644d4f0",
                        "IsHQ": false,
                        "PricePerUnit": 1800000,
                        "PriceTotal": 1800000,
                        "PurchaseDate": 1563807604,
                        "PurchaseDateMS": "1563807604000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Loki Ragnarok",
                        "ID": "a1cb4842c75f3f655435f803d066874cb5da3bc4",
                        "IsHQ": false,
                        "PricePerUnit": 2500000,
                        "PriceTotal": 2500000,
                        "PurchaseDate": 1563507019,
                        "PurchaseDateMS": "1563507019000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Malory Tealeaf",
                        "ID": "bfb402e461b08c7704aa02440fe11541984b4aa2",
                        "IsHQ": false,
                        "PricePerUnit": 2384000,
                        "PriceTotal": 2384000,
                        "PurchaseDate": 1563493745,
                        "PurchaseDateMS": "1563493745000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Kri Northwind",
                        "ID": "0eb55fbf383dcdaff8c0f9f43081ddf0aa394547",
                        "IsHQ": false,
                        "PricePerUnit": 2384000,
                        "PriceTotal": 2384000,
                        "PurchaseDate": 1563472826,
                        "PurchaseDateMS": "1563472826000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Alu Card",
                        "ID": "17f1b534236c0dc4218557042eef99104154d0a7",
                        "IsHQ": false,
                        "PricePerUnit": 1500000,
                        "PriceTotal": 1500000,
                        "PurchaseDate": 1563365055,
                        "PurchaseDateMS": "1563365055000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Annabell Lee",
                        "ID": "e79a8173383dee61617a042c0b26fab02c42cf55",
                        "IsHQ": false,
                        "PricePerUnit": 1400000,
                        "PriceTotal": 1400000,
                        "PurchaseDate": 1563324262,
                        "PurchaseDateMS": "1563324262000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Kita Leelik",
                        "ID": "42e3687a44756f871e61ef7a1e55cf8be291f331",
                        "IsHQ": false,
                        "PricePerUnit": 1399999,
                        "PriceTotal": 1399999,
                        "PurchaseDate": 1563323355,
                        "PurchaseDateMS": "1563323355000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Alice Mothra",
                        "ID": "d13373b9b966c48b8139279ac92f89bc782d28ff",
                        "IsHQ": false,
                        "PricePerUnit": 1398999,
                        "PriceTotal": 1398999,
                        "PurchaseDate": 1563320969,
                        "PurchaseDateMS": "1563320969000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Vara Aesir",
                        "ID": "0eefb876f79ee0413f0cfa1c0e0663c72e1ce1f6",
                        "IsHQ": false,
                        "PricePerUnit": 1499999,
                        "PriceTotal": 1499999,
                        "PurchaseDate": 1563235064,
                        "PurchaseDateMS": "1563235064000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Kaylee Fortuna",
                        "ID": "87194fb11f2ece1266afc16de923f0779348dd52",
                        "IsHQ": false,
                        "PricePerUnit": 1799999,
                        "PriceTotal": 1799999,
                        "PurchaseDate": 1563148213,
                        "PurchaseDateMS": "1563148213000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Maddie Liebestraum",
                        "ID": "ce555e131ee1fdb0141252611aa0a4459b0bcb98",
                        "IsHQ": false,
                        "PricePerUnit": 4500000,
                        "PriceTotal": 4500000,
                        "PurchaseDate": 1562892450,
                        "PurchaseDateMS": "1562892450000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563829371,
                        "CharacterID": null,
                        "CharacterName": "Stardust Horizon",
                        "ID": "707c54ff814dea3ece9ce00e5fc83b84a1b98130",
                        "IsHQ": false,
                        "PricePerUnit": 2699999,
                        "PriceTotal": 2699999,
                        "PurchaseDate": 1562838039,
                        "PurchaseDateMS": "1562838039000",
                        "Quantity": 1
                    }
                ],
                "ID": "25_27300",
                "IsTracked": true,
                "Item": {
                    "ID": 27300,
                    "Icon": "/i/053000/053800.png",
                    "LevelItem": 450,
                    "Name": "Titania Shadow Box",
                    "Name_de": "Titania-Trophäe",
                    "Name_en": "Titania Shadow Box",
                    "Name_fr": "Effigie murale de Titania",
                    "Name_ja": "ティターニアの壁掛け",
                    "Rarity": 1
                },
                "ItemID": 27300,
                "LodestoneID": "d86171258e0",
                "Prices": [
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Ble Holmes",
                        "ID": "350de4ab6bbfb3d42bfca31ef040a3c4d62e93e8",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 1599000,
                        "PriceTotal": 1599000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Remuu",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Adrene Majeek",
                        "ID": "a23421b68d36c4c3bdab48ba069fe4727d2de197",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 1600000,
                        "PriceTotal": 1600000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Lewelyn",
                        "StainID": 0,
                        "TownID": 1
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Gala Lili",
                        "ID": "bcaaa3ef9bf16134ad4caf69249a533285fa19bd",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 1668571,
                        "PriceTotal": 1668571,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Duci",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Aethys Aeon",
                        "ID": "97acc8c6767fd46d2776a54be9af527696f969f4",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 1700000,
                        "PriceTotal": 1700000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Varlet",
                        "StainID": 0,
                        "TownID": 1
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Syrie Rae",
                        "ID": "9ce8f335dc27102b883247038081b3d68757d19a",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 1798570,
                        "PriceTotal": 1798570,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Isisis",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "The Condor",
                        "ID": "26362a508de8de064a872a9c5df6569f16174882",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 2000000,
                        "PriceTotal": 2000000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Nicholas'gers",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Drahcir Gneh",
                        "ID": "d01962964c2104c7a8377ee685d204a08fc4b3fc",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 3899999,
                        "PriceTotal": 3899999,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Rebekahh",
                        "StainID": 0,
                        "TownID": 7
                    },
                    {
                        "Added": 1563829418,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Rikku Azena",
                        "ID": "27fa039e21a4cf1a7fefcd16031aeb77b20e7ea7",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 10000000,
                        "PriceTotal": 10000000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Shortcakes",
                        "StainID": 0,
                        "TownID": 3
                    }
                ],
                "Server": 25,
                "UpdatePriority": 3,
                "Updated": 1563829418,
                "MinPrice": 1599000,
                "MinPriceQuantity": 1,
                "MinPriceHQ": 0,
                "LastWeekGil": 9068000,
                "LastWeekTransactions": 4,
                "LastWeekQuantity": 4,
                "Rarity": "Common",
                "Crafters": "Goldsmith, Miner",
                "CraftLvl": 80
            },
            {
                "History": [
                    {
                        "Added": 1564053402,
                        "CharacterID": null,
                        "CharacterName": "Bao Bao",
                        "ID": "0644c4b312148e4ab821418631b89bc30c4cf3f0",
                        "IsHQ": true,
                        "PricePerUnit": 124999,
                        "PriceTotal": 124999,
                        "PurchaseDate": 1564025185,
                        "PurchaseDateMS": "1564025185000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1564019480,
                        "CharacterID": null,
                        "CharacterName": "Gingery Glitter",
                        "ID": "ba434575504f82ab8006ba018a7150d20af08277",
                        "IsHQ": false,
                        "PricePerUnit": 25000,
                        "PriceTotal": 25000,
                        "PurchaseDate": 1564017162,
                        "PurchaseDateMS": "1564017162000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563979350,
                        "CharacterID": null,
                        "CharacterName": "Dae'ros Dai'meyez",
                        "ID": "b4958ef988806cb030828b01e0a4e1860b48faad",
                        "IsHQ": true,
                        "PricePerUnit": 109999,
                        "PriceTotal": 109999,
                        "PurchaseDate": 1563953136,
                        "PurchaseDateMS": "1563953136000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563979350,
                        "CharacterID": null,
                        "CharacterName": "True'monado Wyrmblood",
                        "ID": "326c391b52cd16392994535b2a63d1e9a968c0b5",
                        "IsHQ": true,
                        "PricePerUnit": 109000,
                        "PriceTotal": 109000,
                        "PurchaseDate": 1563939483,
                        "PurchaseDateMS": "1563939483000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563979350,
                        "CharacterID": null,
                        "CharacterName": "True'monado Wyrmblood",
                        "ID": "ec07958e896b8b819655d7daea3c016ef510f319",
                        "IsHQ": false,
                        "PricePerUnit": 100000,
                        "PriceTotal": 100000,
                        "PurchaseDate": 1563939143,
                        "PurchaseDateMS": "1563939143000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563938823,
                        "CharacterID": null,
                        "CharacterName": "Kevel Celadreal",
                        "ID": "fab870bdc7f98986e5406d15d348b7b9641e920c",
                        "IsHQ": true,
                        "PricePerUnit": 110000,
                        "PriceTotal": 110000,
                        "PurchaseDate": 1563931757,
                        "PurchaseDateMS": "1563931757000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563938823,
                        "CharacterID": null,
                        "CharacterName": "Lulu Toyoma",
                        "ID": "db8244bcf64bcb6d97c465343bcb473124550273",
                        "IsHQ": true,
                        "PricePerUnit": 109998,
                        "PriceTotal": 109998,
                        "PurchaseDate": 1563923992,
                        "PurchaseDateMS": "1563923992000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563869021,
                        "CharacterID": null,
                        "CharacterName": "Raiden Maibito",
                        "ID": "020713753f2a440968bd8e0c95549868be117036",
                        "IsHQ": true,
                        "PricePerUnit": 145325,
                        "PriceTotal": 145325,
                        "PurchaseDate": 1563863755,
                        "PurchaseDateMS": "1563863755000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563869021,
                        "CharacterID": null,
                        "CharacterName": "Kujah Cross",
                        "ID": "4fba3dfc60f097c84c74160296b1f062ea619be2",
                        "IsHQ": true,
                        "PricePerUnit": 145332,
                        "PriceTotal": 145332,
                        "PurchaseDate": 1563803243,
                        "PurchaseDateMS": "1563803243000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Candle Guuse",
                        "ID": "4b57f75a7bc1e8e9830ce8e8e315e8019b118757",
                        "IsHQ": true,
                        "PricePerUnit": 125000,
                        "PriceTotal": 125000,
                        "PurchaseDate": 1563761850,
                        "PurchaseDateMS": "1563761850000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Daerellin Paxfyre",
                        "ID": "fa628fab3c99f8e63d736b65db4f68b8cc807f8d",
                        "IsHQ": true,
                        "PricePerUnit": 124999,
                        "PriceTotal": 124999,
                        "PurchaseDate": 1563760456,
                        "PurchaseDateMS": "1563760456000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Simbul Seler",
                        "ID": "11119dc7defc8d67dce5d486f45a1b83c821dba8",
                        "IsHQ": true,
                        "PricePerUnit": 124999,
                        "PriceTotal": 124999,
                        "PurchaseDate": 1563759410,
                        "PurchaseDateMS": "1563759410000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Selh'teus Martell",
                        "ID": "cc6ea8643c20d75612ef266e8dca40455083ce18",
                        "IsHQ": true,
                        "PricePerUnit": 123999,
                        "PriceTotal": 123999,
                        "PurchaseDate": 1563748697,
                        "PurchaseDateMS": "1563748697000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Dragus Dragonstone",
                        "ID": "e0828889c448bc1a35cbd5d6655a5551b5c0b9fe",
                        "IsHQ": true,
                        "PricePerUnit": 123998,
                        "PriceTotal": 123998,
                        "PurchaseDate": 1563744510,
                        "PurchaseDateMS": "1563744510000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Adriel Katsuki",
                        "ID": "f1a3c7016c491830f2841c7a6bdd36c457ec7b42",
                        "IsHQ": true,
                        "PricePerUnit": 139999,
                        "PriceTotal": 139999,
                        "PurchaseDate": 1563674223,
                        "PurchaseDateMS": "1563674223000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Shizuto Gallifrey",
                        "ID": "a3c349ec88e245a9633662c016086b37b823f137",
                        "IsHQ": true,
                        "PricePerUnit": 139999,
                        "PriceTotal": 139999,
                        "PurchaseDate": 1563659359,
                        "PurchaseDateMS": "1563659359000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Club Ette",
                        "ID": "7acd15e4eccb29a2d8b4cc5ae1634cd08b2c7cba",
                        "IsHQ": false,
                        "PricePerUnit": 35000,
                        "PriceTotal": 35000,
                        "PurchaseDate": 1563656975,
                        "PurchaseDateMS": "1563656975000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Kita Sifblood",
                        "ID": "47b2819eaf57c213763dc0b21303caa997595aaa",
                        "IsHQ": false,
                        "PricePerUnit": 35000,
                        "PriceTotal": 35000,
                        "PurchaseDate": 1563653835,
                        "PurchaseDateMS": "1563653835000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Raine Cross",
                        "ID": "3ceff20f183569a666ddbca15a132d3f79fb465e",
                        "IsHQ": true,
                        "PricePerUnit": 139995,
                        "PriceTotal": 139995,
                        "PurchaseDate": 1563647183,
                        "PurchaseDateMS": "1563647183000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Celestine Paradox",
                        "ID": "9004c784dec230c4086cd0f55d28458bd5ec0db4",
                        "IsHQ": true,
                        "PricePerUnit": 139994,
                        "PriceTotal": 139994,
                        "PurchaseDate": 1563647092,
                        "PurchaseDateMS": "1563647092000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Orrin Shade",
                        "ID": "73b0508512255021bab7c4223892142242b05321",
                        "IsHQ": true,
                        "PricePerUnit": 138999,
                        "PriceTotal": 138999,
                        "PurchaseDate": 1563599314,
                        "PurchaseDateMS": "1563599314000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Fumbles Uzumaki",
                        "ID": "48403d1f808274d6d699a6d58c73b12858f9b46e",
                        "IsHQ": true,
                        "PricePerUnit": 145000,
                        "PriceTotal": 145000,
                        "PurchaseDate": 1563594324,
                        "PurchaseDateMS": "1563594324000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Crib Midget",
                        "ID": "d31160253a98b793bb1f0a2d7de742fe5d48c04a",
                        "IsHQ": true,
                        "PricePerUnit": 148998,
                        "PriceTotal": 148998,
                        "PurchaseDate": 1563515246,
                        "PurchaseDateMS": "1563515246000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Valiantheart Warson",
                        "ID": "3b76a5c35e7016c238ddb93cd3ab91064ac5bac6",
                        "IsHQ": true,
                        "PricePerUnit": 147000,
                        "PriceTotal": 147000,
                        "PurchaseDate": 1563479101,
                        "PurchaseDateMS": "1563479101000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Kano Rin",
                        "ID": "cc2d2d5c970869e240453bfc5c982401128e4fb1",
                        "IsHQ": true,
                        "PricePerUnit": 148997,
                        "PriceTotal": 148997,
                        "PurchaseDate": 1563411644,
                        "PurchaseDateMS": "1563411644000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Sekari Katsura",
                        "ID": "c957a7e76de2c2999f32e97b89693ca90c2186ef",
                        "IsHQ": true,
                        "PricePerUnit": 150000,
                        "PriceTotal": 150000,
                        "PurchaseDate": 1563394515,
                        "PurchaseDateMS": "1563394515000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Zenaku Bane",
                        "ID": "8d4f7db576fd5106ddf8aa1f0e126c0b590461d0",
                        "IsHQ": false,
                        "PricePerUnit": 20000,
                        "PriceTotal": 20000,
                        "PurchaseDate": 1563392404,
                        "PurchaseDateMS": "1563392404000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Amelia Day",
                        "ID": "12816f6ae9767ccfa1a1bc20bd32bb008e59b313",
                        "IsHQ": true,
                        "PricePerUnit": 149000,
                        "PriceTotal": 149000,
                        "PurchaseDate": 1563381282,
                        "PurchaseDateMS": "1563381282000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563801764,
                        "CharacterID": null,
                        "CharacterName": "Alturn Hedden",
                        "ID": "bdee62c62b816409e92799ea47d1b6b8d4ddc0d6",
                        "IsHQ": true,
                        "PricePerUnit": 100000,
                        "PriceTotal": 100000,
                        "PurchaseDate": 1563238142,
                        "PurchaseDateMS": "1563238142000",
                        "Quantity": 1
                    }
                ],
                "ID": "25_27147",
                "IsTracked": true,
                "Item": {
                    "ID": 27147,
                    "Icon": "/i/035000/035732.png",
                    "LevelItem": 430,
                    "Name": "Dwarven Mythril Frypan",
                    "Name_de": "Edelmithril-Bratpfanne",
                    "Name_en": "Dwarven Mythril Frypan",
                    "Name_fr": "Poêle à frire en mithril noble",
                    "Name_ja": "ハイミスリルフライパン",
                    "Rarity": 1
                },
                "ItemID": 27147,
                "LodestoneID": "049128023ac",
                "Prices": [
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kellan James",
                        "ID": "db3b58128f9a818aa8eba82d2129bf28670d96e1",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 30000,
                        "PriceTotal": 30000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cassbabe",
                        "StainID": 0,
                        "TownID": 3
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Jondra Highfeather",
                        "ID": "37533c1ef25157b7c99de073168954c02664c44e",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 34709,
                        "PriceTotal": 34709,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Gearrr",
                        "StainID": 0,
                        "TownID": 2
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Niclause Aigoullette",
                        "ID": "d9c06b72fd092d1ccbe242a9c59a0935d4f78293",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 35000,
                        "PriceTotal": 35000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Casandras",
                        "StainID": 0,
                        "TownID": 2
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Captain Jmo",
                        "ID": "6b38b82efb765934b85f650cd304769885fdb10f",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 125000,
                        "PriceTotal": 125000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cole",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Captain Jmo",
                        "ID": "6b38b82efb765934b85f650cd304769885fdb10f",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 125000,
                        "PriceTotal": 125000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Cole",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Karsa Unchained",
                        "ID": "61da303c8acd6c21d685c4356557667096430d77",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 144899,
                        "PriceTotal": 144899,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Sdfklmsdf",
                        "StainID": 0,
                        "TownID": 1
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Apple Epocan",
                        "ID": "31924f85596f020e08696d72981d752bcf39f4b5",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 144900,
                        "PriceTotal": 144900,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Genis",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Ishamael Nae'blis",
                        "ID": "6328d7435ae65b13b6ac428c9c9e23b12b417460",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 145325,
                        "PriceTotal": 145325,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Aaahhhpickmeplease",
                        "StainID": 0,
                        "TownID": 1
                    },
                    {
                        "Added": 1564053429,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Draxirae Maz'tari",
                        "ID": "879e03340beb7b31c52c983d035672bb50b222fa",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 145333,
                        "PriceTotal": 145333,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Arietta",
                        "StainID": 0,
                        "TownID": 7
                    }
                ],
                "Server": 25,
                "UpdatePriority": 2,
                "Updated": 1564053429,
                "MinPrice": 30000,
                "MinPriceQuantity": 1,
                "MinPriceHQ": 125000,
                "LastWeekGil": 2812632,
                "LastWeekTransactions": 24,
                "LastWeekQuantity": 24,
                "Rarity": "Common",
                "Crafters": "Armorer",
                "CraftLvl": 80
            },
            {
                "History": [
                    {
                        "Added": 1564023322,
                        "CharacterID": null,
                        "CharacterName": "Neithan Turambar",
                        "ID": "c5066590205b1a8e4dbc37ab97f86ede8f399f73",
                        "IsHQ": true,
                        "PricePerUnit": 80669,
                        "PriceTotal": 80669,
                        "PurchaseDate": 1564017411,
                        "PurchaseDateMS": "1564017411000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563983921,
                        "CharacterID": null,
                        "CharacterName": "Konata Tykha",
                        "ID": "e248b097dc291919b934084b107e7e8a4e837ba5",
                        "IsHQ": true,
                        "PricePerUnit": 86000,
                        "PriceTotal": 86000,
                        "PurchaseDate": 1563957265,
                        "PurchaseDateMS": "1563957265000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563983921,
                        "CharacterID": null,
                        "CharacterName": "Dae'ros Dai'meyez",
                        "ID": "4d74fb53b7e61594e62c2bb490e586a96fbd580a",
                        "IsHQ": true,
                        "PricePerUnit": 85999,
                        "PriceTotal": 85999,
                        "PurchaseDate": 1563952727,
                        "PurchaseDateMS": "1563952727000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563942615,
                        "CharacterID": null,
                        "CharacterName": "Mighty Pickle",
                        "ID": "5be21b77485ce7bbe69184486f3a3e6107ab7265",
                        "IsHQ": true,
                        "PricePerUnit": 87000,
                        "PriceTotal": 87000,
                        "PurchaseDate": 1563929730,
                        "PurchaseDateMS": "1563929730000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563872196,
                        "CharacterID": null,
                        "CharacterName": "R'oadan Nunh",
                        "ID": "d2fbea1ade61ea309aa7b03bd1f11d27e140b433",
                        "IsHQ": true,
                        "PricePerUnit": 89999,
                        "PriceTotal": 89999,
                        "PurchaseDate": 1563848155,
                        "PurchaseDateMS": "1563848155000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563872196,
                        "CharacterID": null,
                        "CharacterName": "Sassy Katt",
                        "ID": "a111e3a1e433c4ec0660d761ac1e9661f8dd5eb4",
                        "IsHQ": true,
                        "PricePerUnit": 89999,
                        "PriceTotal": 89999,
                        "PurchaseDate": 1563831888,
                        "PurchaseDateMS": "1563831888000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "I'm Trash",
                        "ID": "813a56ce4b08c50429672988a301778d6814ce69",
                        "IsHQ": true,
                        "PricePerUnit": 91770,
                        "PriceTotal": 91770,
                        "PurchaseDate": 1563793978,
                        "PurchaseDateMS": "1563793978000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Zartandas Estoven",
                        "ID": "ee10dd8ef1d5c99f1531badbd074bc606884feef",
                        "IsHQ": true,
                        "PricePerUnit": 92994,
                        "PriceTotal": 92994,
                        "PurchaseDate": 1563766566,
                        "PurchaseDateMS": "1563766566000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Selh'teus Martell",
                        "ID": "d5e9910c536074733b0a01b42af4d631f16a2d7e",
                        "IsHQ": true,
                        "PricePerUnit": 92993,
                        "PriceTotal": 92993,
                        "PurchaseDate": 1563748664,
                        "PurchaseDateMS": "1563748664000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Bunny Meow",
                        "ID": "21c68e3ea50b8fa0e51c53eb0a512b7c50a63368",
                        "IsHQ": true,
                        "PricePerUnit": 92992,
                        "PriceTotal": 92992,
                        "PurchaseDate": 1563745394,
                        "PurchaseDateMS": "1563745394000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Noxxa Artemis",
                        "ID": "0d12d4e6db930826676aa95fad7a05b95e1442d0",
                        "IsHQ": true,
                        "PricePerUnit": 92999,
                        "PriceTotal": 92999,
                        "PurchaseDate": 1563686255,
                        "PurchaseDateMS": "1563686255000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Club Ette",
                        "ID": "058735911e936459338db3fad25c304d5299d632",
                        "IsHQ": true,
                        "PricePerUnit": 99985,
                        "PriceTotal": 99985,
                        "PurchaseDate": 1563503112,
                        "PurchaseDateMS": "1563503112000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Rumble Muffin",
                        "ID": "93bc2bf1c1c1d401a015d0662c41bdf40b36cfcc",
                        "IsHQ": true,
                        "PricePerUnit": 99983,
                        "PriceTotal": 99983,
                        "PurchaseDate": 1563485022,
                        "PurchaseDateMS": "1563485022000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Sekari Katsura",
                        "ID": "d4b8b4c59c124e4c15b0870cce98ca03c3776302",
                        "IsHQ": true,
                        "PricePerUnit": 119988,
                        "PriceTotal": 119988,
                        "PurchaseDate": 1563394604,
                        "PurchaseDateMS": "1563394604000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Shizuto Gallifrey",
                        "ID": "a5c666cc4365657ede00159f24f415addb8b8cbd",
                        "IsHQ": true,
                        "PricePerUnit": 118999,
                        "PriceTotal": 118999,
                        "PurchaseDate": 1563234861,
                        "PurchaseDateMS": "1563234861000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Gray Poupon",
                        "ID": "bac574286d10985d1f03a7bfbc3c75f43cc20b1b",
                        "IsHQ": true,
                        "PricePerUnit": 120000,
                        "PriceTotal": 120000,
                        "PurchaseDate": 1563222059,
                        "PurchaseDateMS": "1563222059000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Ergo Proxy",
                        "ID": "72410e6ff9829d94295cae48b27ad1ef4b04e762",
                        "IsHQ": true,
                        "PricePerUnit": 149999,
                        "PriceTotal": 149999,
                        "PurchaseDate": 1563054191,
                        "PurchaseDateMS": "1563054191000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Sophia Sweetheart",
                        "ID": "e1d8acde12d841f283228bdc357be47d5d5b6e1e",
                        "IsHQ": true,
                        "PricePerUnit": 149000,
                        "PriceTotal": 149000,
                        "PurchaseDate": 1563050902,
                        "PurchaseDateMS": "1563050902000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Koneko Kisu",
                        "ID": "5c61e4d17b937c1611d0e9c1dd37c45cdae847d0",
                        "IsHQ": true,
                        "PricePerUnit": 198789,
                        "PriceTotal": 198789,
                        "PurchaseDate": 1562997403,
                        "PurchaseDateMS": "1562997403000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Guy Dubastyra",
                        "ID": "5f011e811da1764f1e94ffc10731c9d27a0fedc3",
                        "IsHQ": true,
                        "PricePerUnit": 195789,
                        "PriceTotal": 195789,
                        "PurchaseDate": 1562967469,
                        "PurchaseDateMS": "1562967469000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Bmac Stylz",
                        "ID": "e1ceea92df9c68cf048efc705d389d85e554e305",
                        "IsHQ": true,
                        "PricePerUnit": 195700,
                        "PriceTotal": 195700,
                        "PurchaseDate": 1562950329,
                        "PurchaseDateMS": "1562950329000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Genboo Turtle",
                        "ID": "89f4bc2fa10dd55dcb36c10c2e32d4cb2565199b",
                        "IsHQ": true,
                        "PricePerUnit": 736700,
                        "PriceTotal": 736700,
                        "PurchaseDate": 1562835450,
                        "PurchaseDateMS": "1562835450000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Momoko Odagiri",
                        "ID": "9fa63ab5f6ef036c92537c2cb118094f24c4b67f",
                        "IsHQ": true,
                        "PricePerUnit": 743994,
                        "PriceTotal": 743994,
                        "PurchaseDate": 1562705972,
                        "PurchaseDateMS": "1562705972000",
                        "Quantity": 1
                    },
                    {
                        "Added": 1563804243,
                        "CharacterID": null,
                        "CharacterName": "Ruu Nyxis",
                        "ID": "d1d8b94d20bfa3f62fc3b41645e461c174bee386",
                        "IsHQ": true,
                        "PricePerUnit": 959000,
                        "PriceTotal": 959000,
                        "PurchaseDate": 1562557650,
                        "PurchaseDateMS": "1562557650000",
                        "Quantity": 1
                    }
                ],
                "ID": "25_27155",
                "IsTracked": true,
                "Item": {
                    "ID": 27155,
                    "Icon": "/i/035000/035455.png",
                    "LevelItem": 430,
                    "Name": "Dwarven Mythril Awl",
                    "Name_de": "Edelmithril-Ahle",
                    "Name_en": "Dwarven Mythril Awl",
                    "Name_fr": "Alêne en mithril noble",
                    "Name_ja": "ハイミスリルアウル",
                    "Rarity": 1
                },
                "ItemID": 27155,
                "LodestoneID": "8c70345b511",
                "Prices": [
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Kirux Stratus",
                        "ID": "95deedf13561f446b362d299cef6e407e85f8ade",
                        "IsCrafted": true,
                        "IsHQ": false,
                        "Materia": [],
                        "PricePerUnit": 45000,
                        "PriceTotal": 45000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Xi'on",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Yosik Grica",
                        "ID": "d2a289634dcb857523b36afcd66b4c57ca4c11fa",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 80670,
                        "PriceTotal": 80670,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Sysuki",
                        "StainID": 0,
                        "TownID": 1
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Sora Aether",
                        "ID": "ab51dfba4496c6ea4aea819fbab57386002ab5ff",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 80679,
                        "PriceTotal": 80679,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Mistic",
                        "StainID": 0,
                        "TownID": 2
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Lucia Ausalina",
                        "ID": "3400f1dbef1a87318857487c4c117dc9738c7fd0",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 80680,
                        "PriceTotal": 80680,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Lunaausalina",
                        "StainID": 0,
                        "TownID": 4
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Captain Jmo",
                        "ID": "659e435510affc1fb0f1126324a81aef754b8de5",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 90000,
                        "PriceTotal": 90000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Coletrain",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Captain Jmo",
                        "ID": "659e435510affc1fb0f1126324a81aef754b8de5",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 90000,
                        "PriceTotal": 90000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Coletrain",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Captain Jmo",
                        "ID": "659e435510affc1fb0f1126324a81aef754b8de5",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 90000,
                        "PriceTotal": 90000,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Coletrain",
                        "StainID": 0,
                        "TownID": 10
                    },
                    {
                        "Added": 1564023396,
                        "CreatorSignatureID": null,
                        "CreatorSignatureName": "Ishamael Nae'blis",
                        "ID": "54d574953f2964929e56b8255b35a200ee75e1c2",
                        "IsCrafted": true,
                        "IsHQ": true,
                        "Materia": [],
                        "PricePerUnit": 149989,
                        "PriceTotal": 149989,
                        "Quantity": 1,
                        "RetainerID": null,
                        "RetainerName": "Hididdlyho",
                        "StainID": 0,
                        "TownID": 7
                    }
                ],
                "Server": 25,
                "UpdatePriority": 3,
                "Updated": 1564023396,
                "MinPrice": 45000,
                "MinPriceQuantity": 1,
                "MinPriceHQ": 80670,
                "LastWeekGil": 1183382,
                "LastWeekTransactions": 13,
                "LastWeekQuantity": 13,
                "Rarity": "Common",
                "Crafters": "Blacksmith, Armorer",
                "CraftLvl": 79
            }
        ]

        this.setState({
            items: testData,
            loadPercent: 100,
            specificLoaded: 100
        });
    }

    componentDidMount() {
        console.log('Fetching Data');
        this.FetchClasses();
        this.FetchData(this.state.pageNumber);
        // this.test();
        // this.FetchRecipes();

    }

    FetchClasses() {
        fetch('https://xivapi.com/classJob?columns=ID,Name', { mode: 'cors' })
            .then(response => response.json()
            )
            .then(response => {
                this.setState({
                    classJobs: response.Results,
                    filterClass: {
                        alchemist: false,
                        armorer: false,
                        blacksmith: false,
                        botanist: false,
                        carpenter: false,
                        culinarian: false,
                        fisher: false,
                        goldsmith: false,
                        leatherworker: false,
                        miner: false,
                        weaver: false,
                        allClasses: true
                    }
                })
            });
    }

    FetchData(pageNum) {
        let itemIDs;
        console.log('Fetching page:', pageNum, 'on:', new Date());
        fetch(`https://xivapi.com/search?indexes=item&filters=ItemSearchCategory.ID>=9&page=${pageNum}&columns=ID`, { mode: 'cors' })
            .then(response => { return response.json() }
            )
            .then(response => {
                // console.log('itemList Initial Response', response);
                itemIDs = response.Results.map((i) => { return (i.ID); }).toString();
                var loadIncrementAmount = ((1 / (response.Pagination.PageTotal * 2) * 100));

                this.setState(prevState => ({
                    pageTotal: response.Pagination.PageTotal,
                    pageNumber: response.Pagination.PageNext,
                    loadIncrementAmount: loadIncrementAmount,
                    totalResults: response.Pagination.ResultsTotal,
                    loadPercent: prevState.loadPercent + loadIncrementAmount
                }));

                fetch(`https://xivapi.com/market/items?servers=Goblin&ids=${itemIDs}`, { mode: 'cors' })
                    .then(response => response.json())
                    .then(data => {
                        // console.log('item data Response', data);

                        this.setState(prevState => ({
                            data: [...prevState.data,
                            ...data],
                            loadPercent: prevState.loadPercent + prevState.loadIncrementAmount
                        }));
                    })
                    .then(data => {
                        if (this.state.data.length === this.state.totalResults) {
                            this.FormatData();
                            this.setState({
                                loadPercent: 100
                            }
                            );
                        }
                    });

                if (response.Pagination.PageNext !== null) {
                    setTimeout(this.FetchData(response.Pagination.PageNext), 200);
                }


            });
    }

    FormatData() {

        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

        let items = this.state.data;

        items = items.map(i => ({
            ...i.Goblin,
            MinPrice: i.Goblin.Prices.reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit || 0,
            MinPriceQuantity: i.Goblin.Prices.reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).Quantity || 0,
            MinPriceHQ: i.Goblin.Prices.filter(({ IsHQ }) => IsHQ === true).reduce((prev, current) =>
                (prev.PricePerUnit < current.PricePerUnit) ? prev : current, 0).PricePerUnit || 0,
            LastWeekGil: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.PriceTotal).reduce((prev, next) => prev + next, 0),
            LastWeekTransactions: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).length,
            LastWeekQuantity: i.Goblin.History.filter(d => d.PurchaseDateMS >= oneWeekAgo).map(item => item.Quantity).reduce((prev, next) => prev + next, 0),
            Rarity: this.GetRarity(i.Goblin.Item.Rarity)
        }));

        this.setState({
            items: items,
            data: []
        })
        this.FetchRecipes();
    }

    FetchRecipes() {
        fetch(`https://xivapi.com/search`, {
            method: 'POST',
            body: `{"indexes": "item","columns": "ID,Recipes","body": {"query": {"bool": {"filter": [{"range": {"ItemSearchCategory.ID": {"gte": "9"}}}]}},"from": ${this.state.specificLoaded},"size": 100,"sort": [{"LevelItem": "desc"}]}}`
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log('recipe response', data);
                this.setState(prevState => ({
                    specificLoaded: prevState.specificLoaded + 100,
                    specificTotal: data.Pagination.ResultsTotal,
                    recipe: [
                        ...prevState.recipe,
                        ...data.Results
                    ]
                }));
                if (this.state.specificLoaded < data.Pagination.ResultsTotal) {
                    setTimeout(this.FetchRecipes(), 200);
                }
                else {
                    this.FormatRecipes()
                }
            });
    }

    FormatRecipes() {

        var recipe = this.state.recipe;
        for (var i = 0; i < recipe.length; i++) {
            recipe[i]["ItemID"] = recipe[i]["ID"];
            delete recipe[i]["ID"];
            let craftClass = '';
            let craftLvl;
            if (recipe[i].Recipes) {
                let classes = [];
                let lvl = [];
                for (var j = 0; j < recipe[i].Recipes.length; j++) {
                    classes.push(this.GetClass(recipe[i].Recipes[j].ClassJobID));
                    lvl.push(recipe[i].Recipes[j].Level);
                }
                craftClass = classes.join(', ');
                craftLvl = Math.min(lvl);
            }
            recipe[i].Crafters = craftClass;
            recipe[i].CraftLvl = craftLvl;
            delete recipe[i]["Recipes"];
        }

        this.setState({
            recipe: recipe
        });

        this.MergeRecipes();
    }

    MergeRecipes() {
        var items = this.state.items;
        var recipe = this.state.recipe;

        let merged = [];
        for (let i = 0; i < items.length; i++) {
            merged.push({
                ...items[i],
                ...(recipe.find((itmInner) => itmInner.ItemID === items[i].ItemID))
            }
            );
        }

        this.setState(prevState => ({
            items: merged,
            recipe: []
        }));
        console.log(merged);
    }

    GetClass(id) {
        if (id === null) {
            return '';
        }
        var result = this.state.classJobs.find(obj => {
            return obj.ID === id;
        })
        return this.toTitleCase(result.Name);
    }

    GetRarity(id) {
        switch (id) {
            case 1: return 'Common'
            case 2: return 'Uncommon'
            case 3: return 'Rare'
            case 4: return 'Relic'
            case 7: return 'Aetherial'
            default: return 'Common'
        }
    }

    FilterClasses = (e, className) => {
        var filterClasses = { ...this.state.filterClass }


        if (className === 'Alchemist') {
            filterClasses.alchemist = !filterClasses.alchemist;
        }
        if (className === 'Armorer') {
            filterClasses.armorer = !filterClasses.armorer;
        }
        if (className === 'Blacksmith') {
            filterClasses.blacksmith = !filterClasses.blacksmith;
        }
        if (className === 'Carpenter') {
            filterClasses.carpenter = !filterClasses.carpenter;
        }
        if (className === 'Culinarian') {
            filterClasses.culinarian = !filterClasses.culinarian;
        }
        if (className === 'Goldsmith') {
            filterClasses.goldsmith = !filterClasses.goldsmith;
        }
        if (className === 'Leatherworker') {
            filterClasses.leatherworker = !filterClasses.leatherworker;
        }
        if (className === 'Weaver') {
            filterClasses.weaver = !filterClasses.weaver;
        }
        if (className === 'Botanist') {
            filterClasses.botanist = !filterClasses.botanist;
        }
        if (className === 'Fisher') {
            filterClasses.fisher = !filterClasses.fisher;
        }
        if (className === 'Miner') {
            filterClasses.miner = !filterClasses.miner;
        }


        if (filterClasses.alchemist && filterClasses.armorer && filterClasses.blacksmith && filterClasses.botanist
            && filterClasses.carpenter && filterClasses.culinarian && filterClasses.fisher && filterClasses.goldsmith
            && filterClasses.leatherworker && filterClasses.miner && filterClasses.weaver) {
            filterClasses.alchemist = false;
            filterClasses.armorer = false;
            filterClasses.blacksmith = false;
            filterClasses.botanist = false;
            filterClasses.carpenter = false;
            filterClasses.culinarian = false;
            filterClasses.fisher = false;
            filterClasses.goldsmith = false;
            filterClasses.leatherworker = false;
            filterClasses.miner = false;
            filterClasses.weaver = false;
            filterClasses.allClasses = true;
        }
        else if (filterClasses.alchemist === false && filterClasses.armorer === false &&
            filterClasses.blacksmith === false && filterClasses.botanist === false &&
            filterClasses.carpenter === false && filterClasses.culinarian === false &&
            filterClasses.fisher === false && filterClasses.goldsmith === false &&
            filterClasses.leatherworker === false && filterClasses.miner === false &&
            filterClasses.weaver) {
            filterClasses.allClasses = false;
        }
        else {
            filterClasses.allClasses = false;
        }
        this.setState({
            filterClass: filterClasses
        });
        this.getClassString(e, filterClasses);
    }

    getClassString(e, filterClasses) {
        var classString = '';
        if (filterClasses.alchemist) {
            classString = classString + 'alchemist,';
        }
        if (filterClasses.armorer) {
            classString = classString + 'armorer,';
        }
        if (filterClasses.blacksmith) {
            classString = classString + 'blacksmith,';
        }
        if (filterClasses.botanist) {
            classString = classString + 'botanist,';
        }
        if (filterClasses.carpenter) {
            classString = classString + 'carpenter,';
        }
        if (filterClasses.culinarian) {
            classString = classString + 'culinarian,';
        }
        if (filterClasses.fisher) {
            classString = classString + 'fisher,';
        }
        if (filterClasses.goldsmith) {
            classString = classString + 'goldsmith,';
        }
        if (filterClasses.leatherworker) {
            classString = classString + 'leatherworker,';
        }
        if (filterClasses.miner) {
            classString = classString + 'miner,';
        }
        if (filterClasses.weaver) {
            classString = classString + 'weaver,';
        }
        if (filterClasses.allClasses) {
            classString = '';
        }

        this.setState({
            filtered: [{ id: "Crafters", value: classString }]
        })
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    render() {
        return (
            <AppContext.Provider value={{
                items: this.state.items,
                filtered: this.state.filtered,
                filterClass: this.state.filterClass,
                classString: this.state.classString,
                loadPercent: this.state.loadPercent,
                specificLoaded: this.state.specificLoaded,
                specificTotal: this.state.specificTotal,
                actions: { filterClass: this.FilterClasses }
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export const Consumer = AppContext.Consumer;