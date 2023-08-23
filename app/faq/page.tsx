"use client"
import FeedbackComponent from "@/components/feedback/Feedbackcomponent"
import Link from "next/link"
import { useState } from "react"
import { Faqitems } from "../contents"

export default function FAQ() {
  const [faqItems, setFaqItems] = useState(Faqitems)

  const toggleFaqItem = (index: number) => {
    setFaqItems((prevItems) =>
      prevItems.map((item, i: any) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item,
      ),
    )
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* FAQ Section */}
      <div className='flex flex-col items-center justify-center py-16'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>
          Frequently Asked Questions
        </h1>

        {/* FAQ Items */}
        <div className='w-4/5 md:w-2/3 lg:w-1/2'>
          {faqItems.map((item, index) => (
            <div key={index} className='mb-4'>
              <button
                className='w-full text-left bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg'
                onClick={() => toggleFaqItem(index)}>
                <span className='font-bold'>{item.question}</span>
              </button>
              {item.isOpen && (
                <div className='mt-2 bg-white p-4 rounded-lg shadow-md'>
                  <p className='text-gray-600'>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* End of FAQ Items */}

        {/* Button to Contact Us */}
        <div className='mt-8'>
          <Link
            className='text-blue-500 hover:text-blue-700 font-semibold'
            href='/contactus'
            passHref>
            My Question is not listed here, Contact Us
          </Link>
        </div>
        {/* End of Button to Contact Us */}
      </div>
      <FeedbackComponent />
      {/* End of FAQ Section */}
    </div>
  )
}
