"use client"

import { useState, useEffect, useMemo } from "react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { carsData, quizTests, type Car, type CarSpecs } from "@/lib/car-data"
import { ChevronLeft, CheckCircle, XCircle, RotateCcw, ArrowLeft, X, Trophy, Smile, Frown } from "lucide-react"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

type QuestionType = "image" | "specs" | "combined"
type QuizMode = "multipleChoice" | "textInput"
type QuestionMix = "images_only" | "specs_only" | "mixed" | "only_combined"

interface Question {
  type: QuestionType
  carId: string
  options: string[]
  imageUrl?: string
  specKeys?: (keyof CarSpecs)[]
  questionText: string
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
  numberOfQuestions: number
  showCarBrandInOptions: boolean
  showCarTypeInOptions: boolean
  showAllSpecs: boolean
  questionMix: QuestionMix
  includeImageViews: ImageViewSettings
  includeSpecs: SpecSettings
}

const defaultSettings: QuizSettings = {
  quizMode: "multipleChoice",
  numberOfChoices: 4,
  numberOfQuestions: 10,
  showCarBrandInOptions: true,
  showCarTypeInOptions: true,
  showAllSpecs: false,
  questionMix: "mixed",
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

const imageQuestionPhrases = [
    "Which car is this?",
    "Identify the vehicle shown.",
    "What model is pictured below?",
    "Can you name this car?",
    "Select the correct car model:",
];

const specsQuestionPhrases = [
    "Which car has these specifications?",
    "Identify the vehicle with the following specs:",
    "What model matches these details?",
    "These specs belong to which car?",
    "Select the car with these features:",
];

const combinedQuestionPhrases = [
    "Which car matches this image and these specs?",
    "Identify the vehicle shown with the following details:",
    "What model is pictured with these specifications?",
    "Can you name the car shown with these specs?",
    "Select the car that fits both the image and specs:",
];


function getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

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
  const [answeredStates, setAnsweredStates] = useState<Record<number, { selected: string | null; correct: boolean }>>({})
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [textInputAnswer, setTextInputAnswer] = useState("")
  const [isCurrentAnswerCorrect, setIsCurrentAnswerCorrect] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageUrl, setModalImageUrl] = useState<string | null>(null)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [quizStarted, setQuizStarted] = useState(false)
  const [settings, setSettings] = useState<QuizSettings>(defaultSettings)

  const openModal = (imageUrl: string) => {
    setModalImageUrl(imageUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImageUrl(null)
  }

   const openConfirmModal = () => {
       const canDoImage = allImageViewKeys.some(k => settings.includeImageViews[k]);
       const canDoSpecs = allSpecKeys.some(k => settings.includeSpecs[k]);

       if (settings.questionMix === 'images_only' && !canDoImage) {
           toast.error("Please select at least one image view for 'Images Only' mix.");
           return;
       }
       if (settings.questionMix === 'specs_only' && !canDoSpecs) {
           toast.error("Please select at least one spec type for 'Specs Only' mix.");
           return;
       }
        if ((settings.questionMix === 'mixed' || settings.questionMix === 'only_combined') && (!canDoImage || !canDoSpecs)) {
            toast.error("Please select at least one image view AND one spec type for mixed or combined questions.");
            return;
        }
       setIsConfirmModalOpen(true);
   }
   const closeConfirmModal = () => setIsConfirmModalOpen(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
        closeConfirmModal()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  const handleSettingChange = <
      K extends keyof QuizSettings
    >(
      key: K,
      value: QuizSettings[K]
    ) => {
      setSettings((prev) => ({
        ...prev,
        [key]: value,
      }));
  };

  const handleNestedSettingChange = <
    K extends "includeImageViews" | "includeSpecs",
    SK extends keyof QuizSettings[K]
  >(
    category: K,
    key: SK,
    checked: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: checked,
      },
    }));
  };

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
    const canDoCombined = canDoImage && canDoSpecs;

    if (currentSettings.questionMix === 'images_only' && !canDoImage) {
        toast.error("Cannot generate 'Images Only' quiz without selecting image views."); return false;
    }
    if (currentSettings.questionMix === 'specs_only' && !canDoSpecs) {
        toast.error("Cannot generate 'Specs Only' quiz without selecting spec types."); return false;
    }
    if ((currentSettings.questionMix === 'mixed' || currentSettings.questionMix === 'only_combined') && (!canDoImage || !canDoSpecs)) {
        toast.error("Cannot generate mixed or combined quiz without selecting both image views and spec types."); return false;
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
    const maxQuestions = currentSettings.numberOfQuestions;

    for (let i = 0; i < maxQuestions; i++) {
      let questionType: QuestionType;
      switch (currentSettings.questionMix) {
          case 'images_only':
              questionType = 'image';
              break;
          case 'specs_only':
              questionType = 'specs';
              break;
          case 'mixed':
              questionType = i % 2 === 0 ? 'image' : 'specs';
              break;
          case 'only_combined':
              questionType = 'combined';
              break;
          default:
             questionType = 'image';
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
      let questionText = "";

      const generateImageData = () => {
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
           imageUrl = possibleImageSources[Math.floor(Math.random() * possibleImageSources.length)]
         } else {
           imageUrl = correctCar.imageSets[0]?.front || "/placeholder.svg"
           console.warn(`No suitable image found for ${correctCar.id} based on settings, using fallback.`)
         }
      }

      const generateSpecData = () => {
          if(currentSettings.showAllSpecs) {
              specKeys = allSpecKeys;
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
      }

      if (questionType === "image") {
        questionText = getRandomElement(imageQuestionPhrases);
        generateImageData();
      } else if (questionType === "specs") {
        questionText = getRandomElement(specsQuestionPhrases);
        generateSpecData();
      } else {
         questionText = getRandomElement(combinedQuestionPhrases);
         generateImageData();
         generateSpecData();
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
        questionText,
      })
    }

    setQuestions(newQuestions)
    setAnsweredStates({});
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setTextInputAnswer("");
    setIsCurrentAnswerCorrect(false);
    return true
  }

  const checkAnswer = (answer: string) => {
    if (!questions || questions.length === 0 || currentQuestion >= questions.length) {
        console.error("Attempted to check answer with invalid questions state.");
        return false;
    }
    const correctCar = carsData.find(car => car.id === questions[currentQuestion].carId)!
    const correctAnswerString = `${correctCar.brand} ${correctCar.model}`
    let correct = false;

    if (settings.quizMode === "multipleChoice") {
      correct = answer === questions[currentQuestion].carId;
    } else {
      correct = answer.trim() === correctAnswerString;
    }
    return correct;
  };


  const submitAnswer = (answer: string) => {
    if (answeredStates[currentQuestion]) return;

    const isCorrect = checkAnswer(answer);
    const newAnsweredStates = {
      ...answeredStates,
      [currentQuestion]: { selected: answer, correct: isCorrect }
    };
    setAnsweredStates(newAnsweredStates);
    setSelectedAnswer(answer);
    setIsCurrentAnswerCorrect(isCorrect);
    setAnswered(true);
  };

  const handleMultipleChoiceAnswer = (carId: string) => {
    submitAnswer(carId);
  }

  const handleTextInputSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
     e?.preventDefault()
     const userAnswer = textInputAnswer.trim();
     if (userAnswer !== "") {
         submitAnswer(userAnswer);
     }
  }

  const goToQuestion = (index: number) => {
      if (index >= 0 && index <= questions.length) {
          setCurrentQuestion(index);
          if (index < questions.length) {
            const previousAnswerState = answeredStates[index];
            if (previousAnswerState) {
                setAnswered(true);
                setSelectedAnswer(previousAnswerState.selected);
                setIsCurrentAnswerCorrect(previousAnswerState.correct);
                if (settings.quizMode === 'textInput') {
                    setTextInputAnswer(previousAnswerState.selected || "");
                }
            } else {
                setAnswered(false);
                setSelectedAnswer(null);
                setIsCurrentAnswerCorrect(false);
                setTextInputAnswer("");
            }
          } else {
              setAnswered(false);
              setSelectedAnswer(null);
              setIsCurrentAnswerCorrect(false);
              setTextInputAnswer("");
          }
      }
  };


  const retryQuestion = () => {
    const currentState = answeredStates[currentQuestion];
    if (currentState && !currentState.correct) {
      const newAnsweredStates = { ...answeredStates };
      delete newAnsweredStates[currentQuestion];
      setAnsweredStates(newAnsweredStates);

      setAnswered(false);
      setSelectedAnswer(null);
      setTextInputAnswer("");
      setIsCurrentAnswerCorrect(false);
    } else if (currentState && currentState.correct) {
      toast.info("You already answered this correctly!");
    }
  };

  const goBackToSettings = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnsweredStates({})
    setAnswered(false)
    setSelectedAnswer(null)
    setTextInputAnswer("")
    setQuestions([])
    setQuizStarted(false)
    setIsCurrentAnswerCorrect(false)
  }

  const getOptionDisplay = (carId: string): { modelText: string; typeText?: string } => {
      const car = carsData.find(c => c.id === carId);
      if (!car) return { modelText: "Unknown Car" };

      const modelText = settings.showCarBrandInOptions ? `${car.brand} ${car.model}` : car.model;
      const showType = settings.quizMode === 'multipleChoice' && settings.showCarTypeInOptions;
      const typeText = showType ? car.type : undefined;
      return { modelText, typeText };
  };

  const startQuizConfirmed = () => {
     if (generateQuestions(settings)) {
        setQuizStarted(true);
        closeConfirmModal();
     }
  }

  const isImageViewsSelected = useMemo(() => allImageViewKeys.some(k => settings.includeImageViews[k]), [settings.includeImageViews]);
  const isSpecsSelected = useMemo(() => allSpecKeys.some(k => settings.includeSpecs[k]), [settings.includeSpecs]);


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
          <Button variant="ghost" size="sm" asChild className="mb-6 cursor-pointer">
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
                     onValueChange={(value) => handleSettingChange("quizMode", value as QuizMode)}
                     className="flex space-x-4"
                   >
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="multipleChoice" id="mode-mc" className="cursor-pointer"/>
                       <Label htmlFor="mode-mc" className="cursor-pointer">Multiple Choice</Label>
                     </div>
                     <div className="flex items-center space-x-2">
                       <RadioGroupItem value="textInput" id="mode-text" className="cursor-pointer"/>
                       <Label htmlFor="mode-text" className="cursor-pointer">Text Input</Label>
                     </div>
                   </RadioGroup>
                 </div>

                 <div className="space-y-2 mb-6 mt-6">
                   <Label htmlFor="num-questions" className="cursor-pointer">Number of Questions: {settings.numberOfQuestions}</Label>
                   <Slider
                     id="num-questions"
                     min={5}
                     max={20}
                     step={1}
                     value={[settings.numberOfQuestions]}
                     onValueChange={(value) => handleSettingChange("numberOfQuestions", value[0])}
                     className="cursor-pointer"
                   />
                 </div>

                <div className={`space-y-2 mb-6 mt-6 ${settings.quizMode === 'textInput' ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Label htmlFor="num-choices" className="cursor-pointer">Number of Choices: {settings.numberOfChoices}</Label>
                   <Slider
                     id="num-choices"
                     min={2}
                     max={5}
                     step={1}
                     value={[settings.numberOfChoices]}
                     onValueChange={(value) => handleSettingChange("numberOfChoices", value[0])}
                     disabled={settings.quizMode === 'textInput'}
                     className="cursor-pointer"
                   />
                 </div>

                 <div className={`flex items-center space-x-2 mb-3 ${settings.quizMode === 'textInput' ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Checkbox
                     id="show-brand"
                     checked={settings.showCarBrandInOptions}
                     onCheckedChange={(checked) => handleSettingChange("showCarBrandInOptions", !!checked)}
                     disabled={settings.quizMode === 'textInput'}
                     className="cursor-pointer"
                   />
                   <Label htmlFor="show-brand" className="cursor-pointer">Show Car Brand in Options</Label>
                 </div>

                 <div className={`flex items-center space-x-2 mb-6 ${settings.quizMode === 'textInput' ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Checkbox
                     id="show-type"
                     checked={settings.showCarTypeInOptions}
                     onCheckedChange={(checked) => handleSettingChange("showCarTypeInOptions", !!checked)}
                     disabled={settings.quizMode === 'textInput'}
                     className="cursor-pointer"
                   />
                   <Label htmlFor="show-type" className="cursor-pointer">Show Car Type in Options</Label>
                 </div>

                <h3 className="font-semibold text-foreground mb-4 mt-6">
                  Question Mix
                </h3>
                 <RadioGroup
                     value={settings.questionMix}
                     onValueChange={(value) => handleSettingChange("questionMix", value as QuestionMix)}
                     className="grid grid-cols-2 gap-4 mb-6"
                 >
                     <div className={`flex items-center space-x-2 ${!isImageViewsSelected ? 'opacity-50' : ''}`}>
                         <RadioGroupItem value="images_only" id="mix-img" className="cursor-pointer" disabled={!isImageViewsSelected}/>
                         <Label htmlFor="mix-img" className={`cursor-pointer ${!isImageViewsSelected ? 'cursor-not-allowed' : ''}`}>Images Only</Label>
                     </div>
                      <div className={`flex items-center space-x-2 ${!isSpecsSelected ? 'opacity-50' : ''}`}>
                         <RadioGroupItem value="specs_only" id="mix-spec" className="cursor-pointer" disabled={!isSpecsSelected}/>
                         <Label htmlFor="mix-spec" className={`cursor-pointer ${!isSpecsSelected ? 'cursor-not-allowed' : ''}`}>Specs Only</Label>
                     </div>
                     <div className={`flex items-center space-x-2 ${(!isImageViewsSelected || !isSpecsSelected) ? 'opacity-50' : ''}`}>
                         <RadioGroupItem value="mixed" id="mix-img-spec" className="cursor-pointer" disabled={!isImageViewsSelected || !isSpecsSelected}/>
                         <Label htmlFor="mix-img-spec" className={`cursor-pointer ${(!isImageViewsSelected || !isSpecsSelected) ? 'cursor-not-allowed' : ''}`}>Mixed (Image / Specs)</Label>
                     </div>
                     <div className={`flex items-center space-x-2 ${(!isImageViewsSelected || !isSpecsSelected) ? 'opacity-50' : ''}`}>
                         <RadioGroupItem value="only_combined" id="mix-all" className="cursor-pointer" disabled={!isImageViewsSelected || !isSpecsSelected}/>
                         <Label htmlFor="mix-all" className={`cursor-pointer ${(!isImageViewsSelected || !isSpecsSelected) ? 'cursor-not-allowed' : ''}`}>Only Combined</Label>
                     </div>
                 </RadioGroup>

                <h3 className="font-semibold text-foreground mb-2 mt-6">
                  Included Details
                </h3>
                 <div className={`flex items-center space-x-2 mb-4 ${(settings.questionMix === 'images_only') ? 'opacity-50 pointer-events-none' : ''}`}>
                   <Checkbox
                     id="show-all-specs"
                     checked={settings.showAllSpecs}
                     onCheckedChange={(checked) => handleSettingChange("showAllSpecs", !!checked)}
                     disabled={settings.questionMix === 'images_only'}
                     className="cursor-pointer"
                   />
                   <Label htmlFor="show-all-specs" className={`cursor-pointer ${settings.questionMix === 'images_only' ? 'cursor-not-allowed' : ''}`}>
                     Always Show All Specs (Overrides Selection Below)
                    </Label>
                 </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Select the image views and specs to use for questions.
                </p>
              </div>

              <Accordion type="multiple" defaultValue={["item-1", "item-2"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer hover:no-underline">Image Views</AccordionTrigger>
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
                            onCheckedChange={(checked) => handleNestedSettingChange("includeImageViews", key, !!checked)}
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
                  <AccordionTrigger className="cursor-pointer hover:no-underline">Specifications</AccordionTrigger>
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
                            onCheckedChange={(checked) => handleNestedSettingChange("includeSpecs", key, !!checked)}
                            className="cursor-pointer"
                            disabled={settings.showAllSpecs}
                          />
                          <Label htmlFor={`spec-${key}`} className={`capitalize cursor-pointer ${settings.showAllSpecs ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {specDisplayNames[key] || key}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Dialog open={isConfirmModalOpen} onOpenChange={setIsConfirmModalOpen}>
                  <DialogTrigger asChild>
                      <Button
                        size="lg"
                        onClick={openConfirmModal}
                        className="w-full mt-6 cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
                        disabled={!isImageViewsSelected && !isSpecsSelected && settings.questionMix !== 'images_only' && settings.questionMix !== 'specs_only' }
                      >
                        Start Quiz
                      </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                          <DialogTitle>Confirm Quiz Settings</DialogTitle>
                          <DialogDescription>
                              Review your selections before starting the quiz.
                          </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4 text-sm">
                          <div className="grid grid-cols-2 items-center gap-4">
                                <Label>Quiz:</Label>
                                <span className="font-semibold text-primary">{test.name}</span>
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                                <Label># of Questions:</Label>
                                <span className="font-medium">{settings.numberOfQuestions}</span>
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                              <Label>Quiz Mode:</Label>
                              <span className="font-medium">{settings.quizMode === 'multipleChoice' ? 'Multiple Choice' : 'Text Input'}</span>
                          </div>
                          {settings.quizMode === 'multipleChoice' && (
                              <>
                                <div className="grid grid-cols-2 items-center gap-4">
                                     <Label>Choices:</Label>
                                     <span className="font-medium">{settings.numberOfChoices}</span>
                                </div>
                                <div className="grid grid-cols-2 items-center gap-4">
                                     <Label>Show Brand:</Label>
                                     <span className="font-medium">{settings.showCarBrandInOptions ? 'Yes' : 'No'}</span>
                                </div>
                                <div className="grid grid-cols-2 items-center gap-4">
                                      <Label>Show Type:</Label>
                                      <span className="font-medium">{settings.showCarTypeInOptions ? 'Yes' : 'No'}</span>
                                </div>
                              </>
                          )}
                           <div className="grid grid-cols-2 items-center gap-4">
                                <Label>Question Mix:</Label>
                                <span className="font-medium capitalize">
                                    {settings.questionMix === 'mixed' ? 'Mixed (Image / Specs)' : settings.questionMix.replace(/_/g, ' ')}
                                </span>
                           </div>
                           <div className="grid grid-cols-2 items-center gap-4">
                                <Label>Show All Specs:</Label>
                                <span className="font-medium">{settings.showAllSpecs ? 'Yes' : 'No'}</span>
                           </div>
                           <div className="grid grid-cols-2 items-start gap-4">
                               <Label>Image Views:</Label>
                               <span className="font-medium capitalize">
                                {allImageViewKeys.filter(k => settings.includeImageViews[k]).join(', ') || 'None Selected'}
                               </span>
                           </div>
                           <div className="grid grid-cols-2 items-start gap-4">
                               <Label>Specs:</Label>
                               <span className="font-medium capitalize">
                                {settings.showAllSpecs ? 'All' : (allSpecKeys.filter(k => settings.includeSpecs[k]).map(k => specDisplayNames[k]).join(', ') || 'None Selected')}
                               </span>
                           </div>
                      </div>
                      <DialogFooter>
                          <DialogClose asChild>
                             <Button type="button" variant="outline" className="cursor-pointer">Cancel</Button>
                          </DialogClose>
                          <Button
                            type="button"
                            onClick={startQuizConfirmed}
                            className="cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
                           >
                              Confirm & Start
                           </Button>
                      </DialogFooter>
                  </DialogContent>
              </Dialog>

            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    )
  }

  // Quiz Results Screen Logic needs to be here to avoid errors when questions array is empty initially
  if (currentQuestion >= questions.length && quizStarted && questions.length > 0) {
    const finalScore = Object.values(answeredStates).filter(state => state.correct).length;
    const percentage = questions.length > 0 ? Math.round((finalScore / questions.length) * 100) : 0;
    const scoreRemark = percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good Job!" : "Keep Practicing!";
    const ScoreIcon = percentage >= 80 ? Trophy : percentage >= 60 ? Smile : Frown;

    return (
      <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full flex items-center justify-center">
          <Card className="max-w-md mx-auto w-full">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl">
                Quiz Complete!
              </CardTitle>
               <CardDescription>{scoreRemark}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col items-center pt-0">
               <ScoreIcon
                 className={`w-24 h-24 my-4 ${
                    percentage >= 80 ? 'text-yellow-500' : percentage >= 60 ? 'text-green-500' : 'text-red-500'
                 }`}
                 strokeWidth={1.5}
                />
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Your Score</p>
                <div className="text-6xl font-bold text-primary mb-1">
                  {percentage}%
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  ({finalScore} / {questions.length} correct)
                </p>
              </div>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={goBackToSettings}
                  className="flex-1 cursor-pointer"
                >
                  New Quiz
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
  const currentAnswerState = answeredStates[currentQuestion];
  const localAnswered = !!currentAnswerState;
  const localSelectedAnswer = currentAnswerState?.selected || null;
  const localIsCorrect = currentAnswerState?.correct || false;

  const showImage = question.type === 'image' || question.type === 'combined';
  const showSpecs = question.type === 'specs' || question.type === 'combined';

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex flex-col">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grow w-full">
         <div className="mb-8 grid grid-cols-3 items-center gap-4">
           <div className="justify-self-start">
              <Button
                variant="ghost"
                size="sm"
                onClick={goBackToSettings}
                className="cursor-pointer flex items-center gap-1 text-muted-foreground hover:text-foreground pl-0"
                title="Back to Quiz Settings"
             >
                <ArrowLeft className="w-4 h-4" /> Settings
             </Button>
           </div>
           <div className="justify-self-center text-center">
             <span className="text-sm font-semibold text-foreground">
              Question {currentQuestion + 1} of {questions.length}
             </span>
           </div>
           <div className="justify-self-end">
             <span className="text-sm text-muted-foreground">Score: {Object.values(answeredStates).filter(s => s.correct).length}</span>
           </div>
           <div className="col-span-3 mt-2">
             <div className="w-full bg-muted rounded-full h-2">
               <div
                 className="bg-primary h-2 rounded-full transition-all duration-300"
                 style={{
                   width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                 }} // I need inline style here for dynamic width, too lazy to refactor
               />
             </div>
           </div>
        </div>


        <Card>
          <CardContent className="pt-6">
             <p className="text-lg font-semibold text-foreground mb-4 text-balance">
                {question.questionText}
             </p>

            {showImage && (
              <div className="mb-6">
                <div className="rounded-lg flex items-center justify-center min-h-64 relative group overflow-hidden">
                   <div className="relative w-full h-64 cursor-pointer" onClick={() => question.imageUrl && openModal(question.imageUrl)}>
                       <Image
                         src={question.imageUrl || "/placeholder.svg"}
                         alt="Quiz car"
                         fill
                         className="object-contain rounded-lg transition-transform duration-200 group-hover:scale-105 bg-muted"
                         key={question.imageUrl + '-main'}
                         priority={currentQuestion === 0}
                         sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 600px"
                       />
                       <div className="absolute inset-0 bg-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg pointer-events-none z-10">
                           <p className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">Click to Zoom</p>
                       </div>
                   </div>
                </div>
              </div>
            )}

            {showSpecs && (
              <div className="mb-6">
                <div className="bg-muted p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
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
                   const { modelText, typeText } = getOptionDisplay(carId);
                   const isSelected = localSelectedAnswer === carId
                   const isCorrectOption = carId === question.carId

                   let buttonClass = "border-border hover:border-primary/50";
                   if (localAnswered) {
                      if (isSelected) {
                         buttonClass = localIsCorrect ? "border-green-500 bg-green-50 dark:bg-green-950" : "border-red-500 bg-red-50 dark:bg-red-950";
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
                       disabled={localAnswered}
                       className={`w-full p-4 rounded-lg border-2 transition-all text-left ${buttonClass} ${localAnswered ? "cursor-default" : "cursor-pointer"}`}
                     >
                       <div className="flex items-center justify-between">
                         <div>
                            <p className="font-semibold text-foreground">{modelText}</p>
                            {typeText && (
                                <p className="text-xs text-muted-foreground opacity-75">{typeText}</p>
                            )}
                         </div>
                         {isSelected && localAnswered && localIsCorrect && (
                           <CheckCircle className="w-6 h-6 text-green-500 shrink-0 ml-2" />
                         )}
                         {isSelected && localAnswered && !localIsCorrect && (
                           <XCircle className="w-6 h-6 text-red-500 shrink-0 ml-2" />
                         )}
                         {localAnswered && !isSelected && isCorrectOption && (
                            <CheckCircle className="w-6 h-6 text-green-500 shrink-0 ml-2" />
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
                    placeholder={`Enter ${settings.showCarBrandInOptions ? 'Brand and Model' : 'Model'} (e.g., ${settings.showCarBrandInOptions ? 'Toyota Vios' : 'Vios'})`}
                    value={textInputAnswer}
                    onChange={(e) => setTextInputAnswer(e.target.value)}
                    disabled={localAnswered}
                    className={`text-lg ${localAnswered && !localIsCorrect ? 'border-red-500 focus-visible:ring-red-500' : ''} ${localAnswered && localIsCorrect ? 'border-green-500 focus-visible:ring-green-500' : ''}`}
                    aria-label="Enter your answer"
                  />
                  {!localAnswered && (
                      <Button
                        type="submit"
                        className="w-full cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
                        disabled={!textInputAnswer.trim()}
                      >
                          Submit Answer
                      </Button>
                  )}
                   {localAnswered && (
                      <div className={`p-4 rounded-lg border-2 ${localIsCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-red-500 bg-red-50 dark:bg-red-950'}`}>
                          <div className="flex items-center justify-between">
                             <div>
                                <p className="font-semibold text-foreground wrap-break-word leading-tight">
                                    Your Answer: "{localSelectedAnswer}"
                                </p>
                                {!localIsCorrect && (
                                     <p className="font-semibold text-foreground wrap-break-word mt-1 leading-tight">
                                        Correct: "{correctAnswerString}"
                                     </p>
                                )}
                              </div>
                            {localIsCorrect ? <CheckCircle className="w-6 h-6 text-green-500 shrink-0 ml-2" /> : <XCircle className="w-6 h-6 text-red-500 shrink-0 ml-2" />}
                          </div>
                      </div>
                   )}
                </form>
             )}

            {localAnswered && (
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                 <Button
                    variant="ghost"
                    onClick={() => goToQuestion(currentQuestion - 1)}
                    disabled={currentQuestion === 0}
                    className={`flex-1 cursor-pointer flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title="Previous Question"
                 >
                     <ChevronLeft className="w-4 h-4" /> Previous
                 </Button>
                 <Button
                    variant="secondary"
                    onClick={retryQuestion}
                    disabled={localIsCorrect}
                    className={`flex-1 cursor-pointer flex items-center justify-center gap-2 ${localIsCorrect ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={localIsCorrect ? "Already correct!" : "Retry this question"}
                 >
                   <RotateCcw className="w-4 h-4" /> Retry
                 </Button>
                 <Button
                   onClick={() => goToQuestion(currentQuestion + 1)}
                   className="flex-1 cursor-pointer hover:scale-105 hover:brightness-110 transform transition-all duration-200"
                 >
                   {currentQuestion === questions.length - 1
                     ? "See Results"
                     : "Next Question"}
                 </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />

       {isModalOpen && modalImageUrl && (
        <div
          className="fixed inset-0 bg-black/80 z-100 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white z-101 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
            onClick={closeModal}
            aria-label="Close image zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full h-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImageUrl}
              alt="Zoomed quiz image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      )}
    </div>
  )
}