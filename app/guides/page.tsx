"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
Info,
  BookText,
  Flag,
  Car,
  Mountain,
  PackageOpen,
  Users,
  Truck,
  Tag,
  ShieldCheck,
  Gem,
  Waves,
  Wrench,
  Scale,
  Fuel,
  Layers,
  GitBranch,
  Gauge,
  BatteryCharging,
  MoveVertical,
  Wind,
  HeartHandshake,
  CloudRain,
  PiggyBank,
  BadgeCheck,
  Gavel
} from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            KotsePedia Guides
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Your guide to recognizing car models, types, and brands, and understanding common car lingo in the Philippines.
          </p>
        </div>

        <Tabs defaultValue="car-types" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto gap-2 mb-6">
            <TabsTrigger
              value="car-types"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Info className="h-4 w-4 shrink-0" />
              Car Types
            </TabsTrigger>
            <TabsTrigger
              value="car-brands"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Tag className="h-4 w-4 shrink-0" />
              Car Brands
            </TabsTrigger>
            <TabsTrigger
              value="car-lingo"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <BookText className="h-4 w-4 shrink-0" />
              Car Lingo
            </TabsTrigger>
            <TabsTrigger
              value="ph-popular"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Flag className="h-4 w-4 shrink-0" />
              Why Popular
            </TabsTrigger>
          </TabsList>

          <TabsContent value="car-types" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Identifying Common Car Types
            </h2>
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Car className="inline-block h-5 w-5 mr-2" />
                  Spotting a Sedan: The Three-Box Classic
                </h3>
                <p className="text-balance mb-3">
                  The most traditional car shape. Identify a sedan by its distinct <strong>three separate compartments</strong> or "boxes" when viewed from the side: the engine area (hood), the passenger cabin, and a separate trunk compartment extending at the rear. The rear window is fixed and does not open with the trunk. Sedans typically have four doors and a lower ride height compared to SUVs or MPVs.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Defining Feature:</strong> A separate, protruding trunk lid that opens independently of the rear window.
                  </li>
                  <li>
                    <strong>Visual Cues:</strong> Lower roofline, distinct separation between the cabin and trunk, four doors, fixed rear window. Often looks balanced and proportional.
                  </li>
                  <li>
                    <strong>PH Examples:</strong> Toyota Vios, Honda Civic, Mitsubishi Mirage G4, Nissan Almera.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <PackageOpen className="inline-block h-5 w-5 mr-2" />
                  Spotting a Hatchback: The Versatile Two-Box
                </h3>
                <p className="text-balance mb-3">
                  Distinguished primarily by its rear access. Instead of a separate trunk, a hatchback features a <strong>large rear door (hatch) that includes the rear window and swings upward</strong>. This merges the passenger and cargo areas into a single space, creating a "two-box" design (engine, cabin/cargo). Hatchbacks are often shorter than sedans and can have two or four passenger doors.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Defining Feature:</strong> The entire rear section, including the window, lifts up as one large door.
                  </li>
                  <li>
                    <strong>Visual Cues:</strong> Often compact, roofline extends further back and slopes down towards the rear, no separate trunk sticking out, rear window is part of the door mechanism.
                  </li>
                  <li>
                    <strong>PH Examples:</strong> Toyota Wigo, Honda Brio, Suzuki Swift, Mazda3 Hatchback.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Mountain className="inline-block h-5 w-5 mr-2" />
                  Spotting an SUV: The Rugged High-Rider
                </h3>
                <p className="text-balance mb-3">
                  Look for a vehicle with a <strong>noticeably high ground clearance</strong> and a robust, often boxy or muscular appearance. Traditional SUVs popular in the Philippines (like the Fortuner, Montero Sport, Everest) are built on a strong, separate <strong>truck chassis (body-on-frame)</strong>. They convey a sense of toughness and off-road capability. The rear cargo area is integrated with the passenger cabin, accessed via a large tailgate or barn doors. They commonly offer three rows of seating.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Defining Feature:</strong> High ground clearance combined with a rugged, body-on-frame construction (feels substantial, like a truck).
                  </li>
                  <li>
                    <strong>Visual Cues:</strong> Tall stance, often large wheels and tires, prominent fenders, upright profile, shares design cues with pickup trucks (for body-on-frame models).
                  </li>
                  <li>
                    <strong>PH Examples:</strong> Toyota Fortuner, Mitsubishi Montero Sport, Ford Everest, Isuzu mu-X, Nissan Terra.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Users className="inline-block h-5 w-5 mr-2" />
                  Spotting an MPV: The Spacious People Mover
                </h3>
                <p className="text-balance mb-3">
                  Identify an MPV (Multi-Purpose Vehicle) or Minivan by its focus on <strong>maximizing interior space for passengers</strong>. They often feature a long wheelbase (distance between front and rear wheels) relative to their overall length, and a tall, sometimes van-like or elongated wagon shape. The design prioritizes cabin volume, usually accommodating 7 or more people comfortably across three rows.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Defining Feature:</strong> Shape optimized for maximum passenger and cargo volume, typically with 3 rows of seats.
                  </li>
                  <li>
                    <strong>Visual Cues:</strong> Long roofline, often tall and upright cabin, wheels pushed towards the corners, larger rear side windows, some models feature sliding rear doors.
                  </li>
                  <li>
                    <strong>PH Examples:</strong> Toyota Innova, Mitsubishi Xpander, Suzuki Ertiga, Honda BR-V (often considered a subcompact MPV/SUV).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Truck className="inline-block h-5 w-5 mr-2" />
                  Spotting a Pickup Truck: The Open-Bed Workhorse
                </h3>
                <p className="text-balance mb-3">
                  Unmistakable due to its unique structure: a <strong>separate passenger cabin followed by an open cargo bed</strong> at the rear. Pickup trucks are built on a robust body-on-frame chassis, designed for hauling heavy loads and tackling rough terrain. In the Philippines, the "double cab" configuration (four full doors, seating for 5) is the most prevalent, blending utility with passenger capability.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Defining Feature:</strong> An unenclosed, open cargo area (the "bed") separate from the passenger cabin.
                  </li>
                  <li>
                    <strong>Visual Cues:</strong> Distinct separation between cab and bed, high ground clearance, rugged and utilitarian appearance (though modern ones are quite stylish).
                  </li>
                  <li>
                    <strong>PH Examples:</strong> Toyota Hilux, Ford Ranger, Nissan Navara, Isuzu D-Max, Mitsubishi Strada/Triton.
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="car-brands" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Popular Car Brands in the Philippines
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <ShieldCheck className="inline-block h-5 w-5 mr-2 text-red-600" />
                  Toyota: The Undisputed Market Leader
                </h3>
                <p className="text-balance">
                  The undisputed market leader by a large margin, often holding
                  close to 50% market share. Toyota's dominance is built on
                  its unwavering QDR promise: <strong>Quality, Durability, and
                  Reliability</strong>. Their dealership network is the
                  largest and most accessible in the country, and finding
                  parts (both original and replacement) is incredibly easy and
                  affordable. This ecosystem results in an unbeatable resale
                  value, making Toyotas a safe and practical investment for
                  Filipinos. They also lead in hybrid (HEV) technology adoption in
                  the country.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> Vios (Top Seller Overall),
                    Innova (Family Favorite), Fortuner (Iconic SUV), Hilux
                    (Workhorse Pickup), Raize (Popular Crossover), Wigo (Entry
                    Hatchback).
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Gem className="inline-block h-5 w-5 mr-2 text-red-700" />
                  Mitsubishi: The Strong & Versatile Rival
                </h3>
                <p className="text-balance">
                  Toyota's long-time primary rival and consistently the solid
                  #2 brand in the market. Mitsubishi has built a strong
                  reputation, particularly in MPVs and SUVs. The <strong>Montero
                  Sport</strong> SUV is a household name, often seen as a status
                  symbol and known for its features and powerful diesel
                  engine. The <strong>Xpander</strong> MPV has been a phenomenal
                  success, capturing the hearts of families with its futuristic
                  looks, practical interior, and SUV-like ground clearance.
                  Their <strong>L300</strong> cab-over van remains an unkillable
                  icon for countless Filipino businesses.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> Xpander (Best-selling MPV),
                    Montero Sport (Popular SUV), Mirage G4 (Affordable Sedan),
                    L300 (Business Icon), Strada/Triton (Capable Pickup).
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Truck className="inline-block h-5 w-5 mr-2 text-blue-600" />
                  Ford: The Face of Toughness & Technology
                </h3>
                <p className="text-balance">
                  Ford has successfully carved out a powerful niche focusing on
                  American-style <strong>toughness, capability, and
                  technology</strong>. They dominate the premium and
                  lifestyle pickup truck scene with the highly popular
                  <strong> Ranger</strong> and the aspirational,
                  high-performance <strong>Ranger Raptor</strong>. The <strong>Everest</strong>,
                  its SUV counterpart built on the same platform, is a direct
                  and feature-packed rival to the Fortuner and Montero. More
                  recently, the <strong>Territory</strong> crossover became a
                  massive hit, offering advanced tech, a spacious interior,
                  and attractive pricing.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> Ranger (Top Pickup), Everest
                    (Premium SUV), Territory (Popular Crossover).
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Waves className="inline-block h-5 w-5 mr-2 text-gray-700" />
                  Nissan: The Blend of Comfort & Innovation
                </h3>
                <p className="text-balance">
                  A strong and historic brand with a loyal following and a
                  reputation for comfort and innovation. Nissan's 
                  <strong> Navara</strong> pickup stands out with its unique
                  coil-spring rear suspension (most pickups use leaf springs),
                  providing a significantly more comfortable, car-like ride.
                  They are also pioneers in mass-market hybrid technology with
                  their unique <strong>e-Power</strong> system (found in the
                  Kicks), where the gasoline engine only charges the battery,
                  offering a smooth, EV-like driving experience. Their
                  <strong> Terra</strong> SUV is a capable competitor in the
                  7-seater SUV segment.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> Navara (Comfortable Pickup),
                    Terra (7-Seater SUV), Kicks e-Power (Innovative Hybrid),
                    Almera (Spacious Sedan).
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Wrench className="inline-block h-5 w-5 mr-2 text-red-500" />
                  Honda: The Standard for Quality & Engineering
                </h3>
                <p className="text-balance">
                  Honda holds a strong premium-mainstream position in the
                  Philippines. The brand is associated with <strong>high-quality
                  build, exceptional reliability, and refined engineering</strong>,
                  especially its responsive and efficient VTEC gasoline
                  engines. Models like the Civic and CR-V have a long-standing,
                  aspirational status. The City and BR-V are consistent volume
                  sellers, offering a step-up in feel and performance for
                  discerning buyers.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> City (Premium B-Sedan), Civic
                    (Iconic Compact), CR-V (Pioneering Crossover), BR-V
                    (7-Seater MPV/Crossover).
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Scale className="inline-block h-5 w-5 mr-2 text-blue-500" />
                  Suzuki: The King of Compact & Practical
                </h3>
                <p className="text-balance">
                  The undisputed king of <strong>small, practical, and
                  affordable</strong> cars. Suzuki is often the go-to brand for
                  first-time car buyers, city dwellers navigating tight
                  streets, and those on a strict budget. They are masters of
                  fuel efficiency and clever packaging drawing from Japanese
                  kei-car expertise, managing to fit impressive interior
                  space and practicality into very small exterior footprints.
                  While affordable, they maintain a good reputation for
                  reliability.
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> S-Presso (Micro SUV/Hatch),
                    Dzire (Small Sedan), Ertiga (Budget MPV), Carry (Business
                    Utility), and the highly sought-after, cult-classic Jimny
                    off-roader.
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Fuel className="inline-block h-5 w-5 mr-2 text-black" />
                  Isuzu: The Diesel Durability Specialist
                </h3>
                <p className="text-balance">
                  Isuzu's brand in the Philippines is synonymous with one
                  thing: <strong>incredibly durable, reliable, and efficient
                  diesel engines</strong>. Their focus is almost entirely on
                  body-on-frame vehicles built to last. The <strong>D-Max</strong> pickup
                  and its 7-seater SUV counterpart, the <strong>mu-X</strong>, are trusted
                  by families and businesses alike for their longevity and
                  go-anywhere capability. They also dominate the commercial
                  truck market with the N-Series (Elf).
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Staples:</strong> D-Max (Workhorse Pickup), mu-X
                    (7-Seater Diesel SUV), N-Series Trucks (Business
                    Backbone).
                  </span>
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="car-lingo" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Common Car Lingo Explained
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Layers className="inline-block h-5 w-5 mr-2" />
                  Body-on-frame vs. Unibody
                </h3>
                <p className="text-balance">
                  This defines a vehicle's core structure. <strong>Body-on-frame</strong> uses a separate, strong steel chassis (like a ladder) with the body bolted on top. It's tough, durable, better for heavy loads and serious off-roading, but heavier and less refined (can feel jiggly). Found in true SUVs (Fortuner, Everest) and all Pickup Trucks. <strong>Unibody</strong> (or Monocoque) integrates the frame and body into a single structure. It's lighter, more rigid (safer in crashes), allows for better handling and comfort, but less suited for extreme abuse or heavy towing. Found in Sedans, Hatchbacks, MPVs, and Crossovers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <GitBranch className="inline-block h-5 w-5 mr-2" />
                  Drivetrain (FWD, RWD, AWD/4WD)
                </h3>
                <p className="text-balance">
                  Indicates which wheels receive engine power. <strong>FWD (Front-Wheel Drive)</strong> powers the front wheels. Most common configuration for sedans, hatchbacks, crossovers, and MPVs due to efficiency and space-saving. Generally offers good traction in normal conditions. (e.g., Vios, Raize, Xpander). <strong>RWD (Rear-Wheel Drive)</strong> powers the rear wheels. Common in sports cars (better handling balance) and body-on-frame vehicles (better for carrying heavy loads). (e.g., Innova, Fortuner, Navara). <strong>AWD/4WD (All-Wheel / Four-Wheel Drive)</strong> Engine can power all four wheels. <strong>4WD</strong> (or 4x4) is typically a selectable, heavy-duty system with low-range gears for serious off-road conditions (found in SUVs and Pickups). <strong>AWD</strong> is usually an automatic system that sends power to wheels with grip for better traction on slippery roads or light trails (common in Subarus, some premium crossovers).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Gauge className="inline-block h-5 w-5 mr-2" />
                  Horsepower (HP) vs. Torque (Nm)
                </h3>
                <p className="text-balance">
                  Two measures of engine power. <strong>Horsepower (HP)</strong> relates to the engine's ability to do work quickly - think high-revving power, top speed, and acceleration at higher speeds. <strong>Torque (Nm - Newton-meters)</strong> is the engine's twisting force or rotational power - think low-revving pulling power from a stop, climbing steep hills, or carrying heavy loads. High torque makes a car feel effortless and responsive in daily driving, especially at low engine speeds (RPM). Diesel engines are known for high torque, while gasoline engines often achieve higher horsepower relative to their size, usually at higher RPMs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <BatteryCharging className="inline-block h-5 w-5 mr-2" />
                  Hybrid (HEV), Plug-in (PHEV) & Electric (BEV)
                </h3>
                <p className="text-balance">
                  Types of electrified vehicles. <strong>HEV (Hybrid Electric Vehicle)</strong> has both a gas engine and an electric motor/battery. The battery charges itself through braking (regenerative braking) and the engine; you cannot plug it in. Can run on electricity alone for short distances at low speeds to save fuel. (e.g., Toyota Corolla Cross Hybrid, Nissan Kicks e-Power - though e-Power is a series hybrid). <strong>PHEV (Plug-in Hybrid Electric Vehicle)</strong> similar to HEV but with a larger battery that can be plugged in to charge externally. Offers a much longer electric-only range (e.g., 30-60km) before the gas engine is needed. (e.g., Mitsubishi Outlander PHEV, BYD Song). <strong>BEV (Battery Electric Vehicle)</strong> is 100% electric, has no gas engine. Must be plugged in to charge. Offers silent operation, instant torque (quick acceleration), and zero tailpipe emissions. (e.g., BYD Atto 3, MG4 EV, Tesla Model 3).
                  <br />
                  <span className="text-xs text-foreground/80">
                    <strong>PH Bonus:</strong> Registered HEVs, PHEVs, and BEVs are exempted from the MMDA number coding scheme until 2030 under the EVIDA law.
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <MoveVertical className="inline-block h-5 w-5 mr-2" />
                  Ground Clearance
                </h3>
                <p className="text-balance">
                  The vertical distance (usually in millimeters, mm) between the lowest fixed point of the vehicle's underbody (excluding wheels/tires) and the level ground. This is a <strong>critical specification</strong> in the Philippines due to frequent flooding (baha), poorly maintained roads with numerous potholes, speed bumps (humps), and unpaved provincial routes. Higher ground clearance (typically 180mm+ for crossovers, 200-220mm+ for SUVs and Pickups) significantly reduces the risk of scraping the underbody, damaging components, or getting stuck in water. Sedans usually have lower ground clearance (around 130-160mm).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Wind className="inline-block h-5 w-5 mr-2" />
                  Turbocharged ("Turbo")
                </h3>
                <p className="text-balance">
                  Refers to an engine equipped with a turbocharger, a type of forced induction system. This device uses exhaust gases to spin a turbine, which in turn spins a compressor, forcing more compressed air into the engine cylinders. More air allows more fuel to be burned efficiently, resulting in significantly more power and torque from a smaller displacement engine (e.g., a 1.3L Turbo can feel like a 2.0L non-turbo). Benefits include potential fuel efficiency gains during light driving and strong mid-range torque. Very common in modern downsized gasoline engines (especially in crossovers and European cars) and almost all modern diesel engines in pickups and SUVs.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ph-popular" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Why Specific Cars Thrive in the Philippines
            </h2>
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <HeartHandshake className="inline-block h-5 w-5 mr-2" />
                  The Family Factor: "Kasya Buong Pamilya!"
                </h3>
                <p className="text-balance">
                  Filipino culture is deeply family-centric, often involving extended family members in daily activities, weekend outings, and road trips. A standard 5-seater sedan or hatchback frequently proves insufficient. Consequently, vehicles capable of accommodating 7 or even 8 people, commonly known as "7-seaters," are immensely popular. This includes versatile <strong>MPVs</strong> (like the Toyota Innova, Mitsubishi Xpander, Suzuki Ertiga) and spacious <strong>mid-size SUVs</strong> (such as the Toyota Fortuner, Mitsubishi Montero Sport, Ford Everest, Nissan Terra). The ability to comfortably transport <i>lolo</i> and <i>lola</i> (grandparents), <i>titos</i> and <i>titas</i> (uncles and aunts), or the household helper (<i>yaya</i>) alongside the immediate family is a major practical advantage, reflecting the cultural emphasis on inclusivity and shared experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <CloudRain className="inline-block h-5 w-5 mr-2" />
                  The Environment Factor: "Baha & Bumpy" Roads
                </h3>
                <p className="text-balance">
                  Navigating Philippine roads presents unique challenges. Metro Manila is notorious for sudden, heavy downpours leading to widespread flooding (<i>baha</i>), while provincial roads can vary dramatically from well-paved highways to rough, potholed, or entirely unpaved tracks. In this context, <strong>high ground clearance</strong> transitions from a desirable feature to a near necessity. Vehicles that sit higher off the ground – primarily <strong>SUVs</strong>, <strong>Pickup Trucks</strong>, but also increasingly popular high-stance <strong>Crossovers</strong> and taller <strong>MPVs</strong> (like the Toyota Innova or Mitsubishi Xpander Cross) – provide crucial peace of mind. Their ability to wade through moderate floods and traverse uneven surfaces without scraping or damaging the undercarriage makes them far more suitable for local conditions than lower-slung sedans and hatchbacks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <PiggyBank className="inline-block h-5 w-5 mr-2" />
                  The Practicality Factor: Running Costs & Utility
                </h3>
                <p className="text-balance">
                  Filipino car buyers are known for their pragmatism, heavily weighing long-term running costs. Fuel efficiency is a paramount concern due to fluctuating fuel prices. <strong>Small, economical gasoline-powered cars</strong> (like the Toyota Wigo, Toyota Vios, Mitsubishi Mirage, Suzuki S-Presso) remain excellent choices for navigating dense city traffic and appeal strongly to first-time buyers. For larger vehicles expected to carry heavier loads, frequently travel long distances, or serve business needs, <strong>Diesel engines</strong> continue to be a popular choice in <strong>SUVs</strong>, <strong>Pickups</strong>, and certain <strong>MPVs</strong> (notably the Toyota Innova). Diesel engines typically offer superior torque (essential for hauling) and better fuel economy under load compared to equivalent large gasoline engines, aligning well with the demands of both family and commercial use in the Philippines. Furthermore, the inherent utility of <strong>Pickup trucks</strong> makes them indispensable for many businesses and individuals with active lifestyles requiring significant cargo capacity.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <BadgeCheck className="inline-block h-5 w-5 mr-2" />
                  The Trust Factor: Reliability, Parts, & Resale Value
                </h3>
                <p className="text-balance">
                  Purchasing a car represents a major financial commitment, making long-term dependability and value retention critical considerations. This phenomenon is often encapsulated as the <strong>"Toyota Factor."</strong> Brands that have earned a stellar reputation for <strong>bulletproof reliability</strong>, maintain a <strong>vast and accessible network of dealerships (<i>casas</i>)</strong> for service, and crucially, have readily <strong>available and affordable spare parts</strong> (<i>madali at mura ang piyesa</i>) tend to dominate the market. Deep-seated trust in established brands like Toyota and Mitsubishi gives buyers confidence in predictable maintenance costs and, very importantly, strong <strong>resale value</strong>. This minimizes the financial risk of ownership, ensuring their significant investment holds its value better over time compared to less established or reputable brands.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  <Gavel className="inline-block h-5 w-5 mr-2" />
                  The Regulatory & Lifestyle Factor: Coding, Taxes & Image
                </h3>
                <p className="text-balance">
                  Government policies and prevailing lifestyle trends also significantly shape car choices. The <strong>MMDA Number Coding Exemption</strong> granted to registered <strong>Hybrid and Battery Electric Vehicles</strong> under the EVIDA law provides a substantial daily convenience for residents navigating Metro Manila's traffic, markedly boosting the appeal of models like the Nissan Kicks e-Power, Toyota's hybrid lineup (Corolla Cross, Zenix), and various BEVs. Historically, <strong>Pickup trucks</strong> enjoyed immense popularity partly due to a significant excise tax exemption (which was removed effective July 1, 2025), making them considerably cheaper than their similarly capable SUV counterparts. Although this advantage is gone, it solidified their market position for years. Beyond regulations, vehicle choice often reflects personal image and aspirations. Owning certain vehicles, such as a large, imposing SUV or a rugged, capable Pickup truck, frequently serves as a <strong>status symbol</strong> or projects an image of an active, adventurous, or successful lifestyle that strongly resonates within the Philippine cultural context.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}   