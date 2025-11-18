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
    "id": "toyota-vios",
    "brand": "Toyota",
    "model": "Vios",
    "type": "Sedan",
    "yearRange": "2018-present",
    "description": "A popular compact sedan in the Philippines known for its reliability and fuel efficiency.",
    "priceRange": "₱750,000-₱1,100,000",
    "commonUse": "Daily commuting, family car, and ride-hailing services like Grab.",
    "specs": {
      "engine": "1.3L or 1.5L gasoline",
      "horsepower": "98-106 hp",
      "torque": "123 Nm",
      "transmission": "Manual / CVT",
      "fuelType": "Gasoline",
      "fuelEfficiency": "14-18 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/sedans/vios/red/sedan-vios-red-front.png",
        "side": "/assets/images/sedans/vios/red/sedan-vios-red-side.png",
        "rear": "/assets/images/sedans/vios/red/sedan-vios-red-rear.png"
      },
      {
        "setName": "Black",
        "front": "/assets/images/sedans/vios/black/sedan-vios-black-front.png",
        "side": "/assets/images/sedans/vios/black/sedan-vios-black-side.png",
        "rear": "/assets/images/sedans/vios/black/sedan-vios-black-rear.png"
      },
      {
        "setName": "Silver",
        "front": "/assets/images/sedans/vios/silver/sedan-vios-silver-front.png",
        "side": "/assets/images/sedans/vios/silver/sedan-vios-silver-side.png",
        "rear": "/assets/images/sedans/vios/silver/sedan-vios-silver-rear.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The Vios Cup, a one-make racing series in the Philippines, has helped launch the careers of several local racing drivers.",
      "The name 'Vios' comes from the Latin word 'violare,' meaning 'to move forward' or 'advance.'",
      "The Vios has been locally produced at Toyota's plant in Santa Rosa, Laguna, for many years, making it a true 'Filipino-built' car.",
      "It's often called the 'king of resale value' in the subcompact class, sometimes retaining over 60% of its value after 3-4 years.",
      "The 'GR-S' (Gazoo Racing Sport) variant isn't just a body kit; it features a 10-speed simulated CVT mode for a sportier feel."
    ]
  },
  {
    "id": "honda-city",
    "brand": "Honda",
    "model": "City",
    "type": "Sedan",
    "yearRange": "2020-present",
    "description": "A versatile compact sedan offering excellent fuel economy and spacious interior.",
    "priceRange": "₱850,000-₱1,200,000",
    "commonUse": "Family transportation, daily commuting, and ride-sharing.",
    "specs": {
      "engine": "1.5L gasoline",
      "horsepower": "119 hp",
      "torque": "145 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "16-20 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/sedans/honda-city/red/sedan-city-red-front.png",
        "side": "/assets/images/sedans/honda-city/red/sedan-city-red-side.png",
        "rear": "/assets/images/sedans/honda-city/red/sedan-city-red-rear.png",
        "interiorFoward": "/assets/images/sedans/honda-city/red/sedan-city-red-interior-forward.png",
        "interiorBehind": "/assets/images/sedans/honda-city/red/sedan-city-red-interior-behind.png"
      },
      {
        "setName": "Blue",
        "front": "/assets/images/sedans/honda-city/blue/sedan-city-blue-front.png",
        "side": "/assets/images/sedans/honda-city/blue/sedan-city-blue-side.png",
        "rear": "/assets/images/sedans/honda-city/blue/sedan-city-blue-rear.png",
        "interiorFoward": "/assets/images/sedans/honda-city/blue/sedan-city-blue-interior-forward.png",
        "interiorBehind": "/assets/images/sedans/honda-city/blue/sedan-city-blue-interior-behind.png"
      },
      {
        "setName": "White",
        "front": "/assets/images/sedans/honda-city/white/sedan-city-white-front.png",
        "side": "/assets/images/sedans/honda-city/white/sedan-city-white-side.png",
        "rear": "/assets/images/sedans/honda-city/white/sedan-city-white-rear.png",
        "interiorFoward": "/assets/images/sedans/honda-city/white/sedan-city-white-interior-forward.png",
        "interiorBehind": "/assets/images/sedans/honda-city/white/sedan-city-white-interior-behind.png"
      },
      {
        "setName": "Gray",
        "front": "/assets/images/sedans/honda-city/gray/sedan-city-gray-front.png",
        "side": "/assets/images/sedans/honda-city/gray/sedan-city-gray-side.png",
        "rear": "/assets/images/sedans/honda-city/gray/sedan-city-gray-rear.png",
        "interiorFoward": "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-forward.png",
        "interiorBehind": "/assets/images/sedans/honda-city/gray/sedan-city-gray-interior-behind.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The 'RS' (Road Sailing) badge on the top-trim City isn't new; Honda has used this sporty designation since the 1970s.",
      "The original Honda City in the 1980s was a tiny, tall hatchback, completely different from the sedan it is today.",
      "The 1.5L DOHC i-VTEC engine is one of the few in its class to be dual-cam (DOHC), offering a slight performance edge over SOHC rivals.",
      "Its rear-seat legroom is famous for rivaling cars in a class above, a major plus for Filipino families.",
      "The latest models are one of the most affordable sedans to offer a full 'Honda Sensing' suite, including adaptive cruise control."
    ]
  },
  {
    "id": "hyundai-accent",
    "brand": "Hyundai",
    "model": "Accent",
    "type": "Sedan",
    "yearRange": "2017-present",
    "description": "A stylish and modern compact sedan with advanced safety features.",
    "priceRange": "₱800,000-₱1,150,000",
    "commonUse": "Urban commuting, family use, and corporate fleets.",
    "specs": {
      "engine": "1.4L or 1.6L gasoline",
      "horsepower": "100-123 hp",
      "torque": "132-155 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "15-19 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-front.png",
        "side": "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-side.png",
        "rear": "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-front.png",
      "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-side.png",
      "/assets/images/sedans/hyundai-accent/blue/sedan-accent-blue-rear.png"
    ],
    "funFacts": [
      "The previous generation of the Accent was famous for its diesel variant, which was incredibly popular with fleet operators and Grab drivers for its massive fuel savings.",
      "It was one of the first cars in the PH to offer a 5-year unlimited mileage warranty, which was a major market disruptor at the time.",
      "The 'Accent' nameplate actually competed in the World Rally Championship (WRC) from 2000 to 2003.",
      "In some markets, like its home country of South Korea, the Accent is known as the 'Verna'.",
      "A hatchback version of the Accent was also sold, but the sedan version is far more common on Philippine roads."
    ]
  },
  {
    "id": "nissan-almera",
    "brand": "Nissan",
    "model": "Almera",
    "type": "Sedan",
    "yearRange": "2020-present",
    "description": "A practical and affordable sedan with a spacious cabin and reliable performance.",
    "priceRange": "₱700,000-₱1,050,000",
    "commonUse": "Family transportation, taxi services, and daily commuting.",
    "specs": {
      "engine": "1.2L gasoline",
      "horsepower": "79 hp",
      "torque": "104 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "17-21 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Silver",
        "front": "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-front.png",
        "side": "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-side.png",
        "rear": "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-front.png",
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-side.png",
      "/assets/images/sedans/nissan-almera/silver/sedan-almera-silver-rear.png"
    ],
    "funFacts": [
      "The newest Almera model (2020+) uses a tiny 1.0-liter 3-cylinder turbo engine, a first for its class in the PH market.",
      "It was one of the first in its segment to offer 'Nissan Intelligent Mobility' features like a 360-degree 'Around View Monitor'.",
      "The new design is often nicknamed the 'Baby Altima' due to its strong resemblance to Nissan's larger, more executive sedan.",
      "In the United States and other markets, the Almera is sold as the 'Nissan Versa'.",
      "Its key selling point has always been its cabin space, boasting rear legroom that feels like it belongs in a mid-size sedan."
    ]
  },
  {
    "id": "mazda-2-sedan",
    "brand": "Mazda",
    "model": "2 Sedan",
    "type": "Sedan",
    "yearRange": "2019-present",
    "description": "A premium compact sedan with engaging driving dynamics and upscale interior.",
    "priceRange": "₱950,000-₱1,350,000",
    "commonUse": "Premium commuting, family car, and driving enthusiasts.",
    "specs": {
      "engine": "1.5L gasoline",
      "horsepower": "110 hp",
      "torque": "144 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "15-18 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Quartz",
        "front": "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-front.png",
        "side": "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-side.png",
        "rear": "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-front.png",
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-side.png",
      "/assets/images/sedans/mazda2/quartz/sedan-mazda2-quartz-rear.png"
    ],
    "funFacts": [
      "The car's flowing lines are part of Mazda's 'Kodo: Soul of Motion' design language, aiming to capture the look of an animal in motion.",
      "It features 'G-Vectoring Control,' a subtle software trick that slightly cuts engine torque on corner entry to improve handling.",
      "The 'Skyactiv' name isn't just the engine; it's a whole-car philosophy including the transmission, high-tensile steel chassis, and suspension.",
      "The Mazda 2 was once rebadged and sold as a Toyota Yaris sedan in the United States and Canada.",
      "Mazda's design philosophy prioritizes the driver, which is why the interior layout and materials feel much more expensive than its rivals."
    ]
  },
  {
    "id": "kia-soluto",
    "brand": "Kia",
    "model": "Soluto",
    "type": "Sedan",
    "yearRange": "2019-present",
    "description": "An affordable and practical sedan with a spacious interior and modern features.",
    "priceRange": "₱650,000-₱950,000",
    "commonUse": "Budget-conscious families, daily commuting, and ride-sharing.",
    "specs": {
      "engine": "1.4L gasoline",
      "horsepower": "94 hp",
      "torque": "132 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "16-20 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-front.png",
        "rear": "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-front.png",
      "/assets/images/sedans/kia-soluto/red/sedan-soluto-red-rear.png"
    ],
    "funFacts": [
      "The Soluto is a 'platform twin' of the Hyundai Reina, sharing the same underlying chassis and engine.",
      "It's based on the Kia 'Pegas,' a model primarily developed for the Chinese and other emerging markets.",
      "Its main strategy is 'value-packing' – offering features like a reverse camera and an infotainment screen on trims where rivals don't.",
      "The Soluto was key to Kia's 'reboot' in the Philippines under the Ayala Corporation, focusing on affordability and reliability.",
      "It comes with Kia's 5-year / 160,000 km warranty, one of the most competitive in the local market."
    ]
  },
  {
    "id": "mitsubishi-lancer",
    "brand": "Mitsubishi",
    "model": "Lancer",
    "type": "Sedan",
    "yearRange": "2017-present",
    "description": "A reliable and fuel-efficient sedan with a sporty design and comfortable interior.",
    "priceRange": "₱900,000-₱1,250,000",
    "commonUse": "Family transportation, daily commuting, and corporate use.",
    "specs": {
      "engine": "1.5L gasoline",
      "horsepower": "103 hp",
      "torque": "137 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "15-19 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-front.png",
        "side": "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-side.png",
        "rear": "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-front.png",
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-side.png",
      "/assets/images/sedans/mitsubishi-lancer/white/sedan-lancer-white-rear.png"
    ],
    "funFacts": [
      "The Lancer name is legendary thanks to its 'big brother,' the Lancer Evolution, which won multiple World Rally Championships.",
      "The popular 2007-2017 generation was nicknamed the 'Lancer EX' in the PH, and globally known as the 'Shark-nose' Lancer.",
      "A 2.0L variant of the Lancer EX was often nicknamed the 'Lancer PADEro' by enthusiasts because it used the same 4B11 engine block found in the Pajero.",
      "The final generation had an incredibly long production run, lasting over 10 years (2007-2017) with minor changes.",
      "Its discontinuation marked the end of Mitsubishi's long-running compact sedan lineage, as the company shifted focus to SUVs and MPVs."
    ]
  },
  {
    "id": "subaru-impreza",
    "brand": "Subaru",
    "model": "Impreza",
    "type": "Sedan",
    "yearRange": "2018-present",
    "description": "A premium sedan with all-wheel drive and advanced safety features.",
    "priceRange": "₱1,200,000-₱1,600,000",
    "commonUse": "Premium commuting, family car, and driving enthusiasts.",
    "specs": {
      "engine": "2.0L gasoline",
      "horsepower": "152 hp",
      "torque": "196 Nm",
      "transmission": "CVT",
      "fuelType": "Gasoline",
      "fuelEfficiency": "13-16 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Gold",
        "front": "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-front.png",
        "side": "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-side.png",
        "rear": "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-front.png",
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-side.png",
      "/assets/images/sedans/subaru-impreza/gold/sedan-impreza-gold-rear.png"
    ],
    "funFacts": [
      "Unlike all its rivals, the Impreza comes with 'Symmetrical All-Wheel Drive' as standard on all trim levels.",
      "It uses a 'Boxer' engine, where the pistons move horizontally (like a boxer punching) instead of vertically, giving it a lower center of gravity.",
      "It features Subaru's 'EyeSight' safety system, which uses two stereo cameras (like a pair of eyes) to scan the road.",
      "The Impreza is the historic arch-rival to the Mitsubishi Lancer Evolution in the World Rally Championship.",
      "The high-performance 'WRX' and 'STI' models, once just top trims of the Impreza, became their own separate model lines in 2014."
    ]
  },
  {
    "id": "toyota-corolla",
    "brand": "Toyota",
    "model": "Corolla",
    "type": "Sedan",
    "yearRange": "2019-present",
    "description": "A legendary sedan known for its reliability, efficiency, and timeless design.",
    "priceRange": "₱1,100,000-₱1,500,000",
    "commonUse": "Family transportation, daily commuting, and long-distance travel.",
    "specs": {
      "engine": "1.6L or 1.8L gasoline",
      "horsepower": "122-140 hp",
      "torque": "151-172 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "14-18 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Black",
        "front": "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-front.png",
        "side": "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-side.png",
        "rear": "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-front.png",
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-side.png",
      "/assets/images/sedans/toyota-corolla/black/sedan-corolla-black-rear.png"
    ],
    "funFacts": [
      "It holds the Guinness World Record for the best-selling automotive nameplate in history, with over 50 million sold worldwide since 1966.",
      "In the Philippines, it's called the 'Corolla Altis.' 'Altis' comes from the word 'altiloquent,' meaning high-sounding or superior.",
      "The 7th generation (1990s) is fondly remembered in the PH as the 'Big Body' Corolla and is now a popular '90s enthusiast car.",
      "The current generation is the first Corolla Altis in the Philippines to be offered as a full hybrid (HEV) variant.",
      "The 'GR-S' (Gazoo Racing Sport) model adds aggressive styling, a stiffer suspension, and paddle shifters for a sportier driving feel."
    ]
  },

  // ===== SUVs (9 models) =====
  {
    "id": "toyota-fortuner",
    "brand": "Toyota",
    "model": "Fortuner",
    "type": "SUV",
    "yearRange": "2015-present",
    "description": "A rugged and spacious SUV perfect for families and off-road adventures.",
    "priceRange": "₱1,500,000-₱2,200,000",
    "commonUse": "Family trips, off-road adventures, and commercial use.",
    "specs": {
      "engine": "2.4L or 2.8L diesel",
      "horsepower": "148-177 hp",
      "torque": "343-450 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "Gray",
        "front": "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-front.png",
        "side": "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-side.png",
        "rear": "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-front.png",
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-side.png",
      "/assets/images/suv/toyota-fortuner/gray/suv-fortuner-gray-rear.png"
    ],
    "funFacts": [
      "The Fortuner is built on the same 'body-on-frame' platform as the famously indestructible Toyota Hilux pickup truck.",
      "Its name is derived from the English word 'Fortune', implying it's a vehicle for a 'fortunate' owner.",
      "It is part of Toyota's global IMV (Innovative International Multi-purpose Vehicle) project, which also includes the Hilux and Innova.",
      "In some South American markets, the Fortuner is sold under the name 'Toyota SW4'.",
      "The high-end LTD and GR-S (Gazoo Racing Sport) variants are easily identified by their sporty body kits and two-tone black roof design."
    ]
  },
  {
    "id": "honda-cr-v",
    "brand": "Honda",
    "model": "CR-V",
    "type": "SUV",
    "yearRange": "2017-present",
    "description": "A versatile and comfortable compact SUV ideal for urban and suburban driving.",
    "priceRange": "₱1,400,000-₱1,900,000",
    "commonUse": "Family transportation, weekend trips, and daily commuting.",
    "specs": {
      "engine": "1.5L or 2.0L gasoline",
      "horsepower": "173-190 hp",
      "torque": "220-243 Nm",
      "transmission": "CVT / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "12-15 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/suv/honda-crv/blue/suv-crv-blue-front.png",
        "side": "/assets/images/suv/honda-crv/blue/suv-crv-blue-side.png",
        "rear": "/assets/images/suv/honda-crv/blue/suv-crv-blue-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-front.png",
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-side.png",
      "/assets/images/suv/honda-crv/blue/suv-crv-blue-rear.png"
    ],
    "funFacts": [
      "The name 'CR-V' officially stands for 'Comfortable Runabout Vehicle'.",
      "The first generation (1990s) famously included a foldable picnic table stored under the cargo area floor.",
      "It was one of the first SUVs to use a car-like unibody platform (based on the Civic), which is why it's known for its comfortable ride.",
      "The 5th generation CR-V (2017) was the first-ever Honda model in the Philippines to be offered with a diesel engine.",
      "The latest 6th generation model (2023+) is the first CR-V in the PH to be offered as a full hybrid (e:HEV) and to feature Honda SENSING on all variants."
    ]
  },
  {
    "id": "mitsubishi-montero",
    "brand": "Mitsubishi",
    "model": "Montero",
    "type": "SUV",
    "yearRange": "2015-present",
    "description": "A powerful and capable SUV designed for both on-road comfort and off-road performance.",
    "priceRange": "₱1,600,000-₱2,300,000",
    "commonUse": "Family trips, off-road adventures, and commercial use.",
    "specs": {
      "engine": "3.2L diesel",
      "horsepower": "190 hp",
      "torque": "441 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel",
      "fuelEfficiency": "9-12 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "Gray",
        "front": "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-front.png",
        "side": "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-side.png",
        "rear": "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-front.png",
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-side.png",
      "/assets/images/suv/mitsubishi-montero/black/suv-montero-black-rear.png"
    ],
    "funFacts": [
      "In the Philippines, it's called 'Montero Sport' to differentiate it from the larger, now-discontinued flagship 'Montero' (also known as 'Pajero').",
      "The name 'Montero' is Spanish for 'mountain hunter', emphasizing its off-road, 'go-anywhere' capability.",
      "It is built on the same body-on-frame platform as its pickup truck sibling, the Mitsubishi Strada/Triton.",
      "Top-tier 4x4 models feature the 'Super-Select II 4WD' system, which allows the driver to use full-time 4WD on dry pavement, a rare feature in its class.",
      "The current generation's 2.4L MIVEC diesel engine was the first in its class to use variable valve timing technology, optimizing power and efficiency."
    ]
  },
  {
    "id": "hyundai-tucson",
    "brand": "Hyundai",
    "model": "Tucson",
    "type": "SUV",
    "yearRange": "2018-present",
    "description": "A stylish and modern compact SUV with advanced technology and safety features.",
    "priceRange": "₱1,300,000-₱1,800,000",
    "commonUse": "Urban commuting, family trips, and weekend adventures.",
    "specs": {
      "engine": "1.6L or 2.0L gasoline",
      "horsepower": "123-165 hp",
      "torque": "156-196 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "12-15 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Black",
        "front": "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-front.png",
        "side": "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-side.png",
        "rear": "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-front.png",
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-side.png",
      "/assets/images/suv/hyundai-tucson/black/suv-tucson-black-rear.png"
    ],
    "funFacts": [
      "The Tucson is named after the city of Tucson, Arizona, continuing Hyundai's theme of naming SUVs after American destinations.",
      "The latest generation (NX4) is famous for its 'Parametric Jewel' grille, where the daytime running lights are hidden within the grille pattern itself.",
      "In the past, the Tucson was extremely popular in the PH for its CRDi (diesel) variant, which was known for its powerful torque and fuel economy.",
      "The high-performance 'N-Line' variant offers sporty styling inspired by Hyundai's 'N' performance division, similar to Toyota's 'GR-S'.",
      "The Tucson shares its unibody platform with its Kia counterpart, the Sportage."
    ]
  },
  {
    "id": "kia-sorento",
    "brand": "Kia",
    "model": "Sorento",
    "type": "SUV",
    "yearRange": "2018-present",
    "description": "A premium and spacious SUV with a comfortable interior and advanced features.",
    "priceRange": "₱1,500,000-₱2,000,000",
    "commonUse": "Family transportation, long-distance travel, and premium commuting.",
    "specs": {
      "engine": "2.2L diesel or 2.4L gasoline",
      "horsepower": "149-181 hp",
      "torque": "392-235 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel / Gasoline",
      "fuelEfficiency": "10-13 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "Black",
        "front": "/assets/images/suv/kia-sorento/black/suv-sorento-black-front.png",
        "side": "/assets/images/suv/kia-sorento/black/suv-sorento-black-side.png",
        "rear": "/assets/images/suv/kia-sorento/black/suv-sorento-black-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-front.png",
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-side.png",
      "/assets/images/suv/kia-sorento/black/suv-sorento-black-rear.png"
    ],
    "funFacts": [
      "The first-generation Sorento (2002) was a rugged, truck-based (body-on-frame) SUV. It only switched to a more comfortable, car-like unibody in 2009.",
      "The Sorento is named after the scenic coastal town of Sorrento, Italy.",
      "It's positioned as Kia's mid-size 7-seater, slotting just below the larger Telluride (in other markets) or the Carnival MPV.",
      "The latest model's 8-speed 'wet' dual-clutch transmission (DCT) with the diesel engine is a high-performance feature usually found in luxury sports sedans.",
      "The 'Tiger Nose' grille, a signature of modern Kias, was created by famed car designer Peter Schreyer, who also designed the Audi TT."
    ]
  },
  {
    "id": "nissan-x-trail",
    "brand": "Nissan",
    "model": "X-Trail",
    "type": "SUV",
    "yearRange": "2017-present",
    "description": "A versatile and capable compact SUV perfect for families and adventurers.",
    "priceRange": "₱1,200,000-₱1,700,000",
    "commonUse": "Family trips, weekend adventures, and daily commuting.",
    "specs": {
      "engine": "2.0L or 2.5L gasoline",
      "horsepower": "147-171 hp",
      "torque": "207-233 Nm",
      "transmission": "CVT / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "11-14 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Gray",
        "front": "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-front.png",
        "side": "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-side.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-front.png",
      "/assets/images/suv/nissan-xtrail/gray/suv-xtrail-gray-side.png"
    ],
    "funFacts": [
      "In the United States and Canada, the X-Trail is sold under the 'Rogue' nameplate, one of the best-selling vehicles in North America.",
      "The second-generation X-Trail (the boxy one) was famous for its 'washable' and durable cargo area, appealing to adventurers.",
      "The third generation (2014-2021) was the first X-Trail in the Philippines to offer a flexible 7-seat (5+2) configuration.",
      "The latest generation introduced Nissan's 'e-Power' hybrid system to the X-Trail line, where the gas engine acts as a generator for the electric motors.",
      "Top-tier models feature an 'Intelligent 4x4' system that can be left in 2WD (for economy), Auto, or a 'Lock' mode for low-speed traction."
    ]
  },
  {
    "id": "mazda-cx-5",
    "brand": "Mazda",
    "model": "CX-5",
    "type": "SUV",
    "yearRange": "2017-present",
    "description": "A premium compact SUV with engaging driving dynamics and upscale interior.",
    "priceRange": "₱1,600,000-₱2,100,000",
    "commonUse": "Premium commuting, family trips, and driving enthusiasts.",
    "specs": {
      "engine": "2.0L or 2.5L gasoline",
      "horsepower": "155-187 hp",
      "torque": "200-252 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "11-14 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/suv/mazda-cx5/white/suv-cx5-white-front.png",
        "side": "/assets/images/suv/mazda-cx5/white/suv-cx5-white-side.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/mazda-cx5/white/suv-cx5-white-front.png",
      "/assets/images/suv/mazda-cx5/white/suv-cx5-white-side.png"
    ],
    "funFacts": [
      "The CX-5 was the very first Mazda vehicle to fully feature the 'Kodo: Soul of Motion' design language.",
      "It was also the first to feature Mazda's full suite of 'Skyactiv' technologies (engine, transmission, body, and chassis).",
      "Mazda's 'Soul Red Crystal' paint option is famous for its depth and uses a special three-layer painting process.",
      "Unlike many rivals that use CVTs, the CX-5 uses a 6-speed automatic transmission, praised for its responsive, 'direct-drive' feel.",
      "It features 'G-Vectoring Control,' a system that subtly reduces engine torque when turning to shift weight to the front tires, improving handling."
    ]
  },
  {
    "id": "isuzu-mu-x",
    "brand": "Isuzu",
    "model": "MU-X",
    "type": "SUV",
    "yearRange": "2017-present",
    "description": "A rugged and spacious SUV designed for families and off-road adventures.",
    "priceRange": "₱1,400,000-₱1,900,000",
    "commonUse": "Family trips, off-road adventures, and commercial use.",
    "specs": {
      "engine": "1.9L or 3.0L diesel",
      "horsepower": "150-177 hp",
      "torque": "350-430 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/suv/isuzu-mux/white/suv-mux-white-front.png"
      },
      {
        "setName": "Black",
        "front": "/assets/images/suv/isuzu-mux/black/suv-mux-black-front.png"
      },
      {
        "setName": "Gray",
        "front": "/assets/images/suv/isuzu-mux/gray/suv-mux-gray-front.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/isuzu-mux/white/suv-mux-white-front.png",
      "/assets/images/suv/isuzu-mux/black/suv-mux-black-front.png",
      "/assets/images/suv/isuzu-mux/gray/suv-mux-gray-front.png"
    ],
    "funFacts": [
      "The 'mu-X' name stands for 'Mysterious Utility eXtreme'.",
      "It is the SUV version of the Isuzu D-Max pickup, sharing the same tough body-on-frame platform.",
      "Isuzu is world-renowned for its diesel engines, and the RZ4E (1.9L) and 4JJ3-TCX (3.0L) engines are legendary for their durability and torque.",
      "The first-generation mu-X was a 'platform twin' with the Chevrolet Trailblazer, as they were co-developed by GM and Isuzu.",
      "It is one of the few vehicles in its class to still offer a large 3.0-liter engine option, appealing to those who prioritize maximum torque."
    ]
  },
  {
    "id": "toyota-rav4",
    "brand": "Toyota",
    "model": "RAV4",
    "type": "SUV",
    "yearRange": "2019-present",
    "description": "A versatile and reliable compact SUV with all-wheel drive capability.",
    "priceRange": "₱1,700,000-₱2,200,000",
    "commonUse": "Family transportation, weekend trips, and adventure travel.",
    "specs": {
      "engine": "2.5L gasoline",
      "horsepower": "203 hp",
      "torque": "243 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "12-15 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/suv/toyota-rav4/white/suv-rav4-white-front.png",
        "side": "/assets/images/suv/toyota-rav4/white/suv-rav4-white-side.png",
        "rear": "/assets/images/suv/toyota-rav4/white/suv-rav4-white-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-front.png",
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-side.png",
      "/assets/images/suv/toyota-rav4/white/suv-rav4-white-rear.png"
    ],
    "funFacts": [
      "The name 'RAV4' is an acronym for 'Recreational Active Vehicle with 4-wheel drive', though many are now 2WD.",
      "The RAV4 is widely credited with pioneering the entire compact crossover (unibody) SUV segment back in 1994.",
      "The first generation was a small 3-door (and later 5-door) vehicle, much smaller than the mid-size family crossover it is today.",
      "The current generation's rugged, angular design is heavily inspired by Toyota's larger, tougher 4Runner and Tacoma trucks.",
      "The RAV4 Hybrid is one of the best-selling hybrid vehicles in the world and is also offered in the Philippines."
    ]
  },

  // ===== HATCHBACKS (9 models) =====
  {
    "id": "mitsubishi-mirage",
    "brand": "Mitsubishi",
    "model": "Mirage",
    "type": "Hatchback",
    "yearRange": "2012-present",
    "description": "An affordable and practical hatchback perfect for city driving and tight parking spaces.",
    "priceRange": "₱600,000-₱900,000",
    "commonUse": "City commuting, first-time car buyers, and budget-conscious drivers.",
    "specs": {
      "engine": "1.2L gasoline",
      "horsepower": "78 hp",
      "torque": "100 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "17-21 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Gray",
        "front": "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-front.png",
        "side": "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-side.png",
        "rear": "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-front.png",
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-side.png",
      "/assets/images/hatchbacks/mitsubishi-mirage/gray/hatchback-mirage-gray-rear.png"
    ],
    "funFacts": [
      "The Mirage is locally produced at Mitsubishi's plant in Santa Rosa, Laguna.",
      "It is a key model in the Philippine government's CARS (Comprehensive Automotive Resurgence Strategy) program to boost local manufacturing.",
      "The Mirage is well-known for its exceptionally tight turning radius, making it a master of U-turns on tight city streets.",
      "Its 1.2L MIVEC engine is a 3-cylinder, which is a key reason for its high fuel efficiency.",
      "The sedan version of this car is called the 'Mirage G4' in the Philippines."
    ]
  },
  {
    "id": "mazda-2-hatchback",
    "brand": "Mazda",
    "model": "2 Hatchback",
    "type": "Hatchback",
    "yearRange": "2019-present",
    "description": "A premium compact hatchback with engaging driving dynamics and upscale interior.",
    "priceRange": "₱900,000-₱1,300,000",
    "commonUse": "Urban commuting, driving enthusiasts, and young professionals.",
    "specs": {
      "engine": "1.5L gasoline",
      "horsepower": "110 hp",
      "torque": "144 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "15-18 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-front.png",
        "rear": "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-front.png",
      "/assets/images/hatchbacks/mazda2/white/hatchback-mazda2-white-rear.png"
    ],
    "funFacts": [
      "The design follows Mazda's 'Kodo: Soul of Motion' philosophy, which aims to capture the look of an animal pouncing.",
      "It features 'G-Vectoring Control,' a system that subtly cuts engine torque when turning to improve steering response.",
      "The car is built on the 'Skyactiv-Vehicle Architecture,' which includes the chassis, body, and engine all designed to work together.",
      "The Mazda 2 was once rebadged and sold as the Toyota Yaris sedan in the United States.",
      "Its interior is often praised for using premium materials like leather and suede, making it feel like a car from a luxury brand."
    ]
  },
  {
    "id": "hyundai-i10",
    "brand": "Hyundai",
    "model": "i10",
    "type": "Hatchback",
    "yearRange": "2017-present",
    "description": "A stylish and affordable compact hatchback perfect for city driving.",
    "priceRange": "₱550,000-₱800,000",
    "commonUse": "City commuting, first-time car buyers, and budget-conscious drivers.",
    "specs": {
      "engine": "1.0L or 1.2L gasoline",
      "horsepower": "66-83 hp",
      "torque": "94-120 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "18-22 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-front.png",
        "side": "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-side.png",
        "rear": "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-front.png",
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-side.png",
      "/assets/images/hatchbacks/hyundai-i10/blue/hatchback-i10-blue-rear.png"
    ],
    "funFacts": [
      "The i10 was originally developed to replace the Hyundai Atos as the brand's entry-level city car.",
      "It shares its underlying platform and many components with its corporate cousin, the Kia Picanto.",
      "The 'Grand i10' sold in the Philippines was a special, larger version with a longer wheelbase, primarily built for the Indian market.",
      "Unlike its rival the Wigo, the i10 offered a 1.2-liter 4-cylinder engine option, which was praised for being smoother.",
      "The i10 has been officially phased out in the Philippines as of 2023, with Hyundai focusing on the Casper and Reina."
    ]
  },
  {
    "id": "kia-picanto",
    "brand": "Kia",
    "model": "Picanto",
    "type": "Hatchback",
    "yearRange": "2017-present",
    "description": "An affordable and practical hatchback with a spacious interior for its size.",
    "priceRange": "₱500,000-₱750,000",
    "commonUse": "City commuting, first-time car buyers, and budget-conscious drivers.",
    "specs": {
      "engine": "1.0L or 1.2L gasoline",
      "horsepower": "66-83 hp",
      "torque": "94-120 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "18-22 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-front.png",
        "side": "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-side.png",
        "rear": "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-front.png",
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-side.png",
      "/assets/images/hatchbacks/kia-picanto/red/hatchback-picanto-red-rear.png"
    ],
    "funFacts": [
      "The name 'Picanto' is derived from the Italian word 'piccante,' which means 'spicy'.",
      "The Picanto (and i10) platform-twin was designed by Peter Schreyer, a famed designer who previously designed the Audi TT.",
      "It has won multiple 'Red Dot Design Awards' for its stylish and bold exterior design in the city car segment.",
      "In its home market of South Korea, the Picanto is known as the 'Kia Morning'.",
      "The sporty 'GT-Line' variant features aggressive bumpers, red accents, and dual exhaust tips, making it look much sportier than its rivals."
    ]
  },
  {
    "id": "toyota-wigo",
    "brand": "Toyota",
    "model": "Wigo",
    "type": "Hatchback",
    "yearRange": "2018-present",
    "description": "An affordable and reliable hatchback perfect for city driving and tight parking.",
    "priceRange": "₱550,000-₱800,000",
    "commonUse": "City commuting, first-time car buyers, and budget-conscious drivers.",
    "specs": {
      "engine": "1.0L gasoline",
      "horsepower": "67 hp",
      "torque": "89 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "18-22 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-front.png",
        "side": "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-side.png",
        "rear": "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-front.png",
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-side.png",
      "/assets/images/hatchbacks/toyota-wigo/red/hatchback-wigo-red-rear.png"
    ],
    "funFacts": [
      "The Wigo is a 'triplet' car; it's a rebadged version of the Daihatsu Ayla and is also sold as the Toyota Agya in other markets.",
      "It's designed under Daihatsu (a Toyota subsidiary) which specializes in small, efficient cars.",
      "The sporty-looking 'TRD S' variant was a popular, locally-added trim that featured a full body kit, spoiler, and TRD graphics.",
      "Despite its tiny size, the previous generation Wigo had a surprisingly high ground clearance of 180mm, almost as much as some crossovers.",
      "The new 2024 model is built on a completely new platform (DNGA) and features a CVT instead of the old 4-speed automatic."
    ]
  },
  {
    "id": "honda-jazz",
    "brand": "Honda",
    "model": "Jazz",
    "type": "Hatchback",
    "yearRange": "2015-present",
    "description": "A versatile and spacious hatchback with excellent interior flexibility.",
    "priceRange": "₱800,000-₱1,150,000",
    "commonUse": "Urban commuting, young professionals, and families.",
    "specs": {
      "engine": "1.3L or 1.5L gasoline",
      "horsepower": "100-119 hp",
      "torque": "123-145 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "16-20 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Gray",
        "front": "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-front.png",
        "side": "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-side.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-front.png",
      "/assets/images/hatchbacks/honda-jazz/gray/hatchback-jazz-gray-side.png"
    ],
    "funFacts": [
      "The Jazz is famously equipped with 'Magic Seats' (or ULT seats: Utility, Long, Tall mode) which can fold flat or flip up like cinema seats.",
      "In 'Tall Mode', the rear seat cushions flip up, allowing you to carry tall items like a plant or a small bicycle upright.",
      "In 'Long Mode', the front passenger seat reclines flat, allowing you to fit items as long as a surfboard inside the car.",
      "The Jazz is known as the Honda 'Fit' in most other markets, like Japan and the United States.",
      "Honda officially discontinued the Jazz in the Philippines in 2021, shifting its focus to the new Honda City Hatchback."
    ]
  },
  {
    "id": "nissan-march",
    "brand": "Nissan",
    "model": "March",
    "type": "Hatchback",
    "yearRange": "2017-present",
    "description": "An affordable and practical hatchback perfect for city driving.",
    "priceRange": "₱600,000-₱850,000",
    "commonUse": "City commuting, first-time car buyers, and budget-conscious drivers.",
    "specs": {
      "engine": "1.2L gasoline",
      "horsepower": "79 hp",
      "torque": "104 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "17-21 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/hatchbacks/nissan-march/blue/hatchback-march-blue-front.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/nissan-march/blue/hatchback-march-blue-front.png"
    ],
    "funFacts": [
      "The March is known as the Nissan 'Micra' in Europe and most other parts of the world.",
      "The nameplate is one of Nissan's oldest, with the first generation (K10) launching in 1982.",
      "The original K10 Micra was actually designed by Nissan for Fiat, who rejected the design in favor of their own 'Uno'.",
      "The K13 generation (sold in the PH) was a 'global car' built in multiple countries, including Thailand, India, and Mexico.",
      "Its distinct, bubbly shape was designed to maximize interior headroom and visibility, making it a very easy car to drive in the city."
    ]
  },
  {
    "id": "suzuki-swift",
    "brand": "Suzuki",
    "model": "Swift",
    "type": "Hatchback",
    "yearRange": "2017-present",
    "description": "A fun and agile hatchback with excellent handling and fuel efficiency.",
    "priceRange": "₱700,000-₱1,000,000",
    "commonUse": "Urban commuting, driving enthusiasts, and young professionals.",
    "specs": {
      "engine": "1.2L gasoline",
      "horsepower": "83 hp",
      "torque": "108 Nm",
      "transmission": "CVT / Manual",
      "fuelType": "Gasoline",
      "fuelEfficiency": "18-22 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-front.png",
        "rear": "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-front.png",
      "/assets/images/hatchbacks/suzuki-swift/Blue/hatchback-swift-Blue-rear.png"
    ],
    "funFacts": [
      "The rear door handles are 'hidden' in the black C-pillar trim, designed to give the 5-door car a sportier 3-door look.",
      "The current generation is built on Suzuki's 'HEARTECT' platform, which is significantly lighter and stiffer than its predecessor.",
      "It's famous for its 'go-kart-like' handling, making it a favorite among driving enthusiasts on a budget.",
      "The high-performance 'Swift Sport' variant is a legendary 'hot hatch' in other markets, often featuring a turbocharged engine.",
      "The 1.2L engine in the current model is smaller than the 1.4L engine in the previous generation, prioritizing fuel efficiency."
    ]
  },
  {
    "id": "volkswagen-polo",
    "brand": "Volkswagen",
    "model": "Polo",
    "type": "Hatchback",
    "yearRange": "2018-present",
    "description": "A premium compact hatchback with German engineering and quality.",
    "priceRange": "₱1,000,000-₱1,400,000",
    "commonUse": "Premium commuting, driving enthusiasts, and young professionals.",
    "specs": {
      "engine": "1.4L or 1.6L gasoline",
      "horsepower": "85-110 hp",
      "torque": "120-155 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "14-18 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-front.png",
        "side": "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-side.png",
        "rear": "/assets/images/hatchbacks/volkswagen-polo/white/hatchback-polo-white-rear.png"
      },
      {
        "setName": "Red",
        "front": "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-front.png",
        "side": "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-side.png",
        "rear": "/assets/images/hatchbacks/volkswagen-polo/red/hatchback-polo-red-rear.png"
      },
      {
        "setName": "Blue",
        "front": "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-front.png",
        "side": "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-side.png",
        "rear": "/assets/images/hatchbacks/volkswagen-polo/blue/hatchback-polo-blue-rear.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The very first Volkswagen Polo, launched in 1975, was actually a rebadged version of a more luxurious car, the Audi 50.",
      "The Volkswagen logo on the hatchback's trunk often doubles as the trunk release handle.",
      "The Polo has won 'World Car of the Year' (2010) and 'World Urban Car of the Year' (2018).",
      "The high-performance 'Polo GTI' is a famous 'hot hatch' and a direct rival to the Ford Fiesta ST and Suzuki Swift Sport.",
      "The sedan version of the Polo (called 'Polo Notch' in PH) was based on a model built in India, where it is known as the 'Volkswagen Vento'."
    ]
  },

  // ===== MPVs (5 models) =====
  {
    "id": "toyota-avanza",
    "brand": "Toyota",
    "model": "Avanza",
    "type": "MPV",
    "yearRange": "2019-present",
    "description": "A practical and affordable MPV perfect for families and group travel.",
    "priceRange": "₱900,000-₱1,300,000",
    "commonUse": "Family transportation, group travel, and commercial use.",
    "specs": {
      "engine": "1.3L or 1.5L gasoline",
      "horsepower": "98-104 hp",
      "torque": "123-136 Nm",
      "transmission": "Manual / Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "14-17 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "Black",
        "front": "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-front.png",
        "rear": "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-front.png",
      "/assets/images/mpv/toyota-avanza/black/mpv-avanza-black-rear.png"
    ],
    "funFacts": [
      "The name 'Avanza' is derived from the Italian word 'avanzato', which means 'advance' or 'move forward'.",
      "Until 2021, the Avanza was famously rear-wheel drive (RWD), unlike its competitors. The all-new 2022 model switched to a more space-efficient front-wheel drive (FWD) platform.",
      "It is a 'twin' vehicle co-developed with Toyota's subsidiary, Daihatsu, which sells its version as the Daihatsu Xenia.",
      "The latest generation features a 'Long Sofa Mode' seating configuration, where the first and second-row seats can recline to form a long, bed-like surface.",
      "It's a dominant force in the compact MPV segment, often battling its Mitsubishi rival, the Xpander, for the top-selling spot in the Philippines."
    ]
  },
  {
    "id": "honda-odyssey",
    "brand": "Honda",
    "model": "Odyssey",
    "type": "MPV",
    "yearRange": "2018-present",
    "description": "A premium and spacious MPV with advanced features and comfort.",
    "priceRange": "₱1,600,000-₱2,100,000",
    "commonUse": "Family transportation, luxury travel, and group outings.",
    "specs": {
      "engine": "3.5L gasoline",
      "horsepower": "248 hp",
      "torque": "335 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "10-13 km/L",
      "seats": 8
    },
    "imageSets": [
      {
        "setName": "Silver",
        "front": "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-front.png",
        "side": "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-side.png",
        "rear": "/assets/images/mpv/honda-odyssey/silver/mpv-odyssey-silver-rear.png"
      },
      {
        "setName": "Red",
        "front": "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-front.png",
        "side": "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-side.png",
        "rear": "/assets/images/mpv/honda-odyssey/red/mpv-odyssey-red-rear.png"
      },
      {
        "setName": "Blue",
        "front": "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-front.png",
        "side": "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-side.png",
        "rear": "/assets/images/mpv/honda-odyssey/blue/mpv-odyssey-blue-rear.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The name 'Odyssey' comes from the Greek mythological poem, 'The Odyssey,' and means 'a long adventurous journey'.",
      "The Philippines market has received two different versions of the Odyssey: the larger, US-market version (like the one pictured) and the sleeker, sportier Japan-market (JDM) version.",
      "The JDM version was praised for its low, sedan-like handling but was discontinued, leaving the larger US version as the sole model.",
      "High-end models feature 'Captain's Chairs' in the second row, which are full-recline lounge seats with ottomans for VIP-like comfort.",
      "It competes directly with the Toyota Sienna and Kia Carnival in the premium minivan segment."
    ]
  },
  {
    "id": "nissan-serena",
    "brand": "Nissan",
    "model": "Serena",
    "type": "MPV",
    "yearRange": "2018-present",
    "description": "A spacious and comfortable MPV with modern features and reliability.",
    "priceRange": "₱1,200,000-₱1,700,000",
    "commonUse": "Family transportation, group travel, and commercial use.",
    "specs": {
      "engine": "2.0L gasoline",
      "horsepower": "147 hp",
      "torque": "207 Nm",
      "transmission": "CVT",
      "fuelType": "Gasoline",
      "fuelEfficiency": "12-15 km/L",
      "seats": 7
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/mpv/nissan-serena/white/mpv-serena-white-front.png"
      }
    ],
    "galleryImages": [
      "/assets/images/mpv/nissan-serena/white/mpv-serena-white-front.png"
    ],
    "funFacts": [
      "The name 'Serena' is derived from the Latin word 'serenus,' which means 'clear, tranquil, or pleasant'.",
      "A key feature is its 'Dual-Back Door,' which allows you to open just the top glass portion of the tailgate or the entire tailgate itself.",
      "The Serena sold in the PH is a 'JDM' or Japanese Domestic Market model, known for its tall, boxy 'compliance' design to maximize space within Japanese tax brackets.",
      "In Japan, the Serena is famous for its advanced 'e-Power' hybrid system (not yet in PH), where the gas engine only charges the battery.",
      "It was also available with 'ProPILOT' assist, Nissan's hands-on semi-autonomous driving feature for highway use."
    ]
  },
  {
    "id": "hyundai-starex",
    "brand": "Hyundai",
    "model": "Starex",
    "type": "MPV",
    "yearRange": "2018-present",
    "description": "A practical and affordable MPV perfect for families and commercial use.",
    "priceRange": "₱1,000,000-₱1,500,000",
    "commonUse": "Family transportation, group travel, and commercial use.",
    "specs": {
      "engine": "2.5L diesel",
      "horsepower": "170 hp",
      "torque": "412 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 11
    },
    "imageSets": [
      {
        "setName": "Black",
        "front": "/assets/images/mpv/hyundai-starex/black/mpv-starex-black-front.png"
      }
    ],
    "galleryImages": [
      "/assets/images/mpv/hyundai-starex/black/mpv-starex-black-front.png"
    ],
    "funFacts": [
      "The Starex is a true icon of Philippine roads, often used as a 'family van,' 'artista van,' or business shuttle.",
      "In most other countries, this van is known as the 'Hyundai H-1' or 'i800'. 'Starex' is a name primarily used in the Philippines and South Korea.",
      "Its 11-seater (or even 12-seater) configuration, with four rows of seats, is a layout specifically popular in the Philippines.",
      "The Starex has been replaced by the new, futuristic-looking 'Staria', which has taken its place as Hyundai's primary people-mover.",
      "Its powerful 2.5L CRDi diesel engine is rear-wheel drive, making it a capable hauler for many people and cargo."
    ]
  },
  {
    "id": "kia-carnival",
    "brand": "Kia",
    "model": "Carnival",
    "type": "MPV",
    "yearRange": "2021-present",
    "description": "A premium and spacious MPV with advanced features and luxury comfort.",
    "priceRange": "₱1,800,000-₱2,400,000",
    "commonUse": "Premium family transportation, luxury travel, and group outings.",
    "specs": {
      "engine": "3.5L gasoline",
      "horsepower": "272 hp",
      "torque": "355 Nm",
      "transmission": "Automatic",
      "fuelType": "Gasoline",
      "fuelEfficiency": "10-13 km/L",
      "seats": 8
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-front.png",
        "side": "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-side.png",
        "rear": "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-front.png",
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-side.png",
      "/assets/images/mpv/kia-carnival/blue/mpv-carnival-blue-rear.png"
    ],
    "funFacts": [
      "Kia markets the new Carnival as a 'GUV' or 'Grand Utility Vehicle' to blend the practicality of a minivan with the style of an SUV.",
      "In North America and other markets, the Carnival is known as the 'Kia Sedona'.",
      "Top-tier models feature 'VIP Lounge Seats' in the second row that can recline almost flat and have power footrests.",
      "The 8-passenger version features a 'Slide-Flex' seating system, where the middle second-row seat can slide forward independently.",
      "The latest generation (KA4) shares its unibody platform with the Kia Sorento SUV."
    ]
  },

  // ===== PICKUP TRUCKS (5 models) =====
  {
    "id": "toyota-hilux",
    "brand": "Toyota",
    "model": "Hilux",
    "type": "Pickup Truck",
    "yearRange": "2015-present",
    "description": "A legendary and rugged pickup truck known for its durability and off-road capability.",
    "priceRange": "₱1,200,000-₱1,800,000",
    "commonUse": "Commercial use, off-road adventures, and family transportation.",
    "specs": {
      "engine": "2.4L or 2.8L diesel",
      "horsepower": "150-177 hp",
      "torque": "343-450 Nm",
      "transmission": "Automatic / Manual",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-front.png",
        "side": "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-side.png",
        "rear": "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-front.png",
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-side.png",
      "/assets/images/pickup/toyota-hilux/white/pickup-hilux-white-rear.png"
    ],
    "funFacts": [
      "The Hilux gained global fame after a famous BBC 'Top Gear' segment where they failed to 'kill' a 1980s model, even after setting it on fire, flooding it, and placing it on a building being demolished.",
      "The Hilux shares its body-on-frame platform (Toyota's IMV platform) with two other best-sellers in the Philippines: the Fortuner SUV and the Innova MPV.",
      "In the 1980s, the Hilux was sold in the US, but it was eventually replaced by the 'Tacoma' to better suit American market preferences for comfort.",
      "Modified, high-performance versions of the Hilux have competed in and won the grueling Dakar Rally, one of the toughest off-road races in the world.",
      "Due to its legendary reliability, the Hilux is a common vehicle of choice for humanitarian organizations, work fleets, and expedition travelers in the most remote parts of the globe."
    ]
  },
  {
    "id": "isuzu-d-max",
    "brand": "Isuzu",
    "model": "D-Max",
    "type": "Pickup Truck",
    "yearRange": "2017-present",
    "description": "A powerful and capable pickup truck designed for work and adventure.",
    "priceRange": "₱1,100,000-₱1,700,000",
    "commonUse": "Commercial use, off-road adventures, and family transportation.",
    "specs": {
      "engine": "1.9L or 3.0L diesel",
      "horsepower": "150-177 hp",
      "torque": "350-430 Nm",
      "transmission": "Automatic / Manual",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "White",
        "front": "/assets/images/pickup/isuzu-dmax/white/pickup-dmax-white-front.png"
      },
      {
        "setName": "Red",
        "front": "/assets/images/pickup/isuzu-dmax/red/pickup-dmax-red-front.png"
      }
    ],
    "galleryImages": [
      "/assets/images/pickup/isuzu-dmax/white/pickup-dmax-white-front.png",
      "/assets/images/pickup/isuzu-dmax/red/pickup-dmax-red-front.png"
    ],
    "funFacts": [
      "Isuzu is world-renowned for its diesel engines, and the D-Max's engines (like the 1.9L RZ4E and 3.0L 4JJ3-TCX) are legendary for their durability and longevity.",
      "The RZ4E 1.9L 'Blue Power' engine was a game-changer, proving a small-displacement engine could be powerful, efficient, and just as tough as larger engines.",
      "The D-Max and its SUV counterpart, the mu-X, were co-developed with General Motors, and previously shared their platform with the Chevrolet Colorado and Trailblazer.",
      "The all-new D-Max (2021+) was the first pickup truck to achieve a 5-star safety rating under the new, stricter 2020 ASEAN NCAP test protocols.",
      "In Australia and the UK, the D-Max was previously sold as the 'Holden Rodeo' and later 'Holden Colorado'."
    ]
  },
  {
    "id": "ford-ranger",
    "brand": "Ford",
    "model": "Ranger",
    "type": "Pickup Truck",
    "yearRange": "2015-present",
    "description": "A modern and capable pickup truck with advanced features and comfort.",
    "priceRange": "₱1,300,000-₱1,900,000",
    "commonUse": "Commercial use, off-road adventures, and family transportation.",
    "specs": {
      "engine": "2.2L or 3.2L diesel",
      "horsepower": "160-200 hp",
      "torque": "385-470 Nm",
      "transmission": "Automatic / Manual",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Red",
        "front": "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-front.png",
        "side": "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-side.png",
        "rear": "/assets/images/pickup/ford-ranger/red/pickup-ranger-red-rear.png"
      },
      {
        "setName": "Gray",
        "front": "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-front.png",
        "side": "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-side.png",
        "rear": "/assets/images/pickup/ford-ranger/gray/pickup-ranger-gray-rear.png"
      },
      {
        "setName": "White",
        "front": "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-front.png",
        "side": "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-side.png",
        "rear": "/assets/images/pickup/ford-ranger/white/pickup-ranger-white-rear.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The high-performance Ranger Raptor is not just a sticker pack; it has a unique frame, widened track, and high-performance FOX racing shocks.",
      "The 'T6' platform the Ranger is built on was designed and engineered almost entirely by Ford Australia.",
      "This same T6 platform is so versatile that it is also used for the Ford Everest SUV and the Ford Bronco (in North America).",
      "The Ranger's 'Wildtrak' trim, with its unique orange stitching and lifestyle-oriented design, helped popularize pickup trucks as premium family vehicles.",
      "The new 2.0L Bi-Turbo engine (found in Raptors and new Wildtraks) uses two turbos to provide both low-end torque and high-end power."
    ]
  },
  {
    "id": "mitsubishi-triton",
    "brand": "Mitsubishi",
    "model": "Triton",
    "type": "Pickup Truck",
    "yearRange": "2015-present",
    "description": "A reliable and capable pickup truck with excellent off-road performance.",
    "priceRange": "₱1,000,000-₱1,600,000",
    "commonUse": "Commercial use, off-road adventures, and family transportation.",
    "specs": {
      "engine": "2.4L or 2.5L diesel",
      "horsepower": "134-178 hp",
      "torque": "320-430 Nm",
      "transmission": "Automatic / Manual",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Orange",
        "front": "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-front.png",
        "side": "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-side.png",
        "rear": "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-rear.png"
      }
    ],
    "galleryImages": [
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-front.png",
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-side.png",
      "/assets/images/pickup/mitsubishi-triton/orange/pickup-triton-orange-rear.png"
    ],
    "funFacts": [
      "In the Philippines, this truck is officially named the 'Strada Triton' or just 'Strada'. In many other markets (like Australia), it's the 'Triton', and in Europe, it's the 'L200'.",
      "The 'Dynamic Shield' front grille design on the 2019+ models is the same design language used on the Montero Sport and Xpander.",
      "Its unique 'J-line' (the curve between the cab and the bed on the 2015 model) was designed to allow for a shorter wheelbase while maximizing interior space.",
      "Top 4x4 models feature Mitsubishi's 'Super Select II 4WD' system, which uniquely allows the truck to be driven in full-time 4WD on dry pavement.",
      "The Triton has a strong rally heritage, with its predecessor, the 'Strada', competing in and conquering the Dakar Rally."
    ]
  },
  {
    "id": "chevrolet-colorado",
    "brand": "Chevrolet",
    "model": "Colorado",
    "type": "Pickup Truck",
    "yearRange": "2017-present",
    "description": "A modern and powerful pickup truck with advanced features and comfort.",
    "priceRange": "₱1,400,000-₱2,000,000",
    "commonUse": "Commercial use, off-road adventures, and family transportation.",
    "specs": {
      "engine": "2.8L diesel",
      "horsepower": "200 hp",
      "torque": "500 Nm",
      "transmission": "Automatic",
      "fuelType": "Diesel",
      "fuelEfficiency": "10-13 km/L",
      "seats": 5
    },
    "imageSets": [
      {
        "setName": "Blue",
        "front": "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-front.png",
        "side": "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-side.png",
        "rear": "/assets/images/pickup/chevrolet-colorado/blue/pickup-colorado-blue-rear.png"
      },
      {
        "setName": "Red",
        "front": "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-front.png",
        "side": "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-side.png",
        "rear": "/assets/images/pickup/chevrolet-colorado/red/pickup-colorado-red-rear.png"
      },
      {
        "setName": "White",
        "front": "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-front.png",
        "side": "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-side.png",
        "rear": "/assets/images/pickup/chevrolet-colorado/white/pickup-colorado-white-rear.png"
      }
    ],
    "galleryImages": [
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
    "funFacts": [
      "The Colorado's 2.8L Duramax diesel engine was the 'King of Torque' in the Philippines for many years, being the first to break the 500 Nm barrier in its class.",
      "The international version of the Colorado (sold in the PH) was a 'platform-twin' with the Isuzu D-Max, co-developed by GM and Isuzu.",
      "The high-end 'High Country Storm' variant featured a factory-installed bull bar, roof rack, and body decals, making it look much more aggressive.",
      "It was one of the first trucks in its class to offer premium features like remote engine start and forward collision alert.",
      "Chevrolet has officially withdrawn from the Philippine market, making these trucks rarer and marking the end of the brand's local presence."
    ]
  }
]

