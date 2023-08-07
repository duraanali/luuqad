"use client"
import { Questions } from "@/components/admin"
import React from "react"
import axios from "axios"
import baseUrl from "@/utils/baseUrl"

const AllQuestions = () => {
  const [questions, setQuestions] = React.useState([])
  const [sections, setSections] = React.useState([])
  const [questionTypes, setQuestionTypes] = React.useState([])

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/api/units/sections/questions`)
      .then((res) => {
        setQuestions(res.data.questions)
      })
      .catch((err) => {
        console.log(err)
      })

      axios
      .get(`${baseUrl}/api/units/sections/questions/question_types`)
      .then((res) => {
        setQuestionTypes(res.data.questiontypes)
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .get(`${baseUrl}/api/units/sections`)
      .then((res) => {
        setSections(res.data.sections)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const deleteQuestion = async (id: number) => {
    try {
      const res = await axios.delete(
        `${baseUrl}/api/units/sections/questions/delete/${id}`,
      )
      if (res.status == 200) {
        const newQuestion = questions.filter(
          (question: any) => question.id !== id,
        )
        setQuestions(newQuestion)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex-grow pl-5'>
      <Questions
        questions={questions}
        questionTypes={questionTypes}
        deleteQuestion={deleteQuestion}
        sections={sections}
      />
    </div>
  )
}

export default AllQuestions
