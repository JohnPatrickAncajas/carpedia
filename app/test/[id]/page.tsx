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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { carsData, quizTests, type Car, type CarSpecs } from "@/lib/car-data"
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

type QuestionType = "image" | "specs"
type QuizMode = "multipleChoice" | "textInput"

interface Question {
  type: QuestionType
  carId: string
  options: string[]
  imageUrl?: string
  specKeys?: (keyof CarSpecs)[]
}

type ImageViewSettings = {
  front: boolean
  side: boolean
  rear: boolean
  gallery: boolean
}
type SpecSettings = {
  engine: boolean
  horsepower: boolean
  torque: boolean
  transmission: boolean
  fuelType: boolean
  fuelEfficiency: boolean
  seats: boolean
}

interface QuizSettings {
  quizMode: QuizMode
  numberOfChoices: number
  showCarTypeInOptions: boolean
  includeImageViews: ImageViewSettings
  includeSpecs: SpecSettings
}

const defaultSettings: QuizSettings = {
  quizMode: "multipleChoice",
  numberOfChoices: 4,
  showCarTypeInOptions: true,
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
) as (keyof ImageViewSettings)[]

function getRandomSubset<T>(array: T[], size: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
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
  const [textInputAnswer, setTextInputAnswer] = useState("")

  const [quizStarted, setQuizStarted] = useState(false)
  const [settings, setSettings] = useState<QuizSettings>(defaultSettings)

  const handleSettingChange = <
    K extends "includeImageViews" | "includeSpecs",
    SK extends keyof QuizSettings[K],
  >(
    category: K,
    key: SK,
    checked: boolean,
  ) => {
    setSettings((prev) => {
      const currentCategorySettings = prev[category]
      return {
        ...prev,
        [category]: {
          ...currentCategorySettings,
          [key]: checked,
        },
      }
    })
  }

  const toggleAll = (category: "includeImageViews" | "includeSpecs", value: boolean) => {
      setSettings((prev) => {
          if (category === "includeImageViews") {
              const updatedViews: ImageViewSettings = { ...prev.includeImageViews };
              (Object.keys(updatedViews) as Array<keyof ImageViewSettings>).forEach((key) => {
                  updatedViews[key] = value;
              });
              return { ...prev, includeImageViews: updatedViews };
          } else if (category === "includeSpecs") {
              const updatedSpecs: SpecSettings = { ...prev.includeSpecs };
              (Object.keys(updatedSpecs) as Array<keyof SpecSettings>).forEach((key) => {
                  updatedSpecs[key] = value;
              });
              return { ...prev, includeSpecs: updatedSpecs };
          }
          return prev;
      });
  };

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
    const minRequiredCars = currentSettings.quizMode === "multipleChoice" ? currentSettings.numberOfChoices : 1

    if (testCars.length < minRequiredCars) {
      console.error(`Not enough unique cars (${testCars.length}) in this test category for the selected number of options (${minRequiredCars}).`)
      toast.error(`Not enough unique cars in this category for ${minRequiredCars} options. Need at least ${minRequiredCars}.`)
      return false
    }

    const newQuestions: Question[] = []
    const usedCarIds = new Set<string>()
    const maxQuestions = 10;

    for (let i = 0; i < maxQuestions; i++) {
      let questionType: QuestionType
      if (canDoImage && canDoSpecs) {
        questionType = i % 2 === 0 ? "image" : "specs"
      } else {
        questionType = canDoImage ? "image" : "specs"
      }

      let correctCar: Car | undefined
      let availableCars = testCars.filter(car => !usedCarIds.has(car.id));
      if (availableCars.length === 0) {
          console.warn("Used all unique cars, reusing cars for remaining questions.");
          availableCars = testCars;
          if (availableCars.length === 0) {
             console.error("No cars available at all, cannot generate question.");
             toast.error("Ran out of cars for questions.")
             return false;
          }
      }
      correctCar = availableCars[Math.floor(Math.random() * availableCars.length)];
      usedCarIds.add(correctCar.id)


      let imageUrl: string | undefined
      let specKeys: (keyof CarSpecs)[] | undefined

      if (questionType === "image") {
        let possibleImageSources: string[] = []
        const useGallery = currentSettings.includeImageViews.gallery && correctCar.galleryImages && correctCar.galleryImages.length > 0

        if (useGallery && correctCar.galleryImages) {
             possibleImageSources.push(...correctCar.galleryImages);
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
        const availableSpecKeys = selectedSpecKeys.length > 0 ? selectedSpecKeys : allSpecKeys;
        specKeys = getRandomSubset(availableSpecKeys, Math.min(availableSpecKeys.length, Math.random() < 0.5 ? 3 : 4))
        if (specKeys.length < 2 && availableSpecKeys.length >= 2) {
          specKeys = getRandomSubset(availableSpecKeys, 2)
        } else if (specKeys.length === 0) {
          console.error(`No spec keys could be selected for car ${correctCar.id}, using default fallback.`)
          specKeys = getRandomSubset(allSpecKeys, 3)
        }
      }

      let options: string[] = []
      if (currentSettings.quizMode === "multipleChoice") {
          const wrongCars = testCars
            .filter((car) => car.id !== correctCar?.id)
            .sort(() => Math.random() - 0.5)
            .slice(0, currentSettings.numberOfChoices - 1)

          if (wrongCars.length < currentSettings.numberOfChoices - 1) {
            console.warn(`Could only find ${wrongCars.length} distinct wrong options for car ${correctCar?.id}. Required ${currentSettings.numberOfChoices - 1}.`)
          }

          options = [
            correctCar.id,
            ...wrongCars.map((car) => car.id),
          ].sort(() => Math.random() - 0.5)
      } else {
         options = [correctCar.id];
      }


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

  const handleMultipleChoiceAnswer = (carId: string) => {
    if (!answered) {
      setSelectedAnswer(carId)
      setAnswered(true)
      if (carId === questions[currentQuestion].carId) {
        setScore(score + 1)
      }
    }
  }

  const handleTextInputSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
     e?.preventDefault()
    if (!answered && textInputAnswer.trim() !== "") {
      const correctCar = carsData.find(car => car.id === questions[currentQuestion].carId)
      const correctAnswerString = `${correctCar?.brand} ${correctCar?.model}`
      const userAnswer = textInputAnswer.trim()

      setSelectedAnswer(userAnswer)
      setAnswered(true)

      if (userAnswer === correctAnswerString) {
        setScore(score + 1)
      }
    }
  }

  const getOptionText = (carId: string) => {
      const car = carsData.find(c => c.id === carId)
      if (!car) return "Unknown Car"
      const showType = settings.quizMode === 'multipleChoice' && settings.showCarTypeInOptions;
      return `${car.brand} ${car.model}${showType ? ` (${car.type})` : ''}`
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
                <h3 className="font-semibold text-foreground mb-4">
                  Quiz Options
                </h3>

                <div className="space-y-4 mb-6">
                   <Label>Quiz Mode</Label>
                   <RadioGroup
                     value={settings.quizMode}
                     onValueChange={(value: QuizMode) => setSettings(prev => ({ ...prev, quizMode: value }))}
                     className="flex space-x-4"
                   >
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="multipleChoice" id="mode-mc" className="cursor-pointer" />
                       <Label htmlFor="mode-mc" className="cursor-pointer">Multiple Choice</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="textInput" id="mode-text" className="cursor-pointer" />
                       <Label htmlFor="mode-text" className="cursor-pointer">Text Input</Label>
                     </div>
                   </RadioGroup>
                 </div>

                <div className={`space-y-2 mb-6 ${settings.quizMode === 'textInput' ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Label htmlFor="num-choices" className="cursor-pointer">Number of Choices: {settings.numberOfChoices}</Label>
                   <Slider
                     id="num-choices"
                     min={2}
                     max={5}
                     step={1}
                     value={[settings.numberOfChoices]}
                     onValueChange={(value) => setSettings(prev => ({ ...prev, numberOfChoices: value[0]}))}
                     disabled={settings.quizMode === 'textInput'}
                     className="cursor-pointer"
                   />
                 </div>

                 <div className={`flex items-center space-x-2 mb-6 ${settings.quizMode === 'textInput' ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Checkbox
                     id="show-type"
                     checked={settings.showCarTypeInOptions}
                     onCheckedChange={(checked) => setSettings(prev => ({ ...prev, showCarTypeInOptions: !!checked }))}
                     disabled={settings.quizMode === 'textInput'}
                     className="cursor-pointer"
                   />
                   <Label htmlFor="show-type" className="cursor-pointer">Show Car Type in Options</Label>
                 </div>

                <h3 className="font-semibold text-foreground mb-2">
                  Question Types
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Select the types of questions you want to include.
                </p>
              </div>

              <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer hover:no-underline">Image Questions</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="flex justify-end gap-2 mb-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeImageViews", true)} className="cursor-pointer">
                        Select All
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeImageViews", false)} className="cursor-pointer">
                        Deselect All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {allImageViewKeys.map((key) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox
                            id={`img-${key}`}
                            checked={settings.includeImageViews[key]}
                            onCheckedChange={(checked) => handleSettingChange("includeImageViews", key, !!checked)}
                            className="cursor-pointer"
                          />
                          <Label htmlFor={`img-${key}`} className="capitalize cursor-pointer">
                            {key === "gallery" ? "Gallery (Random)" : key}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer hover:no-underline">Specification Questions</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="flex justify-end gap-2 mb-2">
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeSpecs", true)} className="cursor-pointer">
                        Select All
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleAll("includeSpecs", false)} className="cursor-pointer">
                        Deselect All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {allSpecKeys.map((key) => (
                        <div key={key} className="flex items-center space-x-2">
                          <Checkbox
                            id={`spec-${key}`}
                            checked={settings.includeSpecs[key]}
                            onCheckedChange={(checked) => handleSettingChange("includeSpecs", key, !!checked)}
                            className="cursor-pointer"
                          />
                          <Label htmlFor={`spec-${key}`} className="capitalize cursor-pointer">
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
                className="w-full mt-6 cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
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
  const correctAnswerString = `${correctCar?.brand} ${correctCar?.model}`
  const isCorrect = answered && (settings.quizMode === "multipleChoice"
      ? selectedAnswer === question.carId
      : selectedAnswer?.trim() === correctAnswerString);

  if (currentQuestion >= questions.length && quizStarted) {
    const percentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

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
                    setTextInputAnswer("")
                    setQuestions([])
                    setQuizStarted(false)
                  }}
                  className="flex-1 cursor-pointer"
                >
                  Try Again
                </Button>
                <Button asChild className="flex-1 cursor-pointer">
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
              }}
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
                  {(!question.specKeys || question.specKeys.length === 0) && (
                    <div className="text-muted-foreground text-xs col-span-full">
                      No specific specifications provided for this question.
                    </div>
                  )}
                </div>
              </div>
            )}

            {settings.quizMode === "multipleChoice" ? (
               <div className="space-y-3 mb-6">
                 {question.options.map((carId) => {
                   const optionCar = carsData.find((car) => car.id === carId)
                   const isSelected = selectedAnswer === carId
                   const showResult = answered && isSelected
                   const isCorrectOption = carId === question.carId

                   if (!optionCar) {
                     console.error(`Could not find car data for option ID: ${carId}`)
                     return null
                   }

                   let buttonClass = "border-border hover:border-primary/50";
                   if (answered) {
                      if (isSelected) {
                         buttonClass = isCorrect ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-red-500 bg-red-50 dark:bg-red-950";
                      } else if (isCorrectOption) {
                         buttonClass = "border-green-500 bg-green-50 dark:bg-green-950";
                      } else {
                         buttonClass = "border-border opacity-60";
                      }
                   }

                   return (
                     <button
                       key={carId}
                       onClick={() => handleMultipleChoiceAnswer(carId)}
                       disabled={answered}
                       className={`w-full p-4 rounded-lg border-2 transition-all text-left ${buttonClass} ${answered ? "cursor-default" : "cursor-pointer"}`}
                     >
                       <div className="flex items-center justify-between">
                         <p className="font-semibold text-foreground">
                            {getOptionText(carId)}
                         </p>
                         {isSelected && answered && isCorrect && (
                           <CheckCircle className="w-6 h-6 text-green-500" />
                         )}
                         {isSelected && answered && !isCorrect && (
                           <XCircle className="w-6 h-6 text-red-500" />
                         )}
                         {answered && !isSelected && isCorrectOption && (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                         )}
                       </div>
                     </button>
                   )
                 })}
               </div>
             ) : (
                <form onSubmit={handleTextInputSubmit} className="space-y-4 mb-6">
                  <Input
                    type="text"
                    placeholder="Enter Brand and Model (e.g., Toyota Vios)"
                    value={textInputAnswer}
                    onChange={(e) => setTextInputAnswer(e.target.value)}
                    disabled={answered}
                    className={`text-lg ${answered && !isCorrect ? 'border-red-500 focus-visible:ring-red-500' : ''} ${answered && isCorrect ? 'border-green-500 focus-visible:ring-green-500' : ''}`}
                    aria-label="Enter your answer"
                  />
                  {!answered && (
                      <Button
                        type="submit"
                        className="w-full cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
                        disabled={!textInputAnswer.trim()}
                      >
                          Submit Answer
                      </Button>
                  )}
                   {answered && (
                      <div className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-red-500 bg-red-50 dark:bg-red-950'}`}>
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-foreground break-words">
                                Your Answer: "{selectedAnswer}"
                                {!isCorrect && ` | Correct: "${correctAnswerString}"`}
                            </p>
                            {isCorrect ? <CheckCircle className="w-6 h-6 text-green-500 shrink-0 ml-2" /> : <XCircle className="w-6 h-6 text-red-500 shrink-0 ml-2" />}
                          </div>
                      </div>
                   )}
                </form>
             )}

            {answered && (
              <Button
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1)
                  setAnswered(false)
                  setSelectedAnswer(null)
                  setTextInputAnswer("")
                }}
                className="w-full cursor-pointer"
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