export const quizTests = [
  {
    id: "all-models-challenge",
    name: "All Models Challenge",
    description: "Test your knowledge on all available car models",
    carIds: [
      // Sedans
      "toyota-vios",
      "honda-city",
      "hyundai-accent",
      "nissan-almera",
      "mazda-2-sedan",
      "kia-soluto",
      "mitsubishi-lancer",
      "subaru-impreza",
      "toyota-corolla",
      // SUVs
      "toyota-fortuner",
      "honda-cr-v",
      "mitsubishi-montero",
      "hyundai-tucson",
      "kia-sorento",
      "nissan-x-trail",
      "mazda-cx-5",
      "isuzu-mu-x",
      "toyota-rav4",
      // Hatchbacks
      "mitsubishi-mirage",
      "mazda-2-hatchback",
      "hyundai-i10",
      "kia-picanto",
      "toyota-wigo",
      "honda-jazz",
      "nissan-march",
      "suzuki-swift",
      "volkswagen-polo",
      // MPVs
      "toyota-avanza",
      "honda-odyssey",
      "nissan-serena",
      "hyundai-starex",
      "kia-carnival",
      // Pickup Trucks
      "toyota-hilux",
      "isuzu-d-max",
      "ford-ranger",
      "mitsubishi-triton",
      "chevrolet-colorado",
    ],
  },
  {
    id: "sedans-only",
    name: "Sedans Only",
    description: "Focus on sedan models",
    carIds: [
      "toyota-vios",
      "honda-city",
      "hyundai-accent",
      "nissan-almera",
      "mazda-2-sedan",
      "kia-soluto",
      "mitsubishi-lancer",
      "subaru-impreza",
      "toyota-corolla",
    ],
  },
  {
    id: "suvs-challenge",
    name: "SUVs Challenge",
    description: "Test your knowledge on SUV models",
    carIds: [
      "toyota-fortuner",
      "honda-cr-v",
      "mitsubishi-montero",
      "hyundai-tucson",
      "kia-sorento",
      "nissan-x-trail",
      "mazda-cx-5",
      "isuzu-mu-x",
      "toyota-rav4",
    ],
  },
  {
    id: "budget-cars",
    name: "Budget Cars",
    description: "Test your knowledge on affordable vehicles",
    carIds: [
      "mitsubishi-mirage",
      "hyundai-i10",
      "kia-picanto",
      "toyota-wigo",
      "nissan-march",
      "toyota-vios",
      "kia-soluto",
      "nissan-almera",
    ],
  },
  {
    id: "hatchbacks-only",
    name: "Hatchbacks Only",
    description: "Focus on hatchback models",
    carIds: [
      "mitsubishi-mirage",
      "mazda-2-hatchback",
      "hyundai-i10",
      "kia-picanto",
      "toyota-wigo",
      "honda-jazz",
      "nissan-march",
      "suzuki-swift",
      "volkswagen-polo",
    ],
  },
  {
    id: "family-vehicles",
    name: "Family Vehicles",
    description: "Test your knowledge on family-oriented cars",
    carIds: [
      "toyota-avanza",
      "honda-odyssey",
      "nissan-serena",
      "hyundai-starex",
      "kia-carnival",
      "toyota-fortuner",
      "honda-cr-v",
      "mitsubishi-montero",
      "toyota-corolla",
    ],
  },
  {
    id: "pickup-trucks",
    name: "Pickup Trucks",
    description: "Test your knowledge on pickup truck models",
    carIds: ["toyota-hilux", "isuzu-d-max", "ford-ranger", "mitsubishi-triton", "chevrolet-colorado"],
  },
  {
    id: "premium-cars",
    name: "Premium Cars",
    description: "Test your knowledge on premium and luxury vehicles",
    carIds: [
      "subaru-impreza",
      "toyota-corolla",
      "mazda-2-sedan",
      "mazda-2-hatchback",
      "mazda-cx-5",
      "volkswagen-polo",
      "honda-odyssey",
      "kia-carnival",
    ],
  },
]