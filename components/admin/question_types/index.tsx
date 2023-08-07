import React from "react"
import Link from "next/link"

interface QuestionTypesProps {
  question_types: any
  deleteQuestionType: any
  sections: any
}

const QuestionTypes = (props: QuestionTypesProps) => {
  // get unit based on question unit_id
  const getSections = (section_id: number) => {
    const unit = props.sections.find(
      (section: any) => section.id === section_id,
    )
    return unit?.title
  }

  return (
    <div className='flex flex-col'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <Link
              href='/admin/units/sections/questions/question_types/create'
              className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-2 w-2/12'>
              Create Question Type
            </Link>
            <table className='min-w-full divide-y divide-gray-200 mt-6'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Question Type
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Created
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {props.question_types.map((question_type: any) => (
                  <tr key={question_type.id}>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='ml-4'>
                          <div className='text-sm font-medium text-gray-900'>
                            {question_type.title}
                          </div>
                        </div>
                      </div>
                    </td>
       
                    <td className='px-6 py-4 whitespace-nowrap'>
                      <div className='text-sm text-gray-900'>
                        {question_type.created_at}
                      </div>
                    </td>
              

                    <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                      {/* <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a> */}
                      <button
                        onClick={() => props.deleteQuestionType(question_type.id)}
                        className='text-red-600 hover:text-red-900'>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionTypes
