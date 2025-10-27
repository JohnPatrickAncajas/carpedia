"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { carsData, quizTests, type Car, type CarSpecs } from "@/lib/car-data"
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

type QuestionType = "image" | "specs"

interface Question {
  type: QuestionType
  carId: string
  options: string[]
  imageUrl?: string
  specKeys?: (keyof CarSpecs)[]
}

interface QuizSettings {
  includeImageViews: {
    front: boolean
    side: boolean
    rear: boolean
    gallery: boolean
  }
  includeSpecs: {
    engine: boolean
    horsepower: boolean
    torque: boolean
    transmission: boolean
    fuelType: boolean
    fuelEfficiency: boolean
    seats: boolean
  }
}

const defaultSettings: QuizSettings = {
  includeImageViews: { front: true, side: true, rear: true, gallery: true },
  includeSpecs: {
    engine: true,
    horsepower: true,
    torque: true,
    transmission: true,
    fuelType: true,
    fuelEfficiency: true,
    seats: true,
  },
}

const allSpecKeys = Object.keys(defaultSettings.includeSpecs) as (keyof CarSpecs)[]
const allImageViewKeys = Object.keys(
  defaultSettings.includeImageViews,
) as (keyof QuizSettings["includeImageViews"])[]

function getRandomSubset<T>(array: T[], size: number): T[] {
  const shuffled = array.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, size)
}

const specDisplayNames: Record<keyof CarSpecs, string> = {
  engine: "Engine",
  horsepower: "Horsepower",
  torque: "Torque",
  transmission: "Transmission",
  fuelType: "Fuel Type",
  fuelEfficiency: "Fuel Efficiency",
  seats: "Seats",
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const test = quizTests.find((t) => t.id === params.id)

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const [quizStarted, setQuizStarted] = useState(false)
  const [settings, setSettings] = useState<QuizSettings>(defaultSettings)

  const handleSettingChange = <K extends keyof QuizSettings, SK extends keyof QuizSettings[K]>(
    category: K,
    key: SK,
    checked: boolean,
  ) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: checked,
      },
    }))
  }

  const toggleAll = (category: keyof QuizSettings, value: boolean) => {
    setSettings((prev) => {
      const currentCategory = prev[category]
      const updatedCategory = { ...currentCategory }
      Object.keys(updatedCategory).forEach((key) => {
        // @ts-ignore
        updatedCategory[key as keyof typeof updatedCategory] = value
      })
      return { ...prev, [category]: updatedCategory }
    })
  }

  const generateQuestions = (currentSettings: QuizSettings) => {
    if (!test) return false

    const selectedImageKeys = allImageViewKeys.filter(
      (k) => currentSettings.includeImageViews[k],
    )
    const selectedSpecKeys = allSpecKeys.filter(
      (k) => currentSettings.includeSpecs[k],
    )

    const canDoImage = selectedImageKeys.length > 0
    const canDoSpecs = selectedSpecKeys.length > 0

    if (!canDoImage && !canDoSpecs) {
      toast.error("Please select at least one image view or spec type.")
      return false
    }

    const testCars = carsData.filter((car) => test.carIds.includes(car.id))
    if (testCars.length < 4) {
      console.error("Not enough unique cars in this test category for options.")
      toast.error("Not enough unique cars in this category to generate a quiz.")
      return false
    }

    const newQuestions: Question[] = []
    const usedCarIds = new Set<string>()

    for (let i = 0; i < 10; i++) {
      let questionType: QuestionType
      if (canDoImage && canDoSpecs) {
        questionType = i % 2 === 0 ? "image" : "specs"
      } else {
        questionType = canDoImage ? "image" : "specs"
      }

      let correctCar: Car | undefined
      let attempts = 0
      while (!correctCar || usedCarIds.has(correctCar.id)) {
        correctCar = testCars[Math.floor(Math.random() * testCars.length)]
        attempts++
        if (attempts > testCars.length * 2 && usedCarIds.size >= testCars.length) {
          console.warn("Could not find a unique car for question, reusing.")
          correctCar = testCars[Math.floor(Math.random() * testCars.length)]
          break
        } else if (attempts > testCars.length * 5) {
          console.error("Failed to generate unique questions after many attempts. Aborting.")
          toast.error("Error generating quiz questions. Please try again.")
          return false
        }
      }
      usedCarIds.add(correctCar.id)

      let imageUrl: string | undefined
      let specKeys: (keyof CarSpecs)[] | undefined

      if (questionType === "image") {
        let possibleImageSources: string[] = []
        const useGallery = currentSettings.includeImageViews.gallery && correctCar.galleryImages && correctCar.galleryImages.length > 0

        if (useGallery && correctCar.galleryImages) {
             possibleImageSources.push(...correctCar.galleryImages); // Fixed: Added check
        } else {
          const firstSet = correctCar.imageSets[0]
          if (firstSet) {
            if (currentSettings.includeImageViews.front && firstSet.front)
              possibleImageSources.push(firstSet.front)
            if (currentSettings.includeImageViews.side && firstSet.side)
              possibleImageSources.push(firstSet.side)
            if (currentSettings.includeImageViews.rear && firstSet.rear)
              possibleImageSources.push(firstSet.rear)
          }
        }

        if (possibleImageSources.length > 0) {
          imageUrl =
            possibleImageSources[Math.floor(Math.random() * possibleImageSources.length)]
        } else {
          imageUrl = correctCar.imageSets[0]?.front || "/placeholder.svg"
          console.warn(`No suitable image found for ${correctCar.id} based on settings, using fallback.`)
        }
      } else {
        specKeys = getRandomSubset(selectedSpecKeys, Math.min(selectedSpecKeys.length, Math.random() < 0.5 ? 3 : 4))
        if (specKeys.length < 2 && selectedSpecKeys.length >= 2) {
          specKeys = getRandomSubset(selectedSpecKeys, 2)
        } else if (specKeys.length === 0) {
          console.error(`No spec keys selected for car ${correctCar.id}`)
          specKeys = getRandomSubset(allSpecKeys, 3)
        }
      }

      const wrongCars = testCars
        .filter((car) => car.id !== correctCar?.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      if (wrongCars.length < 3 && testCars.length >= 4) {
        console.warn(`Could only find ${wrongCars.length} distinct wrong options for car ${correctCar?.id}`)
      }

      const options = [
        correctCar.id,
        ...wrongCars.map((car) => car.id),
      ].sort(() => Math.random() - 0.5)

      newQuestions.push({
        type: questionType,
        carId: correctCar.id,
        options,
        imageUrl,
        specKeys,
      })
    }

    setQuestions(newQuestions)
    return true
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <p className="text-center text-muted-foreground">Quiz not found</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/test">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to Quizzes
            </Link>
          </Button>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">{test.name}</CardTitle>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Customize Your Quiz
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select the types of questions you want to include.
                </p>
              </div>

              <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Image Questions</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="flex justify-end gap-2 mb-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeImageViews", true)}>
                        Select All
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeImageViews", false)}>
                        Deselect All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {(Object.keys(settings.includeImageViews) as Array<keyof typeof settings.includeImageViews>).map((key) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox
                            id={`img-${key}`}
                            checked={settings.includeImageViews[key]}
                            onCheckedChange={(checked) => handleSettingChange("includeImageViews", key, !!checked)}
                          />
                          <Label htmlFor={`img-${key}`} className="capitalize">
                            {key === "gallery" ? "Gallery (Random)" : key}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Specification Questions</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="flex justify-end gap-2 mb-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeSpecs", true)}>
                        Select All
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeSpecs", false)}>
                        Deselect All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {(Object.keys(settings.includeSpecs) as Array<keyof typeof settings.includeSpecs>).map((key) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox
                            id={`spec-${key}`}
                            checked={settings.includeSpecs[key]}
                            onCheckedChange={(checked) => handleSettingChange("includeSpecs", key, !!checked)}
                          />
                          <Label htmlFor={`spec-${key}`} className="capitalize">
                            {specDisplayNames[key] || key}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Button
                size="lg"
                onClick={() => {
                  if (generateQuestions(settings)) {
                    setQuizStarted(true)
                  }
                }}
                className="w-full"
              >
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  if (questions.length === 0 && quizStarted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <p className="text-center text-muted-foreground">Generating quiz...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (currentQuestion >= questions.length && quizStarted) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                Quiz Complete!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">
                  {percentage}%
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  You got {score} out of {questions.length} correct
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Fun Fact:</p>
                <p className="text-foreground italic">
                  {
                    carsData[Math.floor(Math.random() * carsData.length)]
                      .funFacts[0]
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentQuestion(0)
                    setScore(0)
                    setAnswered(false)
                    setSelectedAnswer(null)
                    setQuestions([])
                    setQuizStarted(false)
                    setSettings(defaultSettings)
                  }}
                  className="flex-1"
                >
                  Try Again
                </Button>
                <Button asChild className="flex-1">
                  <Link href="/learn">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  const question = questions[currentQuestion]
  if (!question) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <p className="text-center text-muted-foreground">Error loading question...</p>
        </main>
        <Footer />
      </div>
    )
  }

  const correctCar = carsData.find((car) => car.id === question.carId)!
  const isCorrect = selectedAnswer === question.carId

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">Score: {score}</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }} // I need inline style here for dynamic width
            />
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            {question.type === "image" ? (
              <div className="mb-8">
                <p className="text-lg font-semibold text-foreground mb-4 text-balance">
                  Which car is this?
                </p>
                <div className="bg-muted rounded-lg flex items-center justify-center min-h-64 mb-6">
                  <div className="relative w-full h-64">
                    <Image
                      src={question.imageUrl || "/placeholder.svg"}
                      alt="Quiz car"
                      fill
                      className="object-contain rounded-lg"
                      key={question.imageUrl}
                      priority={currentQuestion === 0}
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 600px"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <p className="text-lg font-semibold text-foreground mb-4 text-balance">
                  Which car has these specifications?
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {question.specKeys?.map((key) => (
                    <div key={key}>
                      <p className="text-muted-foreground">{specDisplayNames[key] || key}</p>
                      <p className="font-semibold text-foreground">
                        {correctCar.specs[key]}
                      </p>
                    </div>
                  ))}
                  {(!question.specKeys || question.specKeys.length < 2) && (
                    <div className="text-muted-foreground text-xs col-span-full">
                      (More specs might be available)
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-3 mb-6">
              {question.options.map((carId) => {
                const optionCar = carsData.find((car) => car.id === carId)!
                const isSelected = selectedAnswer === carId
                const showResult = answered && isSelected

                if (!optionCar) {
                  console.error(`Could not find car data for option ID: ${carId}`)
                  return null
                }

                return (
                  <button
                    key={carId}
                    onClick={() => {
                      if (!answered) {
                        setSelectedAnswer(carId)
                        setAnswered(true)
                        if (carId === question.carId) {
                          setScore(score + 1)
                        }
                      }
                    }}
                    disabled={answered}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      isSelected
                        ? showResult && isCorrect
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : showResult && !isCorrect
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : "border-primary bg-primary/10"
                        : answered && carId === question.carId
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : "border-border hover:border-primary/50"
                    } ${answered ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {optionCar.brand} {optionCar.model}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {optionCar.type}
                        </p>
                      </div>
                      {showResult && isCorrect && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                      {showResult && !isCorrect && (
                        <XCircle className="w-6 h-6 text-red-500" />
                      )}
                      {answered && !isSelected && carId === question.carId && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {answered && (
              <Button
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1)
                  setAnswered(false)
                  setSelectedAnswer(null)
                }}
                className="w-full"
              >
                {currentQuestion === questions.length - 1
                  ? "See Results"
                  : "Next Question"}
              </Button>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  )
}