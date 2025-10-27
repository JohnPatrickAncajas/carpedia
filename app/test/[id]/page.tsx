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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { carsData, quizTests, type Car } from "@/lib/car-data"
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react"
import { Footer } from "@/components/footer"

type QuizMode = "image" | "specs" | "mixed"
type QuestionType = "image" | "specs"

interface Question {
  type: QuestionType
  carId: string
  options: string[]
  imageUrl?: string // Added for image questions
}

export default function QuizPage() {
  const params = useParams()
  const test = quizTests.find((t) => t.id === params.id)

  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const [quizStarted, setQuizStarted] = useState(false)
  const [quizMode, setQuizMode] = useState<QuizMode>("mixed")

  const generateQuestions = (mode: QuizMode) => {
    if (!test) return

    const testCars = carsData.filter((car) => test.carIds.includes(car.id))
    if (testCars.length < 4) {
      console.error("Not enough unique cars in this test category for options.")
      // Handle this case - maybe show an error or disable the quiz
      return
    }

    const newQuestions: Question[] = []
    const usedCarIds = new Set<string>()

    for (let i = 0; i < 10; i++) {
      let questionType: QuestionType
      if (mode === "mixed") {
        questionType = i % 2 === 0 ? "image" : "specs"
      } else {
        questionType = mode
      }

      let correctCar: Car | undefined
      let attempts = 0
      // Ensure no repeat correct answers
      while (!correctCar || usedCarIds.has(correctCar.id)) {
        correctCar = testCars[Math.floor(Math.random() * testCars.length)]
        attempts++
        // Prevent infinite loop if somehow all cars get used (shouldn't happen with 10 questions unless testCars < 10)
        if (attempts > testCars.length * 2 && usedCarIds.size >= testCars.length) {
            console.warn("Could not find a unique car for question, reusing.");
            // Reset attempts and allow reuse if stuck (fallback)
             correctCar = testCars[Math.floor(Math.random() * testCars.length)];
             break;
        } else if (attempts > testCars.length * 5) {
             console.error("Failed to generate unique questions. Aborting.");
             return; // Or handle error appropriately
        }
      }
      usedCarIds.add(correctCar.id)


      // Select random image for image questions
      let imageUrl: string | undefined
      if (questionType === "image") {
        if (correctCar.galleryImages && correctCar.galleryImages.length > 0) {
          imageUrl =
            correctCar.galleryImages[
              Math.floor(Math.random() * correctCar.galleryImages.length)
            ]
        } else {
          // Fallback if galleryImages is empty or missing
          imageUrl = correctCar.imageSets[0]?.front || "/placeholder.svg"
        }
      }

      // Get 3 random wrong answers (ensure they are different from correct answer)
      const wrongCars = testCars
        .filter((car) => car.id !== correctCar?.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      // Ensure we actually got 3 wrong options if possible
      if (wrongCars.length < 3) {
          console.warn(`Could only find ${wrongCars.length} wrong options for car ${correctCar?.id}`);
          // In a real app you might handle this by adding duplicates or adjusting logic
      }

      const options = [
        correctCar.id,
        ...wrongCars.map((car) => car.id),
      ].sort(() => Math.random() - 0.5)


      newQuestions.push({
        type: questionType,
        carId: correctCar.id,
        options,
        imageUrl, // Store the selected image URL
      })
    }

    setQuestions(newQuestions)
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
                  Quiz Details
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10 questions total</li>
                  <li>• {test.carIds.length} car models included</li>
                  <li>• No time limit</li>
                </ul>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="quiz-mode">Quiz Mode</Label>
                <Select
                  value={quizMode}
                  onValueChange={(v) => setQuizMode(v as QuizMode)}
                >
                  <SelectTrigger id="quiz-mode">
                    <SelectValue placeholder="Select quiz mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mixed">Mixed Challenge</SelectItem>
                    <SelectItem value="image">Images Only</SelectItem>
                    <SelectItem value="specs">Specs Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                size="lg"
                onClick={() => {
                  generateQuestions(quizMode)
                  setQuizStarted(true)
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

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
          <p className="text-center text-muted-foreground">Loading quiz...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (currentQuestion >= questions.length) {
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
                    setQuestions([]) // Reset questions
                    setQuizStarted(false) // Go back to quiz selection
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
                      src={question.imageUrl || "/placeholder.svg"} // Use stored imageUrl
                      alt="Quiz car"
                      fill
                      className="object-contain rounded-lg" // Changed to contain
                      key={question.imageUrl} // Add key to force re-render on image change
                      priority={currentQuestion === 0} // Prioritize first image
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 600px" // Add sizes prop
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
                  <div>
                    <p className="text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">
                      {correctCar.specs.engine}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Horsepower</p>
                    <p className="font-semibold text-foreground">
                      {correctCar.specs.horsepower}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Transmission</p>
                    <p className="font-semibold text-foreground">
                      {correctCar.specs.transmission}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Fuel Efficiency</p>
                    <p className="font-semibold text-foreground">
                      {correctCar.specs.fuelEfficiency}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-3 mb-6">
              {question.options.map((carId) => {
                const optionCar = carsData.find((car) => car.id === carId)!
                const isSelected = selectedAnswer === carId
                const showResult = answered && isSelected

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