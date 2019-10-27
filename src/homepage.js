const utils2 = require("./utils2");

console.log("itemsList.js loaded");

const phones = [
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/rU0AAOSwTUpdGw7T/s-l225.webp",
    title:
      "SAMSUNG GALAXY S7 32Go 4G Android Téléphone Mobile Usine Débloqué Or",
    price: "$158.45",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/PcMAAOSw18Zdhk3x/s-l225.webp",
    title: "New ListingRose Gold iPhone 7 with 32GB and Unlocked - Sale ✨",
    price: "$254.81",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/yT8AAOSwz39dqKzJ/s-l225.webp",
    title:
      "New ListingApple iPhone 8 Plus - 64GB - Rose Gold (Unlocked) A1897 (GSM)",
    price: "$313.71",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mHkHuq-Sd60JdUhnBfUkJwg/s-l225.jpg",
    title:
      "Apple iPhone 7 128GB, iPhone 7-128GB, iPhone 7 32GB, iPhone 7-32GB All Colors!",
    price: "$164.65 to $319.36",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/rNoAAOSwhEtdn09~/s-l225.webp",
    title: "New ListingApple iPhone 8 Plus - 64GB - Gold (O2) A1897 (GSM)",
    price: "$203.59",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/aHkAAOSwzO9dp~56/s-l225.webp",
    title:
      "New ListingApple iPhone 7 - 128GB-Silver (without Simlock) A1778 (GSM)",
    price: "$131.50",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/muWh1HvkuGDehM03AhPvqGA/s-l225.jpg",
    title:
      "Apple iPhone 8 - 64GB - 256GB - Unlocked - Various Colours Mobile Smartphone",
    price: "$460.55 to $557.87",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mIdj09VL0FtrXklClnDB7Pw/s-l225.jpg",
    title:
      "Apple iPhone 7 Smartphone 32/128/256GB in Black/Gold/Silver/Rose/Jet Unlocked",
    price: "$203.46 to $337.91",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mQnubbztVjzT5zR0NaB87EQ/s-l225.jpg",
    title:
      "Apple iPhone 6s 16GB 32GB 64GB 128GB Unlocked SIM Free Smartphone Various Grades",
    price: "$108.77 to $236.82",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/IkoAAOSwwmBdm2kB/s-l225.webp",
    title:
      "** Smartphone Samsung Galaxy s7 Edge 32gb 4g LTE sm-g935v Silver Silver Good!",
    price: "$171.17",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mAiODZU6sPwq1PjUuGqFkiw/s-l225.jpg",
    title:
      "Apple iPhone 7 32GB 128GB 256GB Unlocked  Smartphone GSM All Colors",
    price: "$263.07 to $330.52",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/h28AAOSwRs1dVFPX/s-l225.webp",
    title:
      "New ListingGoogle Pixel 3 G013A - 64GB - Just Black (T-Mobile) Smartphone",
    price: "$275.00",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/rF8AAOSwH7ZdgoJr/s-l225.webp",
    title: "New ListingApple iPhone X - 64GB - Space Grey (O2) A1901 (GSM)",
    price: "$256.09",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mUQrAcO-4HAoN5eIJ2yrGxg/s-l225.jpg",
    title:
      "P33/P33 Pro Unlocked Smart Phone 5\"/5.7'' Android 8.1 HD Dual SIM Mobile 4G+128G",
    price: "$40.85 to $55.10",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/FSkAAOSw9EldqKCd/s-l225.webp",
    title: "New ListingApple MQAG2B/A iPhone X - 256GB - Silver (Unlocked)",
    price: "$373.89",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/m3fHRgKVmtzNaru8WvTYNbg/s-l225.jpg",
    title:
      'Samsung Galaxy S7 G930 32GB (Unlocked) Android Smartphone SIM Free Grade A 5.1"',
    price: "$135.59",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/itAAAOSwQG9dk-t5/s-l225.webp",
    title: "New ListingiPhone 8 64GB Unlocked Gray",
    price: "$380.00",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/GyAAAOSwT7Jc546o/s-l225.webp",
    title:
      "New ListingApple iPhone X - 64GB - Space Gray (Sprint) A1865 (CDMA + GSM)",
    price: "$99.00",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/wNgAAOSwRiJdqLDq/s-l225.webp",
    title:
      "New ListingLG V30 - 64GB - Silver (Unlocked) Smartphone - Great Condition",
    price: "$159.99",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/m3fHRgKVmtzNaru8WvTYNbg/s-l225.jpg",
    title:
      "Samsung Galaxy S7 G930 32GB (Unlocked) Android Smartphone SIM Free 5 Colors",
    price: "$111.26 to $135.59",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/2eEAAOSwuP9diQHL/s-l225.webp",
    title:
      "New ListingSamsung Galaxy S8+ SM-G955 - 64GB -  Black (Unlocked) Smartphone",
    price: "$281.70",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/nm4AAOSwgW9ctdeI/s-l225.webp",
    title: "Samsung galaxy a40 64gb Dual Sim Black 24 months guarantee Italy",
    price: "$198.90",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/m_zrbKvIn04w-6TCkDtHzAg/s-l225.jpg",
    title:
      "Apple iPhone SE 16GB 32GB 64GB 128GB Unlocked Gold/Silver/Grey/Rose Gold",
    price: "$89.57 to $166.39",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/WsMAAOSwupVdqGI2/s-l225.webp",
    title:
      "New ListingApple iPhone 7 Plus - 256GB-Black (without Simlock) A1784 (GSM)",
    price: "$331.52",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/xGAAAOSwimZdchb2/s-l225.webp",
    title: "LG G6 - 32GB-White (without Simlock) Smartphone",
    price: "$132.61",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/HIAAAOSwUd9ag~~3/s-l225.webp",
    title:
      "IPhone 6 Refurbished 16gb Grade B Black Grey Original Apple regenerated used",
    price: "$121.54",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/spUAAOSwLPpdqGWX/s-l225.webp",
    title:
      "New Listingpple iPhone 7 Plus MKU92B/A 128GB (Unlocked) Smartphone - Rose Gold",
    price: "$128.05",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/vr0AAOSwApRdqLBj/s-l225.webp",
    title:
      "New ListingApple iPhone XS - 256GB - Gold (T-Mobile) A1920 (CDMA + GSM)",
    price: "$670.00",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/pQUAAOSwlltceAHg/s-l225.webp",
    title:
      "IPhone x Refurbished 64gb Grade B Black Black Original Apple regenerated",
    price: "$585.67",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/QYcAAOSwTJtdchnR/s-l225.webp",
    title:
      "NUEVO Xiaomi Mi 9T Pro 128GB/6GB Snapdragon 855 Dual SIM Global Version - Blue",
    price: "$392.29",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/L6AAAOSw9ltdqKqc/s-l225.webp",
    title:
      "New ListingApple iPhone XR A1984 256GB Black! Factory Unlocked! Free Fast Shipping!",
    price: "$559.95",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/Nd0AAOSwzkRdqKvW/s-l225.webp",
    title:
      "New ListingApple iPhone 8 Plus - 64GB - Space Gray UNLOCKED MQ962LL/A (CDMA + GSM) ",
    price: "$419.99",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/K~wAAOSwJ9RdQH22/s-l225.webp",
    title:
      "Smartphone Apple iPhone 6 6g 64gb Space Grey Gray Grade A! Original! brt_24h",
    price: "$165.65",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/fVgAAOSwX5hdnJuT/s-l225.webp",
    title:
      "New ListingSamsung Galaxy S8+ SM-G955 - 64GB - Arctic Silver (Unlocked)",
    price: "$100.00",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/q5gAAOSwScJa9RW6/s-l225.webp",
    title:
      "Samsung Galaxy S9 SM-G960U1- 64GB - Lilac Purple Factory Unlocked Grade C ",
    price: "$199.99",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/F0cAAOSwN8hdoGq5/s-l225.webp",
    title: "New ListingApple iPhone 8 - 64GB - Silver (Unlocked) A1905 (GSM) ",
    price: "$115.24",
    category: "Cell Phones & Smartphones for sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/mS2pitzWEdjoE4qz0okEu1Q/s-l225.jpg",
    title: "LG G6 32GB Silver/Black - GSM Unlocked",
    price: "$69.00 to $109.00",
    category: "Cell Phones & Smartphones for sale"
  }
];
const laptops = [
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/YGkAAOSw-V1b9rXB/s-l225.webp",
    title:
      "Panasonic Toughbook Cf-19 MK6 Intel Core I5  Windows 10 Or Win 7 3G Diagnostics",
    price: "$288.10",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/W3AAAOSwQ3JdqIjm/s-l225.webp",
    title:
      'New ListingLenovo Yoga 910 13.9" 256GB Intel Core i5 8GB BLACK touchscreen laptop tablet ',
    price: "$170.30",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/J-cAAOSwZ1BXfifD/s-l225.webp",
    title:
      "Lenovo ThinkPad t430 Core i5-3320m 2.60ghz 4gb 320gb 1600x900 win7.b - Ware",
    price: "$132.35",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/mqsAAOSw6S9cSZOE/s-l225.webp",
    title:
      "Lenovo ThinkPad X230 i5 2.60GHz 4GB 180 SSD 1366x768 WiFi Cam BT Windows 10 Pro",
    price: "$138.02",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/vTcAAOSwtKldqK32/s-l225.webp",
    title:
      'New ListingApple MacBook Pro Retina 15" Mid 2014, 2.2 Ghz Intel Core i7, 256GB SSD',
    price: "$896.32",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/XJoAAOSwyPBc3y6F/s-l225.webp",
    title:
      'Apple MacBook Air Core i5 1.6GHz 4GB RAM 128GB SSD 11" A1465 - MJVM2LL/A',
    price: "$299.97",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/sbUAAOSwU4hdqK8M/s-l225.webp",
    title:
      'New ListingHP 17-BY0061ST, 17.3" Laptop 2.20GHz 8GB RAM 1TB HDD Windows 10',
    price: "$249.95",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/uPUAAOSwmnFdp16T/s-l225.webp",
    title: "Galaxy Book 10.6",
    price: "$200.00",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/6X4AAOSwrxFdVhjr/s-l225.webp",
    title: "New ListingAsus b9889u LCD 14 intel i7 ",
    price: "$538.97",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/V0YAAOSwintXRtH0/s-l225.webp",
    title: "Lenovo ThinkPad x230 i5 2,6ghz 4gb 320gb win7pro aw4/b",
    price: "$171.28",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/jPYAAOSwy1ddSk6I/s-l225.webp",
    title: "New Listingtoshiba satellite p500",
    price: "$65.00",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/0-sAAOSws7NdmgEc/s-l225.webp",
    title:
      "New ListingPanasonic Toughbook Touchscreen CF-D1 13,3 Inch Intel i5 2,7GHz 4GB RAM is 500GB",
    price: "$1.11",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/aCwAAOSwFChdqIxR/s-l225.webp",
    title: "New ListingMACBOOK PRO A1502 2014",
    price: "$505.78",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/zsQAAOSwSRtdlLLv/s-l225.webp",
    title: "Refurbished Laptop Notebook HP 6470b Core i5 RAM 8gb HDD 320gb",
    price: "$198.80",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/5PoAAOSwx7JdjhDm/s-l225.webp",
    title:
      'Portable PC Laptop Notebook HP 255 g7 7db74ea 15,6" 4gb SSD 256gb Windows 10',
    price: "$254.05",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/dqgAAOSwjBRdSurk/s-l225.webp",
    title:
      "HP AMD Ryzen5 Quad Core 3,6 GHz  16GB 256GB SSD - Vega 8 Grafik Windows 10 USB3",
    price: "$539.37",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/kBsAAOSw6h9dqE7y/s-l225.webp",
    title:
      "New ListingHP Probook 640 G1 14.0' Laptop i3-4000M 2.40 GHz 4GB 128GB SSD Windows 10 Pro",
    price: "$1.27",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/hggAAOSw7D5dlKc~/s-l225.webp",
    title: "New ListingLenovo Yoga 260 i5-6300U 180GB SSD",
    price: "$320.11",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/~rEAAOSw7thbhIBB/s-l225.webp",
    title: "New ListingSamsung NP-R700",
    price: "$128.05",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/KQsAAOSwnhldOyFk/s-l225.webp",
    title:
      "Lenovo ThinkPad T450s Core i7-5600U 8Gb 256Gb SSD 1600x900 Win10 De. Keyboard",
    price: "$364.41",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/qLgAAOSwWxNYw9JJ/s-l225.webp",
    title:
      "Apple MacBook Pro 13'' Core i5 2.5Ghz 4GB 500GB (Jun 2012) A Grade12 M Warranty",
    price: "$384.12",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/-rkAAOSwueBdcApl/s-l225.webp",
    title:
      "New ListingHP Elitebook 840 G1 i5 4300 2.5 ghz 256 SSD GB 8 GB RAM Backlit K/B Win 10 pro",
    price: "$1.27",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/Hw0AAOSweHddgL-n/s-l225.webp",
    title: "New ListingPanasonic Toughbook cf-31",
    price: "$497.27",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/msh_LGRi0abkLNC5QlQqfAw/s-l225.jpg",
    title:
      'HUAWEI MateBook X Pro 2019 New 13.9" TouchScreen Laptop Intel Fingerprint',
    price: "$1,799.00",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/eKIAAOSw7Z5dhjr0/s-l225.webp",
    title: "New ListingGigabyte GB-BXBT-2807-1TB HDD/4GB RAM",
    price: "$268.61",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/ecAAAOSwW3dbaLql/s-l225.webp",
    title: "New ListingHP G56",
    price: "$192.07",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/fMEAAOSwhexcPKmN/s-l225.webp",
    title:
      "Lenovo THINKPAD T450s Core i5-5300U 8Gb 128Gb SSD 14`` FHD 1920x1080 IPS Webcam",
    price: "$318.43",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/sCgAAOSwjONdp8Mi/s-l225.webp",
    title:
      "New ListingPLC Programming Laptop Program Learn Automation Micrologix RSLogix CompactLogix",
    price: "$650.00",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/m/myPYpVaSBprgVmpBlqLM0zA/s-l225.jpg",
    title:
      "CHEAP LAPTOP DELL HP LENOVO INTEL CORE i3 i5 i7  8GB RAM 500GB HD WIN 10 Wi-Fi",
    price: "$163.83",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/GDQAAOSwQvhdjhiu/s-l225.webp",
    title: 'New ListingMacbook air 13" i5 1,3ghz 128gb!!! like new!!!',
    price: "$486.22",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/HWEAAOSw02FcxseN/s-l225.webp",
    title:
      "Lenovo ThinkPad T440s i5-4300u 4GB 250GB SSD W10 Pro HD + UMTS Webcam VAT #61",
    price: "$175.70",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/gs8AAOSw6tNdqK2f/s-l225.webp",
    title:
      'New ListingLenovo Yoga 710-14IKB 80V4 14" HD Touch Core i5-7200U 8GB 256GB SSD (24845-1)',
    price: "$649.99",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/wPkAAOSwRWJdob9x/s-l225.webp",
    title:
      "New ListingLenovo ThinkPad P52 P3200 CAD i7-8850H 32GB 512GB nvme SSD FHD IPS WARRANTY",
    price: "$2,381.38",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/FlAAAOSwSNddqK8~/s-l225.webp",
    title:
      "New ListingVintage IBM i-Series Type 1171 ThinkPad laptop, Windows 98",
    price: "$85.00",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/NfgAAOSwIU5dlM6r/s-l225.webp",
    title: "Hp elitebook 830 g5 8go 256gb ssd (fabrindy)",
    price: "$552.53",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/EXgAAOSwpoxdbTj1/s-l225.webp",
    title:
      'Notebook Laptop Toshiba Portege z30t 13.3" Intel Core i7 RAM 8gb SSD 256gb',
    price: "$298.25",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/SNkAAOSwK65bt1R~/s-l225.webp",
    title:
      "Lenovo ThinkPad T420S i5 2.60GHz 8GB 128GB SSD HD + 1600x900 Windows 10/7 Grade A -",
    price: "$193.27",
    category: "Laptops & Netbooks for Sale"
  },
  {
    imgSrc:
      "https://i.ebayimg.com/thumbs/images/g/wvQAAOSw69ddXUAL/s-l225.webp",
    title: "New ListingFast Sony Vaio Fit (SVF11)",
    price: "$330.00",
    category: "Laptops & Netbooks for Sale"
  }
];

const categories = {
  PHONE: "phone", //plural because it is like that in phones array
  LAPTOP: "laptop"
};

// initial state
let selectedCategory = categories.PHONE;

function createItems() {
  //console.log('createItems', selectedCategory);
  const root = document.getElementById("item-list");

  root.innerHTML = null; //reset
  //reset
  //root.innerHTML = null;

  let items = [];

  if (selectedCategory === categories.PHONE) {
    items = phones;
    //console.log("set phones");
  } else if (selectedCategory === categories.LAPTOP) {
    items = laptops;
    //console.log("set laptops");
  }
  items.forEach(phone => {
    //console.log("drawing");
    const element = utils2.createItemElement(phone);
    root.append(element);
    //console.log(element);
  });
}

function setupCategoryListener() {
  const dropdown = document.getElementById("category-dropdown");

  dropdown.addEventListener("change", event => {
    console.log(event.target.value);
    selectedCategory = event.target.value;
    createItems();
    //const result = document.querySelector('.result');
    //result.textContent = `You like ${event.target.value}`;
  });
}

// window.addEventListener("load", () =>{
//     console.log("Document loaded, itemsList.js");
//     createItems();
//     setupCategoryListener();
//     //const app = document.getElementById("item-body")
//     //app.append(container);
// })

function setupItemList() {
  createItems();
  setupCategoryListener();
}

module.exports = { setupItemList };
