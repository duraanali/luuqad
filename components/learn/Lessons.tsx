import React from "react"
import { lessonsData } from "./LessonsData"

type LessonCardProps = {
  title: string
  subtitle: string
  progress: number
}

const LessonCard = ({ title, subtitle, progress }: LessonCardProps) => {
  return (
    <div
      className={`bg-[#86cc05] p-4 rounded-lg shadow-[0px_4px_0px_0px_#38a169] cursor-pointer hover:bg-[#86cc05b3] transition-colors duration-200`}>
      <h3 className={`text-2xl font-black text-white`}>{title}</h3>
      <p className="text-white">{subtitle}</p>
      <div className={`bg-yellow-600 mt-4 rounded-full`}>
        <div
          className={`h-2 bg-yellow-200 rounded-full`}
          style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}

const Lessons = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {lessonsData.map((lesson, index) => (
        <LessonCard key={index} {...lesson} />
      ))}
    </div>
  )
}

export default Lessons
