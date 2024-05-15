import React from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useTranslations } from "next-intl"

const QuitMessage = ({
  quitMessageShown,
  setQuitMessageShown,
}: {
  quitMessageShown: boolean
  // eslint-disable-next-line no-unused-vars
  setQuitMessageShown: (isShown: boolean) => void
}) => {
  const t = useTranslations("Quiz")
  const { locale } = useParams()
  return (
    <>
      <div
        className={
          quitMessageShown
            ? "fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-60 transition-all duration-300"
            : "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-30 bg-black bg-opacity-0 transition-all duration-300"
        }
        onClick={() => setQuitMessageShown(false)}
        aria-label='Close quit message'
        role='button'></div>

      <article
        className={
          quitMessageShown
            ? "fixed bottom-0 left-0 right-0 z-40 flex flex-col gap-4 bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
            : "fixed -bottom-96 left-0 right-0 z-40 flex flex-col bg-white px-5 py-12 text-center transition-all duration-300 sm:flex-row"
        }
        aria-hidden={!quitMessageShown}>
        <div className='flex grow flex-col gap-4'>
          <h2 className='text-lg font-bold sm:text-2xl'>
            {t("are_you_sure_quit")}
          </h2>
          <p className='text-gray-500 sm:text-lg'>
            {t("progress_will_be_lost")}
          </p>
        </div>
        <div className='flex grow flex-col items-center justify-center gap-4 sm:flex-row-reverse'>
          <Link
            className='flex w-full items-center justify-center rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-105 sm:w-48'
            href={`/${locale}/learn`}>
            {t("quit")}
          </Link>
          <button
            className='w-full rounded-2xl py-3 font-bold uppercase text-blue-400 transition hover:brightness-90 sm:w-48 sm:border-2 sm:border-b-4 sm:border-gray-300 sm:text-gray-400 sm:hover:bg-gray-100'
            onClick={() => setQuitMessageShown(false)}>
            {t("stay")}
          </button>
        </div>
      </article>
    </>
  )
}

export default QuitMessage
