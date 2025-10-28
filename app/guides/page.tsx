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
  Truck
} from "lucide-react"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Carpedia PH Guides
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Learn more about car types, common terms, and tips for car owners in
            the Philippines.
          </p>
        </div>

        <Tabs defaultValue="car-types" className="w-full">
          <TabsList className="grid w-full grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 h-auto gap-2 mb-6">
            <TabsTrigger
              value="car-types"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Info className="h-4 w-4 shrink-0" />
              Car Types
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
            
            <TabsTrigger
              value="sedans"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Car className="h-4 w-4 shrink-0" />
              Sedans
            </TabsTrigger>
            <TabsTrigger
              value="suvs"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Mountain className="h-4 w-4 shrink-0" />
              SUVs
            </TabsTrigger>
            <TabsTrigger
              value="hatchbacks"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <PackageOpen className="h-4 w-4 shrink-0" />
              Hatchbacks
            </TabsTrigger>
            <TabsTrigger
              value="mpvs"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Users className="h-4 w-4 shrink-0" />
              MPVs
            </TabsTrigger>
            <TabsTrigger
              value="pickup-trucks"
              className="flex items-center justify-center gap-2 text-xs sm:text-sm py-1.5"
            >
              <Truck className="h-4 w-4 shrink-0" />
              Pickup Trucks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="car-types" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Understanding Car Types
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Sedan</h3>
                <p className="text-balance">
                  The classic car shape. Sedans typically have{" "}
                  <strong>four doors</strong> and a{" "}
                  <strong>separate trunk</strong> compartment in the back for
                  cargo. Think of it as having three distinct sections or
                  "boxes": engine, passenger cabin, and trunk. They usually
                  seat 4-5 people comfortably and are great all-around cars
                  for city driving and small families.
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples: Toyota Vios, Honda Civic, Mitsubishi Mirage G4
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Hatchback
                </h3>
                <p className="text-balance">
                  Similar to sedans, but instead of a separate trunk, the{" "}
                  <strong>entire rear opens upwards like a hatch</strong>,
                  including the rear window. This gives you more flexible
                  cargo space, especially if you fold the rear seats down.
                  They often look sportier or more compact than sedans and
                  are usually available with 2 or 4 passenger doors (plus the
                  rear hatch).
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples: Toyota Wigo, Honda Brio, Suzuki Swift
                  </span>
                  <br />
                  <strong>Key Difference vs. Sedan:</strong> Look at the back.
                  Does the trunk open separately (Sedan) or does the whole
                  rear window lift up (Hatchback)?
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  SUV (Sport Utility Vehicle)
                </h3>
                <p className="text-balance">
                  Known for their <strong>high ground clearance</strong>,
                  rugged appearance, and often available{" "}
                  <strong>all-wheel drive (AWD)</strong> or{" "}
                  <strong>four-wheel drive (4WD)</strong>. Traditionally,
                  SUVs are built using <strong>body-on-frame</strong>{" "}
                  construction (like a pickup truck), making them sturdy,
                  great for towing, handling rough roads, and surviving
                  floods. They typically seat 5-7 people.
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples (Body-on-frame): Toyota Fortuner, Mitsubishi
                    Montero Sport, Ford Everest
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Crossover (CUV)
                </h3>
                <p className="text-balance">
                  These *look* like SUVs (high ground clearance, rugged
                  styling) but are built using <strong>unibody</strong>{" "}
                  construction (like a regular car, where the body and frame
                  are one piece). This makes them lighter, more comfortable
                  on the road, and more fuel-efficient than traditional SUVs.
                  Most crossovers prioritize comfort over extreme off-road
                  ability. This is arguably the most popular segment today.
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples (Unibody): Toyota Raize, Geely Coolray, Honda
                    CR-V, Ford Territory
                  </span>
                  <br />
                  <strong>Key Difference vs. SUV:</strong> It's the frame!
                  SUVs are built like trucks (tougher, better off-road),
                  Crossovers are built like cars (more comfortable, better fuel
                  economy). It's hard to tell visually, but Crossovers often
                  feel smoother to drive.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  MPV / AUV (Multi-Purpose / Asian Utility Vehicle)
                </h3>
                <p className="text-balance">
                  Designed primarily to <strong>maximize passenger space</strong>.
                  They often have a tall, boxy, or van-like shape to fit{" "}
                  <strong>7 or even 8 people</strong> across three rows. MPVs
                  focus on practicality and family transport. Some are car-based
                  (like the Xpander), while others are more rugged and based on
                  truck platforms (like the Innova, often called an AUV).
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples: Toyota Innova, Mitsubishi Xpander, Suzuki Ertiga
                  </span>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pickup Truck
                </h3>
                <p className="text-balance">
                  Easily identified by its{" "}
                  <strong>separate passenger cabin</strong> and{" "}
                  <strong>open cargo bed</strong> in the back. Built on a
                  rugged <strong>body-on-frame</strong> platform, they are
                  designed for hauling heavy loads, towing, and tackling tough
                  terrain. Often equipped with 4WD and diesel engines in the
                  Philippines.
                  <br />
                  <span className="text-xs text-foreground/80">
                    PH Examples: Toyota Hilux, Ford Ranger, Nissan Navara
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
                <h3 className="font-semibold text-foreground mb-2">
                  FWD vs. RWD vs. AWD (Drivetrain)
                </h3>
                <p className="text-balance">
                  This is which wheels the engine powers.{" "}
                  <strong>FWD (Front-Wheel Drive)</strong> powers the front
                  wheels. It's the most common and is fuel-efficient.{" "}
                  <strong>RWD (Rear-Wheel Drive)</strong> powers the rear
                  wheels, common in sports cars and pickup trucks.{" "}
                  <strong>AWD (All-Wheel Drive)</strong> powers all four
                  wheels for the best grip, great for rain or bad roads.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Horsepower (HP) vs. Torque (Nm)
                </h3>
                <p className="text-balance">
                  Here's a simple way to think about it:{" "}
                  <strong>Horsepower</strong> is about *speed* (how fast the
                  car can go). <strong>Torque</strong> is about *pulling
                  power* (how quickly the car can get moving from a stop or
                  climb a steep hill). More torque is what you "feel" when
                  you accelerate. Diesel engines are known for high torque.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Engine Displacement (e.g., 1.5L)
                </h3>
                <p className="text-balance">
                  This is the total "size" of the engine's cylinders, usually
                  measured in Liters (L). A smaller number (like{" "}
                  <strong>1.0L</strong> or <strong>1.2L</strong>) usually
                  means better fuel economy. A larger number (like{" "}
                  <strong>2.8L</strong> or <strong>3.0L</strong>) usually
                  means more power (and uses more fuel).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Transmission: AT vs. MT vs. CVT
                </h3>
                <p className="text-balance">
                  <strong>MT (Manual Transmission)</strong>: You shift gears
                  yourself using a clutch pedal ("stick shift"). Often more
                  fuel-efficient and cheaper.
                  <br />
                  <strong>AT (Automatic Transmission)</strong>: The car shifts
                  gears automatically for you. More convenient in traffic.
                  <br />
                  <strong>CVT (Continuously Variable Transmission)</strong>: A
                  type of automatic that doesn't have fixed gears, providing
                  smooth acceleration and often better fuel economy than
                  traditional ATs.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ph-popular" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Why Are These Cars Popular in the PH?
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  The Love for 7-Seaters (MPVs & SUVs)
                </h3>
                <p className="text-balance">
                  Filipino culture is all about family. Cars that can fit the
                  *buong pamilya* (whole family), plus friends or cargo, are
                  extremely popular. This is why MPVs (like the Innova or
                  Xpander) and 3-row SUVs (like the Fortuner) consistently top
                  sales charts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Ground Clearance is King
                </h3>
                <p className="text-balance">
                  With common *baha* (floods) during the rainy season and many
                  rough or unpaved provincial roads, a car that sits higher
                  off the ground (high ground clearance) provides crucial
                  peace of mind. This practicality is a major driving force
                  behind the popularity of SUVs, Crossovers, and even MPVs like
                  the Innova.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fuel Efficiency & Diesel Power
                </h3>
                <p className="text-balance">
                  Gasoline prices are a significant factor for Filipino car
                  buyers. Small, fuel-efficient hatchbacks and sedans (like the
                  Wigo or Vios) are popular choices for daily city driving.
                  For larger vehicles like SUVs, MPVs, and Pickups, efficient{" "}
                  <strong>Diesel</strong> engines are often preferred for
                  their combination of high torque (good for carrying loads)
                  and generally better fuel mileage compared to large gasoline
                  engines.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Reliability, Parts & Resale Value (The "Toyota Factor")
                </h3>
                <p className="text-balance">
                  Filipinos are very practical buyers. Brands known for
                  bulletproof reliability (especially Toyota), having easily
                  available and affordable parts (*madali at mura ang piyesa*),
                  and holding their value well over time (high resale value)
                  are highly trusted and dominate the market. Ease of
                  maintenance is a huge consideration.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="maintenance" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Basic Car Maintenance Tips (PH Context)
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Follow Your PMS! (Preventive Maintenance Schedule)
                </h3>
                <p className="text-balance">
                  This is the #1 rule. Your car's manual specifies regular
                  check-ups (oil change, filter replacements, fluid checks, etc.)
                  at certain mileage intervals (e.g., every 5,000 km or 10,000 km)
                  or time periods (e.g., every 6 months). Sticking to this schedule
                  keeps your car running smoothly, prevents bigger problems, and
                  maintains its warranty and resale value.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Tire Pressure is Crucial
                </h3>
                <p className="text-balance">
                  Especially with varying road conditions and heat, check your
                  tire pressure regularly (at least monthly). Underinflated tires
                  waste fuel, wear out faster, and affect handling. Find the
                  recommended pressure (PSI) on a sticker usually inside the
                  driver's door jamb. Don't forget the spare tire!
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Keep it Clean (Inside and Out)
                </h3>
                <p className="text-balance">
                  Regular washing protects the paint from sun damage, dust, and
                  acid rain. Cleaning the interior prevents buildup of dirt and
                  grime. In the PH climate, watch out for trapped moisture which
                  can lead to mold or rust. Pay attention under floor mats.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Check Your Fluids
                </h3>
                <p className="text-balance">
                  Learn how to check basic fluid levels between PMS visits: Engine
                  Oil, Coolant (Radiator), Brake Fluid, and Washer Fluid. Low
                  levels can indicate leaks or lead to serious damage, especially
                  in traffic and heat.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="buying" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Tips for Buying a Car in the Philippines
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  New (Brand New) vs. Used (Second Hand)
                </h3>
                <p className="text-balance">
                  <strong>New:</strong> Pros include full warranty, the latest
                  features, no previous owner issues, and that new car feeling.
                  Cons are the higher price and rapid initial depreciation (value
                  loss).
                  <br />
                  <strong>Used:</strong> Pros are significantly lower prices (often
                  the best value), slower depreciation, and potentially getting a
                  higher-spec model for your budget. Cons include the risk of hidden
                  problems, likely no warranty, and potentially higher immediate
                  maintenance needs.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Consider "Total Cost of Ownership"
                </h3>
                <p className="text-balance">
                  Don't just look at the purchase price. Factor in: Fuel
                  Consumption (important with PH fuel prices!), Maintenance Costs
                  (PMS, parts availability), Insurance Premiums, and Resale Value
                  down the line. A cheaper car to buy might be more expensive to
                  own.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Used Car Check: Bring a Mechanic!
                </h3>
                <p className="text-balance">
                  If buying used, *always* have a trusted mechanic inspect the
                  car *before* you pay. They can spot issues you might miss (engine
                  problems, previous accident damage, flood damage signs). It's a
                  small cost that can save you a fortune.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Paperwork is Key (Especially for Used)
                </h3>
                <p className="text-balance">
                  Ensure the seller has the original OR (Official Receipt) and CR
                  (Certificate of Registration). Check if the car is "encumbered"
                  (still has a bank loan). Verify the VIN/Chassis and Engine
                  numbers match the papers. Ensure the LTO registration is updated.
                  Proper transfer of ownership is crucial.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sedans" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              A Guide to Sedans: The Classic Choice
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What is a Sedan?
                </h3>
                <p className="text-balance">
                  A sedan is a four-door passenger car with a "three-box" design: a
                  separate compartment for the engine, another for passengers, and a
                  third, separate trunk (boot) for cargo. This lockable, separate
                  trunk is a key feature, offering secure storage that is hidden from
                  view.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pros: Why Choose a Sedan?
                </h3>
                <p className="text-balance">
                  <strong>Comfort & Handling:</strong> Generally offer a smooth,
                  comfortable ride and more responsive handling than taller vehicles
                  (like SUVs) due to a lower center of gravity.
                  <br />
                  <strong>Fuel Economy:</strong> Their aerodynamic shape and typically
                  lighter weight often lead to better fuel efficiency, saving you
                  money on gas.
                  <br />
                  <strong>Security:</strong> The separate, lockable trunk keeps your
                  belongings completely hidden and secure, which is a major advantage
                  over hatchbacks or SUVs where cargo is often visible.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cons: What are the Trade-offs?
                </h3>
                <p className="text-balance">
                  <strong>Limited Cargo Flexibility:</strong> While the trunk is
                  often spacious, it's not ideal for tall or bulky items (like
                  furniture, a large plant, or a bicycle) that a hatchback or SUV
                  could easily swallow by folding the seats.
                  <br />
                  <strong>Lower Ground Clearance:</strong> The lower ride height can
                  be a disadvantage on badly maintained roads or in flood-prone
                  areas, which is a key consideration in the Philippines.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Who is a Sedan For?
                </h3>
                <p className="text-balance">
                  Sedans are a fantastic all-around choice for: <br />
                  <strong>Commuters:</strong> Especially subcompact models (like the
                  Vios, City, or Almera) known for great fuel efficiency in traffic.
                  <br />
                  <strong>Small Families:</strong> Provides a safe, comfortable, and
                  practical space for 4-5 people and their luggage.
                  <br />
                  <strong>First-Time Buyers:</strong> They represent a great balance
                  of price, features, and practicality.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="suvs" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              A Guide to SUVs: The Versatile Hauler
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What is an SUV?
                </h3>
                <p className="text-balance">
                  An SUV (Sport Utility Vehicle) is a vehicle that combines the
                  passenger-carrying capacity of a wagon or minivan with the features
                  of an off-road vehicle. They are typically characterized by a
                  "two-box" design (engine and a combined passenger/cargo area),
                  higher ground clearance, and often, the availability of four-wheel
                  drive (4WD) or all-wheel drive (AWD).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pros: Why Choose an SUV?
                </h3>
                <p className="text-balance">
                  <strong>Commanding View & Ground Clearance:</strong> You sit
                  higher up, giving you a better view of the road. The high ground
                  clearance is a major advantage in the Philippines for handling
                  potholes, rough roads, and minor floods.
                  <br />
                  <strong>Cargo Flexibility:</strong> The large, open cargo area
                  behind the rear seats can be expanded massively by folding the
                  seats down. This makes SUVs perfect for hauling bulky items, lots of
                  groceries, or family luggage.
                  <br />
                  <strong>Passenger Room:</strong> Most mid-size to full-size SUVs
                  (like the Fortuner or Montero) offer a third row of seats, allowing
                  you to carry 7 people.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cons: What are the Trade-offs?
                </h3>
                <p className="text-balance">
                  <strong>Fuel Consumption:</strong> Being heavier, larger, and less
                  aerodynamic, SUVs almost always consume more fuel than a similarly
                  sized sedan or hatchback.
                  <br />
                  <strong>Driving & Parking:</strong> Their larger size and higher
                  center of gravity mean they can feel less stable ("body roll") in
                  sharp turns. They are also more challenging to maneuver and park in
                  tight city streets and mall parking lots.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Who is an SUV For?
                </h3>
                <p className="text-balance">
                  SUVs are ideal for: <br />
                  <strong>Growing Families:</strong> The 7-seater capacity and
                  massive cargo space are perfect for family outings, school runs,
                  and road trips.
                  <br />
                  <strong>Adventurers:</strong> Those who frequently travel to
                  provinces, drive on unpaved roads, or need the extra capability of
                  4WD.
                  <br />
                  <strong>Flood-Prone Area Residents:</strong> The higher ground
                  clearance provides crucial peace of mind during the rainy season.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hatchbacks" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              A Guide to Hatchbacks: The Compact & Flexible Choice
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What is a Hatchback?
                </h3>
                <p className="text-balance">
                  A hatchback is a car, typically in a "two-box" design, featuring a
                  large rear door (a "hatch") that swings upward to open. This hatch
                  combines the rear window and trunk lid into one, giving you direct
                  access to the cargo area from the passenger cabin. They are most
                  common in compact and subcompact sizes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pros: Why Choose a Hatchback?
                </h3>
                <p className="text-balance">
                  <strong>Ultimate Cargo Flexibility:</strong> This is their biggest
                  advantage. While the dedicated trunk space might be small, folding
                  down the rear seats opens up a huge, tall cargo area that can fit
                  bulky items (like a small appliance or bicycle) that a sedan could
                  never hold.
                  <br />
                  <strong>Maneuverability:</strong> Their typically short length
                  makes them incredibly easy to park, drive through tight city
                  streets, and make U-turns. This is a huge plus for navigating
                  Philippine city traffic.
                  <br />
                  <strong>Efficiency:</strong> Being small and lightweight, they often
                  offer some of the best fuel economy figures available.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cons: What are the Trade-offs?
                </h3>
                <p className="text-balance">
                  <strong>Cargo Security:</strong> Unlike a sedan's hidden trunk,
                  your belongings in the cargo area are often visible through the rear
                  window, even with a cargo cover (tonneau).
                  <br />
                  <strong>Rear Passenger Space:</strong> In many subcompact models
                  (like the Wigo or Picanto), rear-seat legroom can be quite limited
                  and best suited for children or for short trips with adults.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Who is a Hatchback For?
                </h3>
                <p className="text-balance">
                  Hatchbacks are perfect for: <br />
                  <strong>City Dwellers:</strong> Easy parking and nimble handling
                  make them the king of urban driving.
                  <br />
                  <strong>First-Time Car Owners:</strong> They are often the most
                  affordable new cars, cheap to run, and easy to drive.
                  <br />
                  <strong>Young Professionals / Couples:</strong> Ideal for one or
                  two people who need an efficient daily driver but also want the
                  flexibility to haul large items occasionally.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mpvs" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              A Guide to MPVs: The Ultimate People Carrier
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What is an MPV?
                </h3>
                <p className="text-balance">
                  An MPV (Multi-Purpose Vehicle), also known as a minivan, is a
                  vehicle designed to maximize interior space for passengers. They
                  typically feature a "one-box" or "two-box" design, flexible
                  seating for 7 or more people, and sliding rear doors (on many
                  models) for easy access. They are built on a car-like platform, prioritizing
                  on-road comfort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pros: Why Choose an MPV?
                </h3>
                <p className="text-balance">
                  <strong>Maximum Passenger Space & Comfort:</strong> This is their
                  main purpose. MPVs are unmatched for carrying 7-8 people (or more,
                  like in a Starex) in genuine comfort, with ample headroom and
                  legroom for all rows.
                  <br />
                  <strong>Easy Access:</strong> Low floors and large sliding doors
                  (on models like the Carnival or Serena) make getting in and out incredibly
                  easy, especially for children or the elderly.
                  <br />
                  <strong>Flexible Interior:</strong> Seats can often be folded,
                  tumbled, or even removed to create a massive, flat cargo area,
                  offering a blend of passenger and cargo utility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cons: What are the Trade-offs?
                </h3>
                <p className="text-balance">
                  <strong>Image & Style:</strong> MPVs are often seen as purely
                  practical "family vans" and lack the rugged or sporty image of an
                  SUV.
                  <br />
                  <strong>Lower Ground Clearance:</strong> Like sedans, they are not
                  designed for rough roads or floods. Many popular "budget MPVs" in
                  the Philippines (like the Avanza or Xpander) are exceptions,
                  offering higher clearance.
                  <br />
                  <strong>Size:</strong> Larger MPVs can be just as challenging to
                  park and maneuver in tight city streets as a large SUV.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Who is an MPV For?
                </h3>
                <p className="text-balance">
                  MPVs are the best choice for: <br />
                  <strong>Large Families:</strong> If you *regularly* need to carry
                  more than 5 people, an MPV is almost always more comfortable and
                  practical than a 7-seater SUV.
                  <br />
                  <strong>Businesses:</strong> Ideal for shuttle services, hotel
                  transport, or as a "family office" on wheels.
                  <br />
                  <strong>Groups Prioritizing Comfort:</strong> For long road trips
                  with family or friends, the spacious, comfortable, and car-like
                  ride of an MPV is hard to beat.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pickup-trucks" className="pt-6 border-t">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              A Guide to Pickup Trucks: The Ultimate Workhorse
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  What is a Pickup Truck?
                </h3>
                <p className="text-balance">
                  A pickup truck is a light-duty truck featuring a "two-box" design
                  with an enclosed cab for passengers and a separate, open-air cargo
                  bed at the back. Most modern pickups in the Philippines are "double
                  cabs," offering four full doors and seating for five, blending
                  utility with passenger comfort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pros: Why Choose a Pickup?
                </h3>
                <p className="text-balance">
                  <strong>Unmatched Hauling & Towing:</strong> The open cargo bed is
                  designed to carry large, bulky, tall, or dirty items (like
                  construction materials or farm equipment) that simply wouldn't fit
                  inside an SUV. They also boast the highest towing capacities.
                  <br />
                  <strong>Durability & Off-Road Prowess:</strong> Built on a tough
                  ladder-frame chassis (the same platform as 7-seater SUVs), they
                  are incredibly durable. With high ground clearance and available
                  4x4, they are the most capable vehicles for rough terrain, work
                  sites, and provincial roads.
                  <br />
                  <strong>Lifestyle Flexibility:</strong> Modern pickups are
                  surprisingly comfortable and packed with tech, making them equally
                  capable as a family car for weekend adventures as they are a work
                  vehicle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Cons: What are the Trade-offs?
                </h3>
                <p className="text-balance">
                  <strong>Ride Comfort (When Empty):</strong> Their heavy-duty leaf
                  spring rear suspension is designed to handle heavy loads. When the
                  bed is empty, this can result in a stiffer, bouncier ride compared
                  to a car-based SUV or sedan.
                  <br />
                  <strong>Size & Maneuverability:</strong> Their long wheelbase and
                  overall length make them the most challenging vehicles to park,
                  maneuver in tight city streets, or navigate in mall parking lots.
                  <br />
                  <strong>Cargo Security:</strong> The open bed leaves your cargo
                  exposed to weather and potential theft, requiring an added-cost
                  accessory like a tonneau cover or canopy for security.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Who is a Pickup Truck For?
                </h3>
                <p className="text-balance">
                  Pickup trucks are the top choice for: <br />
                  <strong>Business Owners & Contractors:</strong> Anyone who
                  regularly needs to haul goods, tools, or materials for their
                  livelihood.
                  <br />
                  <strong>Off-Road & Adventure Enthusiasts:</strong> The gold
                  standard for those who love exploring remote areas, camping, or
                  need 4x4 capability.
                  <br />
                  <strong>Active Lifestyle Individuals:</strong> Perfect for hauling
                  mountain bikes, surfboards, or diving gear without worrying about
                  dirtying a carpeted interior.
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