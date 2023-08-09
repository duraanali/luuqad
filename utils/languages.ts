export type Language = (typeof languages)[number]

const languages = [
  { name: "Somali", nativeName: "Somali", viewBox: "0 66 82 66", code: "so" },
  { name: "English", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
] as const

export default languages
