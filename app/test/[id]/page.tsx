"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { carsData, quizTests } from "@/lib/car-data"
import { ChevronLeft, CheckCircle, XCircle } from "lucide-react"

type QuestionType = "image" | "specs" | "mixed"

interface Question {
  type: QuestionType
  carId: string
  options: string[]
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const test = quizTests.find((t) => t.id === params.id)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    if (test) {
      generateQuestions()
    }
  }, [test])

  const generateQuestions = () => {
    if (!test) return

    const testCars = carsData.filter((car) => test.carIds.includes(car.id))
    const newQuestions: Question[] = []

    // Generate 10 questions
    for (let i = 0; i < 10; i++) {
      const questionType: QuestionType = ["image", "specs", "mixed"][i % 3] as QuestionType
      const correctCar = testCars[Math.floor(Math.random() * testCars.length)]

      // Get 3 random wrong answers
      const wrongCars = testCars
        .filter((car) => car.id !== correctCar.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)

      const options = [correctCar.id, ...wrongCars.map((car) => car.id)].sort(() => Math.random() - 0.5)

      newQuestions.push({
        type: questionType,
        carId: correctCar.id,
        options,
      })
    }

    setQuestions(newQuestions)
  }

  if (!test) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">Quiz not found</p>
        </main>
      </div>
    )
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl">{test.name}</CardTitle>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Quiz Details</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10 questions total</li>
                  <li>• Mix of image and specs questions</li>
                  <li>• {test.carIds.length} car models included</li>
                  <li>• No time limit</li>
                </ul>
              </div>

              <Button size="lg" onClick={() => setQuizStarted(true)} className="w-full">
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-muted-foreground">Loading quiz...</p>
        </main>
      </div>
    )
  }

  if (currentQuestion >= questions.length) {
    const percentage = Math.round((score / questions.length) * 100)

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
                <p className="text-lg text-muted-foreground mb-4">
                  You got {score} out of {questions.length} correct
                </p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Fun Fact:</p>
                <p className="text-foreground italic">
                  {carsData[Math.floor(Math.random() * carsData.length)].funFacts[0]}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentQuestion(0)
                    setScore(0)
                    setAnswered(false)
                    setSelectedAnswer(null)
                    setQuizStarted(false)
                    generateQuestions()
                  }}
                  className="flex-1"
                >
                  Try Again
                </Button>
                <Button onClick={() => router.push("/learn")} className="flex-1">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const correctCar = carsData.find((car) => car.id === question.carId)!
  const isCorrect = selectedAnswer === question.carId

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
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
            {/* Question Content */}
            {question.type === "image" || question.type === "mixed" ? (
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4">Which car is this?</p>
                <div className="bg-muted rounded-lg p-8 flex items-center justify-center min-h-64 mb-6">
                  <img
                    src={correctCar.imageSets[0].front || "/placeholder.svg"}
                    alt="Quiz car"
                    className="w-full h-auto max-h-64 object-contain"
                  />
                </div>
              </div>
            ) : null}

            {question.type === "specs" || question.type === "mixed" ? (
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-4">Which car has these specifications?</p>
                <div className="bg-muted p-4 rounded-lg mb-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Engine</p>
                    <p className="font-semibold text-foreground">{correctCar.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Horsepower</p>
                    <p className="font-semibold text-foreground">{correctCar.specs.horsepower}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Transmission</p>
                    <p className="font-semibold text-foreground">{correctCar.specs.transmission}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Fuel Efficiency</p>
                    <p className="font-semibold text-foreground">{correctCar.specs.fuelEfficiency}</p>
                  </div>
                </div>
              </div>
            ) : null}

            {/* Answer Options */}
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
                        <p className="text-sm text-muted-foreground">{optionCar.type}</p>
                      </div>
                      {showResult && isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {showResult && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                      {answered && !isSelected && carId === question.carId && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Next Button */}
            {answered && (
              <Button
                onClick={() => {
                  setCurrentQuestion(currentQuestion + 1)
                  setAnswered(false)
                  setSelectedAnswer(null)
                }}
                className="w-full"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"}
              </Button>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
