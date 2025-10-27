export interface CarSpecs {
  engine: string
  horsepower: string
  torque: string
  transmission: string
  fuelType: string
  fuelEfficiency: string
  seats: number
}

export interface ImageSet {
  setName: string
  front?: string
  side?: string
  rear?: string
  interiorFoward?: string
  interiorBehind?: string
}

export interface Car {
  id: string
  brand: string
  model: string
  type: string
  yearRange: string
  description: string
  priceRange: string
  commonUse: string
  specs: CarSpecs
  imageSets: ImageSet[]
  funFacts: string[]
  testImageSets?: ImageSet[]
  galleryImages?: string[]
}

export const carsData: Car[] = [
  // ===== SEDANS (9 models) =====
  {
    id: "toyota_vios",
    brand: "Toyota",
    model: "Vios",
    type: "Sedan",
    yearRange: "2018-present",
    description: "A popular compact sedan in the Philippines known for its reliability and fuel efficiency.",
    priceRange: "₱750,000-₱1,100,000",
    commonUse: "Daily commuting, family car, and ride-hailing services like Grab.",
    specs: {
      engine: "1.3L or 1.5L gasoline",
      horsepower: "98-106 hp",
      torque: "123 Nm",
      transmission: "Manual / CVT",
      fuelType: "Gasoline",
      fuelEfficiency: "14-18 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/sedans/vios/red/sedan-vios-red-front.png",
        side: "/assets/images/sedans/vios/red/sedan-vios-red-side.png",
        rear: "/assets/images/sedans/vios/red/sedan-vios-red-rear.png",
      },
      {
        setName: "Black",
        front: "/assets/images/sedans/vios/black/sedan-vios-black-front.png",
        side: "/assets/images/sedans/vios/black/sedan-vios-black-side.png",
        rear: "/assets/images/sedans/vios/black/sedan-vios-black-rear.png",
      },
      {
        setName: "Silver",
        front: "/assets/images/sedans/vios/silver/sedan-vios-silver-front.png",
        side: "/assets/images/sedans/vios/silver/sedan-vios-silver-side.png",
        rear: "/assets/images/sedans/vios/silver/sedan-vios-silver-rear.png",
      }
    ],
    galleryImages: [
      "/assets/images/sedans/vios/red/sedan-vios-red-front.png",
      "/assets/images/sedans/vios/red/sedan-vios-red-side.png",
      "/assets/images/sedans/vios/red/sedan-vios-red-rear.png",
      "/assets/images/sedans/vios/red/sedan-vios-red-extra-1.png",
      "/assets/images/sedans/vios/red/sedan-vios-red-extra-2.png",
      "/assets/images/sedans/vios/red/sedan-vios-red-extra-3.png",
      "/assets/images/sedans/vios/black/sedan-vios-black-front.png",
      "/assets/images/sedans/vios/black/sedan-vios-black-side.png",
      "/assets/images/sedans/vios/black/sedan-vios-black-rear.png",
      "/assets/images/sedans/vios/silver/sedan-vios-silver-front.png",
      "/assets/images/sedans/vios/silver/sedan-vios-silver-side.png",
      "/assets/images/sedans/vios/silver/sedan-vios-silver-rear.png"
    ],
    funFacts: [
      "The Toyota Vios is featured in the Vios Cup, a local racing series in the Philippines.",
      "It's one of the most used cars for Grab and taxi fleets nationwide.",
      "Known for its low maintenance costs and high resale value.",
    ],
  },
  {
    id: "honda_city",
    brand: "Honda",
    model: "City",
    type: "Sedan",
    yearRange: "2020-present",
    description: "A versatile compact sedan offering excellent fuel economy and spacious interior.",
    priceRange: "₱850,000-₱1,200,000",
    commonUse: "Family transportation, daily commuting, and ride-sharing.",
    specs: {
      engine: "1.5L gasoline",
      horsepower: "119 hp",
      torque: "145 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "16-20 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/sedans/honda-city/red/sedan-city-red-front.png",
        side: "/assets/images/sedans/honda-city/red/sedan-city-red-side.png",
        rear: "/assets/images/sedans/honda-city/red/sedan-city-red-rear.png",
        interiorFoward: "/assets/images/sedans/honda-city/red/sedan-city-red-interior-forward.png",
        interiorBehind: "/assets/images/sedans/honda-city/red/sedan-city-red-interior-behind.png",
      },
      {
        setName: "Blue",
        front: "/assets/images/sedans/honda-city/blue/sedan-city-blue-front.png",
        side: "/assets/images/sedans/honda-city/blue/sedan-city-blue-side.png",
        rear: "/assets/images/sedans/honda-city/blue/sedan-city-blue-rear.png",
        interiorFoward: "/assets/images/sedans/honda-city/blue/sedan-city-blue-interior-forward.png",
        interiorBehind: "/assets/images/sedans/honda-city/blue/sedan-city-blue-interior-behind.png",
      },
      {
        setName: "White",
        front: "/assets/images/sedans/honda-city/white/sedan-city-white-front.png",
        side: "/assets/images/sedans/honda-city/white/sedan-city-white-side.png",
        rear: "/assets/images/sedans/honda-city/white/sedan-city-white-rear.png",
        interiorFoward: "/assets/images/sedans/honda-city/white/sedan-city-white-interior-forward.png",
        interiorBehind: "/assets/images/sedans/honda-city/white/sedan-city-white-interior-behind.png",
      },
      {
        setName: "Gray",
        front: "/assets/images/sedans/honda-city/gray/sedan-city-gray-front.png",
        side: "/assets/images/sedans/honda-city/gray/sedan-city-gray-side.png",
        rear: "/assets/images/sedans/honda-city/gray/sedan-city-gray-rear.png",
        interiorFoward: "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-forward.png",
        interiorBehind: "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-behind.png",
      },
      
    ],
    galleryImages: [
        "/assets/images/sedans/honda-city/red/sedan-city-red-front.png",
        "/assets/images/sedans/honda-city/red/sedan-city-red-side.png",
        "/assets/images/sedans/honda-city/red/sedan-city-red-rear.png",
        "/assets/images/sedans/honda-city/blue/sedan-city-blue-front.png",
        "/assets/images/sedans/honda-city/blue/sedan-city-blue-side.png",
        "/assets/images/sedans/honda-city/blue/sedan-city-blue-rear.png",
        "/assets/images/sedans/honda-city/white/sedan-city-white-front.png",
        "/assets/images/sedans/honda-city/white/sedan-city-white-side.png",
        "/assets/images/sedans/honda-city/white/sedan-city-white-rear.png",
        "/assets/images/sedans/honda-city/gray/sedan-city-gray-front.png",
        "/assets/images/sedans/honda-city/gray/sedan-city-gray-side.png",
        "/assets/images/sedans/honda-city/gray/sedan-city-gray-rear.png",
        "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-forward.png",
        "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-behind.png"
    ],
    funFacts: [
      "The Honda City is one of the best-selling sedans in Southeast Asia.",
      "Known for its spacious rear legroom and comfortable seating.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "hyundai_accent",
    brand: "Hyundai",
    model: "Accent",
    type: "Sedan",
    yearRange: "2017-present",
    description: "A stylish and modern compact sedan with advanced safety features.",
    priceRange: "₱800,000-₱1,150,000",
    commonUse: "Urban commuting, family use, and corporate fleets.",
    specs: {
      engine: "1.4L or 1.6L gasoline",
      horsepower: "100-123 hp",
      torque: "132-155 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "15-19 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-front.png",
        side: "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-side.png",
        rear: "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-rear.png",
      },
    ],
    galleryImages: [
        "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-front.png",
        "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-side.png",
        "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-rear.png",  
    ],
    funFacts: [
      "Hyundai Accent offers one of the best warranty packages in the Philippines.",
      "Known for its modern design and tech-forward features.",
      "Popular choice for ride-sharing services.",
    ],
  },
  {
    id: "nissan_almera",
    brand: "Nissan",
    model: "Almera",
    type: "Sedan",
    yearRange: "2020-present",
    description: "A practical and affordable sedan with a spacious cabin and reliable performance.",
    priceRange: "₱700,000-₱1,050,000",
    commonUse: "Family transportation, taxi services, and daily commuting.",
    specs: {
      engine: "1.2L gasoline",
      horsepower: "79 hp",
      torque: "104 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "17-21 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Silver",
        front: "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-front.png",
        side: "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-side.png",
        rear: "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-front.png",
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-side.png",
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-rear.png"
    ],
    funFacts: [
      "The Nissan Almera is known for its durability and low maintenance costs.",
      "Popular among taxi and ride-sharing drivers.",
      "Offers excellent value for money in the compact sedan segment.",
    ],
  },
  {
    id: "mazda_2_sedan",
    brand: "Mazda",
    model: "2 Sedan",
    type: "Sedan",
    yearRange: "2019-present",
    description: "A premium compact sedan with engaging driving dynamics and upscale interior.",
    priceRange: "₱950,000-₱1,350,000",
    commonUse: "Premium commuting, family car, and driving enthusiasts.",
    specs: {
      engine: "1.5L gasoline",
      horsepower: "110 hp",
      torque: "144 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "15-18 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Quartz",
        front: "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-front.png",
        side: "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-side.png",
        rear: "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-front.png",
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-side.png",
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-rear.png"
    ],
    funFacts: [
      "Mazda 2 is known for its 'Zoom-Zoom' driving experience.",
      "Features premium interior materials and modern technology.",
      "Popular among car enthusiasts who value driving dynamics.",
    ],
  },
  {
    id: "kia_soluto",
    brand: "Kia",
    model: "Soluto",
    type: "Sedan",
    yearRange: "2019-present",
    description: "An affordable and practical sedan with a spacious interior and modern features.",
    priceRange: "₱650,000-₱950,000",
    commonUse: "Budget-conscious families, daily commuting, and ride-sharing.",
    specs: {
      engine: "1.4L gasoline",
      horsepower: "94 hp",
      torque: "132 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "16-20 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-front.png",
        rear: "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-front.png",
      "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-rear.png"
    ],
    funFacts: [
      "Kia Soluto offers excellent value with a 7-year warranty.",
      "Spacious trunk and rear legroom for a sedan in this price range.",
      "Growing popularity among Filipino families.",
    ],
  },
  {
    id: "mitsubishi_lancer",
    brand: "Mitsubishi",
    model: "Lancer",
    type: "Sedan",
    yearRange: "2017-present",
    description: "A reliable and fuel-efficient sedan with a sporty design and comfortable interior.",
    priceRange: "₱900,000-₱1,250,000",
    commonUse: "Family transportation, daily commuting, and corporate use.",
    specs: {
      engine: "1.5L gasoline",
      horsepower: "103 hp",
      torque: "137 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "15-19 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-front.png",
        side: "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-side.png",
        rear: "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-front.png",
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-side.png",
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-rear.png"
    ],
    funFacts: [
      "The Mitsubishi Lancer has a legendary racing heritage.",
      "Known for its reliability and low maintenance costs.",
      "Popular among driving enthusiasts in the Philippines.",
    ],
  },
  {
    id: "subaru_impreza",
    brand: "Subaru",
    model: "Impreza",
    type: "Sedan",
    yearRange: "2018-present",
    description: "A premium sedan with all-wheel drive and advanced safety features.",
    priceRange: "₱1,200,000-₱1,600,000",
    commonUse: "Premium commuting, family car, and driving enthusiasts.",
    specs: {
      engine: "2.0L gasoline",
      horsepower: "152 hp",
      torque: "196 Nm",
      transmission: "CVT",
      fuelType: "Gasoline",
      fuelEfficiency: "13-16 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Gold",
        front: "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-front.png",
        side: "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-side.png",
        rear: "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-front.png",
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-side.png",
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-rear.png"
    ],
    funFacts: [
      "Subaru Impreza features standard all-wheel drive for better traction.",
      "Known for its safety features and reliability.",
      "Popular among drivers who value performance and safety.",
    ],
  },
  {
    id: "toyota_corolla",
    brand: "Toyota",
    model: "Corolla",
    type: "Sedan",
    yearRange: "2019-present",
    description: "A legendary sedan known for its reliability, efficiency, and timeless design.",
    priceRange: "₱1,100,000-₱1,500,000",
    commonUse: "Family transportation, daily commuting, and long-distance travel.",
    specs: {
      engine: "1.6L or 1.8L gasoline",
      horsepower: "122-140 hp",
      torque: "151-172 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "14-18 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Black",
        front: "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-front.png",
        side: "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-side.png",
        rear: "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-front.png",
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-side.png",
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-rear.png"
    ],
    funFacts: [
      "The Toyota Corolla is the best-selling car of all time worldwide.",
      "Known for exceptional reliability and longevity.",
      "Popular choice for families seeking a dependable sedan.",
    ],
  },

  // ===== SUVs (9 models) =====
  {
    id: "toyota_fortuner",
    brand: "Toyota",
    model: "Fortuner",
    type: "SUV",
    yearRange: "2015-present",
    description: "A rugged and spacious SUV perfect for families and off-road adventures.",
    priceRange: "₱1,500,000-₱2,200,000",
    commonUse: "Family trips, off-road adventures, and commercial use.",
    specs: {
      engine: "2.4L or 2.8L diesel",
      horsepower: "148-177 hp",
      torque: "343-450 Nm",
      transmission: "Automatic",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "Gray",
        front: "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-front.png",
        side: "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-side.png",
        rear: "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-front.png",
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-side.png",
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-rear.png"
    ],
    funFacts: [
      "The Toyota Fortuner is one of the most popular SUVs in the Philippines.",
      "Known for its durability and off-road capability.",
      "Excellent resale value and strong community support.",
    ],
  },
  {
    id: "honda_cr_v",
    brand: "Honda",
    model: "CR-V",
    type: "SUV",
    yearRange: "2017-present",
    description: "A versatile and comfortable compact SUV ideal for urban and suburban driving.",
    priceRange: "₱1,400,000-₱1,900,000",
    commonUse: "Family transportation, weekend trips, and daily commuting.",
    specs: {
      engine: "1.5L or 2.0L gasoline",
      horsepower: "173-190 hp",
      torque: "220-243 Nm",
      transmission: "CVT / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "12-15 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/suv/honda-crv/blue/suv-crv-blue-front.png",
        side: "/assets/images/suv/honda-crv/blue/suv-crv-blue-side.png",
        rear: "/assets/images/suv/honda-crv/blue/suv-crv-blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-front.png",
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-side.png",
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-rear.png"
    ],
    funFacts: [
      "The Honda CR-V is one of the best-selling SUVs globally.",
      "Known for its spacious interior and reliability.",
      "Popular among Filipino families for its versatility.",
    ],
  },
  {
    id: "mitsubishi_montero",
    brand: "Mitsubishi",
    model: "Montero",
    type: "SUV",
    yearRange: "2015-present",
    description: "A powerful and capable SUV designed for both on-road comfort and off-road performance.",
    priceRange: "₱1,600,000-₱2,300,000",
    commonUse: "Family trips, off-road adventures, and commercial use.",
    specs: {
      engine: "3.2L diesel",
      horsepower: "190 hp",
      torque: "441 Nm",
      transmission: "Automatic",
      fuelType: "Diesel",
      fuelEfficiency: "9-12 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "Gray",
        front: "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-front.png",
        side: "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-side.png",
        rear: "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-front.png",
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-side.png",
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-rear.png"
    ],
    funFacts: [
      "The Mitsubishi Montero is a legendary off-road SUV.",
      "Known for its powerful diesel engine and rugged capability.",
      "Popular among adventurers and outdoor enthusiasts.",
    ],
  },
  {
    id: "hyundai_tucson",
    brand: "Hyundai",
    model: "Tucson",
    type: "SUV",
    yearRange: "2018-present",
    description: "A stylish and modern compact SUV with advanced technology and safety features.",
    priceRange: "₱1,300,000-₱1,800,000",
    commonUse: "Urban commuting, family trips, and weekend adventures.",
    specs: {
      engine: "1.6L or 2.0L gasoline",
      horsepower: "123-165 hp",
      torque: "156-196 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "12-15 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Black",
        front: "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-front.png",
        side: "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-side.png",
        rear: "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-front.png",
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-side.png",
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-rear.png"
    ],
    funFacts: [
      "Hyundai Tucson offers a 7-year warranty on all models.",
      "Known for its modern design and tech-forward features.",
      "Growing popularity among Filipino families.",
    ],
  },
  {
    id: "kia_sorento",
    brand: "Kia",
    model: "Sorento",
    type: "SUV",
    yearRange: "2018-present",
    description: "A premium and spacious SUV with a comfortable interior and advanced features.",
    priceRange: "₱1,500,000-₱2,000,000",
    commonUse: "Family transportation, long-distance travel, and premium commuting.",
    specs: {
      engine: "2.2L diesel or 2.4L gasoline",
      horsepower: "149-181 hp",
      torque: "392-235 Nm",
      transmission: "Automatic",
      fuelType: "Diesel / Gasoline",
      fuelEfficiency: "10-13 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "Black",
        front: "/assets/images/suv/kia-sorento/black/suv-sorento-black-front.png",
        side: "/assets/images/suv/kia-sorento/black/suv-sorento-black-side.png",
        rear: "/assets/images/suv/kia-sorento/black/suv-sorento-black-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-front.png",
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-side.png",
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-rear.png"
    ],
    funFacts: [
      "Kia Sorento offers excellent value with a 7-year warranty.",
      "Spacious 7-seater configuration for large families.",
      "Known for its premium interior and comfort.",
    ],
  },
  {
    id: "nissan_x_trail",
    brand: "Nissan",
    model: "X-Trail",
    type: "SUV",
    yearRange: "2017-present",
    description: "A versatile and capable compact SUV perfect for families and adventurers.",
    priceRange: "₱1,200,000-₱1,700,000",
    commonUse: "Family trips, weekend adventures, and daily commuting.",
    specs: {
      engine: "2.0L or 2.5L gasoline",
      horsepower: "147-171 hp",
      torque: "207-233 Nm",
      transmission: "CVT / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "11-14 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Gray",
        front: "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-front.png",
        side: "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-side.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-front.png",
      "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-side.png",
    ],
    funFacts: [
      "The Nissan X-Trail is known for its reliability and durability.",
      "Popular among families for its spacious interior.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "mazda_cx_5",
    brand: "Mazda",
    model: "CX-5",
    type: "SUV",
    yearRange: "2017-present",
    description: "A premium compact SUV with engaging driving dynamics and upscale interior.",
    priceRange: "₱1,600,000-₱2,100,000",
    commonUse: "Premium commuting, family trips, and driving enthusiasts.",
    specs: {
      engine: "2.0L or 2.5L gasoline",
      horsepower: "155-187 hp",
      torque: "200-252 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "11-14 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/suv/mazda-cx5/white/suv-cx5-white-front.png",
        side: "/assets/images/suv/mazda-cx5/white/suv-cx5-white-side.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/mazda-cx5/white/suv-cx5-white-front.png",
      "/assets/images/suv/mazda-cx5/white/suv-cx5-white-side.png",
    ],
    funFacts: [
      "Mazda CX-5 is known for its 'Zoom-Zoom' driving experience.",
      "Features premium interior materials and modern technology.",
      "Popular among drivers who value performance and comfort.",
    ],
  },
  {
    id: "isuzu_mu_x",
    brand: "Isuzu",
    model: "MU-X",
    type: "SUV",
    yearRange: "2017-present",
    description: "A rugged and spacious SUV designed for families and off-road adventures.",
    priceRange: "₱1,400,000-₱1,900,000",
    commonUse: "Family trips, off-road adventures, and commercial use.",
    specs: {
      engine: "1.9L or 3.0L diesel",
      horsepower: "150-177 hp",
      torque: "350-430 Nm",
      transmission: "Automatic",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/suv/isuzu-mux/white/suv-mux-white-front.png",
      },
      {
        setName: "Black",
        front: "/assets/images/suv/isuzu-mux/black/suv-mux-black-front.png",
      },
      {
        setName: "Gray",
        front: "/assets/images/suv/isuzu-mux/gray/suv-mux-gray-front.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/isuzu-mux/white/suv-mux-white-front.png",
      "/assets/images/suv/isuzu-mux/black/suv-mux-black-front.png",
      "/assets/images/suv/isuzu-mux/gray/suv-mux-gray-front.png",
    ],
    funFacts: [
      "The Isuzu MU-X is known for its durability and off-road capability.",
      "Popular among families for its spacious 7-seater configuration.",
      "Excellent resale value and strong community support.",
    ],
  },
  {
    id: "toyota_rav4",
    brand: "Toyota",
    model: "RAV4",
    type: "SUV",
    yearRange: "2019-present",
    description: "A versatile and reliable compact SUV with all-wheel drive capability.",
    priceRange: "₱1,700,000-₱2,200,000",
    commonUse: "Family transportation, weekend trips, and adventure travel.",
    specs: {
      engine: "2.5L gasoline",
      horsepower: "203 hp",
      torque: "243 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "12-15 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/suv/toyota-rav4/white/suv-rav4-white-front.png",
        side: "/assets/images/suv/toyota-rav4/white/suv-rav4-white-side.png",
        rear: "/assets/images/suv/toyota-rav4/white/suv-rav4-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-front.png",
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-side.png",
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-rear.png"
    ],
    funFacts: [
      "The Toyota RAV4 is one of the best-selling SUVs globally.",
      "Known for its reliability and all-wheel drive capability.",
      "Popular among families seeking a dependable SUV.",
    ],
  },

  // ===== HATCHBACKS (9 models) =====
  {
    id: "mitsubishi_mirage",
    brand: "Mitsubishi",
    model: "Mirage",
    type: "Hatchback",
    yearRange: "2012-present",
    description: "An affordable and practical hatchback perfect for city driving and tight parking spaces.",
    priceRange: "₱600,000-₱900,000",
    commonUse: "City commuting, first-time car buyers, and budget-conscious drivers.",
    specs: {
      engine: "1.2L gasoline",
      horsepower: "78 hp",
      torque: "100 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "17-21 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Gray",
        front: "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-front.png",
        side: "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-side.png",
        rear: "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-front.png",
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-side.png",
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-rear.png"
    ],
    funFacts: [
      "The Mirage is one of the most affordable new cars in the Philippines.",
      "Perfect for first-time car buyers due to its low price and fuel efficiency.",
      "Compact size makes it ideal for navigating Manila traffic.",
    ],
  },
  {
    id: "mazda_2_hatchback",
    brand: "Mazda",
    model: "2 Hatchback",
    type: "Hatchback",
    yearRange: "2019-present",
    description: "A premium compact hatchback with engaging driving dynamics and upscale interior.",
    priceRange: "₱900,000-₱1,300,000",
    commonUse: "Urban commuting, driving enthusiasts, and young professionals.",
    specs: {
      engine: "1.5L gasoline",
      horsepower: "110 hp",
      torque: "144 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "15-18 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-front.png",
        rear: "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-front.png",
      "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-rear.png"
    ],
    funFacts: [
      "Mazda 2 is known for its 'Zoom-Zoom' driving experience.",
      "Features premium interior materials and modern technology.",
      "Popular among young professionals who value driving dynamics.",
    ],
  },
  {
    id: "hyundai_i10",
    brand: "Hyundai",
    model: "i10",
    type: "Hatchback",
    yearRange: "2017-present",
    description: "A stylish and affordable compact hatchback perfect for city driving.",
    priceRange: "₱550,000-₱800,000",
    commonUse: "City commuting, first-time car buyers, and budget-conscious drivers.",
    specs: {
      engine: "1.0L or 1.2L gasoline",
      horsepower: "66-83 hp",
      torque: "94-120 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "18-22 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-front.png",
        side: "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-side.png",
        rear: "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-front.png",
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-side.png",
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-rear.png"
    ],
    funFacts: [
      "Hyundai i10 offers excellent value with a 7-year warranty.",
      "Known for its fuel efficiency and low maintenance costs.",
      "Popular among first-time car buyers in the Philippines.",
    ],
  },
  {
    id: "kia_picanto",
    brand: "Kia",
    model: "Picanto",
    type: "Hatchback",
    yearRange: "2017-present",
    description: "An affordable and practical hatchback with a spacious interior for its size.",
    priceRange: "₱500,000-₱750,000",
    commonUse: "City commuting, first-time car buyers, and budget-conscious drivers.",
    specs: {
      engine: "1.0L or 1.2L gasoline",
      horsepower: "66-83 hp",
      torque: "94-120 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "18-22 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-front.png",
        side: "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-side.png",
        rear: "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-front.png",
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-side.png",
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-rear.png"
    ],
    funFacts: [
      "Kia Picanto offers excellent value with a 7-year warranty.",
      "Known for its fuel efficiency and spacious interior.",
      "Popular among first-time car buyers and city drivers.",
    ],
  },
  {
    id: "toyota_wigo",
    brand: "Toyota",
    model: "Wigo",
    type: "Hatchback",
    yearRange: "2018-present",
    description: "An affordable and reliable hatchback perfect for city driving and tight parking.",
    priceRange: "₱550,000-₱800,000",
    commonUse: "City commuting, first-time car buyers, and budget-conscious drivers.",
    specs: {
      engine: "1.0L gasoline",
      horsepower: "67 hp",
      torque: "89 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "18-22 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-front.png",
        side: "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-side.png",
        rear: "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-front.png",
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-side.png",
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-rear.png"
    ],
    funFacts: [
      "The Toyota Wigo is one of the most affordable new cars in the Philippines.",
      "Known for its reliability and low maintenance costs.",
      "Perfect for first-time car buyers and city commuters.",
    ],
  },
  {
    id: "honda_jazz",
    brand: "Honda",
    model: "Jazz",
    type: "Hatchback",
    yearRange: "2015-present",
    description: "A versatile and spacious hatchback with excellent interior flexibility.",
    priceRange: "₱800,000-₱1,150,000",
    commonUse: "Urban commuting, young professionals, and families.",
    specs: {
      engine: "1.3L or 1.5L gasoline",
      horsepower: "100-119 hp",
      torque: "123-145 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "16-20 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Gray",
        front: "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-front.png",
        side: "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-side.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-front.png",
      "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-side.png",
    ],
    funFacts: [
      "The Honda Jazz is known for its spacious interior and versatile cargo space.",
      "Popular among young professionals and small families.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "nissan_march",
    brand: "Nissan",
    model: "March",
    type: "Hatchback",
    yearRange: "2017-present",
    description: "An affordable and practical hatchback perfect for city driving.",
    priceRange: "₱600,000-₱850,000",
    commonUse: "City commuting, first-time car buyers, and budget-conscious drivers.",
    specs: {
      engine: "1.2L gasoline",
      horsepower: "79 hp",
      torque: "104 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "17-21 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/hatchbacks/nissan-march/blue/hatchback-march-blue-front.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/nissan-march/blue/hatchback-march-blue-front.png",
    ],
    funFacts: [
      "The Nissan March is known for its reliability and fuel efficiency.",
      "Popular among first-time car buyers and city drivers.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "suzuki_swift",
    brand: "Suzuki",
    model: "Swift",
    type: "Hatchback",
    yearRange: "2017-present",
    description: "A fun and agile hatchback with excellent handling and fuel efficiency.",
    priceRange: "₱700,000-₱1,000,000",
    commonUse: "Urban commuting, driving enthusiasts, and young professionals.",
    specs: {
      engine: "1.2L gasoline",
      horsepower: "83 hp",
      torque: "108 Nm",
      transmission: "CVT / Manual",
      fuelType: "Gasoline",
      fuelEfficiency: "18-22 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-front.png",
        rear: "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-front.png",
      "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-rear.png"
    ],
    funFacts: [
      "The Suzuki Swift is known for its fun driving dynamics and agility.",
      "Popular among driving enthusiasts and young professionals.",
      "Excellent fuel efficiency and low maintenance costs.",
    ],
  },
  {
    id: "volkswagen_polo",
    brand: "Volkswagen",
    model: "Polo",
    type: "Hatchback",
    yearRange: "2018-present",
    description: "A premium compact hatchback with German engineering and quality.",
    priceRange: "₱1,000,000-₱1,400,000",
    commonUse: "Premium commuting, driving enthusiasts, and young professionals.",
    specs: {
      engine: "1.4L or 1.6L gasoline",
      horsepower: "85-110 hp",
      torque: "120-155 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "14-18 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-front.png",
        side: "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-side.png",
        rear: "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-rear.png",
      },
      {
        setName: "Red",
        front: "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-front.png",
        side: "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-side.png",
        rear: "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-rear.png",
      },
      {
        setName: "Blue",
        front: "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-front.png",
        side: "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-side.png",
        rear: "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-front.png",
      "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-side.png",
      "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-rear.png",
      "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-front.png",
      "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-side.png",
      "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-rear.png",
      "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-front.png",
      "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-side.png",
      "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-rear.png"
    ],
    funFacts: [
      "Volkswagen Polo is known for its German engineering and quality.",
      "Features premium interior materials and modern technology.",
      "Popular among drivers who value quality and reliability.",
    ],
  },

  // ===== MPVs (5 models) =====
  {
    id: "toyota_avanza",
    brand: "Toyota",
    model: "Avanza",
    type: "MPV",
    yearRange: "2019-present",
    description: "A practical and affordable MPV perfect for families and group travel.",
    priceRange: "₱900,000-₱1,300,000",
    commonUse: "Family transportation, group travel, and commercial use.",
    specs: {
      engine: "1.3L or 1.5L gasoline",
      horsepower: "98-104 hp",
      torque: "123-136 Nm",
      transmission: "Manual / Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "14-17 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "Black",
        front: "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-front.png",
        rear: "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-front.png",
      "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-rear.png"
    ],
    funFacts: [
      "The Toyota Avanza is one of the most popular MPVs in the Philippines.",
      "Known for its spacious 7-seater configuration and reliability.",
      "Excellent resale value and strong community support.",
    ],
  },
  {
    id: "honda_odyssey",
    brand: "Honda",
    model: "Odyssey",
    type: "MPV",
    yearRange: "2018-present",
    description: "A premium and spacious MPV with advanced features and comfort.",
    priceRange: "₱1,600,000-₱2,100,000",
    commonUse: "Family transportation, luxury travel, and group outings.",
    specs: {
      engine: "3.5L gasoline",
      horsepower: "248 hp",
      torque: "335 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "10-13 km/L",
      seats: 8,
    },
    imageSets: [
      {
        setName: "Silver",
        front: "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-front.png",
        side: "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-side.png",
        rear: "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-rear.png",
      },
      {
        setName: "Red",
        front: "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-front.png",
        side: "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-side.png",
        rear: "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-rear.png",
      },
      {
        setName: "Blue",
        front: "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-front.png",
        side: "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-side.png",
        rear: "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-front.png",
      "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-side.png",
      "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-rear.png",
      "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-front.png",
      "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-side.png",
      "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-rear.png",
      "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-front.png",
      "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-side.png",
      "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-rear.png"
    ],
    funFacts: [
      "The Honda Odyssey is known for its premium features and comfort.",
      "Popular among families seeking a luxury MPV experience.",
      "Advanced safety features and modern technology.",
    ],
  },
  {
    id: "nissan_serena",
    brand: "Nissan",
    model: "Serena",
    type: "MPV",
    yearRange: "2018-present",
    description: "A spacious and comfortable MPV with modern features and reliability.",
    priceRange: "₱1,200,000-₱1,700,000",
    commonUse: "Family transportation, group travel, and commercial use.",
    specs: {
      engine: "2.0L gasoline",
      horsepower: "147 hp",
      torque: "207 Nm",
      transmission: "CVT",
      fuelType: "Gasoline",
      fuelEfficiency: "12-15 km/L",
      seats: 7,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/mpv/nissan-serena/white/mpv-serena-white-front.png",
      },
    ],
    galleryImages: [
      "/assets/images/mpv/nissan-serena/white/mpv-serena-white-front.png",
    ],
    funFacts: [
      "The Nissan Serena is known for its spacious interior and comfort.",
      "Popular among families for its 7-seater configuration.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "hyundai_starex",
    brand: "Hyundai",
    model: "Starex",
    type: "MPV",
    yearRange: "2018-present",
    description: "A practical and affordable MPV perfect for families and commercial use.",
    priceRange: "₱1,000,000-₱1,500,000",
    commonUse: "Family transportation, group travel, and commercial use.",
    specs: {
      engine: "2.5L diesel",
      horsepower: "170 hp",
      torque: "412 Nm",
      transmission: "Automatic",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 11,
    },
    imageSets: [
      {
        setName: "Black",
        front: "/assets/images/mpv/hyundai-starex/black/mpv-starex-black-front.png",
      },
    ],
    galleryImages: [
      "/assets/images/mpv/hyundai-starex/black/mpv-starex-black-front.png",
    ],
    funFacts: [
      "Hyundai Starex offers excellent value with a 7-year warranty.",
      "Known for its spacious 11-seater configuration.",
      "Popular among families and commercial operators.",
    ],
  },
  {
    id: "kia_carnival",
    brand: "Kia",
    model: "Carnival",
    type: "MPV",
    yearRange: "2021-present",
    description: "A premium and spacious MPV with advanced features and luxury comfort.",
    priceRange: "₱1,800,000-₱2,400,000",
    commonUse: "Premium family transportation, luxury travel, and group outings.",
    specs: {
      engine: "3.5L gasoline",
      horsepower: "272 hp",
      torque: "355 Nm",
      transmission: "Automatic",
      fuelType: "Gasoline",
      fuelEfficiency: "10-13 km/L",
      seats: 8,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-front.png",
        side: "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-side.png",
        rear: "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-front.png",
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-side.png",
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-rear.png"
    ],
    funFacts: [
      "Kia Carnival offers premium features and luxury comfort.",
      "Known for its spacious 8-seater configuration.",
      "Popular among families seeking a premium MPV experience.",
    ],
  },

  // ===== PICKUP TRUCKS (5 models) =====
  {
    id: "toyota_hilux",
    brand: "Toyota",
    model: "Hilux",
    type: "Pickup Truck",
    yearRange: "2015-present",
    description: "A legendary and rugged pickup truck known for its durability and off-road capability.",
    priceRange: "₱1,200,000-₱1,800,000",
    commonUse: "Commercial use, off-road adventures, and family transportation.",
    specs: {
      engine: "2.4L or 2.8L diesel",
      horsepower: "150-177 hp",
      torque: "343-450 Nm",
      transmission: "Automatic / Manual",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-front.png",
        side: "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-side.png",
        rear: "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-front.png",
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-side.png",
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-rear.png"
    ],
    funFacts: [
      "The Toyota Hilux is one of the most popular pickup trucks in the Philippines.",
      "Known for its legendary durability and off-road capability.",
      "Excellent resale value and strong community support.",
    ],
  },
  {
    id: "isuzu_d_max",
    brand: "Isuzu",
    model: "D-Max",
    type: "Pickup Truck",
    yearRange: "2017-present",
    description: "A powerful and capable pickup truck designed for work and adventure.",
    priceRange: "₱1,100,000-₱1,700,000",
    commonUse: "Commercial use, off-road adventures, and family transportation.",
    specs: {
      engine: "1.9L or 3.0L diesel",
      horsepower: "150-177 hp",
      torque: "350-430 Nm",
      transmission: "Automatic / Manual",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "White",
        front: "/assets/images/pickup/isuzu-dmax/white/pickup-dmax-white-front.png",
      },
      {
        setName: "Red",
        front: "/assets/images/pickup/isuzu-dmax/red/pickup-dmax-red-front.png",
      },
    ],
    galleryImages: [
      "/assets/images/pickup/isuzu-dmax/white/pickup-dmax-white-front.png",
      "/assets/images/pickup/isuzu-dmax/red/pickup-dmax-red-front.png"
    ],
    funFacts: [
      "The Isuzu D-Max is known for its durability and off-road capability.",
      "Popular among commercial operators and adventurers.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "ford_ranger",
    brand: "Ford",
    model: "Ranger",
    type: "Pickup Truck",
    yearRange: "2015-present",
    description: "A modern and capable pickup truck with advanced features and comfort.",
    priceRange: "₱1,300,000-₱1,900,000",
    commonUse: "Commercial use, off-road adventures, and family transportation.",
    specs: {
      engine: "2.2L or 3.2L diesel",
      horsepower: "160-200 hp",
      torque: "385-470 Nm",
      transmission: "Automatic / Manual",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Red",
        front: "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-front.png",
        side: "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-side.png",
        rear: "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-rear.png",
      },
      {
        setName: "Gray",
        front: "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-front.png",
        side: "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-side.png",
        rear: "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-rear.png",
      },
      {
        setName: "White",
        front: "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-front.png",
        side: "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-side.png",
        rear: "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-front.png",
      "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-side.png",
      "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-rear.png",
      "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-front.png",
      "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-side.png",
      "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-rear.png",
      "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-front.png",
      "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-side.png",
      "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-rear.png"
    ],
    funFacts: [
      "The Ford Ranger is known for its modern design and advanced features.",
      "Popular among commercial operators and adventurers.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "mitsubishi_triton",
    brand: "Mitsubishi",
    model: "Triton",
    type: "Pickup Truck",
    yearRange: "2015-present",
    description: "A reliable and capable pickup truck with excellent off-road performance.",
    priceRange: "₱1,000,000-₱1,600,000",
    commonUse: "Commercial use, off-road adventures, and family transportation.",
    specs: {
      engine: "2.4L or 2.5L diesel",
      horsepower: "134-178 hp",
      torque: "320-430 Nm",
      transmission: "Automatic / Manual",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Orange",
        front: "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-front.png",
        side: "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-side.png",
        rear: "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-front.png",
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-side.png",
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-rear.png"
    ],
    funFacts: [
      "The Mitsubishi Triton is known for its reliability and durability.",
      "Popular among commercial operators and adventurers.",
      "Excellent resale value in the Philippine market.",
    ],
  },
  {
    id: "chevrolet_colorado",
    brand: "Chevrolet",
    model: "Colorado",
    type: "Pickup Truck",
    yearRange: "2017-present",
    description: "A modern and powerful pickup truck with advanced features and comfort.",
    priceRange: "₱1,400,000-₱2,000,000",
    commonUse: "Commercial use, off-road adventures, and family transportation.",
    specs: {
      engine: "2.8L diesel",
      horsepower: "200 hp",
      torque: "500 Nm",
      transmission: "Automatic",
      fuelType: "Diesel",
      fuelEfficiency: "10-13 km/L",
      seats: 5,
    },
    imageSets: [
      {
        setName: "Blue",
        front: "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-front.png",
        side: "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-side.png",
        rear: "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-rear.png",
      },
      {
        setName: "Red",
        front: "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-front.png",
        side: "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-side.png",
        rear: "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-rear.png",
      },
      {
        setName: "White",
        front: "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-front.png",
        side: "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-side.png",
        rear: "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-rear.png",
      },
    ],
    galleryImages: [
      "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-front.png",
      "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-side.png",
      "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-rear.png",
      "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-front.png",
      "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-side.png",
      "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-rear.png",
      "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-front.png",
      "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-side.png",
      "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-rear.png"
    ],
    funFacts: [
      "The Chevrolet Colorado is known for its powerful engine and advanced features.",
      "Popular among commercial operators and adventurers.",
      "Excellent resale value in the Philippine market.",
    ],
  },
]

export const quizTests = [
  {
    id: "test_1",
    name: "All Models Challenge",
    description: "Test your knowledge on all available car models",
    carIds: [
      // Sedans
      "toyota_vios",
      "honda_city",
      "hyundai_accent",
      "nissan_almera",
      "mazda_2_sedan",
      "kia_soluto",
      "mitsubishi_lancer",
      "subaru_impreza",
      "toyota_corolla",
      // SUVs
      "toyota_fortuner",
      "honda_cr_v",
      "mitsubishi_montero",
      "hyundai_tucson",
      "kia_sorento",
      "nissan_x_trail",
      "mazda_cx_5",
      "isuzu_mu_x",
      "toyota_rav4",
      // Hatchbacks
      "mitsubishi_mirage",
      "mazda_2_hatchback",
      "hyundai_i10",
      "kia_picanto",
      "toyota_wigo",
      "honda_jazz",
      "nissan_march",
      "suzuki_swift",
      "volkswagen_polo",
      // MPVs
      "toyota_avanza",
      "honda_odyssey",
      "nissan_serena",
      "hyundai_starex",
      "kia_carnival",
      // Pickup Trucks
      "toyota_hilux",
      "isuzu_d_max",
      "ford_ranger",
      "mitsubishi_triton",
      "chevrolet_colorado",
    ],
  },
  {
    id: "test_2",
    name: "Sedans Only",
    description: "Focus on sedan models",
    carIds: [
      "toyota_vios",
      "honda_city",
      "hyundai_accent",
      "nissan_almera",
      "mazda_2_sedan",
      "kia_soluto",
      "mitsubishi_lancer",
      "subaru_impreza",
      "toyota_corolla",
    ],
  },
  {
    id: "test_3",
    name: "SUVs Challenge",
    description: "Test your knowledge on SUV models",
    carIds: [
      "toyota_fortuner",
      "honda_cr_v",
      "mitsubishi_montero",
      "hyundai_tucson",
      "kia_sorento",
      "nissan_x_trail",
      "mazda_cx_5",
      "isuzu_mu_x",
      "toyota_rav4",
    ],
  },
  {
    id: "test_4",
    name: "Budget Cars",
    description: "Test your knowledge on affordable vehicles",
    carIds: [
      "mitsubishi_mirage",
      "hyundai_i10",
      "kia_picanto",
      "toyota_wigo",
      "nissan_march",
      "toyota_vios",
      "kia_soluto",
      "nissan_almera",
    ],
  },
  {
    id: "test_5",
    name: "Hatchbacks Only",
    description: "Focus on hatchback models",
    carIds: [
      "mitsubishi_mirage",
      "mazda_2_hatchback",
      "hyundai_i10",
      "kia_picanto",
      "toyota_wigo",
      "honda_jazz",
      "nissan_march",
      "suzuki_swift",
      "volkswagen_polo",
    ],
  },
  {
    id: "test_6",
    name: "Family Vehicles",
    description: "Test your knowledge on family-oriented cars",
    carIds: [
      "toyota_avanza",
      "honda_odyssey",
      "nissan_serena",
      "hyundai_starex",
      "kia_carnival",
      "toyota_fortuner",
      "honda_cr_v",
      "mitsubishi_montero",
      "toyota_corolla",
    ],
  },
  {
    id: "test_7",
    name: "Pickup Trucks",
    description: "Test your knowledge on pickup truck models",
    carIds: ["toyota_hilux", "isuzu_d_max", "ford_ranger", "mitsubishi_triton", "chevrolet_colorado"],
  },
  {
    id: "test_8",
    name: "Premium Cars",
    description: "Test your knowledge on premium and luxury vehicles",
    carIds: [
      "subaru_impreza",
      "toyota_corolla",
      "mazda_2_sedan",
      "mazda_2_hatchback",
      "mazda_cx_5",
      "volkswagen_polo",
      "honda_odyssey",
      "kia_carnival",
    ],
  },
]