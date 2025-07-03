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
      price: {
        inr: "₹449",
        usd: "$5.39"
      },
      description: "Collapsible design, 40L capacity, multiple colors"
    },
    {
      name: "Spice Rack Organizer",
      link: "products/spice-rack-organizer.html",
      image: "images/spice-rack.jpg",
      price: {
        inr: "₹799",
        usd: "$9.59"
      },
      description: "3-tier rotating design, holds 24 bottles, 360° rotation"
    }
  ],
  "Smart Home Devices": [
    {
      name: "Smart LED Bulb",
      link: "products/smart-led-bulb.html",
      image: "images/smart-bulb.jpg",
      price: {
        inr: "₹999",
        usd: "$11.99"
      },
      description: "16 million colors, voice control, 9W energy saving"
    },
    {
      name: "Wi-Fi Security Camera",
      link: "products/security-camera.html",
      image: "images/security-camera.jpg",
      price: {
        inr: "₹2,499",
        usd: "$29.99"
      },
      description: "1080p HD, night vision, motion detection, 2-way audio"
    },
    {
      name: "Smart Plug",
      link: "products/smart-plug.html",
      image: "images/smart-plug.jpg",
      price: {
        inr: "₹699",
        usd: "$8.39"
      },
      description: "Voice control, energy monitoring, timer function"
    }
  ],
  "Cookware": [
    {
      name: "Non-Stick Cookware Set",
      link: "products/non-stick-cookware.html",
      image: "images/cookware-set.jpg",
      price: {
        inr: "₹3,999",
        usd: "$47.99"
      },
      description: "5-piece set, induction compatible, ceramic coating"
    },
    {
      name: "Cast Iron Skillet",
      link: "products/cast-iron-skillet.html",
      image: "images/cast-iron.jpg",
      price: {
        inr: "₹1,899",
        usd: "$22.79"
      },
      description: "10-inch pan, pre-seasoned, even heat distribution"
    },
    {
      name: "Stainless Steel Pressure Cooker",
      link: "products/pressure-cooker.html",
      image: "images/pressure-cooker.jpg",
      price: {
        inr: "₹2,299",
        usd: "$27.59"
      },
      description: "3-layer base, 5L capacity, 3 safety systems"
    }
  ]
};

// Featured products section (optional)
const featuredProducts = [
  {
    name: "Best-Seller Bundle",
    link: "products/best-seller-bundle.html",
    image: "images/bundle.jpg",
    price: {
      inr: "₹6,999",
      usd: "$83.99"
    },
    description: "Electric kettle + coffee maker + 5-piece cookware set"
  },
  {
    name: "Smart Home Starter Kit",
    link: "products/smart-home-kit.html",
    image: "images/smart-kit.jpg",
    price: {
      inr: "₹4,499",
      usd: "$53.99"
    },
    description: "2 smart bulbs + smart plug + Wi-Fi camera"
  }
];
