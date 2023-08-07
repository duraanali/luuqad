import React, {useState} from "react";
import { BigCloseSvg, DoneSvg } from "@/components/SVGs";

type QuestionResult = {
    question: string;
    yourResponse: string;
    correctResponse: string;
  };

const ReviewLesson = ({
    reviewLessonShown,
    setReviewLessonShown,
    questionResults,
  }: {
    reviewLessonShown: boolean;
    setReviewLessonShown: React.Dispatch<React.SetStateAction<boolean>>;
    questionResults: QuestionResult[];
  }) => {
    const [selectedQuestionResult, setSelectedQuestionResult] =
      useState<null | QuestionResult>(null);
    return (
      <div
        className={[
          "fixed inset-0 flex items-center justify-center p-5 transition duration-300",
          reviewLessonShown ? "" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "absolute inset-0 bg-black",
            reviewLessonShown ? "opacity-75" : "pointer-events-none opacity-0",
          ].join(" ")}
          onClick={() => setReviewLessonShown(false)}
        ></div>
        <div className="relative flex w-full max-w-4xl flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-8">
          <button
            className="absolute -top-5 -right-5 rounded-full border-2 border-gray-200 bg-gray-100 p-1 text-gray-400 hover:brightness-90"
            onClick={() => setReviewLessonShown(false)}
          >
            <BigCloseSvg className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </button>
          <h2 className="text-center text-3xl">Check out your scorecard!</h2>
          <p className="text-center text-xl text-gray-400">
            Click the tiles below to reveal the solutions
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {questionResults.map((questionResult, i) => {
              return (
                <button
                  key={i}
                  className={[
                    "relative flex flex-col items-stretch gap-3 rounded-xl p-5 text-left",
                    questionResult.yourResponse === questionResult.correctResponse
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-500",
                  ].join(" ")}
                  onClick={() =>
                    setSelectedQuestionResult((selectedQuestionResult) =>
                      selectedQuestionResult === questionResult
                        ? null
                        : questionResult
                    )
                  }
                >
                  <div className="flex justify-between gap-2">
                    <h3 className="font-bold">{questionResult.question}</h3>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
                      {questionResult.yourResponse ===
                      questionResult.correctResponse ? (
                        <DoneSvg className="h-5 w-5" />
                      ) : (
                        <BigCloseSvg className="h-5 w-5" />
                      )}
                    </div>
                  </div>
                  <div>{questionResult.yourResponse}</div>
                  {selectedQuestionResult === questionResult && (
                    <div className="absolute top-20 left-1 right-1 z-10 rounded-2xl border-2 border-gray-200 bg-white p-3 text-sm tracking-tighter">
                      <div
                        className="absolute -top-2 h-3 w-3 rotate-45 border-l-2 border-t-2 border-gray-200 bg-white"
                        style={{ left: "calc(50% - 6px)" }}
                      ></div>
                      <div className="font-bold uppercase text-gray-400">
                        Your response:
                      </div>
                      <div className="mb-3 text-gray-700">
                        {questionResult.yourResponse}
                      </div>
                      <div className="font-bold uppercase text-gray-400">
                        Correct response:
                      </div>
                      <div className="text-gray-700">
                        {questionResult.correctResponse}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default ReviewLesson