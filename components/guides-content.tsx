"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import {
  Info,
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
  Gavel,
} from "lucide-react"

export function GuidesContent() {
  return (
    <Tabs defaultValue="car-types" className="w-full space-y-8">
      <div className="sticky top-16 z-40 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md py-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:bg-transparent transition-all duration-200">
        <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 sm:grid-cols-4 h-auto p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg rounded-xl">
          <TabsTrigger
            value="car-types"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            <Car className="h-4 w-4" />
            <span>Types</span>
          </TabsTrigger>
          <TabsTrigger
            value="car-brands"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            <Tag className="h-4 w-4" />
            <span>Brands</span>
          </TabsTrigger>
          <TabsTrigger
            value="car-lingo"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            <Info className="h-4 w-4" />
            <span>Lingo</span>
          </TabsTrigger>
          <TabsTrigger
            value="ph-popular"
            className="flex flex-col sm:flex-row items-center justify-center gap-2 py-3 sm:py-2.5 data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg transition-all"
          >
            <Flag className="h-4 w-4" />
            <span>Culture</span>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="car-types" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Identifying Common Car Types</h2>
          <p className="text-slate-600 dark:text-slate-400">From city slickers to off-road warriors, learn to spot the difference.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Car className="h-6 w-6" />
                </div>
                Sedan
              </CardTitle>
              <CardDescription>The Three-Box Classic</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The most traditional shape. Identify it by its three separate compartments: engine, cabin, and a protruding trunk. The rear window is fixed.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Visual:</span>
                  <span className="text-slate-600 dark:text-slate-400">Low roofline, 4 doors, distinct trunk lid.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Examples:</span>
                  <span className="text-slate-600 dark:text-slate-400">Vios, Civic, Mirage G4, Almera.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <PackageOpen className="h-6 w-6" />
                </div>
                Hatchback
              </CardTitle>
              <CardDescription>The Versatile Two-Box</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Distinguished by its rear access. Instead of a trunk, it has a large rear door that swings upward including the window.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Visual:</span>
                  <span className="text-slate-600 dark:text-slate-400">Compact rear, roof slopes down, no trunk extension.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Examples:</span>
                  <span className="text-slate-600 dark:text-slate-400">Wigo, Brio, Swift, Mazda3 Hatchback.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
                  <Mountain className="h-6 w-6" />
                </div>
                SUV
              </CardTitle>
              <CardDescription>The Rugged High-Rider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                High ground clearance and muscular build. True SUVs (popular in PH) are body-on-frame trucks designed for tough roads.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Visual:</span>
                  <span className="text-slate-600 dark:text-slate-400">Tall stance, large wheels, bulky shape.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Examples:</span>
                  <span className="text-slate-600 dark:text-slate-400">Fortuner, Montero Sport, Everest, Terra.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Users className="h-6 w-6" />
                </div>
                MPV
              </CardTitle>
              <CardDescription>The People Mover</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Minivans focused on maximizing interior space. Often have a longer body to fit 7 passengers comfortably.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Visual:</span>
                  <span className="text-slate-600 dark:text-slate-400">Long roof, upright cabin, small nose.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Examples:</span>
                  <span className="text-slate-600 dark:text-slate-400">Innova, Xpander, Ertiga, BR-V.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400">
                  <Truck className="h-6 w-6" />
                </div>
                Pickup Truck
              </CardTitle>
              <CardDescription>The Open-Bed Workhorse</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Unmistakable due to its open cargo bed. Built on a robust chassis for hauling heavy loads. The "Double Cab" (4 doors) is the PH standard.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Visual:</span>
                  <span className="text-slate-600 dark:text-slate-400">Separate cabin and open bed, high clearance.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-slate-900 dark:text-white min-w-20">Examples:</span>
                  <span className="text-slate-600 dark:text-slate-400">Hilux, Ranger, Navara, D-Max.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="car-brands" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Market Leaders</h2>
          <p className="text-slate-600 dark:text-slate-400">The big names you see on EDSA every single day.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-red-600 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-red-600" />
                Toyota
              </CardTitle>
              <CardDescription className="font-semibold text-red-600">The Market King</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Dominates with nearly 50% market share. Famous for the "QDR" promise: Quality, Durability, Reliability. Parts are available everywhere.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: Vios, Fortuner, Innova, Wigo
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-gray-400 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <Gem className="h-6 w-6 text-gray-500" />
                Mitsubishi
              </CardTitle>
              <CardDescription className="font-semibold text-gray-500">The Strong Rival</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                The solid #2. Masters of the MPV and SUV segment. The Montero Sport and Xpander are household names for Filipino families.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: Montero Sport, Xpander, L300
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-blue-600 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <Truck className="h-6 w-6 text-blue-600" />
                Ford
              </CardTitle>
              <CardDescription className="font-semibold text-blue-600">Tough & Tech</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                American muscle and technology. They rule the lifestyle pickup and premium SUV market with high-tech features and rugged looks.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: Ranger, Everest, Territory
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-indigo-600 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <Wrench className="h-6 w-6 text-indigo-600" />
                Honda
              </CardTitle>
              <CardDescription className="font-semibold text-indigo-600">Engineering Excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                A premium feel. Known for sporty handling, VTEC engines, and superior build quality. The choice for those who love driving.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: Civic, City, CR-V, BR-V
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-cyan-500 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <Scale className="h-6 w-6 text-cyan-500" />
                Suzuki
              </CardTitle>
              <CardDescription className="font-semibold text-cyan-500">Compact King</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Masters of the "Kei car" philosophy. They make small, fuel-efficient, and affordable cars that are surprisingly spacious inside.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: S-Presso, Jimny, Ertiga
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200 dark:border-slate-800 border-t-4 border-t-orange-600 shadow-sm hover:shadow-md transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                <Fuel className="h-6 w-6 text-orange-600" />
                Isuzu
              </CardTitle>
              <CardDescription className="font-semibold text-orange-600">Diesel Power</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Synonymous with durability. Their diesel engines are legendary for longevity. The brand of choice for businesses and practical families.
              </p>
              <div className="text-xs font-medium bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                Known for: D-Max, mu-X, Elf Trucks
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="car-lingo" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Car Lingo Decoded</h2>
          <p className="text-slate-600 dark:text-slate-400">Don't get lost in the jargon. Here is what the spec sheet means.</p>
        </div>
        <div className="grid gap-4">
          {[
            {
              icon: Layers,
              title: "Body-on-frame vs. Unibody",
              desc: "The Skeleton. Body-on-frame (SUVs/Pickups) is like a truck: heavy steel ladder frame with a body on top. Tough but jiggly. Unibody (Sedans/Crossovers) is one piece. Lighter, safer, smoother."
            },
            {
              icon: GitBranch,
              title: "Drivetrain (FWD, RWD, AWD)",
              desc: "Who pushes the car? FWD (Front) is efficient and common. RWD (Rear) is for heavy loads or sports cars. AWD/4x4 powers all wheels for grip on slippery roads or off-road mud."
            },
            {
              icon: Gauge,
              title: "Horsepower vs. Torque",
              desc: "Speed vs. Strength. Horsepower is how fast you can hit top speed. Torque is the 'pull' you feel when accelerating from a stop or climbing a hill. Diesel has high torque."
            },
            {
              icon: BatteryCharging,
              title: "Hybrid (HEV) vs. EV",
              desc: "HEV has a gas engine + battery (self-charging). PHEV has a bigger battery you can plug in. BEV is 100% electric, no gas engine at all. Hybrids are currently coding-exempt!"
            },
            {
              icon: MoveVertical,
              title: "Ground Clearance",
              desc: "The Anti-Baha Stat. The distance from the ground to the car's bottom. In the PH, higher is better (200mm+) to avoid scraping on humps and wading through floods."
            },
            {
              icon: Wind,
              title: "Turbocharged",
              desc: "Small engine, big power. Uses exhaust air to spin a fan that forces more air into the engine. Makes a small 1.0L engine feel like a large 2.0L engine."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-400 transition-colors">
              <div className="shrink-0 mt-1">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <item.icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="ph-popular" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 focus-visible:outline-none">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why These Cars Thrive Here</h2>
          <p className="text-slate-600 dark:text-slate-400">The unique Filipino context shapes exactly what we drive.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-linear-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <HeartHandshake className="h-6 w-6 text-pink-600" />
                The Family Factor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                "Kasya buong pamilya!" We travel in packs. 5 seats often aren't enough for Lolo, Lola, and the kids. This is why <strong>7-seaters (MPVs and SUVs)</strong> are king here, unlike in Europe or the US where sedans or 5-seaters rule.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-cyan-50 to-white dark:from-slate-900 dark:to-slate-950 border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <CloudRain className="h-6 w-6 text-cyan-600" />
                The Environment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                "Baha at Lubak." Our roads are unpredictable. Sudden floods and massive potholes make <strong>Ground Clearance</strong> a necessity, not a luxury. This fuels the obsession with SUVs and Pickups over low-slung sedans.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BadgeCheck className="h-6 w-6 text-emerald-600" />
                The Trust Factor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                "Mura piyesa." A car is a huge investment. Filipinos prioritize brands with easy-to-find parts and high resale value (Toyota). We tend to be risk-averse, sticking to proven reliable brands to avoid headaches later.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-purple-50 to-white dark:from-slate-900 dark:to-slate-950 border-none shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Gavel className="h-6 w-6 text-purple-600" />
                The Coding Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Government policy shapes the road. The EVIDA law exemption from number coding has single-handedly spiked the popularity of Hybrids (like the Kicks and Zenix). If you can drive every day, that's a huge win.
              </p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}