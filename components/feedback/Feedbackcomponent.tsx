import { useState } from "react"

const FeedbackComponent = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(true)
  const [feedbackResponse, setFeedbackResponse] = useState("")
  const [feedbackComment, setFeedbackComment] = useState("")
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const handleFeedbackSubmit = () => {
    /*
    For demonstration purposes,i am just logging the feedback response and comment so someone in our team should implement the logic to send the feedback to the backend
    by making a POST request to the backend with the page name, feedback response and feedback comment if any
    */
    // console.log("Feedback response:", feedbackResponse)
    // console.log("Feedback comment:", feedbackComment)
    setFeedbackSubmitted(true)
  }

  return (
    <div
      className={`fixed bottom-5 right-4 p-8 bg-gray-100 border-t ${
        feedbackVisible ? "block" : "hidden"
      }`}>
      {feedbackSubmitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <div>
          <p>Was this page helpful</p>
          <div className='mt-2'>
            <button
              className='px-2 py-1 bg-green-500 text-white rounded'
              onClick={() => {
                setFeedbackResponse("yes")
                handleFeedbackSubmit()
              }}>
              Yes
            </button>
            <button
              className='ml-2 px-2 py-1 bg-red-500 text-white rounded'
              onClick={() => setFeedbackResponse("no")}>
              No
            </button>
          </div>
          {feedbackResponse === "no" && (
            <div className='mt-2'>
              <textarea
                className='w-full p-2 border rounded'
                rows={3}
                placeholder='Please provide additional feedback'
                value={feedbackComment}
                onChange={(e) => setFeedbackComment(e.target.value)}
              />
              <button
                className='mt-2 px-3 py-1 bg-blue-500 text-white rounded'
                onClick={handleFeedbackSubmit}>
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default FeedbackComponent
