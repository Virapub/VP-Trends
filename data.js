// data.js - Complete product data with INR and USD prices
const productsByCategory = {
  "Kitchen Appliances": [
    {
      name: "Collapsible Electric Kettle",
      link: "products/collapsible-electric-kettle.html",
      image: "images/kettle.jpg",
      price: {
        inr: "₹1,299",
        usd: "$15.59"
      },
      description: "2-in-1 collapsible design saves space, 1500W fast boiling"
    },
    {
      name: "Smart Coffee Maker",
      link: "products/smart-coffee-maker.html",
      image: "images/coffee-maker.jpg",
      price: {
        inr: "₹3,499",
        usd: "$41.99"
      },
      description: "Programmable timer, 12-cup capacity, auto shut-off"
    },
    {
      name: "Air Fryer Oven",
      link: "products/air-fryer-oven.html",
      image: "images/air-fryer.jpg",
      price: {
        inr: "₹5,999",
        usd: "$71.99"
      },
      description: "8-in-1 functionality, 10L capacity, digital controls"
    }
  ],
  "Bathroom Essentials": [
    {
      name: "Automatic Soap Dispenser",
      link: "products/automatic-soap-dispenser.html",
      image: "images/soap-dispenser.jpg",
      price: {
        inr: "₹899",
        usd: "$10.79"
      },
      description: "Touch-free operation, 300ml capacity, battery powered"
    },
    {
      name: "Electric Toothbrush",
      link: "products/electric-toothbrush.html",
      image: "images/toothbrush.jpg",
      price: {
        inr: "₹1,599",
        usd: "$19.19"
      },
      description: "3 cleaning modes, 2-week battery life, waterproof"
    },
    {
      name: "Shower Head Filter",
      link: "products/shower-head-filter.html",
      image: "images/shower-filter.jpg",
      price: {
        inr: "₹1,199",
        usd: "$14.39"
      },
      description: "Removes chlorine, 15-stage filtration, easy installation"
    }
  ],
  "Home Organization": [
    {
      name: "Vacuum Storage Bags",
      link: "products/vacuum-storage-bags.html",
      image: "images/storage-bags.jpg",
      price: {
        inr: "₹649",
        usd: "$7.79"
      },
      description: "Set of 5 bags, saves 75% space, waterproof material"
    },
    {
      name: "Foldable Storage Box",
      link: "products/foldable-storage-box.html",
      image: "images/storage-box.jpg",
const data = {
  products: [
    {
      id: "collapsible-electric-kettle",
      name: "Collapsible Electric Kettle",
      description: "Space-saving collapsible kettle with auto shut-off and boil-dry protection",
      priceINR: 1499,
      priceUSD: 17.51,
      category: "Appliances",
      link: "https://amzn.to/448SSZx",
      image: "https://m.media-amazon.com/images/I/61WQVNM0LCL._SL1500_.jpg",
      page: "products.html#collapsible-electric-kettle",
      rating: 4.5,
      features: ["Collapsible design", "800W power", "BPA-free materials"]
    },
    {
      id: "automatic-soap-dispenser",
      name: "Automatic Soap Dispenser",
      description: "Touchless soap dispenser with infrared sensor for hygienic use",
      priceINR: 1388,
      priceUSD: 16.21,
      category: "Smart Gadgets",
      link: "https://amzn.to/46sLIRc",
      image: "https://m.media-amazon.com/images/I/61Vqx4KEHuL._SL1024_.jpg",
      page: "products.html#automatic-soap-dispenser",
      rating: 4.2,
