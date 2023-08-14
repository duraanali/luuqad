export type Unit = {
  unitNumber: number
  description: string
  backgroundColor: `bg-${string}`
  textColor: `text-${string}`
  borderColor: `border-${string}`
  sections: Section[]
}

export type Section =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward"
      title: string
    }
  | { type: "treasure" }

export type SectionType = Section["type"]

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Form basic sentences, greet people",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    sections: [
      {
        type: "star",
        title: "Form basic sentences",
      },
      {
        type: "book",
        title: "Good morning",
      },
      {
        type: "star",
        title: "Greet people",
      },
      { type: "treasure" },
      { type: "book", title: "A date" },
      { type: "trophy", title: "Unit 1 review" },
    ],
  },
  {
    unitNumber: 2,
    description: "Get around in a city",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    sections: [
      { type: "fast-forward", title: "Get around in a city" },
      { type: "dumbbell", title: "Personalized practice" },
      { type: "book", title: "One thing" },
      { type: "treasure" },
      { type: "star", title: "Get around in a city" },
      { type: "book", title: "A very big family" },
      { type: "star", title: "Greet people" },
      { type: "book", title: "The red jacket" },
      { type: "treasure" },
      { type: "dumbbell", title: "Personalized practice" },
      { type: "trophy", title: "Unit 2 review" },
    ],
  },
  {
    unitNumber: 3,
    description: "Order food and drink",
    backgroundColor: "bg-[#58cc02]",
    textColor: "text-[#58cc02]",
    borderColor: "border-[#46a302]",
    sections: [
      { type: "fast-forward", title: "Order food and drink" },
      { type: "book", title: "The passport" },
      { type: "star", title: "Order food and drinks" },
      { type: "treasure" },
      { type: "book", title: "The honeymoon" },
      { type: "star", title: "Get around in a city" },
      { type: "treasure" },
      { type: "dumbbell", title: "Personalized practice" },
      { type: "book", title: "Doctor Eddy" },
      { type: "trophy", title: "Unit 2 review" },
    ],
  },
]
